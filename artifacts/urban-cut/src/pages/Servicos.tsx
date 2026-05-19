import { motion } from "framer-motion";
import {
  Scissors,
  Clock,
  Zap,
  Droplets,
  Layers,
  Eye,
} from "lucide-react";
import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { fadeUp } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const WA_NUMBER = "258834751328";

const featuredService = {
  title: "Combo Signature",
  price: "750 MT",
  duration: "75 min",
  description:
    "A experiência Urban Cut completa. Corte preciso + Barba artesanal + Alinhamento de fios. Para quem não aceita meio-termo — do fade à navalha, cada etapa executada com máxima técnica.",
  features: [
    "Corte personalizado com visagismo",
    "Barba modelada com toalha quente",
    "Alinhamento de fios com navalha",
    "Finalização com óleo premium",
    "Bebida de cortesia",
  ],
};

const allServices = [
  {
    icon: Scissors,
    title: "Corte Urban",
    duration: "45 min",
    price: "500 MT",
    description:
      "Corte preciso com acabamento que define o teu estilo — fade, undercut, texturizado. Cada detalhe executado com navalha e técnica de precisão.",
  },
  {
    icon: Droplets,
    title: "Barba de Respeito",
    duration: "30 min",
    price: "350 MT",
    description:
      "Terapia completa com toalha quente, modelagem artesanal e finalização com óleos premium. A tua barba como obra de arte.",
  },
  {
    icon: Layers,
    title: "Combo Signature",
    duration: "75 min",
    price: "750 MT",
    description:
      "Corte + Barba + Alinhamento de fios. A experiência Urban Cut completa. Para quem não aceita meio-termo.",
  },
  {
    icon: Zap,
    title: "Pigmentação de Barba",
    duration: "40 min",
    price: "500 MT",
    description:
      "Cobertura de fios brancos com técnica avançada e pigmentos de alta fixação. Resultado natural, duração prolongada.",
  },
  {
    icon: Droplets,
    title: "Hidratação Capilar",
    duration: "30 min",
    price: "400 MT",
    description:
      "Tratamento com ativo premium para cabelos ressecados e sem vida. Restaura o brilho e a maciez com uma única sessão.",
  },
  {
    icon: Eye,
    title: "Sobrancelha no Fio",
    duration: "15 min",
    price: "200 MT",
    description:
      "Design e alinhamento com fio de seda. Complemento perfeito para qualquer serviço — detalhes que fazem toda a diferença.",
  },
];

const steps = [
  {
    number: "01",
    title: "Agendamento",
    desc: "Reserva pelo WhatsApp ou pelo site. Confirma o teu horário e o serviço desejado.",
  },
  {
    number: "02",
    title: "Consultoria de Visagismo",
    desc: "O nosso barbeiro analisa a tua estrutura facial e estilo de vida antes de qualquer corte.",
  },
  {
    number: "03",
    title: "Execução com Precisão",
    desc: "Técnica apurada, produto premium, resultado que fala por si. Sem pressa, sem desleixo.",
  },
];

const faqs = [
  {
    q: "Preciso agendar com antecedência?",
    a: "Recomendamos agendar com pelo menos 24h de antecedência, especialmente para fins de semana. Mas aceitamos encaixes quando há disponibilidade — consulta pelo WhatsApp.",
  },
  {
    q: "Qual a duração do Combo Signature?",
    a: "Em média 75 minutos, mas pode variar conforme o estilo desejado e o estado inicial do cabelo e barba. Reservamos tempo suficiente para não apressar nenhuma etapa.",
  },
  {
    q: "Trabalham com visagismo?",
    a: "Sim. Todos os nossos profissionais são treinados em visagismo — a técnica de recomendar cortes e estilos que harmonizam com a estrutura facial de cada cliente.",
  },
  {
    q: "Aceitam walk-in (sem agendamento)?",
    a: "Aceitamos quando há disponibilidade na agenda, mas agendamentos têm prioridade. Para garantir o teu horário, agenda pelo WhatsApp ou pelo site.",
  },
];


