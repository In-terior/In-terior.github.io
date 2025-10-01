import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-interior.jpg";

const Index = () => {
  const features = [
    "Personalized design consultations",
    "3D visualization and rendering",
    "Full project management",
    "Sustainable and eco-friendly options",
    "Post-completion maintenance support",
    "Expert developer services available"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={heroImage} 
              alt="Luxury interior design" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60"></div>
          </div>
          
          <div className="container mx-auto px-4 z-10 text-center text-primary-foreground">
            <div className="inline-flex items-center space-x-2 bg-secondary/90 text-secondary-foreground px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Award-Winning Design Studio</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
              Transform Your Space Into a Timeless
              <span className="block mt-2 bg-gradient-to-r from-secondary to-secondary/80 bg-clip-text text-transparent">
                Masterpiece
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
              Elevate your living and working spaces with innovative interior design and professional development services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8">
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button size="lg" variant="outline" className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20 text-lg px-8">
                  View Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary">
                Why Choose Luxora Interiors?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We combine creativity, expertise, and technology to deliver exceptional results that exceed expectations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <CheckCircle2 className="h-6 w-6 text-secondary shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary">
                Our Comprehensive Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                From interior design to ongoing maintenance, we provide end-to-end solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-3 text-primary">Interior Design</h3>
                <p className="text-muted-foreground mb-4">
                  Residential and commercial design services tailored to your unique vision and requirements.
                </p>
                <Link to="/services">
                  <Button variant="outline" className="group">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
              
              <div className="p-8 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-3 text-primary">Developer Services</h3>
                <p className="text-muted-foreground mb-4">
                  Professional development and maintenance services to ensure your projects remain functional and beautiful.
                </p>
                <Link to="/developer-services">
                  <Button variant="outline" className="group">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Let's create something extraordinary together. Schedule your free consultation today.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
