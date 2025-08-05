import { Cloud, Mail, Phone, MapPin, Github, Twitter, Linkedin } from "lucide-react";

const footerLinks = {
  solutions: [
    "Cloud Storage",
    "Cloud Security", 
    "Cloud Computing",
    "Data Analytics",
    "AI/ML Services",
    "DevOps Tools"
  ],
  company: [
    "About Us",
    "Careers",
    "Blog",
    "Press",
    "Partners",
    "Contact"
  ],
  support: [
    "Documentation",
    "API Reference",
    "Status Page",
    "Community",
    "Help Center",
    "Training"
  ],
  legal: [
    "Privacy Policy",
    "Terms of Service",
    "Cookie Policy",
    "GDPR",
    "Security",
    "Compliance"
  ]
};

export const Footer = () => {
  return (
    <footer className="bg-primary-dark text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="p-2 rounded-lg bg-primary/20">
                <Cloud className="w-8 h-8 text-primary-glow" />
              </div>
              <span className="text-2xl font-bold">CloudPro</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Leading cloud solutions provider helping businesses transform digitally 
              with secure, scalable, and innovative infrastructure solutions.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-primary-foreground/80">
                <Mail className="w-4 h-4" />
                <span>contact@cloudpro.com</span>
              </div>
              <div className="flex items-center space-x-3 text-primary-foreground/80">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-primary-foreground/80">
                <MapPin className="w-4 h-4" />
                <span>123 Cloud Street, Tech City, TC 12345</span>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-glow">Solutions</h3>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-primary-foreground/80 hover:text-primary-glow transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-glow">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-primary-foreground/80 hover:text-primary-glow transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-glow">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-primary-foreground/80 hover:text-primary-glow transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              {footerLinks.legal.map((link, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-primary-foreground/60 hover:text-primary-glow transition-colors duration-200 text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-primary-foreground/60 text-sm">Follow us:</span>
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors duration-200"
                >
                  <Twitter className="w-4 h-4 text-primary-glow" />
                </a>
                <a 
                  href="#" 
                  className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors duration-200"
                >
                  <Linkedin className="w-4 h-4 text-primary-glow" />
                </a>
                <a 
                  href="#" 
                  className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors duration-200"
                >
                  <Github className="w-4 h-4 text-primary-glow" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8 pt-8 border-t border-primary-foreground/10">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 CloudPro. All rights reserved. Built with cutting-edge cloud technology.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};