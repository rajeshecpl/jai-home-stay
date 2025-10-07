import library1 from "@/assets/library-1.jpg";
import library2 from "@/assets/library-2.jpg";
import hostel1 from "@/assets/hostel-1.jpg";
import hostel2 from "@/assets/hostel-2.jpg";

const Gallery = () => {
  const images = [
    {
      src: library1,
      alt: "Modern Library Interior",
      category: "Library",
    },
    {
      src: hostel1,
      alt: "Comfortable Hostel Room",
      category: "PG Accommodation",
    },
    {
      src: library2,
      alt: "Library Study Area",
      category: "Library",
    },
    {
      src: hostel2,
      alt: "Hostel Common Room",
      category: "PG Accommodation",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Facilities</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take a glimpse at our well-maintained PG and library spaces designed for
            comfort and productivity
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-secondary rounded-full text-sm font-semibold mb-2">
                    {image.category}
                  </span>
                  <h3 className="text-xl font-bold">{image.alt}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
