import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { Wifi, Beer, Music, Car } from "lucide-react";
import { SiInstagram } from "react-icons/si";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import gallery1 from "@/assets/gallery-1.png";
import gallery2 from "@/assets/gallery-2.png";
import gallery3 from "@/assets/gallery-3.png";
import gallery4 from "@/assets/gallery-4.png";
import heroBg from "@/assets/hero-bg.png";
import bentoBg from "@/assets/bento-barbershop.png";
import work1 from "@/assets/work-1.png";
import work2 from "@/assets/work-2.png";
import work3 from "@/assets/work-3.png";

const spaceImages = [
  { src: gallery1, alt: "Interior da Urban Cut", tall: true },
  { src: gallery2, alt: "Ferramentas de barbeiro", tall: false },
  { src: gallery3, alt: "Cadeira de barbeiro", tall: false },
  { src: heroBg, alt: "Ambiente noturno", tall: true },
  { src: gallery4, alt: "Neon Urban Cut", tall: false },
  { src: bentoBg, alt: "Atmosfera premium", tall: false },
];

const workImages = [
  { src: work1, alt: "Fade perfeito", label: "FADE PERFEITO" },
  { src: work2, alt: "Barba artesanal", label: "BARBA ARTESANAL" },
  { src: work3, alt: "Texturizado moderno", label: "TEXTURIZADO MODERNO" },
  { src: gallery1, alt: "Alinhamento premium", label: "ALINHAMENTO PREMIUM" },
];

const differentials = [
  { icon: Wifi, title: "Wi-Fi Grátis", desc: "Fique conectado durante toda a sua visita." },
  { icon: Beer, title: "Cerveja Artesanal", desc: "Uma cortesia para começar o atendimento bem." },
  { icon: Music, title: "Música ao Vivo", desc: "Às sextas, som ao vivo das 18h. Sexta é especial." },
  { icon: Car, title: "Estacionamento", desc: "Parceiros conveniados na Rua Augusta e arredores." },
];


export function Galeria() {
  return (
    <Layout>
      {/* Page Hero */}
      <section className="relative pt-40 pb-20 bg-[#0a0a0a] border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(231,254,0,0.06)_0%,_transparent_70%)]" />
        <div className="container mx-auto px-4 md:px-8 relative">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="font-condensed text-primary tracking-[0.3em] text-xs uppercase"
          >
            Urban Cut · São Paulo
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-7xl md:text-9xl text-white mt-2 leading-none"
          >
            O ESPAÇO
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-400 max-w-xl mt-6 leading-relaxed"
          >
            Cada detalhe pensado para a sua experiência. Do design industrial
            ao atendimento — o ambiente Urban Cut é parte do serviço.
          </motion.p>
        </div>
      </section>

      {/* Space Gallery — Masonry */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-14"
          >
            <span className="font-condensed text-primary tracking-[0.3em] text-xs uppercase">
              GALERIA DO AMBIENTE
            </span>
            <h2 className="font-display text-5xl md:text-6xl text-white mt-1">
              CONHEÇA O ESPAÇO
            </h2>
          </motion.div>

          {/* Masonry grid */}
          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {spaceImages.map((img, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                custom={index * 0.5}
                variants={fadeUp}
                className="break-inside-avoid relative overflow-hidden group border border-white/5 hover:border-primary/40 transition-colors duration-300"
                data-testid={`gallery-space-${index}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ display: "block" }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials Strip */}
      <section className="py-16 bg-[#0a0a0a] border-y border-white/10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {differentials.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index}
                  variants={fadeUp}
                  className="flex items-start gap-4 p-6 bg-card border border-white/10 hover:border-primary/40 transition-colors duration-300"
                  data-testid={`differential-${index}`}
                >
                  <div className="p-2.5 bg-black border border-white/10 shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-condensed text-white font-bold tracking-wide">{item.title}</h4>
                    <p className="text-gray-500 text-xs mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Work Gallery */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-14"
          >
            <span className="font-condensed text-primary tracking-[0.3em] text-xs uppercase">
              NOSSOS TRABALHOS
            </span>
            <h2 className="font-display text-5xl md:text-6xl text-white mt-1">
              RESULTADO NA PRÁTICA
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {workImages.map((img, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                custom={index % 2}
                variants={fadeUp}
                className="relative overflow-hidden group border border-white/5 hover:border-primary/40 transition-colors duration-300 aspect-[4/3]"
                data-testid={`gallery-work-${index}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="font-display text-xl text-white tracking-wide">{img.label}</span>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-0.5 bg-primary" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-20 bg-[#0a0a0a] border-t border-white/10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="container mx-auto px-4 md:px-8"
        >
          <div className="border border-white/10 p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 hover:border-primary/30 transition-colors duration-300">
            <div className="flex items-center gap-6">
              <div className="p-5 bg-black border border-white/10">
                <SiInstagram size={36} className="text-white" />
              </div>
              <div>
                <h3 className="font-display text-4xl md:text-5xl text-white">@URBANCUT</h3>
                <p className="text-gray-400 mt-1 text-sm">
                  Acompanhe nossos trabalhos e novidades no Instagram.
                </p>
              </div>
            </div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-instagram"
            >
              <Button className="rounded-none bg-primary text-black font-condensed font-bold tracking-widest px-8 h-12 hover:scale-105 transition-transform duration-300 whitespace-nowrap">
                SEGUIR NO INSTAGRAM
              </Button>
            </a>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
}
