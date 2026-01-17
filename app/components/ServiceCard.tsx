import Link from 'next/link';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    href: string;
}

export default function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
    return (
        <Link
            href={href}
            className="group p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:transform hover:-translate-y-1 block h-full shadow-sm hover:shadow-md"
        >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <span className="text-2xl">{icon}</span>
            </div>

            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 group-hover:text-foreground/80 transition-colors">
                {description}
            </p>

            <div className="flex items-center text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                <span>Learn more</span>
                <span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all">&rarr;</span>
            </div>
        </Link>
    );
}
