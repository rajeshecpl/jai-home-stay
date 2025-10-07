import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Mail } from "lucide-react";

const Contact = () => {
  const address =
    "Jitkahiya Road, Marbal Gali, near Lane 10, opposite Ganpati Marbal, Ward 02, Pin 842003, Near MIT Institute";
  const phone = "7764021757";
  const mapQuery = encodeURIComponent(
    "opposite Ganpati Marbal, Jitkahiya Road, Muzaffarpur 842003"
  );

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visit us or reach out for inquiries about PG accommodation and library
            services
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6 animate-slide-in-left">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      Phone
                    </h3>
                    <a
                      href={`tel:${phone}`}
                      className="text-lg text-muted-foreground hover:text-primary transition-colors"
                    >
                      {phone}
                    </a>
                    <div className="mt-3">
                      <a href={`tel:${phone}`}>
                        <Button className="bg-secondary hover:bg-secondary/90">
                          <Phone className="mr-2 h-4 w-4" />
                          Call Now
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      Address
                    </h3>
                    <p className="text-muted-foreground mb-3">{address}</p>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" className="border-primary text-primary hover:bg-accent">
                        <MapPin className="mr-2 h-4 w-4" />
                        Open in Google Maps
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-primary text-white">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary text-xl">✓</span>
                    <span>Safe and secure environment for girls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary text-xl">✓</span>
                    <span>Prime location near MIT Institute</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary text-xl">✓</span>
                    <span>Well-equipped library for students</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary text-xl">✓</span>
                    <span>Affordable pricing with quality facilities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Google Map */}
          <div className="animate-slide-in-right">
            <Card className="border-none shadow-lg overflow-hidden h-full min-h-[500px]">
              <CardContent className="p-0 h-full">
                <iframe
                  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${mapQuery}&zoom=16`}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "500px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Jai Enterprises Location"
                ></iframe>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
