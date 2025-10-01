import Header from "@/components/Header";
import Footer from "@/components/Footer";
import portfolioImage1 from "@/assets/portfolio-1.jpg";
import portfolioImage2 from "@/assets/portfolio-2.jpg";
import portfolioImage3 from "@/assets/portfolio-3.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "Modern Scandinavian Bedroom",
      category: "Residential",
      description: "A serene retreat featuring natural wood elements, minimalist design, and soft ambient lighting creating the perfect sanctuary for rest.",
      image: portfolioImage1,
      details: ["3 Bedrooms", "Master Suite", "Custom Millwork"]
    },
    {
      title: "Contemporary Kitchen Remodel",
      category: "Residential",
      description: "Luxurious kitchen transformation with marble countertops, brass fixtures, and custom cabinetry designed for both functionality and elegance.",
      image: portfolioImage2,
      details: ["Custom Cabinets", "Smart Appliances", "Island Design"]
    },
    {
      title: "Executive Home Office",
      category: "Commercial",
      description: "Sophisticated workspace featuring built-in shelving, ergonomic design, and ambient lighting to maximize productivity and comfort.",
      image: portfolioImage3,
      details: ["Built-in Storage", "Ergonomic Setup", "Smart Lighting"]
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
              Our Portfolio
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore our curated collection of transformative interior design projects that showcase our commitment to excellence and innovation.
            </p>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {projects.map((project, index) => (
                <div key={index} className="group">
                  <div className="relative overflow-hidden rounded-lg mb-6 aspect-[4/3]">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full mb-2">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-primary">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.details.map((detail, idx) => (
                      <span key={idx} className="px-3 py-1 bg-muted text-foreground text-sm rounded-full">
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "500+", label: "Projects Completed" },
                { number: "15+", label: "Years Experience" },
                { number: "98%", label: "Client Satisfaction" },
                { number: "50+", label: "Design Awards" }
              ].map((stat, idx) => (
                <div key={idx}>
                  <div className="text-4xl md:text-5xl font-bold mb-2 text-secondary">{stat.number}</div>
                  <div className="text-primary-foreground/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
              What Our Clients Say
            </h2>
            <div className="space-y-8">
              {[
                {
                  quote: "Luxora Interiors transformed our home beyond our wildest dreams. Their attention to detail and creative vision is unmatched.",
                  author: "Sarah Johnson",
                  role: "Homeowner"
                },
                {
                  quote: "Professional, creative, and incredibly responsive. They delivered our office redesign on time and exceeded all expectations.",
                  author: "Michael Chen",
                  role: "CEO, Tech Innovations"
                }
              ].map((testimonial, idx) => (
                <div key={idx} className="bg-muted/50 p-8 rounded-lg">
                  <p className="text-lg text-foreground/80 mb-4 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary"></div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
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

export default Portfolio;
