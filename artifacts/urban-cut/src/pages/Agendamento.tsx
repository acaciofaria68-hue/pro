import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { SiWhatsapp } from "react-icons/si";
import { Calendar, Clock, User, Scissors, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import team1 from "@/assets/team-1.png";
import team2 from "@/assets/team-2.png";

const WA_NUMBER = "258834751328";

const barbers = [
  {
    id: "mario",
    name: "Mário Macuácua",
    title: "Head Barber",
    specialty: "Fade & Visagismo",
    img: team1,
  },
  {
    id: "jonas",
    name: "Jonas Sitoe",
    title: "Senior Barber",
    specialty: "Barba Artesanal",
    img: team2,
  },
  {
    id: "celso",
    name: "Celso Nhambiu",
    title: "Barber",
    specialty: "Cortes Texturizados",
    img: team1,
  },
];

const services = [
  { id: "corte-urban", title: "Corte Urban", duration: "45 min", price: "500 MT" },
  { id: "barba", title: "Barba de Respeito", duration: "30 min", price: "350 MT" },
  { id: "combo", title: "Combo Signature", duration: "75 min", price: "750 MT" },
  { id: "pigmentacao", title: "Pigmentação de Barba", duration: "40 min", price: "500 MT" },
  { id: "hidratacao", title: "Hidratação Capilar", duration: "30 min", price: "400 MT" },
  { id: "sobrancelha", title: "Sobrancelha no Fio", duration: "15 min", price: "200 MT" },
];

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30", "18:00", "18:30",
];

