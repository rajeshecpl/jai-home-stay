import { Play } from "lucide-react";

const FacilitiesVideo = () => {
  return (
    <section id="video" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Take a <span className="text-primary">Virtual Tour</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch our video to explore the facilities we offer at our Girls' PG
            and Library
          </p>
        </div>

        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/FnC-sPXn-U0"
              title="Facilities Virtual Tour"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="text-center text-muted-foreground mt-4 text-sm">
            <Play className="inline h-4 w-4 mr-1" />
            A walkthrough of our PG rooms, library, and amenities
          </p>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesVideo;
