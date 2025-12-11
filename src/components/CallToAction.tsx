import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner"; // or your preferred toast library
import { Loader2 } from "lucide-react";

// Define the form data type
interface FormData {
  fullName: string;
  inquiryType: string;
  company: string;
  email: string;
  message: string;
}

const CallToAction = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    inquiryType: "",
    company: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      inquiryType: value,
    }));
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  // Basic validation
  if (!formData.fullName || !formData.email || !formData.message || !formData.inquiryType) {
    toast.error("Please fill in all required fields");
    return;
  }

  if (!formData.email.includes('@')) {
    toast.error("Please enter a valid email address");
    return;
  }

  setIsLoading(true);

  try {
    // Call the PostgreSQL function via RPC
    const { data, error } = await supabase
      .rpc('submit_contact_form', {
        p_full_name: formData.fullName,
        p_inquiry_type: formData.inquiryType,
        p_company: formData.company || null,
        p_email: formData.email,
        p_message: formData.message,
      });

    if (error) {
      console.error("Supabase RPC error:", error);
      throw error;
    }

    // Success - reset form and show success message
    setFormData({
      fullName: "",
      inquiryType: "",
      company: "",
      email: "",
      message: "",
    });
    
    toast.success("Message sent successfully! We'll get back to you soon.");
    
  } catch (error) {
    console.error("Error submitting form:", error);
    toast.error("Failed to send message. Please try again.");
  } finally {
    setIsLoading(false);
  }
};

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="container px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-muted-foreground">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name *</Label>
              <Input 
                id="fullName"
                type="text" 
                placeholder="John Doe"
                className="h-12"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="inquiryType">Type of Inquiry *</Label>
              <Select 
                value={formData.inquiryType} 
                onValueChange={handleSelectChange}
                disabled={isLoading}
              >
                <SelectTrigger id="inquiryType" className="h-12">
                  <SelectValue placeholder="Select inquiry type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sales">Sales</SelectItem>
                  <SelectItem value="support">Support</SelectItem>
                  <SelectItem value="general">General Question</SelectItem>
                  <SelectItem value="partnership">Partnership</SelectItem>
                  <SelectItem value="feedback">Feedback</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input 
                id="company"
                type="text" 
                placeholder="Your Company"
                className="h-12"
                value={formData.company}
                onChange={handleInputChange}
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input 
                id="email"
                type="email" 
                placeholder="you@company.com"
                className="h-12"
                value={formData.email}
                onChange={handleInputChange}
                required
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message *</Label>
              <Textarea 
                id="message"
                placeholder="Tell us more about your inquiry..."
                className="min-h-[150px] resize-none"
                value={formData.message}
                onChange={handleInputChange}
                required
                disabled={isLoading}
              />
            </div>

            <Button 
              type="submit" 
              size="lg" 
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
