import { Link } from "wouter";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigationItems: Array<{ href: string; label: string }>;
  isActive: (path: string) => boolean;
}

export function MobileMenu({ isOpen, onClose, navigationItems, isActive }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
        {navigationItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              isActive(item.href)
                ? "text-primary bg-blue-50"
                : "text-gray-700 hover:text-primary hover:bg-gray-50"
            }`}
          >
            {item.label}
          </Link>
        ))}
        <div className="px-3 py-2">
          <Link href="/contact" onClick={onClose}>
            <Button className="w-full bg-primary text-white hover:bg-blue-700">
              Get Quote
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
