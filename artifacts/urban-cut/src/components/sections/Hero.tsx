import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.png";

export function Hero() {
  return (
    <section id="inicio" className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 z-10 bg-black/70" />

      {/* Content */}
      <div className="container relative z-20 mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-extrabold text-white leading-tight max-w-5xl mb-6"
        >
          O CORTE QUE CONFIGURA SUA IDENTIDADE VISUAL.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10"
        >
          Mais que barba e cabelo. Um refúgio urbano para quem exige precisão, estilo e cultura street no centro da cidade.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto h-14 px-8 bg-primary hover:bg-primary/90 text-black font-bold text-lg rounded-none animate-pulse-glow hover:scale-105 transition-transform duration-300">
              RESERVE SUA CADEIRA
            </Button>
          </a>
          
          <a href="#servicos" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full sm:w-auto h-14 px-8 border-white text-white hover:bg-white hover:text-black font-semibold text-lg rounded-none transition-colors duration-300">
              Conhecer Serviços
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center animate-bounce"
      >
        <span className="text-xs text-gray-400 uppercase tracking-widest mb-2 font-medium">Scroll</span>
        <ChevronDown className="text-primary w-6 h-6" />
      </motion.div>
    </section>
  );
}
