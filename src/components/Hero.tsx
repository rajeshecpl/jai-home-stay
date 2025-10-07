import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Jai Enterprises - PG and Library"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Welcome to
            <br />
            <span className="text-secondary">Jai Enterprises</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed">
            Your Perfect Home Away from Home & Learning Destination
          </p>
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            A safe, comfortable girls' PG with modern amenities and a well-equipped
            library for all your educational needs
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection("about")}
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Learn More
            </Button>
            <a href="tel:7764021757">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-primary text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </a>
          </div>

          {/* Quick Info */}
          <div className="mt-16 flex flex-col sm:flex-row gap-6 justify-center items-center text-white/90">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <span>7764021757</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/40"></div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>Near MIT Institute, Muzaffarpur</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
