import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Users, Target, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "We pour our heart into every project, treating each space as if it were our own."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Committed to delivering superior quality in every aspect of our work."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with clients to ensure their vision becomes reality."
    },
    {
      icon: Award,
      title: "Innovation",
      description: "Embracing new trends and technologies while honoring timeless design principles."
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
              About Luxora Interiors
            </h1>
            <p className="text-xl text-muted-foreground">
              Creating exceptional spaces through innovative design and unwavering commitment to excellence since 2008.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6 text-primary">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded in 2008, Luxora Interiors emerged from a simple yet powerful vision: to transform ordinary spaces 
                into extraordinary experiences. What started as a small boutique design firm has grown into a full-service 
                interior design and development company, serving clients across residential and commercial sectors.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our journey has been marked by continuous innovation, a commitment to sustainability, and an unwavering 
                dedication to our clients' satisfaction. With over 500 completed projects and a team of award-winning 
                designers and developers, we've established ourselves as industry leaders in creating spaces that inspire.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, Luxora Interiors stands at the intersection of traditional craftsmanship and modern technology, 
                offering not just interior design services but comprehensive development and maintenance solutions to 
                ensure your spaces remain beautiful and functional for years to come.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
              Our Leadership Team
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Meet the talented professionals behind Luxora Interiors' success
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Elena Rodriguez",
                  role: "Founder & Creative Director",
                  bio: "With over 20 years of experience, Elena leads our design vision with unparalleled creativity."
                },
                {
                  name: "Marcus Thompson",
                  role: "Chief Technology Officer",
                  bio: "Marcus brings cutting-edge technology solutions to enhance our design and development services."
                },
                {
                  name: "Sarah Chen",
                  role: "Director of Client Relations",
                  bio: "Sarah ensures every client receives exceptional service from consultation through completion."
                }
              ].map((member, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold mb-1 text-foreground">{member.name}</h3>
                  <p className="text-secondary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Impact in Numbers
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "500+", label: "Projects Completed" },
                { number: "15+", label: "Years of Excellence" },
                { number: "98%", label: "Client Satisfaction" },
                { number: "50+", label: "Industry Awards" }
              ].map((stat, idx) => (
                <div key={idx}>
                  <div className="text-4xl md:text-5xl font-bold mb-2 text-secondary">{stat.number}</div>
                  <div className="text-primary-foreground/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
