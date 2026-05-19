import React from "react";
import { motion } from "framer-motion";
import { Beer, Headphones, Scissors } from "lucide-react";
import bentoBg from "@/assets/bento-barbershop.png";

export function Space() {
  return (
    <section id="o-espaco" className="py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:text-left text-center"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-white mb-4">
            O ESPAÇO
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto md:mx-0"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 auto-rows-[250px] md:auto-rows-[300px]">
          {/* Large Image Block */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 md:row-span-2 relative overflow-hidden bg-card border border-white/10 group"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${bentoBg})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-3xl font-serif font-bold text-white mb-2 uppercase">Atmosfera Premium</h3>
              <p className="text-gray-300 max-w-md">Onde o design industrial encontra a cultura urbana.</p>
            </div>
          </motion.div>

          {/* Block 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card border border-white/10 p-8 flex flex-col justify-center hover:border-primary/50 transition-colors duration-300"
          >
            <Beer className="w-10 h-10 text-primary mb-4" />
            <h4 className="text-xl font-bold text-white mb-2">Cerveja Artesanal e Café</h4>
            <p className="text-gray-400 text-sm">
              Cada atendimento começa com uma cortesia. Porque você merece mais que só um bom corte.
            </p>
          </motion.div>

          {/* Block 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#151515] border border-white/10 p-8 flex flex-col justify-center hover:border-primary/50 transition-colors duration-300"
          >
            <Headphones className="w-10 h-10 text-primary mb-4" />
            <h4 className="text-xl font-bold text-white mb-2">Playlist Curada</h4>
            <p className="text-gray-400 text-sm">
              Hip-Hop selecionado. Lo-Fi para relaxar. A trilha sonora certa para cada momento.
            </p>
          </motion.div>

          {/* Block 3 - Added below on mobile, spans bottom on desktop if we wanted, but grid is 3 cols so let's put it on next row or adjust layout */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-3 bg-card border border-white/10 p-8 flex flex-col md:flex-row items-start md:items-center gap-6 hover:border-primary/50 transition-colors duration-300"
          >
            <div className="p-4 bg-black rounded-full shrink-0">
              <Scissors className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Especialistas em Visagismo</h4>
              <p className="text-gray-400 max-w-2xl">
                Nossos profissionais analisam sua estrutura facial antes de qualquer corte. Técnica + arte. O resultado é um estilo perfeitamente alinhado com a sua identidade visual.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
