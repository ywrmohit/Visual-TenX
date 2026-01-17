import { PrismaClient, Role } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
    const password = await bcrypt.hash("admin123", 10);

    // Upsert Admin User
    const admin = await prisma.user.upsert({
        where: { email: "admin@visualtenx.com" },
        update: {},
        create: {
            email: "admin@visualtenx.com",
            name: "Visual TenX Admin",
            password,
            role: Role.ADMIN,
        },
    });

    console.log({ admin });

    // Seed Projects
    const projects = [
        {
            title: "RR Institutions",
            category: "Web Development",
            href: "https://rrinstitute.co.in/",
            imageSrc: "/api/placeholder/400/320", // Placeholder until we have dynamic upload
            description: "Official website for RR Institutions.",
            featured: true
        },
        {
            title: "RLS International School",
            category: "Web Development",
            href: "https://www.rlsinternationalschoolghd.com/",
            imageSrc: "/api/placeholder/400/320",
            description: "Complete website overhaul for RLS International School.",
            featured: true
        },
    ];

    for (const project of projects) {
        await prisma.project.create({
            data: project
        });
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
