import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "What services do you offer?",
        answer: "We are a full-service IT agency offering Web Development, Custom Software Solutions, Mobile App Development, and comprehensive Digital Marketing strategies (SEO, PPC, Social Media)."
    },
    {
        question: "How much does a website cost?",
        answer: "Every project is unique. Our pricing is tailored to your specific requirements, timeline, and complexity. Contact us for a free detailed quote."
    },
    {
        question: "Do you provide ongoing support?",
        answer: "Yes, we offer various maintenance and support packages to ensure your digital products remain secure, up-to-date, and performant after launch."
    },
    {
        question: "How long does a typical project take?",
        answer: "A standard website typically takes 4-8 weeks, while complex software solutions may take 3-6 months. We provide a clear timeline during the discovery phase."
    }
];

export default function FAQ() {
    return (
        <section className="py-24 bg-secondary/5">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl text-[hsl(var(--brand-accent))] md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
                    <p className="text-xl text-muted-foreground">
                        Everything you need to know about working with Visual TenX.
                    </p>
                </div>

                <div className="bg-card border border-white/5 rounded-2xl p-6 md:p-8">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-left text-lg font-medium">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
