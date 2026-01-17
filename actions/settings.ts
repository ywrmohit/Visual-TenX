'use server'

import { auth } from "@/auth";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function updateSettings(formData: FormData) {
    const session = await auth();

    if (!session?.user?.id) {
        throw new Error("Unauthorized");
    }

    const name = formData.get("name") as string;

    await db.user.update({
        where: { id: session.user.id },
        data: { name },
    });

    revalidatePath("/dashboard/settings");
}
