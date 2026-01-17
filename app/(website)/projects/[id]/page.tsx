import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Calendar, Tag } from "lucide-react";

interface ProjectPageProps {
    params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: ProjectPageProps) {
    const { id } = await params;
    const project = await db.project.findUnique({ where: { id } });
    if (!project) return { title: "Project Not Found" };

    return {
        title: `${project.title} | Visual TenX Portfolio`,
        description: project.description || `Case study for ${project.title}`,
    };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { id } = await params;
    const project = await db.project.findUnique({
        where: { id },
    });

    if (!project) {
        notFound();
    }

    return (
        <div className="bg-background min-h-screen pb-20">
            {/* Hero Header */}
            <div className="bg-secondary/20 border-b border-white/5 py-12 md:py-20">
                <div className="container mx-auto px-4">
                    <Link href="/work" className="inline-flex items-center text-muted-foreground hover:text-primary mb-6 transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Work
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center">
                            <Tag className="mr-1 h-4 w-4" /> {project.category}
                        </span>
                        <span className="flex items-center">
                            <Calendar className="mr-1 h-4 w-4" /> {new Date(project.createdAt).toLocaleDateString()}
                        </span>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-12">
                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Left Column: Image & Gallery */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-secondary/50">
                            {project.imageSrc ? (
                                <Image
                                    src={project.imageSrc}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            ) : (
                                <div className="flex h-full items-center justify-center text-muted-foreground">
                                    No Image Available
                                </div>
                            )}
                        </div>

                        {/* Placeholder for future Gallery content */}
                        {/* <div className="grid grid-cols-2 gap-4">
                      <div className="aspect-video bg-muted rounded-lg"></div>
                      <div className="aspect-video bg-muted rounded-lg"></div>
                  </div> */}
                    </div>

                    {/* Right Column: Details & Actions */}
                    <div className="space-y-8">
                        <div className="bg-card border rounded-xl p-6 shadow-sm">
                            <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                {project.description || "No description provided for this project."}
                            </p>

                            <Button asChild className="w-full" size="lg">
                                <a href={project.href} target="_blank" rel="noopener noreferrer">
                                    Visit Live Site <ExternalLink className="ml-2 h-4 w-4" />
                                </a>
                            </Button>
                        </div>

                        <div className="bg-card border rounded-xl p-6 shadow-sm">
                            <h3 className="text-xl font-semibold mb-4">The Challenge</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Every project starts with a unique set of challenges. For <strong>{project.title}</strong>, we focused on delivering a high-performance solution that met specific business requirements while ensuring an optimal user experience.
                            </p>
                        </div>

                        <div className="bg-card border rounded-xl p-6 shadow-sm">
                            <h3 className="text-xl font-semibold mb-4">The Solution</h3>
                            <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-4">
                                <li>Custom design tailored to brand identity.</li>
                                <li>Responsive layout for all devices.</li>
                                <li>Optimized performance and SEO structure.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
