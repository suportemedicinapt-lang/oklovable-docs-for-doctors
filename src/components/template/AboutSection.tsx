import { Award, BookOpen, Heart, Users } from "lucide-react";
import dnaDecoration from "@/assets/dna-decoration.png";

const AboutSection = () => {
  const highlights = [
    {
      icon: Award,
      title: "[Sua Especialização]",
      description: "[Descreva sua principal especialização ou área de atuação]",
    },
    {
      icon: Users,
      title: "[Abordagem]",
      description: "[Descreva como você aborda o atendimento ao paciente]",
    },
    {
      icon: Heart,
      title: "[Diferencial]",
      description: "[O que te diferencia como profissional]",
    },
    {
      icon: BookOpen,
      title: "[Compromisso]",
      description: "[Seu compromisso com os pacientes e a medicina]",
    },
  ];

  return (
    <section id="sobre" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative DNA */}
      <img 
        src={dnaDecoration} 
        alt="" 
        className="absolute top-10 right-0 w-64 opacity-10 animate-pulse-soft"
      />
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in-up">
            <span className="text-accent font-body font-semibold text-sm uppercase tracking-wider">
              Sobre Mim
            </span>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              [Título da Seção Sobre Você]
            </h2>
            
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>
                [Parágrafo 1: Conte sua história profissional. Como você se tornou 
                médico geneticista? O que te motivou a escolher essa especialidade?]
              </p>
              <p>
                [Parágrafo 2: Fale sobre sua filosofia de atendimento. Como você 
                conduz suas consultas? Qual é sua abordagem com os pacientes?]
              </p>
              <p>
                [Parágrafo 3: Mencione suas áreas de maior interesse dentro da 
                genética médica e como isso beneficia seus pacientes.]
              </p>
            </div>

            {/* Quote */}
            <blockquote className="border-l-4 border-accent pl-6 py-4 bg-secondary/50 rounded-r-lg">
              <p className="font-display text-lg italic text-foreground">
                "[Insira aqui uma frase marcante sua ou que te representa como profissional]"
              </p>
            </blockquote>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className={`bg-card rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 animate-fade-in-up animation-delay-${(index + 1) * 100}`}
              >
                <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
