
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Rocket className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold text-primary">RocketNav</span>
            </Link>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium">
              Services
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium">
              Contact
            </Link>
            <Button variant="default" size="sm" className="ml-4">
              Get Started
            </Button>
          </div>
          
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("sm:hidden", isMenuOpen ? "block" : "hidden")}>
        <div className="pt-2 pb-3 space-y-1">
          <Link 
            to="/" 
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/services" 
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link 
            to="/about" 
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <div className="px-3 py-2">
            <Button className="w-full">Get Started</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
