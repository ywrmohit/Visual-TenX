import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
    {
        quote: "Visual TenX transformed our online presence. Their attention to detail and technical expertise is unmatched.",
        author: "Sarah Johnson",
        role: "CEO, TechFlow",
        image: "/avatars/avatar-1.png" // Placeholder
    },
    {
        quote: "The best agency we've worked with. They delivered a complex software solution ahead of schedule.",
        author: "Michael Chen",
        role: "CTO, DataSystems",
        image: "/avatars/avatar-2.png" // Placeholder
    },
    {
        quote: "Our leads increased by 200% after they revamped our SEO and website. Highly recommended!",
        author: "Jessica Williams",
        role: "Marketing Director, GrowthCo",
        image: "/avatars/avatar-3.png" // Placeholder
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-background border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Client Success Stories</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Don't just take our word for it. Here's what our partners have to say.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, i) => (
                        <div key={i} className="bg-secondary/10 border border-white/5 p-8 rounded-2xl relative">
                            <Quote className="absolute top-8 right-8 text-primary/20 w-10 h-10" />
                            <div className="flex gap-1 text-yellow-500 mb-6">
                                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                            </div>
                            <p className="text-lg leading-relaxed mb-6">"{testimonial.quote}"</p>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center text-xs font-bold">
                                    {testimonial.author.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-bold">{testimonial.author}</div>
                                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
