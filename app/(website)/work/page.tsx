import ProjectCard from "@/app/components/ProjectCard";
import { db } from "@/lib/db";

// Define local interface to avoid editor sync issues
interface Project {
    id: string;
    title: string;
    category: string;
    imageSrc: string | null;
    href: string;
}

export default async function WorkPage() {
    const projects = await db.project.findMany({
        orderBy: { createdAt: 'desc' }
    });

    return (
        <div className="pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 animate-in fade-in slide-in-from-bottom-5 duration-700">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Work</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl">
                        Explore a selection of our recently delivered projects. We take pride in helping educational institutions and businesses thrive online.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.length > 0 ? (
                        projects.map((project: Project) => (
                            <ProjectCard
                                key={project.id}
                                title={project.title}
                                category={project.category}
                                href={project.href}
                                imageSrc={project.imageSrc || undefined}
                            />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20 text-muted-foreground">
                            No projects found. Please seed the database.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
