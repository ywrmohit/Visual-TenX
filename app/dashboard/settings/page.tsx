import { auth } from "@/auth";
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
import { updateSettings } from "@/actions/settings";

export default async function SettingsPage() {
    const session = await auth();

    return (
        <div className="p-6 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold tracking-tight mb-6">Settings</h1>

            <Card>
                <CardHeader>
                    <CardTitle>Profile</CardTitle>
                    <CardDescription>
                        Update your account information.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form action={updateSettings} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" value={session?.user?.email || ""} disabled />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="name">Display Name</Label>
                            <Input id="name" name="name" defaultValue={session?.user?.name || ""} />
                        </div>

                        <div className="pt-2">
                            <Button type="submit">Save Changes</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
