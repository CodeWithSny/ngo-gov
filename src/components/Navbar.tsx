
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Heart className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold text-primary">NGO Connect</span>
            </Link>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
            <Link 
              to="/" 
              className={cn(
                "px-3 py-2 text-sm font-medium",
                isActive("/") 
                  ? "text-primary border-b-2 border-primary" 
                  : "text-gray-700 hover:text-primary"
              )}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={cn(
                "px-3 py-2 text-sm font-medium",
                isActive("/about") 
                  ? "text-primary border-b-2 border-primary" 
                  : "text-gray-700 hover:text-primary"
              )}
            >
              About Us
            </Link>
            <Link 
              to="/services" 
              className={cn(
                "px-3 py-2 text-sm font-medium",
                isActive("/services") 
                  ? "text-primary border-b-2 border-primary" 
                  : "text-gray-700 hover:text-primary"
              )}
            >
              Our Work
            </Link>
            <Link 
              to="/get-involved" 
              className={cn(
                "px-3 py-2 text-sm font-medium",
                isActive("/get-involved") 
                  ? "text-primary border-b-2 border-primary" 
                  : "text-gray-700 hover:text-primary"
              )}
            >
              Get Involved
            </Link>
            <Link 
              to="/news" 
              className={cn(
                "px-3 py-2 text-sm font-medium",
                isActive("/news") 
                  ? "text-primary border-b-2 border-primary" 
                  : "text-gray-700 hover:text-primary"
              )}
            >
              News & Events
            </Link>
            <Link 
              to="/contact" 
              className={cn(
                "px-3 py-2 text-sm font-medium",
                isActive("/contact") 
                  ? "text-primary border-b-2 border-primary" 
                  : "text-gray-700 hover:text-primary"
              )}
            >
              Contact
            </Link>
            <Button variant="default" size="sm" asChild>
              <Link to="/get-involved">Donate</Link>
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
            className={cn(
              "block px-3 py-2 text-base font-medium",
              isActive("/") 
                ? "text-primary bg-primary/5" 
                : "text-gray-700 hover:text-primary hover:bg-gray-50"
            )}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={cn(
              "block px-3 py-2 text-base font-medium",
              isActive("/about") 
                ? "text-primary bg-primary/5" 
                : "text-gray-700 hover:text-primary hover:bg-gray-50"
            )}
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link 
            to="/services" 
            className={cn(
              "block px-3 py-2 text-base font-medium",
              isActive("/services") 
                ? "text-primary bg-primary/5" 
                : "text-gray-700 hover:text-primary hover:bg-gray-50"
            )}
            onClick={() => setIsMenuOpen(false)}
          >
            Our Work
          </Link>
          <Link 
            to="/get-involved" 
            className={cn(
              "block px-3 py-2 text-base font-medium",
              isActive("/get-involved") 
                ? "text-primary bg-primary/5" 
                : "text-gray-700 hover:text-primary hover:bg-gray-50"
            )}
            onClick={() => setIsMenuOpen(false)}
          >
            Get Involved
          </Link>
          <Link 
            to="/news" 
            className={cn(
              "block px-3 py-2 text-base font-medium",
              isActive("/news") 
                ? "text-primary bg-primary/5" 
                : "text-gray-700 hover:text-primary hover:bg-gray-50"
            )}
            onClick={() => setIsMenuOpen(false)}
          >
            News & Events
          </Link>
          <Link 
            to="/contact" 
            className={cn(
              "block px-3 py-2 text-base font-medium",
              isActive("/contact") 
                ? "text-primary bg-primary/5" 
                : "text-gray-700 hover:text-primary hover:bg-gray-50"
            )}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <div className="px-3 py-2">
            <Button className="w-full" asChild>
              <Link to="/get-involved" onClick={() => setIsMenuOpen(false)}>Donate Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
