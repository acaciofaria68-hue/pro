import { Link } from "wouter";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { SiInstagram, SiTiktok, SiWhatsapp } from "react-icons/si";

const pages = [
  { name: "Início", href: "/" },
  { name: "Serviços", href: "/servicos" },
  { name: "Galeria", href: "/galeria" },
  { name: "Sobre", href: "/sobre" },
  { name: "Contato", href: "/contato" },
];

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" data-testid="link-footer-logo">
              <span className="font-display text-3xl text-white tracking-wide cursor-pointer">
                URBAN<span className="text-primary">CUT</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm mt-4 mb-6 leading-relaxed">
              Craft. Culture. Cut. Um refúgio urbano para quem exige precisão, estilo e cultura street.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                data-testid="link-instagram"
                className="w-10 h-10 flex items-center justify-center bg-white/5 text-white hover:bg-primary hover:text-black transition-all duration-300"
              >
                <SiInstagram size={18} />
              </a>
              <a
                href="#"
                data-testid="link-tiktok"
                className="w-10 h-10 flex items-center justify-center bg-white/5 text-white hover:bg-primary hover:text-black transition-all duration-300"
              >
                <SiTiktok size={18} />
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-whatsapp"
                className="w-10 h-10 flex items-center justify-center bg-white/5 text-white hover:bg-primary hover:text-black transition-all duration-300"
              >
                <SiWhatsapp size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-condensed text-white font-bold tracking-widest text-sm uppercase mb-5">
              Navegação
            </h4>
            <ul className="space-y-3">
              {pages.map((page) => (
                <li key={page.href}>
                  <Link href={page.href} data-testid={`link-footer-${page.name.toLowerCase()}`}>
                    <span className="text-gray-400 hover:text-primary transition-colors text-sm cursor-pointer">
                      {page.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-condensed text-white font-bold tracking-widest text-sm uppercase mb-5">
              Horários
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-white font-medium">Seg – Sex</p>
                  <p>10h às 21h</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-white font-medium">Sábado</p>
                  <p>09h às 21h</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-white font-medium">Domingo</p>
                  <p>11h às 18h</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-condensed text-white font-bold tracking-widest text-sm uppercase mb-5">
              Contato
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <a
                  href="https://maps.google.com/?q=Rua+Augusta,+1500,+São+Paulo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  data-testid="link-maps-footer"
                >
                  Rua Augusta, 1500<br />Consolação, São Paulo
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>(11) 9 9999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>contato@urbancut.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500 gap-3">
          <p>© {new Date().getFullYear()} Urban Cut. Todos os direitos reservados.</p>
          <p className="font-condensed tracking-widest text-gray-600">CRAFT · CULTURE · CUT</p>
        </div>
      </div>
    </footer>
  );
}
