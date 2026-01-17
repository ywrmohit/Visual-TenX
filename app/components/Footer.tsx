import Link from 'next/link';
import { FaLinkedinIn, FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-secondary border-t border-border pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div>
                        <h3 className="text-2xl font-bold text-foreground">VISUAL<span className="text-primary">TENX</span></h3>
                        <p className="mt-4 text-muted-foreground">
                            Transforming ideas into digital reality. We build scalable solutions for modern businesses.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-foreground font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="/work" className="text-muted-foreground hover:text-primary transition-colors">Our Work</a></li>
                            <li><a href="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</a></li>
                            <li><a href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
                            <li><a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-foreground font-semibold mb-4">Services</h4>
                        <ul className="space-y-2">
                            <li><a href="/services/web-development" className="text-muted-foreground hover:text-primary transition-colors">Web Development</a></li>
                            <li><a href="/services/digital-marketing" className="text-muted-foreground hover:text-primary transition-colors">Digital Marketing</a></li>
                            <li><a href="/services/software-development" className="text-muted-foreground hover:text-primary transition-colors">Software Solutions</a></li>
                            <li><a href="/services/app-development" className="text-muted-foreground hover:text-primary transition-colors">App Development</a></li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="text-foreground font-semibold mb-4">Connect With Us</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors">
                                <FaLinkedinIn />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors">
                                <FaTwitter />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors">
                                <FaInstagram />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors">
                                <FaFacebookF />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center bg-transparent">
                    <p className="text-muted-foreground text-sm">
                        &copy; {new Date().getFullYear()} Visual TenX. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Privacy Policy</a>
                        <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
