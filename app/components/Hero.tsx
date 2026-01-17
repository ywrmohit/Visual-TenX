import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-1000">
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-tight">
                            We <span className="ps-2  rounded-md bg-gradient-to-r from-[hsl(var(--brand-accent))] to-[bg-blue-600]">Transform</span> Your Digital Vision.
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-lg">
                            Visual TenX is where creativity meets technology. We build stunning websites, robust software, and data-driven marketing strategies to scale your business 10X.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-[hsl(var(--brand-accent))] rounded-full hover:bg-blue-600 transition-all shadow-lg hover:shadow-primary/50"
                            >
                                Start Your Project
                            </Link>
                            <Link
                                href="/work"
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-foreground border border-muted hover:border-foreground rounded-full transition-all"
                            >
                                View Our Work
                            </Link>
                        </div>

                        <div className="pt-8 flex items-center gap-8">
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-foreground">50+</span>
                                <span className="text-sm text-muted-foreground">Projects Delivered</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-foreground">98%</span>
                                <span className="text-sm text-muted-foreground">Client Satisfaction</span>
                            </div>
                        </div>
                    </div>

                    {/* Visual Element (3D or Abstract Graphic Placeholder) */}
                    <div className="relative h-[400px] md:h-[600px] w-full flex items-center justify-center animate-in fade-in zoom-in duration-1000 delay-300">
                        {/* Using a sleek glass card or abstract composition here as "hero image" */}
                        <div className="relative w-full h-full">
                            {/* Abstract decorative circles */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-foreground/10 rounded-full animate-[spin_10s_linear_infinite]" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-primary/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

                            {/* Main floating card - Use a gradient box for now until we have proper 3D assets or images */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card border border-border p-8 rounded-2xl shadow-2xl backdrop-blur-xl w-4/5 max-w-sm transform hover:scale-105 transition-transform duration-500">
                                <div className="h-40 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg mb-6 flex items-center justify-center">
                                    <span className="text-4xl">🚀</span>
                                </div>
                                <div className="space-y-3">
                                    <div className="h-3 w-3/4 bg-foreground/10 rounded"></div>
                                    <div className="h-3 w-1/2 bg-foreground/10 rounded"></div>
                                    <div className="h-3 w-full bg-foreground/5 rounded"></div>
                                    <div className="h-3 w-5/6 bg-foreground/5 rounded"></div>
                                </div>
                                <div className="mt-6 flex justify-between items-center">
                                    <div className="flex -space-x-2">
                                        <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-background"></div>
                                        <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-background"></div>
                                        <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-background"></div>
                                    </div>
                                    <span className="text-xs text-primary">Live Preview &rarr;</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
