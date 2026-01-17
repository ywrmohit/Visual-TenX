import ContactForm from "@/app/components/ContactForm";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

export default function ContactPage() {
    return (
        <div className="pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-5 duration-700">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Get in Touch</h1>
                    <p className="text-xl text-muted-foreground">
                        Have a project in mind? We'd love to hear from you.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Info */}
                    <div className="lg:col-span-1 space-y-8 animate-in fade-in slide-in-from-left-5 duration-700 delay-100">
                        <div className="bg-secondary/30 p-8 rounded-2xl border border-white/5">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-2">Our Office</h3>
                                    <p className="text-muted-foreground">
                                        Sco-24, 2nd floor <br />
                                        Behind old bus stand,Karnal , 132001
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-secondary/30 p-8 rounded-2xl border border-white/5">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-2">Email Us</h3>
                                    <p className="text-muted-foreground mb-1">info@visualtenx.com</p>
                                    <p className="text-muted-foreground">support@visualtenx.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-secondary/30 p-8 rounded-2xl border border-white/5">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                    <FaPhone />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-2">Call Us</h3>
                                    <p className="text-muted-foreground">+91 98175-05418</p>
                                    <p className="text-muted-foreground text-sm mt-1">Mon-Fri from 9am to 6pm</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-2 animate-in fade-in slide-in-from-right-5 duration-700 delay-200">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
