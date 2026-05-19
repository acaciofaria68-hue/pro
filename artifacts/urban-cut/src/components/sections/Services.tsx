import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Corte Urban",
    duration: "45 min",
    price: "R$ 55",
    description: "Corte preciso com acabamento que define seu estilo — fade, undercut, texturizado. Cada detalhe executado com navalha e técnica."
  },
  {
    title: "Barba de Respeito",
    duration: "30 min",
    price: "R$ 40",
    description: "Terapia completa com toalha quente, modelagem artesanal e finalização com óleos premium. Sua barba como obra de arte."
  },
  {
    title: "Combo Signature",
    duration: "75 min",
    price: "R$ 85",
    description: "Corte + Barba + Alinhamento de fios. A experiência Urban Cut completa. Para quem não aceita meio-termo."
  }
];

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-white mb-4">
            NOSSOS SERVIÇOS
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-card-border p-8 flex flex-col h-full group hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(231,254,0,0.15)] transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">{service.duration}</span>
                </div>
                <div className="text-2xl font-serif font-bold text-primary">
                  {service.price}
                </div>
              </div>
              
              <p className="text-gray-400 mb-8 flex-grow">
                {service.description}
              </p>
              
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="w-full mt-auto">
                <Button className="w-full bg-transparent border-2 border-white/20 text-white hover:bg-primary hover:text-black hover:border-primary font-bold uppercase tracking-wider transition-colors duration-300">
                  Agendar
                </Button>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
