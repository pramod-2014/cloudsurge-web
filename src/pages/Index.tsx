import { ArrowRight, Cloud, Users, Award, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CloudFeatures } from "@/components/CloudFeatures";
import { PricingSection } from "@/components/PricingSection";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import cloudHeroImage from "@/assets/cloud-hero.jpg";

const stats = [
  { icon: Users, value: "10,000+", label: "Active Clients" },
  { icon: Award, value: "99.99%", label: "Uptime SLA" },
  { icon: TrendingUp, value: "5x", label: "Performance Boost" },
  { icon: Cloud, value: "50+", label: "Global Regions" }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-lg bg-gradient-primary">
                <Cloud className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                CloudPro
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                Services
              </a>
              <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
                Pricing
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
              <Button variant="hero" size="sm">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${cloudHeroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground leading-tight">
              Transform Your Business with 
              <span className="block text-transparent bg-gradient-to-r from-primary-glow to-accent bg-clip-text animate-pulse-glow">
                Cloud Excellence
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Accelerate your digital transformation with enterprise-grade cloud solutions. 
              Secure, scalable, and optimized for performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="xl" className="group">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="cloud" size="xl">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-20 h-20 bg-primary/20 rounded-full blur-xl" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: "1s" }}>
          <div className="w-32 h-32 bg-accent/20 rounded-full blur-xl" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-xl bg-gradient-card shadow-card">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <div id="services">
        <CloudFeatures />
      </div>

      {/* Pricing Section */}
      <div id="pricing">
        <PricingSection />
      </div>

      {/* Contact Section */}
      <div id="contact">
        <ContactForm />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;