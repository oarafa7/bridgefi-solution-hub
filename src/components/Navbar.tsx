import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (mobileMenuOpen && !target.closest('#mobile-menu') && !target.closest('#menu-trigger')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 md:px-8",
        isScrolled 
          ? "glassmorphism shadow-sm backdrop-blur-xl border-b border-slate-200/30" 
          : "bg-transparent"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img 
            src="/lovable-uploads/e0be2166-7286-4336-928d-316bc468b851.png" 
            alt="Bridge Logo" 
            className="h-12 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-slate-700 hover:text-bridge-green-800 transition-colors font-medium">Features</a>
          <a href="#how-it-works" className="text-sm text-slate-700 hover:text-bridge-green-800 transition-colors font-medium">How It Works</a>
          <a href="#benefits" className="text-sm text-slate-700 hover:text-bridge-green-800 transition-colors font-medium">Benefits</a>
          <a href="#contact" className="text-sm text-slate-700 hover:text-bridge-green-800 transition-colors font-medium">Contact</a>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="sm" className="rounded-full border-bridge-green-800 text-bridge-green-800 hover:text-bridge-green-900 hover:bg-bridge-green-50">
            Log In
          </Button>
          <Button size="sm" className="rounded-full bg-bridge-green text-white hover:bg-bridge-green-800">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Trigger */}
        <button 
          id="menu-trigger"
          className="md:hidden text-slate-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        id="mobile-menu"
        className={cn(
          "fixed inset-0 top-[76px] z-50 bg-white/90 backdrop-blur-xl transition-transform duration-300 ease-in-out md:hidden",
          mobileMenuOpen ? "transform-none" : "translate-x-full"
        )}
      >
        <div className="flex flex-col px-6 py-8 h-full">
          <nav className="flex flex-col gap-6 mb-8">
            <a 
              href="#features" 
              className="text-lg font-medium text-slate-800 hover:text-bridge-green-800 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-lg font-medium text-slate-800 hover:text-bridge-green-800 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#benefits" 
              className="text-lg font-medium text-slate-800 hover:text-bridge-green-800 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Benefits
            </a>
            <a 
              href="#contact" 
              className="text-lg font-medium text-slate-800 hover:text-bridge-green-800 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </nav>

          <div className="flex flex-col gap-4 mt-auto">
            <Button variant="outline" className="w-full justify-center rounded-full border-bridge-green-800 text-bridge-green-800 hover:text-bridge-green-900 hover:bg-bridge-green-50">
              Log In
            </Button>
            <Button className="w-full justify-center rounded-full bg-bridge-green text-white hover:bg-bridge-green-800">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
