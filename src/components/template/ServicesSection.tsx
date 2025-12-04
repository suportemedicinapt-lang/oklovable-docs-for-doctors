import { ArrowRight, Dna, FileSearch, Microscope, Stethoscope, Users, Baby } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: Dna,
      title: "[Serviço 1]",
      description: "[Descrição detalhada do serviço. Ex: Aconselhamento genético para casais que planejam ter filhos, avaliando riscos hereditários.]",
      features: ["[Característica 1]", "[Característica 2]", "[Característica 3]"],
    },
    {
      icon: FileSearch,
      title: "[Serviço 2]",
      description: "[Descrição do serviço. Ex: Investigação de doenças genéticas raras com análise completa do histórico familiar.]",
      features: ["[Característica 1]", "[Característica 2]", "[Característica 3]"],
    },
    {
      icon: Microscope,
      title: "[Serviço 3]",
      description: "[Descrição do serviço. Ex: Interpretação de exames genéticos e orientação sobre resultados.]",
      features: ["[Característica 1]", "[Característica 2]", "[Característica 3]"],
    },
    {
      icon: Baby,
      title: "[Serviço 4]",
      description: "[Descrição do serviço. Ex: Acompanhamento pré-natal de gestações de risco genético.]",
      features: ["[Característica 1]", "[Característica 2]", "[Característica 3]"],
    },
    {
      icon: Stethoscope,
      title: "[Serviço 5]",
      description: "[Descrição do serviço. Ex: Segunda opinião médica em casos de diagnósticos genéticos complexos.]",
      features: ["[Característica 1]", "[Característica 2]", "[Característica 3]"],
    },
    {
      icon: Users,
      title: "[Serviço 6]",
      description: "[Descrição do serviço. Ex: Acompanhamento familiar de condições genéticas hereditárias.]",
      features: ["[Característica 1]", "[Característica 2]", "[Característica 3]"],
    },
  ];

  return (
    <section id="servicos" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <span className="text-accent font-body font-semibold text-sm uppercase tracking-wider">
            Áreas de Atuação
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            [Título da Seção de Serviços]
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            [Descrição geral dos seus serviços. Ex: "Ofereço atendimento especializado 
            em diversas áreas da genética médica, sempre com foco no cuidado humanizado 
            e nas necessidades individuais de cada paciente."]
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-card rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 animate-fade-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-hero-gradient rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-body mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground font-body">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <a
                href="#contato"
                className="inline-flex items-center gap-2 text-accent font-body font-medium text-sm group-hover:gap-3 transition-all duration-300"
              >
                Saiba mais
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in-up animation-delay-500">
          <p className="text-muted-foreground font-body mb-6">
            [Texto chamativo para ação. Ex: "Não encontrou o que procura? Entre em contato para saber mais."]
          </p>
          <Button variant="accent" size="xl">
            Agendar Consulta
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
