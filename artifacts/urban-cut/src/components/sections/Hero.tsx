import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.png";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 z-10 bg-black/72" />

      <div className="container relative z-20 mx-auto px-4 md:px-8 flex flex-col items-center text-center pt-20">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-condensed text-primary tracking-[0.3em] text-sm mb-6 uppercase"
        >
          Barbearia Premium · Consolação · São Paulo
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="font-display text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] text-white leading-none max-w-6xl mb-6"
        >
          O CORTE QUE CONFIGURA SUA IDENTIDADE VISUAL.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          className="text-base md:text-lg text-gray-300 max-w-2xl mb-10 leading-relaxed"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Mais que barba e cabelo. Um refúgio urbano para quem exige precisão,
          estilo e cultura street no centro da cidade.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
            data-testid="button-reserve-hero"
          >
            <Button className="w-full sm:w-auto h-14 px-10 bg-primary text-black font-condensed font-bold text-lg tracking-widest rounded-none animate-pulse-glow hover:scale-105 transition-transform duration-300">
              RESERVE SUA CADEIRA
            </Button>
          </a>

          <Link href="/servicos" className="w-full sm:w-auto" data-testid="link-servicos-hero">
            <Button
              variant="outline"
              className="w-full sm:w-auto h-14 px-10 border-white/60 text-white hover:bg-white hover:text-black font-condensed font-bold text-lg tracking-widest rounded-none transition-colors duration-300"
            >
              VER SERVIÇOS
            </Button>
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center animate-bounce"
      >
        <span className="font-condensed text-xs text-gray-500 tracking-[0.3em] mb-2">SCROLL</span>
        <ChevronDown className="text-primary w-5 h-5" />
      </motion.div>
    </section>
  );
}
