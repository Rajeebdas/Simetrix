import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/ui/mobile-menu";
import { Menu, X } from "lucide-react";
import heroLogo from "@assets/hero-logo.png";

export function Header() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  const navigationItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/industries", label: "Industries" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-lg shadow-xl sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <img
                src={heroLogo}
                alt="Simetric - Engineering insight through simulation"
                className="h-16 w-auto hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${
                    isActive(item.href)
                      ? "text-primary font-semibold relative"
                      : "text-secondary hover:text-primary font-medium"
                  } transition-all duration-300 py-2 px-4 rounded-full hover:bg-gray-50 ${
                    isActive(item.href) ? 'after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:w-2 after:h-2 after:bg-primary after:rounded-full' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-secondary hover:text-primary p-3 rounded-full hover:bg-gray-50"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navigationItems={navigationItems}
        isActive={isActive}
      />
    </nav>
  );
}
