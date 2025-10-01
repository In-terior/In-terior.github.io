import { Code2, Wrench, Headphones, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const DeveloperServices = () => {
  const services = [
    {
      icon: Code2,
      title: "Custom Development",
      description: "Bespoke software solutions tailored to your business needs, from web applications to enterprise systems.",
      features: [
        "Full-stack web development",
        "Mobile app development",
        "API development & integration",
        "Database design & optimization",
        "Cloud infrastructure setup",
        "Performance optimization"
      ]
    },
    {
      icon: Wrench,
      title: "Maintenance & Support",
      description: "24/7 technical support and proactive maintenance to keep your systems running smoothly and efficiently.",
      features: [
        "Regular system updates",
        "Bug fixes & troubleshooting",
        "Security patches",
        "Performance monitoring",
        "Backup & disaster recovery",
        "Technical documentation"
      ]
    },
    {
      icon: Shield,
      title: "Security Services",
      description: "Comprehensive security audits and implementation to protect your digital assets and user data.",
      features: [
        "Security audits",
        "Penetration testing",
        "SSL/TLS implementation",
        "Data encryption",
        "Compliance consulting",
        "Incident response"
      ]
    },
    {
      icon: Headphones,
      title: "Consulting Services",
      description: "Expert guidance to help you make informed technology decisions and optimize your digital strategy.",
      features: [
        "Technology stack selection",
        "Architecture planning",
        "Scalability consulting",
        "Cost optimization",
        "Best practices training",
        "Project management"
      ]
    }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "$499",
      period: "/month",
      features: [
        "Up to 10 hours/month support",
        "Email support (24h response)",
        "Monthly system updates",
        "Basic security monitoring",
        "Performance reports"
      ]
    },
    {
      name: "Professional",
      price: "$999",
      period: "/month",
      features: [
        "Up to 30 hours/month support",
        "Priority support (4h response)",
        "Weekly system updates",
        "Advanced security monitoring",
        "Performance optimization",
        "On-call emergency support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      features: [
        "Unlimited support hours",
        "Dedicated account manager",
        "Real-time monitoring",
        "Custom SLA agreements",
        "24/7 emergency hotline",
        "Quarterly strategy sessions"
      ]
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
              Professional Developer Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Expert development and maintenance services to build, optimize, and maintain your digital presence with reliability and excellence.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
              Our Developer Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="transition-all hover:shadow-lg">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-2xl text-primary">{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm text-foreground/80">
                            <span className="text-secondary mt-0.5">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
              Maintenance Plans
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Choose the plan that best fits your needs. All plans include regular updates and dedicated support.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <Card key={index} className={`relative ${plan.popular ? 'border-2 border-secondary shadow-lg' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-primary">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm">
                          <span className="text-secondary mt-0.5">✓</span>
                          <span className="text-foreground/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact">
                      <Button 
                        className={`w-full ${plan.popular ? 'bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90' : ''}`}
                        variant={plan.popular ? 'default' : 'outline'}
                      >
                        Get Started
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
              Technologies We Work With
            </h2>
            <p className="text-muted-foreground mb-8">
              We leverage cutting-edge technologies to deliver robust, scalable solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL", 
                "MongoDB", "AWS", "Docker", "Kubernetes", "GraphQL", "REST API"
              ].map((tech, idx) => (
                <span key={idx} className="px-4 py-2 bg-muted rounded-full text-foreground font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DeveloperServices;
