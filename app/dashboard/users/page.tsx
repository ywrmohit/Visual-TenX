import { db } from "@/lib/db";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

// Local interface for User
interface User {
    id: string;
    name: string | null;
    email: string | null;
    role: string;
    createdAt: Date;
}

export default async function UsersPage() {
    const users = await db.user.findMany({
        orderBy: { createdAt: "desc" },
    });

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold tracking-tight mb-6">Users</h1>

            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Joined</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users.map((user: User) => (
                            <TableRow key={user.id}>
                                <TableCell className="font-medium">{user.name || "N/A"}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>
                                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${user.role === 'ADMIN'
                                        ? 'bg-sky-500/15 text-sky-700 dark:text-sky-400'
                                        : 'bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-50'
                                        }`}>
                                        {user.role}
                                    </span>
                                </TableCell>
                                <TableCell>{new Date(user.createdAt).toLocaleDateString()}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
