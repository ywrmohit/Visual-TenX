import { MetadataRoute } from 'next'
import { db } from '@/lib/db'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://visualtenx.com' // Replace with actual domain

    // Static routes
    const routes = [
        '',
        '/work',
        '/services',
        '/about',
        '/contact',
        '/careers',
        '/services/web-development',
        '/services/digital-marketing',
        '/services/software-development',
        '/services/app-development',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Dynamic routes (Projects)
    const projects = await db.project.findMany()
    const projectRoutes = projects.map((project: { id: string, updatedAt: Date }) => ({
        url: `${baseUrl}/projects/${project.id}`,
        lastModified: project.updatedAt,
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }))

    return [...routes, ...projectRoutes]
}
