import { Link, useLocation } from "react-router-dom";
import { Truck, Menu, X, Phone, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/src/lib/utils";
import logo from "../assets/logo.png";
 


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out",
        scrolled 
          ? "top-4 mx-auto max-w-6xl px-4" 
          : "top-0 w-full"
      )}
    >
      <div 
        className={cn(
          "transition-all duration-500 ease-in-out px-4 sm:px-6 lg:px-8",
          scrolled 
            ? "bg-white/90 backdrop-blur-xl py-3 rounded-full shadow-2xl border border-gray-100" 
            : "bg-transparent py-6"
        )}
      >
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className={cn(
              "p-2 rounded-lg transition-colors",
              scrolled ? "bg-brand" : "bg-brand"
            )}>
              <img src={logo} alt="JF" className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "text-xl font-bold tracking-tight leading-none transition-colors",
                scrolled ? "text-gray-900" : "text-white"
              )}>
                JWFB
              </span>
              <span className={cn(
                "text-[10px] font-semibold tracking-[0.2em] uppercase",
                scrolled ? "text-brand-accent" : "text-brand-light"
              )}>
                FREIGHT BROKERAGE
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-bold transition-colors hover:text-brand-accent",
                  scrolled ? "text-gray-600" : "text-gray-100",
                  location.pathname === link.path && "text-brand-accent"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/book"
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-black transition-all transform hover:scale-105 active:scale-95 shadow-xl",
                scrolled 
                  ? "bg-brand text-white shadow-brand/20" 
                  : "bg-white text-brand shadow-white/10"
              )}
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "p-2 transition-colors",
                scrolled ? "text-gray-900" : "text-white"
              )}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 transition-all duration-300 overflow-hidden shadow-2xl rounded-b-3xl",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "block text-lg font-bold transition-colors",
                location.pathname === link.path ? "text-brand-accent" : "text-gray-900"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/book"
            onClick={() => setIsOpen(false)}
            className="block bg-brand text-white px-5 py-3 rounded-xl text-center font-bold shadow-lg shadow-brand/20"
          >
            Book a Shipment
          </Link>
        </div>
      </div>
    </nav>
  );
}
