import React from "react";
import { MapPin, Clock } from "lucide-react";
import { SiInstagram, SiTiktok } from "react-icons/si";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-black py-16 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-serif text-3xl font-extrabold text-white tracking-tighter mb-4">
              URBAN<span className="text-primary ml-1">CUT</span>
            </h2>
            <p className="text-gray-400 max-w-sm mb-6">
              Craft. Culture. Cut. Mais que barba e cabelo. Um refúgio urbano para quem exige precisão, estilo e cultura street no centro da cidade.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all duration-300">
                <SiInstagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all duration-300">
                <SiTiktok size={20} />
              </a>
            </div>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-white font-bold mb-4 font-serif uppercase tracking-wider">Contato & Horários</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start">
                <Clock className="w-5 h-5 mr-3 text-primary shrink-0" />
                <div>
                  <p className="text-white font-medium mb-1">Seg a Sáb:</p>
                  <p>10h às 21h</p>
                  <p className="text-white font-medium mt-2 mb-1">Dom:</p>
                  <p>11h às 18h</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-white font-bold mb-4 font-serif uppercase tracking-wider">Localização</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-primary shrink-0" />
                <div>
                  <p>Rua Augusta, 1500</p>
                  <p>Consolação</p>
                  <p>São Paulo, SP</p>
                </div>
              </li>
            </ul>
            <div className="mt-6">
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-transparent border border-primary text-primary hover:bg-primary hover:text-black transition-colors">
                  FALE CONOSCO
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Urban Cut. Todos os direitos reservados.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
