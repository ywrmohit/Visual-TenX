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
import { createProject } from "@/actions/projects";

export default function NewProjectPage() {
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
                    <CardTitle>Add New Project</CardTitle>
                    <CardDescription>
                        Enter the details of the project you want to showcase.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form action={createProject} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="title">Project Title</Label>
                            <Input id="title" name="title" placeholder="e.g. Modern E-commerce Platform" required />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="category">Category</Label>
                            <Input id="category" name="category" placeholder="e.g. Web Development" required />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="href">Project Link</Label>
                            <Input id="href" name="href" placeholder="e.g. https://example.com" required />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="image">Project Image</Label>
                            <Input id="image" name="image" type="file" accept="image/*" />
                            <p className="text-xs text-muted-foreground">Upload a project thumbnail or screenshot.</p>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="description">Description</Label>
                            <Input id="description" name="description" placeholder="Short description of the project" />
                        </div>

                        <div className="flex items-center space-x-2 pt-2">
                            <input type="checkbox" id="featured" name="featured" className="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500" />
                            <Label htmlFor="featured" className="cursor-pointer">Feature on Homepage</Label>
                        </div>

                        <div className="pt-4">
                            <Button type="submit" className="w-full">Create Project</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
