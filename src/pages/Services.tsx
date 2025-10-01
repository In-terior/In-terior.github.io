import { CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "Residential Design",
      description: "Transform your home into a personalized sanctuary with our comprehensive residential interior design services.",
      features: [
        "Complete home makeovers",
        "Room-by-room design",
        "Space planning and layout",
        "Furniture selection and procurement",
        "Color consultation",
        "Custom millwork design"
      ],
      price: "Starting at $5,000"
    },
    {
      title: "Commercial Design",
      description: "Create inspiring workspaces that boost productivity and reflect your brand identity.",
      features: [
        "Office space planning",
        "Corporate interior design",
        "Retail store design",
        "Restaurant and hospitality",
        "Brand integration",
        "Sustainable design solutions"
      ],
      price: "Starting at $10,000"
    },
    {
      title: "Design Consultation",
      description: "Expert guidance and professional advice to help you make informed design decisions.",
      features: [
        "Initial design assessment",
        "Style and color guidance",
        "Space planning advice",
        "Budget planning",
        "Material recommendations",
        "Project timeline planning"
      ],
      price: "$150/hour"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Our Interior Design Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              From concept to completion, we bring your vision to life with expert craftsmanship and attention to detail.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="transition-all hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t border-border">
                      <p className="text-xl font-bold text-primary mb-4">{service.price}</p>
                      <Link to="/contact">
                        <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                          Get Started
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
              Our Design Process
            </h2>
            <div className="space-y-8">
              {[
                { step: "01", title: "Discovery", desc: "We start by understanding your vision, lifestyle, and requirements through detailed consultation." },
                { step: "02", title: "Concept Development", desc: "Our team creates initial design concepts with mood boards, color schemes, and spatial layouts." },
                { step: "03", title: "Design Refinement", desc: "We refine the design based on your feedback, finalizing materials, finishes, and furnishings." },
                { step: "04", title: "Implementation", desc: "Our project managers coordinate with contractors and vendors to bring the design to life." },
                { step: "05", title: "Final Reveal", desc: "We complete the finishing touches and present your transformed space." }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss your project and create something extraordinary together.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                Schedule a Consultation
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
