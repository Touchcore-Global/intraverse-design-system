import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  Select,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  SelectContent,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  SelectItem,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  SelectTrigger,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  SelectValue,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
} from "@/components/ui/select";
import {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  MessageCircle,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  Mail,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  MapPin,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  Clock,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  Send,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  Calendar,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
const contactReasons = [
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  "Book a Demo",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  "API & Integration Support",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  "Partnership Enquiry",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  "Pricing & Plans",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  "General Enquiry",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
];
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
const Contact = () => {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  const { toast } = useToast();
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  const [formData, setFormData] = useState({
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    name: "",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    email: "",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    company: "",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    reason: "",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    message: "",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  });
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  const handleSubmit = (e: React.FormEvent) => {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    e.preventDefault();
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    toast({
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      title: "Message sent!",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      description: "We'll get back to you within 24 hours.",
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    });
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    setFormData({ name: "", email: "", company: "", reason: "", message: "" });
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  };
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  return (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    <div className="min-h-screen bg-background">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <Navbar />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      {/* Hero */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <section className="pt-32 pb-16 bg-accent">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <div className="container mx-auto px-4 text-center max-w-3xl">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <Calendar className="w-4 h-4" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            Book a Demo or Get in Touch
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            Let's Talk Travel Infrastructure
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </h1>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <p className="text-lg text-muted-foreground">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            Whether you're ready to see Intraverse in action or just have questions,
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            we're here to help. Our team typically responds within 24 hours.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      </section>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      {/* Contact Grid */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <section className="py-20">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        <div className="container mx-auto px-4">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            {/* Form */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <div className="lg:col-span-3">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <h2 className="text-2xl font-bold text-foreground mb-2">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                Send Us a Message
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </h2>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <p className="text-muted-foreground mb-8">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                Fill out the form and our team will get back to you shortly.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <form onSubmit={handleSubmit} className="space-y-5">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <div className="grid sm:grid-cols-2 gap-5">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      Full Name *
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    </label>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <Input
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      required
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      placeholder="Your name"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      value={formData.name}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      onChange={(e) =>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                        setFormData({ ...formData, name: e.target.value })
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      }
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      Work Email *
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    </label>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <Input
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      required
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      type="email"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      placeholder="you@company.com"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      value={formData.email}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      onChange={(e) =>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                        setFormData({ ...formData, email: e.target.value })
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      }
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <div className="grid sm:grid-cols-2 gap-5">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      Company
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    </label>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <Input
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      placeholder="Your company"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      value={formData.company}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      onChange={(e) =>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                        setFormData({ ...formData, company: e.target.value })
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      }
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <label className="text-sm font-medium text-foreground mb-1.5 block">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      What can we help with? *
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    </label>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <Select
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      value={formData.reason}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      onValueChange={(value) =>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                        setFormData({ ...formData, reason: value })
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      }
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    >
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      <SelectTrigger>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                        <SelectValue placeholder="Select a topic" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      </SelectTrigger>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      <SelectContent>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                        {contactReasons.map((reason) => (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                          <SelectItem key={reason} value={reason}>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                            {reason}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                          </SelectItem>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                        ))}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      </SelectContent>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    </Select>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    Message *
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  </label>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <Textarea
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    required
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    placeholder="Tell us about your needs..."
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    rows={5}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    value={formData.message}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    onChange={(e) =>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      setFormData({ ...formData, message: e.target.value })
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    }
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <Button type="submit" size="lg" className="w-full sm:w-auto">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <Send className="w-4 h-4 mr-2" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  Send Message
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </Button>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </form>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            {/* Sidebar */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            <div className="lg:col-span-2 space-y-6">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              {/* Quick contact cards */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <div className="bg-accent rounded-2xl p-6 space-y-5">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <h3 className="font-semibold text-foreground text-lg">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  Quick Contact
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </h3>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <a
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  href="mailto:hello@intraverse.africa"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  className="flex items-start gap-3 group"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                >
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <Mail className="w-5 h-5 text-primary" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      hello@intraverse.africa
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <p className="text-xs text-muted-foreground">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      General enquiries
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </a>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <a
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  href="https://wa.me/2349030002629"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  target="_blank"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  rel="noopener noreferrer"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  className="flex items-start gap-3 group"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                >
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <MessageCircle className="w-5 h-5 text-green-600" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <p className="text-sm font-medium text-foreground group-hover:text-green-600 transition-colors">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      Chat on WhatsApp
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <p className="text-xs text-muted-foreground">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      Quick responses, real humans
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </a>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <div className="flex items-start gap-3">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <Clock className="w-5 h-5 text-primary" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <p className="text-sm font-medium text-foreground">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      Response Time
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <p className="text-xs text-muted-foreground">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      Within 24 hours on business days
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              {/* Book a demo CTA */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <div className="bg-foreground text-background rounded-2xl p-6">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <h3 className="font-semibold text-lg mb-2">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  Want a Live Demo?
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </h3>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <p className="text-sm text-background/70 mb-4">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  See Intraverse in action. We'll walk you through the platform
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  tailored to your business needs.
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <ul className="space-y-2 mb-6 text-sm text-background/80">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <li className="flex items-center gap-2">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    30-minute personalised walkthrough
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  </li>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <li className="flex items-center gap-2">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    See real inventory and pricing
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  </li>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <li className="flex items-center gap-2">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    Get your questions answered live
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  </li>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </ul>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <Button
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  variant="secondary"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  onClick={() => {
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    setFormData((prev) => ({ ...prev, reason: "Book a Demo" }));
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    setFormData((prev) => ({ ...prev, reason: "Book a Demo" }));
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    window.scrollTo({ top: 0, behavior: "smooth" });
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  }}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                >
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <Calendar className="w-4 h-4 mr-2" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  Book a Demo
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </Button>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              {/* Offices */}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              <div className="bg-accent rounded-2xl p-6 space-y-5">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <h3 className="font-semibold text-foreground text-lg">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  Headquarters
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </h3>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <div className="flex items-start gap-3">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <MapPin className="w-5 h-5 text-primary" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <p className="text-sm font-medium text-foreground">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      Lagos, Nigeria (HQ)
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <p className="text-xs text-muted-foreground">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      14b Wole Ariyo Street, Lekki Phase 1, Lagos, Nigeria
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                <div className="pt-2 border-t border-border">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  <p className="text-sm font-semibold text-foreground mb-3">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    Registered Locations
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  {["London, United Kingdom", "Delaware, United States", "Dubai, UAE"].map((location) => (
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    <div key={location} className="flex items-center gap-3 mb-2 last:mb-0">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                        <MapPin className="w-5 h-5 text-primary" />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      <p className="text-sm font-medium text-foreground">
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                        {location}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                      </p>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                    </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                  ))}
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
                </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
              </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
            </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
          </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
        </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      </section>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <Footer />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
      <WhatsAppFab />
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
    </div>
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
  );
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
};
import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";

import { WHATSAPP_URL, whatsappUrl } from "@/lib/constants";
export default Contact;
