import { Check, Zap, Crown, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    icon: Zap,
    price: "$29",
    period: "/month",
    description: "Perfect for small teams and startups",
    features: [
      "5 GB Storage",
      "Basic Security",
      "Email Support",
      "99.5% Uptime SLA",
      "Standard Backup",
      "Community Access"
    ],
    popular: false,
    variant: "cloud" as const
  },
  {
    name: "Professional",
    icon: Crown,
    price: "$99",
    period: "/month",
    description: "Ideal for growing businesses",
    features: [
      "100 GB Storage",
      "Advanced Security",
      "Priority Support",
      "99.9% Uptime SLA",
      "Daily Backup",
      "API Access",
      "Custom Integrations",
      "Analytics Dashboard"
    ],
    popular: true,
    variant: "hero" as const
  },
  {
    name: "Enterprise",
    icon: Rocket,
    price: "$299",
    period: "/month",
    description: "For large organizations",
    features: [
      "Unlimited Storage",
      "Enterprise Security",
      "24/7 Dedicated Support",
      "99.99% Uptime SLA",
      "Real-time Backup",
      "Full API Access",
      "Custom Solutions",
      "Advanced Analytics",
      "Compliance Management",
      "White-label Options"
    ],
    popular: false,
    variant: "cloud" as const
  }
];

export const PricingSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Choose Your Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Flexible pricing options designed to scale with your business needs.
            All plans include our core features with varying levels of resources and support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gradient-card rounded-xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-fade-in border ${
                plan.popular 
                  ? "border-primary shadow-glow ring-2 ring-primary/20" 
                  : "border-border"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-glow">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <plan.icon className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground ml-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant={plan.variant} size="lg" className="w-full">
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};