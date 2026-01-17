import Hero from "@/app/components/Hero";
import ServiceCard from "@/app/components/ServiceCard";
import ProjectCard from "@/app/components/ProjectCard";
import ContactForm from "@/app/components/ContactForm";
import Process from "@/app/components/Process";
import FAQ from "@/app/components/FAQ";
import Testimonials from "@/app/components/Testimonials";
import { FaCode, FaBullhorn, FaLayerGroup, FaMobileAlt } from "react-icons/fa";
import { db } from "@/lib/db";

// Define local interface to avoid editor sync issues with Prisma Client
interface Project {
    id: string;
    title: string;
    category: string;
    imageSrc: string | null;
    href: string;
}

export default async function Home() {
    // Fetch featured projects from database
    const featuredProjects = await db.project.findMany({
        where: { featured: true },
        take: 3,
        orderBy: { createdAt: 'desc' }
    });

    return (
        <div className="flex flex-col gap-0 pb-20">

            {/* Hero Section */}
            <Hero />

            {/* Services Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24" id="services">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">Our Expertise</h2>
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Comprehensive Digital Solutions</h3>
                    <p className="text-muted-foreground text-lg">
                        We provide end-to-end services to help your business grow in the digital age.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <ServiceCard
                        title="Web Development"
                        description="Custom websites built with modern technologies like Next.js and React for superior performance."
                        icon={<FaCode className="w-6 h-6" />}
                        href="/services#web-dev"
                    />
                    <ServiceCard
                        title="Digital Marketing"
                        description="SEO, Social Media, and PPC campaigns designed to drive traffic and convert leads."
                        icon={<FaBullhorn className="w-6 h-6" />}
                        href="/services#marketing"
                    />
                    <ServiceCard
                        title="Software Solutions"
                        description="Scalable enterprise software and SaaS products tailored to your specific business needs."
                        icon={<FaLayerGroup className="w-6 h-6" />}
                        href="/services#software"
                    />
                    <ServiceCard
                        title="App Development"
                        description="Native and cross-platform mobile applications for iOS and Android."
                        icon={<FaMobileAlt className="w-6 h-6" />}
                        href="/services#app-dev"
                    />
                </div>
            </section>

            {/* Process Section */}
            <Process />

            {/* Featured Projects Section */}
            <section className="bg-secondary/30 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">Selected Work</h2>
                            <h3 className="text-3xl md:text-5xl font-bold text-white">Recent Case Studies</h3>
                        </div>
                        <a href="/work" className="text-white border-b border-primary hover:text-primary transition-colors pb-1">
                            View All Projects &rarr;
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredProjects.length > 0 ? (
                            featuredProjects.map((project: Project) => (
                                <ProjectCard
                                    key={project.id}
                                    title={project.title}
                                    category={project.category}
                                    href={project.href}
                                    imageSrc={project.imageSrc || undefined}
                                />
                            ))
                        ) : (
                            <div className="col-span-full text-center py-10 text-muted-foreground">
                                No projects found in database. Please seed the database.
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <Testimonials />

            {/* FAQ Section */}
            <FAQ />

            {/* Contact Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-[hsl(var(--brand-accent))] font-bold tracking-wide uppercase text-sm mb-3">Get Started</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Scale Your Business?</h3>
                        <p className="text-muted-foreground text-lg mb-8">
                            Whether you need a new website, a complex software solution, or a marketing strategy that delivers ROI, our team is ready to help.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-[hsl(var(--brand-accent))]/10 flex items-center justify-center text-[hsl(var(--brand-accent))]">
                                    <svg className="w-6 h-6 text-[hsl(var(--brand-accent))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Email Us</p>
                                    <p className="text-white font-medium">info@visualtenx.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-  [hsl(var(--brand-accent))]/10 flex items-center justify-center text-[hsl(var(--brand-accent))]">
                                    <svg className="w-6 h-6 text-[hsl(var(--brand-accent))]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Call Us</p>
                                    <p className="text-white font-medium">+91 98175-05418</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ContactForm />
                </div>
            </section>

        </div>
    );
}