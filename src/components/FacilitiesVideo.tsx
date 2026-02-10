import { Play } from "lucide-react";
import facilitiesVideo from "@/assets/facilities-video.mp4";

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
            <video
              controls
              preload="metadata"
              className="w-full aspect-video bg-black"
              poster=""
            >
              <source src={facilitiesVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
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
