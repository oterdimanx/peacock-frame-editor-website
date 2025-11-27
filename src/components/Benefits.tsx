import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Reduce operational costs by up to 40%",
  "Increase team productivity and collaboration",
  "Scale effortlessly as your business grows",
  "Get 24/7 customer support and training",
  "Deploy in minutes, not months",
  "Customize to fit your unique workflow",
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-24">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-primary">Peacock Software</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of satisfied customers who have transformed their 
              business operations with our innovative platform.
            </p>
            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 p-8">
              <div className="h-full w-full rounded-xl bg-card border-2 border-primary/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl font-bold text-primary mb-2">98%</div>
                  <div className="text-xl font-semibold mb-2">Customer Satisfaction</div>
                  <p className="text-muted-foreground">Based on 10,000+ reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
