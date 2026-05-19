import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { Crosshair, Headphones, Star } from "lucide-react";
import { Layout } from "@/components/Layout";
import storyBarber from "@/assets/story-barber.png";
import team1 from "@/assets/team-1.png";
import team2 from "@/assets/team-2.png";

const values = [
  {
    icon: Crosshair,
    title: "Precisão",
    desc: "Cada detalhe importa. Da navalha ao acabamento, zero tolerância ao desleixo. Milímetros definem a diferença entre bom e perfeito.",
  },
  {
    icon: Headphones,
    title: "Cultura",
    desc: "Somos uma extensão da cena urbana. Música, arte e identidade em cada corte. O ambiente é parte do serviço.",
  },
  {
    icon: Star,
    title: "Experiência",
    desc: "Mais que um serviço, um ritual. Do agendamento à finalização, cada etapa foi pensada para você sair melhor do que entrou.",
  },
];

const team = [
  {
    name: "Marcus Silva",
    title: "Head Barber",
    specialty: "Fade & Visagismo",
    img: team1,
    bio: "8 anos de experiência. Referência em fade degradê e consultoria de imagem masculina.",
  },
  {
    name: "André Costa",
    title: "Senior Barber",
    specialty: "Barba Artesanal & Pigmentação",
    img: team2,
    bio: "Especialista em barba e pigmentação. Transforma fios brancos em estilo com técnica avançada.",
  },
  {
    name: "Felipe Lima",
    title: "Barber",
    specialty: "Cortes Texturizados & Undercut",
    img: team1,
    bio: "A visão mais jovem da equipe. Especialista em cortes texturizados modernos e undercuts.",
  },
];

const stats = [
  { value: "8+", label: "Anos de Experiência" },
  { value: "2.4K+", label: "Clientes Atendidos" },
  { value: "4.9", label: "Estrelas no Google" },
  { value: "3", label: "Barbeiros Especialistas" },
];


export function Sobre() {
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
            Urban Cut · Desde 2016
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-7xl md:text-9xl text-white mt-2 leading-none"
          >
            NOSSA<br />HISTÓRIA
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-400 max-w-xl mt-6 leading-relaxed"
          >
            Uma barbearia fundada na cultura, aperfeiçoada na técnica — e
            obcecada com cada detalhe da sua experiência.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative"
            >
              <div className="aspect-[3/4] overflow-hidden border border-white/10">
                <img
                  src={storyBarber}
                  alt="Barbeiro Urban Cut"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-primary p-6 hidden md:block">
                <span className="font-display text-5xl text-black leading-none">2016</span>
                <span className="font-condensed text-black text-xs tracking-widest block mt-1">FUNDAÇÃO</span>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
            >
              <span className="font-condensed text-primary tracking-[0.3em] text-xs uppercase">
                NOSSA HISTÓRIA
              </span>
              <h2 className="font-display text-5xl md:text-6xl text-white mt-2 mb-8">
                MAIS QUE UMA<br />BARBEARIA
              </h2>
              <div className="space-y-5 text-gray-400 leading-relaxed">
                <p>
                  A Urban Cut nasceu em 2016 da visão de três barbeiros
                  apaixonados por cultura urbana e técnica de precisão. O que
                  começou como um pequeno espaço na Rua Augusta se tornou
                  referência em São Paulo para quem busca mais do que um simples
                  corte — uma experiência completa.
                </p>
                <p>
                  Acreditamos que um bom corte vai além da navalha. É uma
                  conversa, uma consultoria, um ritual. Por isso, cada
                  profissional da Urban Cut é treinado não apenas em técnica,
                  mas em visagismo, cultura e atendimento personalizado.
                </p>
                <p>
                  Nossa missão é simples: fazer você sair da cadeira se
                  sentindo a melhor versão de si mesmo. Sem apressar, sem
                  desleixar — do primeiro corte ao combo completo.
                </p>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-6">
                <div className="border-l-2 border-primary pl-5">
                  <span className="font-display text-4xl text-primary">2016</span>
                  <span className="font-condensed text-gray-500 tracking-widest text-xs block mt-1">ABERTURA</span>
                </div>
                <div className="border-l-2 border-white/20 pl-5">
                  <span className="font-display text-4xl text-white">3</span>
                  <span className="font-condensed text-gray-500 tracking-widest text-xs block mt-1">PROFISSIONAIS</span>
                </div>
                <div className="border-l-2 border-white/20 pl-5">
                  <span className="font-display text-4xl text-white">1</span>
                  <span className="font-condensed text-gray-500 tracking-widest text-xs block mt-1">ESPAÇO ÚNICO</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#0a0a0a] border-y border-white/10">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-14"
          >
            <span className="font-condensed text-primary tracking-[0.3em] text-xs uppercase">
              NOSSOS PILARES
            </span>
            <h2 className="font-display text-5xl md:text-6xl text-white mt-1">
              O QUE NOS MOVE
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index}
                  variants={fadeUp}
                  className="bg-card border border-card-border p-8 hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
                  data-testid={`value-card-${index}`}
                >
                  <div className="p-3 bg-black border border-white/10 w-fit mb-6">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-3xl text-white mb-3">{value.title}</h3>
                  <div className="w-8 h-0.5 bg-primary mb-4" />
                  <p className="text-gray-400 text-sm leading-relaxed">{value.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
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
              QUEM FAZ ACONTECER
            </span>
            <h2 className="font-display text-5xl md:text-6xl text-white mt-1">
              NOSSA EQUIPE
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                variants={fadeUp}
                className="group"
                data-testid={`team-card-${index}`}
              >
                <div className="relative overflow-hidden mb-5 border border-white/10 group-hover:border-primary/40 transition-colors duration-300">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full aspect-[3/4] object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div>
                  <h3 className="font-display text-2xl text-white">{member.name}</h3>
                  <span className="font-condensed text-primary tracking-widest text-xs uppercase">
                    {member.title}
                  </span>
                  <p className="text-gray-500 text-xs mt-1 mb-3 font-condensed tracking-wide">
                    Especialidade: {member.specialty}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-black border-t border-white/10 py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/10">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="flex flex-col items-center text-center py-6"
                data-testid={`about-stat-${i}`}
              >
                <span className="font-display text-5xl text-primary">{stat.value}</span>
                <span className="font-condensed text-gray-500 tracking-widest text-xs uppercase mt-2">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
