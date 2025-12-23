import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu, ArrowRight } from "lucide-react";
import { Phone } from "@phosphor-icons/react";
import winstreamsLogo from "@/assets/winstreams-logo.png";
interface NavbarProps {
  onBookingClick?: () => void;
}
export function Navbar({
  onBookingClick
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const navItems = [{
    label: "How It Works",
    href: "/how-it-works",
    isPage: true
  }, {
    label: "Services",
    href: "/services",
    isPage: true
  }, {
    label: "Pricing",
    href: "/pricing",
    isPage: true
  }, {
    label: "About",
    href: "/about",
    isPage: true
  }, {
    label: "Contact",
    href: "/contact",
    isPage: true
  }];
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isPage: boolean) => {
    e.preventDefault();
    setIsOpen(false);
    if (isPage) {
      navigate(href);
    } else {
      // If we're not on homepage, navigate there first then scroll
      if (location.pathname !== '/') {
        navigate('/' + href);
      } else {
        document.querySelector(href)?.scrollIntoView({
          behavior: "smooth"
        });
      }
    }
  };
  const handleBookingClick = () => {
    if (onBookingClick) {
      onBookingClick();
    } else {
      navigate("/book");
    }
  };
  return <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        {/* Logo - Far left positioning */}
        <a href="/" className="flex items-center flex-shrink-0">
          <img src={winstreamsLogo} alt="Winstreams" className="h-14 md:h-16 w-auto" />
        </a>
        
        {/* Nav Links - Centered */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map(item => <a key={item.label} href={item.href} onClick={e => handleNavClick(e, item.href, item.isPage)} className="text-foreground hover:text-primary transition-colors text-base font-semibold py-3">
              {item.label}
            </a>)}
        </div>
        
        {/* Right side - Phone & CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:954-945-1525" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-semibold">
            <Phone size={18} weight="duotone" aria-hidden="true" />
            954-945-1525
          </a>
          <Button onClick={handleBookingClick} className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-magenta/20 hover:scale-105 hover:shadow-xl hover:shadow-brand-magenta/30 transition-all duration-300 active:scale-95">
            Book Strategy Call
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
        
        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="w-6 h-6" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="z-[100]">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map(item => <a key={item.label} href={item.href} onClick={e => handleNavClick(e, item.href, item.isPage)} className="text-foreground hover:text-primary font-semibold py-3 transition-colors">
                    {item.label}
                  </a>)}
                <a href="tel:954-945-1525" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-semibold py-3">
                  <Phone size={18} weight="duotone" aria-hidden="true" />
                  954-945-1525
                </a>
                <Button onClick={() => {
                handleBookingClick();
                setIsOpen(false);
              }} className="w-full mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-lg active:scale-95 transition-transform">
                  Book Strategy Call
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>;
}