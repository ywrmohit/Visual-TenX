"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";


const components: { title: string; href: string; description: string }[] = [
    {
        title: "Web Development",
        href: "/services/web-development",
        description: "Custom, high-performance websites built with Next.js and React.",
    },
    {
        title: "Digital Marketing",
        href: "/services/digital-marketing",
        description: "SEO, PPC, and Social Media strategies to grow your audience.",
    },
    {
        title: "Software Solutions",
        href: "/services/software-development",
        description: "Scalable enterprise software and SaaS product development.",
    },
    {
        title: "App Development",
        href: "/services/app-development",
        description: "Native and cross-platform mobile applications for iOS and Android.",
    },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="relative h-8 w-32 overflow-hidden">
                                <Image
                                    src="/logo.png"
                                    alt="Visual TenX Logo"
                                    fill
                                    className="object-contain object-left"
                                    priority
                                />
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation (Mega Menu) */}
                    <div className="hidden md:flex items-center space-x-4">
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link href="/" className={navigationMenuTriggerStyle()}>
                                            Home
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                            {components.map((component) => (
                                                <ListItem
                                                    key={component.title}
                                                    title={component.title}
                                                    href={component.href}
                                                >
                                                    {component.description}
                                                </ListItem>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link href="/work" className={navigationMenuTriggerStyle()}>
                                            Work
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>Company</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                                            <li className="row-span-3">
                                                <NavigationMenuLink asChild>
                                                    <a
                                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                        href="/about"
                                                    >
                                                        {/* <Icons.logo className="h-6 w-6" /> */}
                                                        <div className="mb-2 mt-4 text-lg font-medium">
                                                            Visual TenX
                                                        </div>
                                                        <p className="text-sm leading-tight text-muted-foreground">
                                                            A team of visionary developers and marketers dedicated to your growth.
                                                        </p>
                                                    </a>
                                                </NavigationMenuLink>
                                            </li>
                                            <ListItem href="/about" title="About Us">
                                                Our story, mission, and the team behind the magic.
                                            </ListItem>
                                            <ListItem href="/careers" title="Careers">
                                                Join our team and help build the future.
                                            </ListItem>
                                            <ListItem href="/contact" title="Contact">
                                                Get in touch for a quote or collaboration.
                                            </ListItem>
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>



                        <Button asChild variant="default" size="sm" className="ml-4 ">
                            <Link href="/contact" className='bg-brand-accent text-white'>Get a Quote</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="-mr-2 flex md:hidden">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-muted-foreground hover:text-foreground"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden border-t border-border bg-background">
                    <div className="px-4 pt-2 pb-6 space-y-1">
                        <Link href="/" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-foreground hover:bg-muted rounded-md">
                            Home
                        </Link>
                        <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Services</div>
                        {components.map((item) => (
                            <Link key={item.title} href={item.href} onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary pl-6">
                                {item.title}
                            </Link>
                        ))}
                        <div className="px-3 py-2 mt-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Company</div>
                        <Link href="/work" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary pl-6">
                            Work
                        </Link>
                        <Link href="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary pl-6">
                            About Using
                        </Link>
                        <Link href="/careers" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary pl-6">
                            Careers
                        </Link>
                        <Link href="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary pl-6">
                            Contact
                        </Link>
                        <div className="pt-4 px-3">
                            <Button asChild className="w-full">
                                <Link href="/contact">Get started</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
