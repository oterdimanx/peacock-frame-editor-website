import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Peacock Software and how does it work?",
    answer: "Peacock Software is a comprehensive business management platform that streamlines your operations through automation, integration, and analytics. It connects with your existing tools and provides a unified interface to manage all aspects of your business workflow.",
  },
  {
    question: "How much does Peacock Software cost?",
    answer: "We offer flexible pricing plans to suit businesses of all sizes. Our Starter plan begins at $29/month, Professional at $99/month, and Enterprise with custom pricing. All plans include a 30-day free trial with no credit card required.",
  },
  {
    question: "Can I integrate Peacock Software with my existing tools?",
    answer: "Absolutely! Peacock Software integrates seamlessly with over 100+ popular business tools including CRM systems, project management platforms, communication tools, and accounting software. Our API also allows for custom integrations.",
  },
  {
    question: "What kind of support do you offer?",
    answer: "We provide 24/7 customer support through multiple channels including live chat, email, and phone. All plans include access to our comprehensive documentation, video tutorials, and community forums. Enterprise customers receive dedicated account management and priority support.",
  },
  {
    question: "Is my data secure with Peacock Software?",
    answer: "Yes, security is our top priority. We use bank-grade encryption, regular security audits, and comply with international standards including GDPR, SOC 2, and ISO 27001. Your data is backed up daily and stored in secure, redundant data centers.",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer: "Yes, you can cancel your subscription at any time with no cancellation fees. If you cancel, you'll continue to have access until the end of your billing period. You can also export all your data before canceling.",
  },
  {
    question: "How long does it take to get started?",
    answer: "Most customers are up and running within minutes. Our intuitive setup wizard guides you through the process, and you can import your existing data easily. For more complex implementations, our support team is available to help with onboarding and training.",
  },
  {
    question: "Do you offer training for new users?",
    answer: "Yes! We provide comprehensive onboarding resources including live training webinars, on-demand video tutorials, detailed documentation, and interactive guides. Enterprise customers receive personalized training sessions tailored to their team's needs.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-muted/30">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about Peacock Software
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border-2 rounded-lg px-6 border-border hover:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-semibold text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Still have questions? We're here to help!
            </p>
            <a
              href="#contact"
              className="text-primary hover:underline font-semibold"
            >
              Contact our support team →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
