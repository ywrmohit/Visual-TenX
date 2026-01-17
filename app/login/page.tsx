"use client";

import { login } from "@/actions/login";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    async function handleSubmit(formData: FormData) {
        setLoading(true);
        try {
            const result = await login(formData);
            if (result) {
                setError(result);
            } else {
                // Login successful (redirect handled by middleware or callback)
                // For client-side smoothness we can push
                router.push("/dashboard");
            }
        } catch (e) {
            setError("An unexpected error occurred.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-background text-foreground">
            <Card className="w-[350px] border-white/10 bg-secondary/30 backdrop-blur-md">
                <CardHeader>
                    <CardTitle className="text-white">Admin Login</CardTitle>
                    <CardDescription>Enter your credentials to access the dashboard.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form action={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" name="email" type="email" placeholder="admin@visualtenx.com" required className="bg-background/50 border-white/10 focus:border-primary" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" name="password" type="password" required className="bg-background/50 border-white/10 focus:border-primary" />
                        </div>
                        {error && (
                            <div className="p-3 bg-red-500/10 border border-red-500/50 rounded text-sm text-red-500">
                                {error}
                            </div>
                        )}
                        <Button type="submit" className="w-full bg-primary hover:bg-blue-600" disabled={loading}>
                            {loading ? "Signing in..." : "Sign In"}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
