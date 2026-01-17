import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { updateProject } from "@/actions/projects";
import { db } from "@/lib/db";
import { notFound } from "next/navigation";

interface EditProjectPageProps {
    params: Promise<{ id: string }>;
}

export default async function EditProjectPage({ params }: EditProjectPageProps) {
    const { id } = await params;
    const project = await db.project.findUnique({
        where: { id },
    });

    if (!project) {
        notFound();
    }

    return (
        <div className="p-6 max-w-2xl mx-auto">
            <div className="mb-6">
                <Button asChild variant="ghost" size="sm">
                    <Link href="/dashboard/projects">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
                    </Link>
                </Button>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Edit Project</CardTitle>
                    <CardDescription>
                        Update the details of {project.title}.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form action={updateProject.bind(null, project.id)} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="title">Project Title</Label>
                            <Input id="title" name="title" defaultValue={project.title} required />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="category">Category</Label>
                            <Input id="category" name="category" defaultValue={project.category} required />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="href">Project Link</Label>
                            <Input id="href" name="href" defaultValue={project.href} required />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="image">Project Image</Label>
                            {project.imageSrc && (
                                <div className="mb-2">
                                    <p className="text-sm text-muted-foreground mb-1">Current:</p>
                                    <img
                                        src={project.imageSrc}
                                        alt="Current Project Image"
                                        className="h-20 w-32 object-cover rounded-md border border-border"
                                    />
                                </div>
                            )}
                            <Input id="image" name="image" type="file" accept="image/*" />
                            <p className="text-xs text-muted-foreground">Leave empty to keep current image. Upload new to replace.</p>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="description">Description</Label>
                            <Input id="description" name="description" defaultValue={project.description || ""} />
                        </div>

                        <div className="flex items-center space-x-2 pt-2">
                            <input
                                type="checkbox"
                                id="featured"
                                name="featured"
                                defaultChecked={project.featured}
                                className="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500"
                            />
                            <Label htmlFor="featured" className="cursor-pointer">Feature on Homepage</Label>
                        </div>

                        <div className="pt-4">
                            <Button type="submit" className="w-full">Update Project</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
