import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
    title: string;
    category: string;
    imageSrc?: string;
    href: string;
}

export default function ProjectCard({ title, category, imageSrc, href }: ProjectCardProps) {
    return (
        <Link
            href={href}
            className="group relative h-[400px] w-full items-center justify-center overflow-hidden rounded-2xl border border-border bg-muted shadow-lg block"
        >

            {/* Image or Placeholder */}
            <div className="absolute inset-0 z-0">
                {imageSrc ? (
                    <Image
                        src={imageSrc}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:blur-[2px]"
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-muted to-slate-900 flex items-center justify-center">
                        <span className="text-4xl opacity-20 group-hover:scale-110 transition-transform duration-700">🖥️</span>
                    </div>
                )}
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-6 z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-primary text-xs font-bold uppercase tracking-wider mb-2 block">{category}</span>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{title}</h3>
                <span className="inline-flex items-center text-sm text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    View Case Study <span className="ml-2">&rarr;</span>
                </span>
            </div>
        </Link>
    );
}
