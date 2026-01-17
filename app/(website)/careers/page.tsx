import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
    title: "Careers | Join Visual TenX",
    description: "Join our team of visionaries. We are always looking for talented developers, designers, and marketers.",
};

export default function CareersPage() {
    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Hero */}
            <section className="py-24 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Build the Future with Us</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                        Visual TenX is growing. We're looking for passionate individuals who want to solve complex problems and build amazing digital experiences.
                    </p>
                    <Button asChild size="lg">
                        <Link href="#openings">View Open Positions</Link>
                    </Button>
                </div>
            </section>

            {/* Values */}
            <section className="py-16 bg-secondary/10">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Why Visual TenX?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: "Remote First", desc: "Work from anywhere. We care about output, not hours in a chair." },
                            { title: "Continuous Learning", desc: "We sponsor courses, conferences, and books to help you grow." },
                            { title: "Impact", desc: "Work on projects that matter for clients around the globe." }
                        ].map((value, i) => (
                            <div key={i} className="bg-card p-6 rounded-xl border">
                                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                                <p className="text-muted-foreground">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Openings */}
            <section id="openings" className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8">Open Positions</h2>
                    <div className="space-y-4">
                        {/* Job Card */}
                        <div className="border rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-primary/50 transition-colors bg-card">
                            <div>
                                <h3 className="text-xl font-semibold">Senior Frontend Developer</h3>
                                <p className="text-muted-foreground text-sm mt-1">Remote • Full-time • React / Next.js</p>
                            </div>
                            <Button asChild variant="outline">
                                <Link href="/contact?subject=Job Application: Frontend">Apply Now</Link>
                            </Button>
                        </div>
                        <div className="border rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-primary/50 transition-colors bg-card">
                            <div>
                                <h3 className="text-xl font-semibold">Digital Marketing Specialist</h3>
                                <p className="text-muted-foreground text-sm mt-1">Remote • Contract • SEO / PPC</p>
                            </div>
                            <Button asChild variant="outline">
                                <Link href="/contact?subject=Job Application: Marketing">Apply Now</Link>
                            </Button>
                        </div>
                    </div>
                    <p className="text-center text-muted-foreground mt-12">
                        Don't see your role? <Link href="/contact" className="text-primary underline">Contact us</Link> anyway.
                    </p>
                </div>
            </section>
        </div>
    );
}
