"use client";

import { useState } from "react";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        // Simulate API call
        setTimeout(() => {
            setStatus("success");
        }, 1500);
    };

    return (
        <div className="bg-secondary/50 p-8 rounded-2xl border border-white/5 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-foreground mb-6">Let's Discuss Your Project</h3>

            {status === "success" ? (
                <div className="text-center py-12 animate-in fade-in zoom-in">
                    <div className="w-16 h-16 bg-card text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-2">Message Sent!</h4>
                    <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
                    <button
                        onClick={() => setStatus("idle")}
                        className="mt-6 text-primary hover:text-primary/80 text-sm font-medium"
                    >
                        Send another message
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                            <input
                                id="name"
                                type="text"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                            <input
                                id="email"
                                type="email"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="service" className="text-sm font-medium text-foreground">Service Interested In</label>
                        <select
                            id="service"
                            className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-[hsl(var(--brand-accent))]"
                        >
                            <option value="web-dev">Web Development</option>
                            <option value="software">Software Development</option>
                            <option value="marketing">Digital Marketing</option>
                            <option value="brand">Branding & Strategy</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                        <textarea
                            id="message"
                            required
                            rows={4}
                            className="w-full px-4 py-3 rounded-lg bg-background border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground placeholder:text-muted-foreground resize-none"
                            placeholder="Tell us about your project goals..."
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="w-full py-4 bg-[hsl(var(--brand-accent))] text-primary-foreground font-bold rounded-lg hover:bg-blue-600 transition-all shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {status === "submitting" ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Sending...
                            </>
                        ) : "Send Message"}
                    </button>
                </form>
            )}
        </div>
    );
}
