import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Peacock Video Software Analyzer and how does it work ?",
    answer: "Peacock Software is a comprehensive video files management program that split your files into images, gives you insights about the file, allows you to blur some specific zones by batch, and reconstruct a brand new video files out of it. It can connect smoothly with your existing tools and provides a unified interface to manage all aspects of your business workflow.",
  },
  {
    question: "How much does the Peacock Video Software Analyzer cost?",
    answer: "We offer our application for free! You can download and use the Peacock Video Software Analyzer without any cost. We believe in providing powerful tools to everyone, regardless of budget.",
  },
  {
    question: "Can I integrate Peacock Software with my existing tools?",
    answer: "Absolutely! Peacock Software integrates seamlessly with any python compatible environment, including CRM systems, project management platforms, communication tools, and accounting software.",
  },
  {
    question: "What kind of support do you offer?",
    answer: "We provide 24/7 customer support through multiple channels including live chat, email, feel free to use our contact form.",
  },
  {
    question: "Is my data secure with Peacock Video Software Analyzer and related products ?",
    answer: "Yes, security is our top priority. The really secure part is to integrate a standalone program into your workflow without having to deal with an external website that will provide that very same service, grabbing private data from you, your company or your employees along the way. And you don't want that, right ? The Peacock Software runs locally on your machine, ensuring that all your data remains private and secure.",
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer: "Yes, you can cancel your subscription at any time with no cancellation fees. Because there's no subscriptions yet ;)",
  },
  {
    question: "How long does it take to get started?",
    answer: "Most customers are up and running within minutes. If the application doesn't start, ensure FFmpeg is installed. For large videos, ensure you have sufficient disk space. Make the VideoFrameAnalyzer executable : chmod +x VideoFrameAnalyzer. Run it. Open your browser : http://localhost:5000 - the app is here :)",
  },
  {
    question: "Do you offer training for new users?",
    answer: "Again, feel free to contact us, we'll be happy to guide you through the setup and answer any questions you may have.",
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
              Everything you need to know about The Peacock Software Video Frames Analyzer
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