export function Agendamento() {
  const { toast } = useToast();

  const [selectedBarber, setSelectedBarber] = useState<string>("");
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [obs, setObs] = useState("");

  const barber = barbers.find((b) => b.id === selectedBarber);
  const service = services.find((s) => s.id === selectedService);

  const isComplete =
    selectedBarber && selectedService && selectedDate && selectedTime && nome.trim().length >= 2 && telefone.trim().length >= 8;

  function formatDate(raw: string) {
    if (!raw) return "";
    const [y, m, d] = raw.split("-");
    return `${d}/${m}/${y}`;
  }

  function buildWhatsAppMessage() {
    const lines = [
      "Olá! Quero agendar um horário na *Urban Cut* 🔥",
      "",
      `*Nome:* ${nome}`,
      `*Telefone:* ${telefone}`,
      `*Barbeiro:* ${barber?.name ?? ""}`,
      `*Serviço:* ${service?.title ?? ""} (${service?.price ?? ""})`,
      `*Data:* ${formatDate(selectedDate)}`,
      `*Hora:* ${selectedTime}`,
      obs ? `*Observações:* ${obs}` : "",
    ]
      .filter((l) => l !== undefined)
      .join("\n");
    return encodeURIComponent(lines);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!isComplete) {
      toast({
        title: "Preencha todos os campos",
        description: "Selecione barbeiro, serviço, data, horário, nome e telefone.",
        variant: "destructive",
      });
      return;
    }

    const url = `https://wa.me/${WA_NUMBER}?text=${buildWhatsAppMessage()}`;
    window.open(url, "_blank", "noopener,noreferrer");

    toast({
      title: "A abrir WhatsApp...",
      description: "Confirme o agendamento na conversa com a Urban Cut.",
    });
  }

  const today = new Date().toISOString().split("T")[0];

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
            AGENDAR<br />HORÁRIO
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-400 max-w-xl mt-6 leading-relaxed"
          >
            Escolhe o teu barbeiro, serviço e horário — depois envia direto pelo WhatsApp.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <form onSubmit={handleSubmit} className="space-y-14">

            {/* Step 1: Barber */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary">
                  <User className="w-4 h-4 text-black" />
                </div>
                <span className="font-condensed text-white tracking-[0.25em] text-sm uppercase">
                  1. Escolhe o Barbeiro
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {barbers.map((b) => {
                  const active = selectedBarber === b.id;
                  return (
                    <button
                      key={b.id}
                      type="button"
                      onClick={() => setSelectedBarber(b.id)}
                      className={`relative text-left border transition-all duration-200 overflow-hidden group ${
                        active
                          ? "border-primary shadow-[0_0_20px_rgba(231,254,0,0.2)]"
                          : "border-white/10 hover:border-white/30"
                      }`}
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={b.img}
                          alt={b.name}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                        {active && (
                          <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                            <CheckCircle2 className="w-10 h-10 text-primary drop-shadow-lg" />
                          </div>
                        )}
                      </div>
                      <div className={`p-4 ${active ? "bg-primary/10" : "bg-card"}`}>
                        <h3 className="font-display text-lg text-white">{b.name}</h3>
                        <span className="font-condensed text-primary tracking-widest text-xs uppercase">
                          {b.title}
                        </span>
                        <p className="text-gray-500 text-xs mt-1">{b.specialty}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>

            {/* Step 2: Service */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary">
                  <Scissors className="w-4 h-4 text-black" />
                </div>
                <span className="font-condensed text-white tracking-[0.25em] text-sm uppercase">
                  2. Escolhe o Serviço
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {services.map((s) => {
                  const active = selectedService === s.id;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSelectedService(s.id)}
                      className={`p-5 text-left border transition-all duration-200 ${
                        active
                          ? "border-primary bg-primary/10 shadow-[0_0_16px_rgba(231,254,0,0.15)]"
                          : "border-white/10 bg-card hover:border-white/30"
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-display text-lg text-white leading-tight">{s.title}</h4>
                        {active && <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />}
                      </div>
                      <span className="font-display text-xl text-primary">{s.price}</span>
                      <p className="font-condensed text-gray-500 tracking-widest text-xs uppercase mt-1">
                        {s.duration}
                      </p>
                    </button>
                  );
                })}
              </div>
            </motion.div>

            {/* Step 3: Date & Time */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={fadeUp}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary">
                  <Calendar className="w-4 h-4 text-black" />
                </div>
                <span className="font-condensed text-white tracking-[0.25em] text-sm uppercase">
                  3. Data & Horário
                </span>
              </div>

              <div className="mb-6">
                <Label className="font-condensed text-white tracking-widest text-xs uppercase mb-2 block">
                  Data
                </Label>
                <input
                  type="date"
                  min={today}
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="h-12 px-4 bg-card border border-white/20 focus:border-primary text-white rounded-none w-full sm:w-64 outline-none transition-colors duration-200 [color-scheme:dark]"
                />
              </div>

              <div>
                <Label className="font-condensed text-white tracking-widest text-xs uppercase mb-3 block">
                  Horário
                </Label>
                <div className="flex flex-wrap gap-2">
                  {timeSlots.map((t) => {
                    const active = selectedTime === t;
                    return (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setSelectedTime(t)}
                        className={`font-condensed text-sm tracking-wide px-4 py-2.5 border transition-all duration-200 ${
                          active
                            ? "bg-primary text-black border-primary font-bold"
                            : "bg-card text-gray-300 border-white/10 hover:border-primary hover:text-white"
                        }`}
                      >
                        {t}
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Step 4: Personal Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
              variants={fadeUp}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary">
                  <Clock className="w-4 h-4 text-black" />
                </div>
                <span className="font-condensed text-white tracking-[0.25em] text-sm uppercase">
                  4. Os Teus Dados
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <Label className="font-condensed text-white tracking-widest text-xs uppercase mb-2 block">
                    Nome Completo
                  </Label>
                  <Input
                    placeholder="O teu nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="rounded-none bg-card border-white/20 focus:border-primary text-white placeholder:text-gray-600 h-12"
                  />
                </div>
                <div>
                  <Label className="font-condensed text-white tracking-widest text-xs uppercase mb-2 block">
                    Telefone / WhatsApp
                  </Label>
                  <Input
                    placeholder="+258 84 000 0000"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    className="rounded-none bg-card border-white/20 focus:border-primary text-white placeholder:text-gray-600 h-12"
                  />
                </div>
              </div>
              <div>
                <Label className="font-condensed text-white tracking-widest text-xs uppercase mb-2 block">
                  Observações (opcional)
                </Label>
                <textarea
                  placeholder="Algum detalhe sobre o corte que desejas..."
                  value={obs}
                  onChange={(e) => setObs(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 rounded-none bg-card border border-white/20 focus:border-primary text-white placeholder:text-gray-600 resize-none outline-none transition-colors duration-200"
                />
              </div>
            </motion.div>

            {/* Summary & Submit */}
            {isComplete && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-card border border-primary/30 p-6 space-y-3"
              >
                <span className="font-condensed text-primary tracking-[0.3em] text-xs uppercase block mb-4">
                  RESUMO DO AGENDAMENTO
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500 font-condensed tracking-wide text-xs uppercase">Barbeiro</p>
                    <p className="text-white font-medium mt-0.5">{barber?.name}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 font-condensed tracking-wide text-xs uppercase">Serviço</p>
                    <p className="text-white font-medium mt-0.5">{service?.title}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 font-condensed tracking-wide text-xs uppercase">Preço</p>
                    <p className="text-primary font-display text-xl mt-0.5">{service?.price}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 font-condensed tracking-wide text-xs uppercase">Data</p>
                    <p className="text-white font-medium mt-0.5">{formatDate(selectedDate)}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 font-condensed tracking-wide text-xs uppercase">Hora</p>
                    <p className="text-white font-medium mt-0.5">{selectedTime}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 font-condensed tracking-wide text-xs uppercase">Nome</p>
                    <p className="text-white font-medium mt-0.5">{nome}</p>
                  </div>
                </div>
              </motion.div>
            )}

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={4}
              variants={fadeUp}
            >
              <Button
                type="submit"
                className="w-full rounded-none bg-primary text-black font-condensed font-bold tracking-widest text-lg h-16 hover:scale-[1.02] transition-transform duration-300 flex items-center justify-center gap-3 animate-pulse-glow"
              >
                <SiWhatsapp size={22} />
                AGENDAR E ENVIAR VIA WHATSAPP
              </Button>
              <p className="text-center text-gray-600 text-xs mt-3 font-condensed tracking-wide">
                Ao clicar, será aberto o WhatsApp com a tua reserva já formatada.
              </p>
            </motion.div>

          </form>
        </div>
      </section>
    </Layout>
  );
}
