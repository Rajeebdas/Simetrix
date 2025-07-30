import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

export function EmailContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    service: "",
    message: "",
    newsletter: false,
  });

  const services = [
    "Finite Element Analysis (FEA)",
    "CAD Design & 3D Modeling",
    "Weight & Cost Optimization",
    "Weld & Fatigue Life Assessment",
    "Reverse Engineering",
    "Design Documentation",
    "Other"
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create mailto link with form data
      const subject = `Engineering Consultation Request - ${formData.service}`;
      const body = `Hello Simetrix Team,

I am interested in your engineering services and would like to discuss my project requirements.

Contact Information:
- Name: ${formData.firstName} ${formData.lastName}
- Email: ${formData.email}
- Company: ${formData.company || "Not specified"}

Service of Interest: ${formData.service}

Project Details:
${formData.message}

Newsletter Subscription: ${formData.newsletter ? "Yes" : "No"}

Best regards,
${formData.firstName} ${formData.lastName}`;

      const mailtoLink = `mailto:contact@simetrix.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open email client
      window.location.href = mailtoLink;

      toast({
        title: "Email Client Opened",
        description: "Your email client has been opened with your message. Please send the email to complete your inquiry.",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        service: "",
        message: "",
        newsletter: false,
      });

    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again or contact us directly at contact@simetrix.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name *</Label>
          <Input
            id="firstName"
            value={formData.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
            required
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name *</Label>
          <Input
            id="lastName"
            value={formData.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
            required
            className="w-full"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address *</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          required
          className="w-full"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Company</Label>
        <Input
          id="company"
          value={formData.company}
          onChange={(e) => handleInputChange("company", e.target.value)}
          className="w-full"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="service">Service of Interest *</Label>
        <Select onValueChange={(value) => handleInputChange("service", value)} required>
          <SelectTrigger>
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            {services.map((service) => (
              <SelectItem key={service} value={service}>
                {service}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Project Details *</Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => handleInputChange("message", e.target.value)}
          placeholder="Please describe your project requirements, timeline, and any specific engineering challenges you're facing..."
          className="min-h-[120px] w-full"
          required
        />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="newsletter"
          checked={formData.newsletter}
          onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
        />
        <Label htmlFor="newsletter" className="text-sm">
          Subscribe to our newsletter for engineering insights and industry updates
        </Label>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-white hover:bg-blue-700 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
      >
        {isSubmitting ? "Opening Email..." : "Send Message"}
      </Button>

      <div className="text-center text-sm text-secondary">
        <p>You can also reach us directly at:</p>
                        <p className="font-semibold text-primary">contact@simetrix.com</p>
        <p className="mt-2">We typically respond within 24 hours.</p>
      </div>
    </form>
  );
}