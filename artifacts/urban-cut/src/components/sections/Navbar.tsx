import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Início", href: "/" },
  { name: "Serviços", href: "/servicos" },
  { name: "Galeria", href: "/galeria" },
  { name: "Sobre", href: "/sobre" },
  { name: "Contato", href: "/contato" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/85 backdrop-blur-md border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" data-testid="link-logo">
          <span className="font-display text-2xl text-white cursor-pointer tracking-wide">
            URBAN<span className="text-primary">CUT</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = location === link.href;
            return (
              <Link key={link.href} href={link.href} data-testid={`link-nav-${link.name.toLowerCase()}`}>
                <span
                  className={`font-condensed text-base tracking-wider cursor-pointer transition-colors duration-200 ${
                    isActive ? "text-primary" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.name.toUpperCase()}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="button-agendar-desktop"
          >
            <Button className="bg-primary hover:bg-primary/90 text-black font-condensed font-bold tracking-wider hover:scale-105 transition-transform duration-200 rounded-none px-6">
              AGENDAR HORÁRIO
            </Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          data-testid="button-mobile-menu"
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/97 backdrop-blur-xl border-b border-white/10 py-6 px-6 flex flex-col items-center space-y-5">
          {navLinks.map((link) => {
            const isActive = location === link.href;
            return (
              <Link key={link.href} href={link.href} data-testid={`link-mobile-${link.name.toLowerCase()}`}>
                <span
                  className={`font-display text-2xl cursor-pointer transition-colors ${
                    isActive ? "text-primary" : "text-white hover:text-primary"
                  }`}
                >
                  {link.name.toUpperCase()}
                </span>
              </Link>
            );
          })}
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
            data-testid="button-agendar-mobile"
          >
            <Button className="w-full bg-primary text-black font-condensed font-bold tracking-wider h-12 text-lg rounded-none">
              AGENDAR HORÁRIO
            </Button>
          </a>
        </div>
      )}
    </nav>
  );
}
