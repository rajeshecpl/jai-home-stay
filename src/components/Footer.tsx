import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">Jai Enterprises</h3>
          <p className="text-white/80 mb-4">
            Girls' PG & Library - Your Home Away from Home
          </p>
          <div className="flex items-center justify-center gap-1 text-sm text-white/70">
            <span>Made with</span>
            <Heart className="h-4 w-4 fill-secondary text-secondary" />
            <span>© {currentYear} Jai Enterprises. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