export function Servicos() {
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
            Urban Cut · Maputo
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-7xl md:text-9xl text-white mt-2 leading-none"
          >
            NOSSOS<br />SERVIÇOS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-400 max-w-xl mt-6 leading-relaxed"
          >
            Do corte clássico ao combo completo — cada serviço é uma
            experiência projetada para elevar sua identidade visual.
          </motion.p>
        </div>
      </section>

      {/* Featured Service */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 md:order-1">
              <span className="font-condensed text-primary tracking-[0.3em] text-xs uppercase">
                SERVIÇO EM DESTAQUE
              </span>
              <h2 className="font-display text-6xl md:text-7xl text-white mt-2 mb-4">
                {featuredService.title}
              </h2>
              <div className="flex items-center gap-6 mb-6">
                <span className="font-display text-5xl text-primary">
                  {featuredService.price}
                </span>
                <span className="font-condensed text-gray-500 tracking-widest text-xs uppercase flex items-center gap-2">
                  <Clock className="w-4 h-4" /> {featuredService.duration}
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-8">
                {featuredService.description}
              </p>
              <ul className="space-y-3 mb-10">
                {featuredService.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/agendamento" data-testid="button-agendar-featured">
                <Button className="rounded-none bg-primary text-black font-condensed font-bold tracking-widest px-10 h-14 text-lg hover:scale-105 transition-transform duration-300">
                  AGENDAR COMBO SIGNATURE
                </Button>
              </Link>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="aspect-[4/5] bg-card border border-white/10 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80')",
                  }}
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-primary p-5 hidden md:block">
                <span className="font-display text-4xl text-black">75</span>
                <span className="font-condensed text-black text-xs tracking-widest block">MINUTOS</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-14"
          >
            <span className="font-condensed text-primary tracking-[0.3em] text-xs uppercase">
              CATÁLOGO COMPLETO
            </span>
            <h2 className="font-display text-5xl md:text-6xl text-white mt-1">
              TODOS OS SERVIÇOS
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  custom={index % 2}
                  variants={fadeUp}
                  className="bg-card border border-card-border p-8 flex flex-col group hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_0_20px_rgba(231,254,0,0.1)] transition-all duration-300"
                  data-testid={`card-service-full-${index}`}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-black border border-white/10 group-hover:border-primary/30 transition-colors">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display text-2xl text-white">{service.title}</h3>
                        <span className="font-condensed text-gray-500 tracking-widest text-xs uppercase flex items-center gap-1 mt-0.5">
                          <Clock className="w-3 h-3" /> {service.duration}
                        </span>
                      </div>
                    </div>
                    <span className="font-display text-3xl text-primary shrink-0">{service.price}</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-7 flex-grow">
                    {service.description}
                  </p>
                  <Link href="/agendamento" data-testid={`button-agendar-full-${index}`}>
                    <Button className="w-full rounded-none bg-transparent border border-white/20 text-white hover:bg-primary hover:text-black hover:border-primary font-condensed tracking-widest transition-colors duration-300">
                      AGENDAR
                    </Button>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
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
              COMO FUNCIONA
            </span>
            <h2 className="font-display text-5xl md:text-6xl text-white mt-1">
              NOSSO PROCESSO
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                variants={fadeUp}
                className="relative"
                data-testid={`step-${index}`}
              >
                <span className="font-display text-8xl text-white/5 absolute -top-4 -left-2 select-none">
                  {step.number}
                </span>
                <div className="relative pt-8">
                  <span className="font-display text-2xl text-primary">{step.number}</span>
                  <h3 className="font-display text-3xl text-white mt-2 mb-3">{step.title}</h3>
                  <div className="w-12 h-0.5 bg-primary mb-4" />
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#0a0a0a] border-t border-white/10">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-14"
          >
            <span className="font-condensed text-primary tracking-[0.3em] text-xs uppercase">
              DÚVIDAS FREQUENTES
            </span>
            <h2 className="font-display text-5xl md:text-6xl text-white mt-1">FAQ</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="border border-white/10 px-6 bg-card data-[state=open]:border-primary/40"
                  data-testid={`faq-item-${index}`}
                >
                  <AccordionTrigger className="font-condensed text-white hover:text-primary tracking-wide text-left py-5 hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 text-sm leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
