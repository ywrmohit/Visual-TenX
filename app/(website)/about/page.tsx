import Image from 'next/image';

export default function AboutPage() {
    return (
        <div className="pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Intro */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                    <div className="animate-in fade-in slide-in-from-left-5 duration-700">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About Visual TenX</h1>
                        <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                            We are a team of passionate developers, designers, and strategists dedicated to helping businesses thrive in the digital world.
                        </p>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            Founded with a vision to bridge the gap between creative design and technical excellence, Visual TenX has grown into a full-service agency that delivers results. We believe in the power of technology to transform businesses and improve lives.
                        </p>
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-4xl font-bold text-primary mb-2">5+</h4>
                                <p className="text-sm text-white/70">Years Experience</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-bold text-primary mb-2">50+</h4>
                                <p className="text-sm text-white/70">Projects Completed</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-bold text-primary mb-2">10+</h4>
                                <p className="text-sm text-white/70">Team Experts</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-bold text-primary mb-2">24/7</h4>
                                <p className="text-sm text-white/70">Support</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-[500px] w-full bg-secondary/30 rounded-2xl overflow-hidden animate-in fade-in slide-in-from-right-5 duration-700 delay-200">
                        {/* Placeholder for Team/Office Image */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center">
                            <span className="text-6xl">🏢</span>
                        </div>
                    </div>
                </div>

                {/* Values */}
                <div className="mb-24">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Innovation", desc: "We constantly push boundaries to find better solutions." },
                            { title: "Quality", desc: "We never compromise on the quality of our code or design." },
                            { title: "Transparency", desc: "We build trust through open and honest communication." }
                        ].map((val, i) => (
                            <div key={i} className="bg-secondary/20 p-8 rounded-xl border border-white/5 text-center">
                                <h3 className="text-xl font-bold text-white mb-4">{val.title}</h3>
                                <p className="text-muted-foreground">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
