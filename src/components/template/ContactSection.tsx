import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Instagram, Linkedin, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content: "[Endereço completo do consultório]",
      subContent: "[Bairro, Cidade - UF, CEP]",
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "[Telefone fixo]",
      subContent: "[WhatsApp]",
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "[seu@email.com]",
      subContent: "[email secundário opcional]",
    },
    {
      icon: Clock,
      title: "Horário de Atendimento",
      content: "[Segunda a Sexta: XX:00 - XX:00]",
      subContent: "[Sábado: XX:00 - XX:00]",
    },
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: MessageCircle, href: "#", label: "WhatsApp" },
  ];

  return (
    <section id="contato" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <span className="text-accent font-body font-semibold text-sm uppercase tracking-wider">
            Contato
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            [Agende Sua Consulta]
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            [Texto convidativo para agendamento. Ex: "Entre em contato para agendar 
            sua consulta ou tirar dúvidas. Estou à disposição para ajudá-lo."]
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fade-in-left">
            <div className="bg-card rounded-2xl p-8 card-shadow">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                Envie uma Mensagem
              </h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-body font-medium text-foreground mb-2">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      placeholder="[Seu nome]"
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-body font-medium text-foreground mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      placeholder="[(XX) XXXXX-XXXX]"
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-body font-medium text-foreground mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    placeholder="[seu@email.com]"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-body font-medium text-foreground mb-2">
                    Assunto
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-ring transition-all">
                    <option value="">[Selecione o assunto]</option>
                    <option value="consulta">[Agendar Consulta]</option>
                    <option value="duvida">[Tirar Dúvidas]</option>
                    <option value="retorno">[Retorno]</option>
                    <option value="outro">[Outro]</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-body font-medium text-foreground mb-2">
                    Mensagem
                  </label>
                  <textarea
                    rows={4}
                    placeholder="[Escreva sua mensagem...]"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none"
                  />
                </div>

                <Button variant="default" size="xl" className="w-full">
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-right">
            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-4">
                    <info.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="font-display font-semibold text-foreground mb-1">
                    {info.title}
                  </h4>
                  <p className="text-muted-foreground font-body text-sm">
                    {info.content}
                  </p>
                  <p className="text-muted-foreground/80 font-body text-sm">
                    {info.subContent}
                  </p>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="bg-card rounded-xl overflow-hidden card-shadow">
              <div className="aspect-video bg-secondary flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
                  <p className="text-muted-foreground font-body">
                    [Incorpore aqui o mapa do Google Maps do seu consultório]
                  </p>
                  <p className="text-muted-foreground/60 font-body text-sm mt-2">
                    (Use o código de incorporação do Google Maps)
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-secondary/50 rounded-xl p-6">
              <p className="font-display font-semibold text-foreground mb-4">
                Siga nas redes sociais
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 bg-card rounded-xl flex items-center justify-center card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5 text-accent" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
