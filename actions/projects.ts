'use server'

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { auth } from "@/auth";
import { writeFile } from "fs/promises";
import { join } from "path";

const ProjectSchema = z.object({
    title: z.string().min(1, "Title is required"),
    category: z.string().min(1, "Category is required"),
    href: z.string().min(1, "Link is required"),
    imageSrc: z.string().optional(),
    description: z.string().optional(),
    featured: z.string().optional(), // Checkbox sends "on" or undefined
});

export async function createProject(formData: FormData) {
    const session = await auth();
    if ((session?.user as any)?.role !== "ADMIN") {
        throw new Error("Unauthorized");
    }

    const imageFile = formData.get("image") as File;
    let imageSrc = "";

    if (imageFile && imageFile.size > 0) {
        const bytes = await imageFile.arrayBuffer();
        const buffer = Buffer.from(bytes);
        // Sanitize filename
        const safeName = imageFile.name.replace(/[^a-zA-Z0-9.-]/g, "_");
        const filename = `${Date.now()}-${safeName}`;
        const path = join(process.cwd(), "public/uploads", filename);

        await writeFile(path, buffer);
        imageSrc = `/uploads/${filename}`;
    } else {
        // Fallback if user somehow sends imageSrc directly or if we support external URLs mixed?
        // For now, form only has file input. Just check if imageSrc string exists (unlikely from file input).
        imageSrc = (formData.get("imageSrc") as string) || "";
    }

    const rawData = {
        title: formData.get("title"),
        category: formData.get("category"),
        href: formData.get("href"),
        imageSrc: imageSrc, // Use the path we just created
        description: formData.get("description"),
        featured: formData.get("featured"),
    };

    const validatedData = ProjectSchema.parse(rawData);

    await db.project.create({
        data: {
            title: validatedData.title,
            category: validatedData.category,
            href: validatedData.href,
            imageSrc: validatedData.imageSrc || null,
            description: validatedData.description || null,
            featured: validatedData.featured === "on",
        },
    });

    revalidatePath("/dashboard/projects");
    revalidatePath("/");
    revalidatePath("/work");
    redirect("/dashboard/projects");
}

export async function updateProject(id: string, formData: FormData) {
    const session = await auth();
    if ((session?.user as any)?.role !== "ADMIN") {
        throw new Error("Unauthorized");
    }

    const imageFile = formData.get("image") as File;
    let imageSrc: string | undefined = undefined;

    if (imageFile && imageFile.size > 0) {
        const bytes = await imageFile.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const safeName = imageFile.name.replace(/[^a-zA-Z0-9.-]/g, "_");
        const filename = `${Date.now()}-${safeName}`;
        const path = join(process.cwd(), "public/uploads", filename);

        await writeFile(path, buffer);
        imageSrc = `/uploads/${filename}`;
    }

    const rawData = {
        title: formData.get("title"),
        category: formData.get("category"),
        href: formData.get("href"),
        imageSrc: imageSrc, // undefined if no new file, Zod handles optional
        description: formData.get("description"),
        featured: formData.get("featured"),
    };

    const validatedData = ProjectSchema.parse(rawData);

    await db.project.update({
        where: { id },
        data: {
            title: validatedData.title,
            category: validatedData.category,
            href: validatedData.href,
            imageSrc: validatedData.imageSrc || null,
            description: validatedData.description || null,
            featured: validatedData.featured === "on",
        },
    });

    revalidatePath("/dashboard/projects");
    revalidatePath("/");
    revalidatePath("/work");
    redirect("/dashboard/projects");
}

export async function deleteProject(id: string) {
    const session = await auth();
    if ((session?.user as any)?.role !== "ADMIN") {
        throw new Error("Unauthorized");
    }

    await db.project.delete({
        where: { id },
    });

    revalidatePath("/dashboard/projects");
    revalidatePath("/");
    revalidatePath("/work");
    redirect("/dashboard/projects");
}
