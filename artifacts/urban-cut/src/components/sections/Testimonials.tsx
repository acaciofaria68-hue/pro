import React, { useCallback } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Lucas M.",
    text: "O melhor corte que já tive em SP. Fui pelo Instagram e saí virando cliente fiel. Profissionais que realmente entendem do que falam."
  },
  {
    name: "Rafael S.",
    text: "Ambiente incrível, playlist no ponto e barba impecável. O Combo Signature vale cada centavo. Virei cliente semanal."
  },
  {
    name: "Diego T.",
    text: "Fui na primeira vez sem saber o que esperar e saí completamente satisfeito. O espaço tem um vibe muito diferente — elegante mas sem frescura."
  },
  {
    name: "Henrique A.",
    text: "Quando descobri que servem cerveja artesanal enquanto você espera, não precisei de mais motivos. Detalhe: o corte também é sensacional."
  }
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="depoimentos" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-white mb-4">
              O QUE DIZEM OS CLIENTES
            </h2>
            <div className="w-24 h-1 bg-primary mb-6"></div>
            
            <div className="flex items-center gap-4">
              <span className="text-5xl font-serif font-bold text-primary">4.9<span className="text-2xl text-gray-500">/5</span></span>
              <div className="flex flex-col">
                <div className="flex text-primary mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Baseado em avaliações do Google</span>
              </div>
            </div>
          </motion.div>

          <div className="flex gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={scrollPrev}
              className="rounded-none border-white/20 text-white hover:bg-primary hover:text-black hover:border-primary transition-colors h-12 w-12"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={scrollNext}
              className="rounded-none border-white/20 text-white hover:bg-primary hover:text-black hover:border-primary transition-colors h-12 w-12"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="embla" 
          ref={emblaRef}
        >
          <div className="embla__container flex -ml-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="embla__slide flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4">
                <div className="bg-card border border-white/5 p-8 h-full flex flex-col relative group hover:border-white/20 transition-colors">
                  <div className="flex text-primary mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-8 italic flex-grow leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="mt-auto">
                    <span className="text-white font-bold block">— {testimonial.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
