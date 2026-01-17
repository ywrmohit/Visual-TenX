import Link from "next/link";
import { Plus } from "lucide-react";
import { db } from "@/lib/db";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { deleteProject } from "@/actions/projects";

// Define local interface for type safety
interface Project {
    id: string;
    title: string;
    category: string;
    createdAt: Date;
    featured: boolean;
}

export default async function ProjectsPage() {
    const projects = await db.project.findMany({
        orderBy: { createdAt: "desc" },
    });

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
                <Button asChild>
                    <Link href="/dashboard/projects/new">
                        <Plus className="mr-2 h-4 w-4" /> Add Project
                    </Link>
                </Button>
            </div>

            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Title</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Featured</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {projects.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={5} className="h-24 text-center">
                                    No projects found.
                                </TableCell>
                            </TableRow>
                        ) : (
                            projects.map((project: { id: string; title: string; category: string; featured: boolean; createdAt: Date }) => (
                                <TableRow key={project.id}>
                                    <TableCell className="font-medium">{project.title}</TableCell>
                                    <TableCell>{project.category}</TableCell>
                                    <TableCell>{project.featured ? "Yes" : "No"}</TableCell>
                                    <TableCell>{new Date(project.createdAt).toLocaleDateString()}</TableCell>
                                    <TableCell className="text-right space-x-2">
                                        <Button asChild variant="ghost" size="sm">
                                            <Link href={`/dashboard/projects/${project.id}`}>Edit</Link>
                                        </Button>
                                        <form action={deleteProject.bind(null, project.id)} className="inline-block">
                                            <Button variant="destructive" size="sm" type="submit">
                                                Delete
                                            </Button>
                                        </form>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
