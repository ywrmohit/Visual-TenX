import { LucideIcon, Search, Layout, Code, Rocket } from "lucide-react";

const steps = [
    {
        id: "01",
        title: "Discovery",
        description: "We dive deep into your business goals, target audience, and market landscape to build a solid strategy.",
        icon: Search
    },
    {
        id: "02",
        title: "Design",
        description: "Our designers craft stunning, user-centric interfaces that align with your brand identity.",
        icon: Layout
    },
    {
        id: "03",
        title: "Development",
        description: "We build robust, scalable solutions using the latest technologies and clean code practices.",
        icon: Code
    },
    {
        id: "04",
        title: "Launch & Scale",
        description: "We deploy your project and provide ongoing support to help you grow and evolve.",
        icon: Rocket
    }
];

export default function Process() {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Process</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        A proven methodology to deliver exceptional results, on time and within budget.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={step.id} className="relative group">
                            <div className="h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
                                {/* Large Number Background */}
                                <div className="absolute -right-4 -top-4 text-9xl font-bold text-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 select-none">
                                    {step.id}
                                </div>

                                <div className="relative z-10">
                                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-3xl text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <step.icon className="w-7 h-7" />
                                    </div>

                                    <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>

                            {/* Connector Line (Desktop) */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-[2px] bg-border z-0" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
