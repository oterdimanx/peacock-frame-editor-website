import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, Layers, Workflow, Cloud, BarChart } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Multiple File Formats",
    description: "MP4, AVI, MOV, MKV, WEBM, WMV, and most other FFmpeg-supported formats.",
  },
  {
    icon: Shield,
    title: "Integration Security",
    description: "In compliance with international security standards, connect with your existing tools and platforms effortlessly.",
  },
  {
    icon: Layers,
    title: "Minimum Requirements",
    description: "FFmpeg must be installed on your system and available in PATH",
  },
  {
    icon: Workflow,
    title: "Smart Automation",
    description: "Automate repetitive tasks and focus on what matters most.",
  },
  {
    icon: Cloud,
    title: "Cloud Native",
    description: "Access your work anywhere, anytime, on any device...supporting python :)",
  },
  {
    icon: BarChart,
    title: "Advanced Analytics",
    description: "Gain insights from your video files with advanced reporting and metadata visualization.",
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
            Everything you need to transform & enhance your favorite videos
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
