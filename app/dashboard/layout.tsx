import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { auth } from "@/auth"
import { redirect } from "next/navigation"

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const session = await auth();

    if (!session) {
        redirect("/login");
    }

    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="w-full">
                <div className="flex items-center p-4 border-b border-white/5 bg-background">
                    <SidebarTrigger />
                    <h1 className="ml-4 text-lg font-semibold capitalize">Admin Panel</h1>
                </div>
                <div className="p-8">
                    {children}
                </div>
            </main>
        </SidebarProvider>
    )
}
