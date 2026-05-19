import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { MapPin, Clock, Phone, Mail, ChevronRight } from "lucide-react";
import { SiInstagram, SiTiktok, SiWhatsapp } from "react-icons/si";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  nome: z.string().min(2, "Informe seu nome completo"),
  telefone: z.string().min(8, "Informe um telefone válido"),
  servico: z.string().min(1, "Selecione um serviço"),
  mensagem: z.string().min(5, "Escreva sua mensagem"),
});

type ContactForm = z.infer<typeof contactSchema>;

const hours = [
  { day: "Seg – Sex", time: "10h às 21h" },
  { day: "Sábado", time: "09h às 21h" },
  { day: "Domingo", time: "11h às 18h" },
];

const faqs = [
  {
    q: "Posso agendar pelo WhatsApp?",
    a: "Sim! É o nosso canal principal. Resposta em até 30 minutos.",
  },
  {
    q: "Aceitam pagamento por PIX?",
    a: "Aceitamos PIX, cartão de débito/crédito e dinheiro.",
  },
];


export function Contato() {
  const { toast } = useToast();

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      nome: "",
      telefone: "",
      servico: "",
      mensagem: "",
    },
  });

  function onSubmit(_data: ContactForm) {
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve. Obrigado!",
    });
    form.reset();
  }

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
            FALE COM<br />A GENTE
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-400 max-w-xl mt-6 leading-relaxed"
          >
            Agende seu horário ou tire suas dúvidas — estamos prontos para
            te atender do jeito Urban Cut.
          </motion.p>
        </div>
      </section>

      {/* Two-column contact section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left: Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="space-y-8"
            >
              {/* WhatsApp CTA */}
              <div>
                <span className="font-condensed text-primary tracking-[0.3em] text-xs uppercase mb-4 block">
                  CANAL PRINCIPAL
                </span>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="button-whatsapp-contato"
                >
                  <Button className="w-full rounded-none bg-primary text-black font-condensed font-bold tracking-widest text-lg h-16 hover:scale-[1.02] transition-transform duration-300 flex items-center gap-3">
                    <SiWhatsapp size={22} />
                    AGENDAR VIA WHATSAPP
                  </Button>
                </a>
              </div>

              {/* Contact details */}
              <div className="space-y-5">
                <span className="font-condensed text-primary tracking-[0.3em] text-xs uppercase block">
                  INFORMAÇÕES DE CONTATO
                </span>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm">
                    <div className="p-2.5 bg-card border border-white/10 shrink-0">
                      <Phone className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-gray-300">(11) 9 9999-9999</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="p-2.5 bg-card border border-white/10 shrink-0">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-gray-300">contato@urbancut.com.br</span>
                  </div>
                  <div className="flex items-start gap-4 text-sm">
                    <div className="p-2.5 bg-card border border-white/10 shrink-0">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <a
                      href="https://maps.google.com/?q=Rua+Augusta,+1500,+São+Paulo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-primary transition-colors"
                      data-testid="link-maps-contato"
                    >
                      Rua Augusta, 1500<br />Consolação, São Paulo – SP
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div>
                <span className="font-condensed text-primary tracking-[0.3em] text-xs uppercase block mb-4">
                  HORÁRIOS
                </span>
                <div className="bg-card border border-white/10 divide-y divide-white/10">
                  {hours.map((h, i) => (
                    <div key={i} className="flex items-center justify-between px-5 py-3">
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-primary" />
                        <span className="font-condensed text-white text-sm tracking-wide">{h.day}</span>
                      </div>
                      <span className="text-gray-400 text-sm">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Socials */}
              <div>
                <span className="font-condensed text-primary tracking-[0.3em] text-xs uppercase block mb-4">
                  REDES SOCIAIS
                </span>
                <div className="flex gap-3">
                  <a
                    href="#"
                    data-testid="link-instagram-contato"
                    className="flex items-center gap-2 px-4 py-3 bg-card border border-white/10 text-white hover:border-primary hover:text-primary transition-colors duration-300"
                  >
                    <SiInstagram size={16} />
                    <span className="font-condensed text-xs tracking-widest">@URBANCUT</span>
                  </a>
                  <a
                    href="#"
                    data-testid="link-tiktok-contato"
                    className="flex items-center gap-2 px-4 py-3 bg-card border border-white/10 text-white hover:border-primary hover:text-primary transition-colors duration-300"
                  >
                    <SiTiktok size={16} />
                    <span className="font-condensed text-xs tracking-widest">@URBANCUT</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right: Map Placeholder */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
            >
              <span className="font-condensed text-primary tracking-[0.3em] text-xs uppercase block mb-4">
                LOCALIZAÇÃO
              </span>
              <div
                className="relative border border-white/10 hover:border-primary/40 transition-colors duration-300 overflow-hidden"
                style={{ minHeight: 360 }}
              >
                {/* Grid pattern map background */}
                <div
                  className="absolute inset-0 bg-card"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 p-8">
                  <div className="p-5 bg-black border border-primary/40">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-center">
                    <h4 className="font-display text-2xl text-white mb-1">URBAN CUT</h4>
                    <p className="text-gray-400 text-sm">Rua Augusta, 1500 · Consolação</p>
                    <p className="text-gray-400 text-sm">São Paulo – SP</p>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Rua+Augusta,+1500,+São+Paulo"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="button-open-maps"
                  >
                    <Button className="rounded-none bg-transparent border border-primary text-primary font-condensed tracking-widest hover:bg-primary hover:text-black transition-colors duration-300 flex items-center gap-2">
                      ABRIR NO GOOGLE MAPS
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-[#0a0a0a] border-t border-white/10">
        <div className="container mx-auto px-4 md:px-8 max-w-2xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-12"
          >
            <span className="font-condensed text-primary tracking-[0.3em] text-xs uppercase">
              MENSAGEM DIRETA
            </span>
            <h2 className="font-display text-5xl md:text-6xl text-white mt-1">
              ENVIE UMA<br />MENSAGEM
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
          >
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
                data-testid="form-contact"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="nome"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-condensed text-white tracking-widest text-xs uppercase">
                          Nome
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Seu nome completo"
                            {...field}
                            className="rounded-none bg-card border-white/20 focus:border-primary text-white placeholder:text-gray-600 h-12"
                            data-testid="input-nome"
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="telefone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-condensed text-white tracking-widest text-xs uppercase">
                          Telefone
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="(11) 9 0000-0000"
                            {...field}
                            className="rounded-none bg-card border-white/20 focus:border-primary text-white placeholder:text-gray-600 h-12"
                            data-testid="input-telefone"
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="servico"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-condensed text-white tracking-widest text-xs uppercase">
                        Serviço Desejado
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger
                            className="rounded-none bg-card border-white/20 focus:border-primary text-white h-12"
                            data-testid="select-servico"
                          >
                            <SelectValue placeholder="Selecione um serviço" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-card border-white/20">
                          <SelectItem value="corte-urban">Corte Urban – R$ 55</SelectItem>
                          <SelectItem value="barba">Barba de Respeito – R$ 40</SelectItem>
                          <SelectItem value="combo-signature">Combo Signature – R$ 85</SelectItem>
                          <SelectItem value="pigmentacao">Pigmentação de Barba – R$ 60</SelectItem>
                          <SelectItem value="hidratacao">Hidratação Capilar – R$ 50</SelectItem>
                          <SelectItem value="sobrancelha">Sobrancelha no Fio – R$ 25</SelectItem>
                          <SelectItem value="outro">Outro</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="mensagem"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-condensed text-white tracking-widest text-xs uppercase">
                        Mensagem
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Conte um pouco sobre o que você precisa..."
                          {...field}
                          rows={5}
                          className="rounded-none bg-card border-white/20 focus:border-primary text-white placeholder:text-gray-600 resize-none"
                          data-testid="textarea-mensagem"
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full rounded-none bg-primary text-black font-condensed font-bold tracking-widest text-base h-14 hover:scale-[1.02] transition-transform duration-300"
                  data-testid="button-submit-form"
                >
                  ENVIAR MENSAGEM
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </section>

      {/* Quick FAQ */}
      <section className="py-16 bg-background border-t border-white/10">
        <div className="container mx-auto px-4 md:px-8 max-w-2xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                variants={fadeUp}
                className="flex items-start gap-4 p-6 bg-card border border-white/10"
                data-testid={`faq-contato-${index}`}
              >
                <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-condensed text-white tracking-wide text-sm">{faq.q}</p>
                  <p className="text-gray-400 text-sm mt-1 leading-relaxed">{faq.a}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
