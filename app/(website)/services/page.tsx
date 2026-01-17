import { FaCode, FaBullhorn, FaLayerGroup, FaMobileAlt, FaPaintBrush, FaSearch } from "react-icons/fa";

export default function ServicesPage() {
    const services = [
        {
            id: "web-dev",
            title: "Web Development",
            description: "We build fast, responsive, and secure websites that leave a lasting impression. From simple landing pages to complex web applications.",
            icon: <FaCode className="w-8 h-8" />,
            features: ["Next.js & React", "E-commerce Solutions", "CMS Integration", "Performance Optimization"]
        },
        {
            id: "marketing",
            title: "Digital Marketing",
            description: "Data-driven strategies to increase your online visibility and drive conversions. We help you reach your target audience effectively.",
            icon: <FaBullhorn className="w-8 h-8" />,
            features: ["SEO Optimization", "Social Media Management", "PPC Advertising", "Content Strategy"]
        },
        {
            id: "software",
            title: "Software Development",
            description: "Custom software solutions tailored to streamline your business operations and solve complex challenges.",
            icon: <FaLayerGroup className="w-8 h-8" />,
            features: ["SaaS Development", "API Integration", "Cloud Solutions", "Enterprise Software"]
        },
        {
            id: "app-dev",
            title: "Mobile App Development",
            description: "Native and cross-platform mobile apps that provide seamless user experiences on iOS and Android devices.",
            icon: <FaMobileAlt className="w-8 h-8" />,
            features: ["React Native / Flutter", "iOS & Android", "UI/UX Design", "App Store Optimization"]
        },
        {
            id: "branding",
            title: "Branding & Design",
            description: "Create a unique identity for your business. We design logos, brand guidelines, and visual assets that resonate.",
            icon: <FaPaintBrush className="w-8 h-8" />,
            features: ["Logo Design", "Brand Identity", "UI/UX Design", "Graphic Design"]
        },
        {
            id: "analytics",
            title: "Analytics & Strategy",
            description: "Make informed decisions with deep insights into your data. We help you track, analyze, and optimize performance.",
            icon: <FaSearch className="w-8 h-8" />,
            features: ["Google Analytics", "User Behavior Analysis", "Conversion Rate Optimization", "Strategic Planning"]
        }
    ];

    return (
        <div className="pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-5 duration-700">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
                    <p className="text-xl text-muted-foreground">
                        We offer a comprehensive suite of digital services designed to elevate your brand and drive business growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            id={service.id}
                            className="bg-secondary/30 p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-all duration-300 hover:bg-secondary/50 group"
                        >
                            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                {service.description}
                            </p>
                            <ul className="space-y-2">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-sm text-white/80">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
