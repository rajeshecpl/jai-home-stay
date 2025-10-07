import { Card, CardContent } from "@/components/ui/card";
import { Home, BookOpen, Shield, Wifi, Utensils, Clock } from "lucide-react";

const About = () => {
  const pgFeatures = [
    {
      icon: Home,
      title: "Comfortable Living",
      description: "Spacious rooms with modern furnishings and homely atmosphere",
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "24/7 security, CCTV surveillance, and warden supervision",
    },
    {
      icon: Utensils,
      title: "Nutritious Meals",
      description: "Healthy, homemade vegetarian meals three times a day",
    },
    {
      icon: Wifi,
      title: "Modern Amenities",
      description: "High-speed WiFi, laundry service, and power backup",
    },
  ];

  const libraryFeatures = [
    {
      icon: BookOpen,
      title: "Extensive Collection",
      description: "Wide range of academic books, reference materials, and journals",
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Open from early morning to late evening for your convenience",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About <span className="text-primary">Jai Enterprises</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide a nurturing environment for girls pursuing their education,
            combining comfortable accommodation with excellent library facilities
          </p>
        </div>

        {/* PG Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-3">
              Girls' PG Accommodation
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A safe, secure, and comfortable home for female students and working professionals
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pgFeatures.map((feature, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in border-none"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-foreground">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Library Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-3">
              Library Facilities
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A peaceful study environment with comprehensive resources for all your learning needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {libraryFeatures.map((feature, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in border-none"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-foreground">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
