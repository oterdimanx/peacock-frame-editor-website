import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import peacockHero from "@/assets/peacock-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${peacockHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/15" />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Software as <span className="text-primary">Brilliant</span> as Nature
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
            Peacock Software Video Frames Analyzer brings vibrant innovation to your business. 
            Yet it's a simple program that will decompose your videos into frames for easy analysis, review, and editing.
            ...and remove watermarks &#129434;
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              <a href="https://github.com/oterdimanx/video-frames-analyzer-v1" title="Peacock Video Frames Analyzer Github Link">Repository</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
