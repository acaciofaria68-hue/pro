import { motion } from "framer-motion";
import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { Hero } from "@/components/sections/Hero";
import { Testimonials } from "@/components/sections/Testimonials";
import { Button } from "@/components/ui/button";
import bentoBg from "@/assets/bento-barbershop.png";
import { fadeUp } from "@/lib/animations";

const stats = [
  { value: "8+", label: "Anos de Experiência" },
  { value: "2.4K+", label: "Clientes Atendidos" },
  { value: "4.9", label: "Estrelas no Google" },
  { value: "3", label: "Barbeiros Especialistas" },
];

const services = [
  {
    title: "Corte Urban",
    duration: "45 min",
    price: "R$ 55",
    description:
      "Corte preciso com acabamento que define seu estilo — fade, undercut, texturizado. Cada detalhe executado com navalha e técnica.",
  },
  {
    title: "Barba de Respeito",
    duration: "30 min",
    price: "R$ 40",
    description:
      "Terapia completa com toalha quente, modelagem artesanal e finalização com óleos premium. Sua barba como obra de arte.",
  },
  {
    title: "Combo Signature",
    duration: "75 min",
    price: "R$ 85",
    description:
      "Corte + Barba + Alinhamento de fios. A experiência Urban Cut completa. Para quem não aceita meio-termo.",
  },
];


export function Home() {
  return (
    <Layout>
      <Hero />

      {/* Stats Bar */}
      <section className="bg-[#0a0a0a] border-y border-white/10 py-8">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 divide-y-0 md:divide-x md:divide-white/10">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="flex flex-col items-center text-center py-4 md:py-0"
                data-testid={`stat-${stat.label.toLowerCase().replace(/\s/g, "-")}`}
              >
                <span className="font-display text-4xl md:text-5xl text-primary leading-none">
                  {stat.value}
                </span>
                <span className="font-condensed text-gray-400 tracking-widest text-xs uppercase mt-2">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
          >
            <div>
              <span className="font-condensed text-primary tracking-[0.3em] text-xs uppercase">
                O QUE FAZEMOS
              </span>
              <h2 className="font-display text-5xl md:text-6xl text-white mt-1">
                NOSSOS SERVIÇOS
              </h2>
            </div>
            <Link href="/servicos" data-testid="link-ver-servicos">
              <span className="font-condensed text-sm text-gray-400 hover:text-primary tracking-widest uppercase transition-colors cursor-pointer border-b border-white/20 pb-1 hover:border-primary">
                Ver todos os serviços →
              </span>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={index}
                variants={fadeUp}
                className="bg-card border border-card-border p-8 flex flex-col group hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_0_24px_rgba(231,254,0,0.12)] transition-all duration-300"
                data-testid={`card-service-${index}`}
              >
                <div className="flex justify-between items-start mb-5">
                  <div>
                    <h3 className="font-display text-2xl text-white">{service.title}</h3>
                    <span className="font-condensed text-gray-500 tracking-widest text-xs uppercase">
                      {service.duration}
                    </span>
                  </div>
                  <span className="font-display text-3xl text-primary">{service.price}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed flex-grow mb-7">
                  {service.description}
                </p>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto"
                  data-testid={`button-agendar-service-${index}`}
                >
                  <Button className="w-full rounded-none bg-transparent border border-white/20 text-white hover:bg-primary hover:text-black hover:border-primary font-condensed tracking-widest transition-colors duration-300">
                    AGENDAR
                  </Button>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Space Teaser */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="relative overflow-hidden group cursor-pointer"
            style={{ minHeight: 480 }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${bentoBg})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="relative z-10 flex flex-col justify-end h-full p-10 md:p-16" style={{ minHeight: 480 }}>
              <span className="font-condensed text-primary tracking-[0.3em] text-xs uppercase mb-3">
                O AMBIENTE
              </span>
              <h2 className="font-display text-5xl md:text-7xl text-white mb-6">
                O NOSSO ESPAÇO
              </h2>
              <p className="text-gray-300 max-w-md mb-8 leading-relaxed text-sm">
                Cada detalhe foi pensado para transformar o momento do corte em uma experiência
                completa. Cerveja artesanal, playlist curada e profissionais que entendem da sua identidade.
              </p>
              <Link href="/galeria" data-testid="link-espaco-teaser">
                <Button className="rounded-none bg-primary text-black font-condensed font-bold tracking-widest px-8 hover:scale-105 transition-transform duration-300 w-fit">
                  CONHECER O ESPAÇO
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Banner */}
      <section className="bg-black border-y border-white/10 py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div>
            <span className="font-condensed text-primary tracking-[0.3em] text-xs uppercase">
              PRONTO?
            </span>
            <h2 className="font-display text-5xl md:text-7xl text-white mt-1">
              PRONTO PARA O<br />PRÓXIMO NÍVEL?
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-agendar-cta"
            >
              <Button className="rounded-none bg-primary text-black font-condensed font-bold tracking-widest text-lg px-10 h-14 hover:scale-105 transition-transform duration-300 animate-pulse-glow">
                AGENDAR AGORA
              </Button>
            </a>
            <Link href="/contato" data-testid="link-contato-cta">
              <Button
                variant="outline"
                className="rounded-none border-white/30 text-white font-condensed tracking-widest text-lg px-10 h-14 hover:border-primary hover:text-primary transition-colors"
              >
                FALE CONOSCO
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
}
