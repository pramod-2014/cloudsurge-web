import { Shield, Database, Cpu, Zap, Lock, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Database,
    title: "Cloud Storage",
    description: "Scalable, secure storage solutions with 99.9% uptime guarantee and enterprise-grade backup systems.",
    color: "text-primary"
  },
  {
    icon: Shield,
    title: "Cloud Security",
    description: "Advanced threat protection, compliance management, and real-time monitoring for your cloud infrastructure.",
    color: "text-accent"
  },
  {
    icon: Cpu,
    title: "Cloud Computing",
    description: "High-performance virtual machines and containers with auto-scaling capabilities and global availability.",
    color: "text-primary-glow"
  },
  {
    icon: Zap,
    title: "Cloud Consulting",
    description: "Expert guidance for cloud migration, optimization, and digital transformation strategies.",
    color: "text-primary-dark"
  },
  {
    icon: Lock,
    title: "Data Protection",
    description: "End-to-end encryption, access controls, and compliance with GDPR, SOC2, and industry standards.",
    color: "text-accent"
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Worldwide infrastructure with edge computing capabilities and low-latency global data distribution.",
    color: "text-primary"
  }
];

export const CloudFeatures = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Our Cloud Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive cloud services designed to accelerate your digital transformation
            and optimize your infrastructure for the future.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-gradient-card rounded-lg p-8 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-fade-in border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-primary/10 ${feature.color} group-hover:animate-float`}>
                  <feature.icon className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {feature.description}
              </p>
              <Button variant="cloud" size="sm" className="w-full">
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};