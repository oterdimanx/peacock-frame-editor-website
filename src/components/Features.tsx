import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, Layers, Workflow, Cloud, BarChart } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance that keeps your workflow moving at the speed of thought.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption and compliance with international security standards.",
  },
  {
    icon: Layers,
    title: "Seamless Integration",
    description: "Connect with your existing tools and platforms effortlessly.",
  },
  {
    icon: Workflow,
    title: "Smart Automation",
    description: "Automate repetitive tasks and focus on what matters most.",
  },
  {
    icon: Cloud,
    title: "Cloud Native",
    description: "Access your work anywhere, anytime, on any device.",
  },
  {
    icon: BarChart,
    title: "Advanced Analytics",
    description: "Gain insights with powerful reporting and data visualization tools.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Features That <span className="text-primary">Stand Out</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to transform your business operations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="border-2 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
