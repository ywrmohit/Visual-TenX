import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

const services = {
    "web-development": {
        title: "Web Development",
        description: "Custom, high-performance websites built with Next.js and React that convert visitors into customers.",
        features: [
            "Responsive Design",
            "SEO Optimization",
            "Fast Performance",
            "CMS Integration",
            "E-commerce Functionality"
        ],
        detailedDescription: "In today's digital age, your website is your storefront. We build pixel-perfect, lightning-fast websites that not only look amazing but also perform flawlessly on all devices. Using modern frameworks like Next.js, we ensure your site is future-proof and scalable."
    },
    "digital-marketing": {
        title: "Digital Marketing",
        description: "Data-driven SEO, PPC, and Social Media strategies to grow your audience and increase ROI.",
        features: [
            "Search Engine Optimization (SEO)",
            "Social Media Marketing",
            "Pay-Per-Click (PPC)",
            "Content Strategy",
            "Email Marketing"
        ],
        detailedDescription: "Don't just launch a website; launch a brand. Our digital marketing experts craft bespoke strategies to increase your visibility, drive traffic, and boost conversions. We use data to inform every decision, ensuring your budget is spent where it matters most."
    },
    "software-development": {
        title: "Software Solutions",
        description: "Scalable enterprise software and SaaS product development tailored to your business needs.",
        features: [
            "Custom CRM/ERP",
            "SaaS Product Development",
            "Cloud Infrastructure",
            "API Integration",
            "Legacy system migration"
        ],
        detailedDescription: "From automating internal processes to building the next big SaaS product, our software engineering team has the expertise to bring your vision to life. We build robust, secure, and scalable software solutions that grow with your business."
    },
    "app-development": {
        title: "App Development",
        description: "Native and cross-platform mobile applications for iOS and Android.",
        features: [
            "iOS & Android Apps",
            "Cross-Platform (React Native)",
            "UI/UX Design",
            "App Store Optimization",
            "Maintenance & Support"
        ],
        detailedDescription: "Reach your customers wherever they are with a custom mobile application. We design and develop intuitive, engaging mobile experiences that keep users coming back."
    },
};

interface ServicePageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ServicePageProps) {
    const { slug } = await params;
    const service = services[slug as keyof typeof services];
    if (!service) return { title: "Service Not Found" };

    return {
        title: `${service.title} | Visual TenX Services`,
        description: service.description,
    };
}

export default async function ServicePage({ params }: ServicePageProps) {
    const { slug } = await params;
    const service = services[slug as keyof typeof services];

    if (!service) {
        notFound();
    }

    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="relative py-24 md:py-32 overflow-hidden bg-secondary/20">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                            {service.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                            {service.description}
                        </p>
                        <Button asChild size="lg" className="text-lg px-8">
                            <Link href="/contact">Get Started</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Details Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Why Choose Visual TenX?</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                {service.detailedDescription}
                            </p>
                            <ul className="space-y-4">
                                {service.features.map((feature, index) => (
                                    <li key={index} className="flex items-center text-lg">
                                        <CheckCircle2 className="text-primary mr-3 h-6 w-6" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative h-[400px] w-full bg-secondary/30 rounded-2xl border border-white/5 flex items-center justify-center">
                            {/* Placeholder for service image */}
                            <span className="text-muted-foreground italic">High-quality {service.title} Visual</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 border-t border-white/5 bg-secondary/10">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to transform your business?</h2>
                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Let's discuss how our {service.title} services can help you achieve your goals.
                    </p>
                    <Button asChild size="lg" variant="secondary">
                        <Link href="/contact">Contact Us Today</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
