import { GraduationCap, Award, Building, BookOpen } from "lucide-react";

const CredentialsSection = () => {
  const education = [
    {
      year: "[Ano]",
      title: "[Graduação em Medicina]",
      institution: "[Nome da Universidade]",
      description: "[Descrição opcional, ex: Formação com ênfase em...]",
    },
    {
      year: "[Ano]",
      title: "[Residência em Genética Médica]",
      institution: "[Hospital/Instituição]",
      description: "[Descrição opcional]",
    },
    {
      year: "[Ano]",
      title: "[Especialização/Mestrado/Doutorado]",
      institution: "[Instituição]",
      description: "[Área de pesquisa ou especialização]",
    },
    {
      year: "[Ano]",
      title: "[Outro curso relevante]",
      institution: "[Instituição]",
      description: "[Descrição]",
    },
  ];

  const certifications = [
    {
      icon: Award,
      title: "[Título da Certificação]",
      issuer: "[Órgão emissor]",
    },
    {
      icon: Building,
      title: "[Membro de Sociedade]",
      issuer: "[Nome da sociedade médica]",
    },
    {
      icon: BookOpen,
      title: "[Publicações]",
      issuer: "[X] artigos publicados",
    },
    {
      icon: GraduationCap,
      title: "[Título Adicional]",
      issuer: "[Instituição]",
    },
  ];

  return (
    <section id="formacao" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <span className="text-accent font-body font-semibold text-sm uppercase tracking-wider">
            Formação & Qualificações
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            [Título da Seção de Formação]
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            [Descrição sobre sua formação. Ex: "Minha trajetória acadêmica e profissional 
            é marcada pela busca constante por conhecimento e excelência no cuidado ao paciente."]
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div className="animate-fade-in-left">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-accent" />
              Formação Acadêmica
            </h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
              
              {/* Timeline items */}
              <div className="space-y-8">
                {education.map((item, index) => (
                  <div
                    key={index}
                    className="relative pl-12"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 w-8 h-8 bg-hero-gradient rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-primary-foreground rounded-full" />
                    </div>
                    
                    {/* Content */}
                    <div className="bg-card rounded-xl p-6 card-shadow">
                      <span className="text-accent font-body font-semibold text-sm">
                        {item.year}
                      </span>
                      <h4 className="font-display font-semibold text-foreground mt-1 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground font-body text-sm mb-2">
                        {item.institution}
                      </p>
                      <p className="text-muted-foreground/80 font-body text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="animate-fade-in-right">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-8 flex items-center gap-3">
              <Award className="w-6 h-6 text-accent" />
              Certificações & Títulos
            </h3>
            
            <div className="grid gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 flex items-start gap-4"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <cert.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground">
                      {cert.title}
                    </h4>
                    <p className="text-muted-foreground font-body text-sm">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-6 bg-secondary/50 rounded-xl border border-border">
              <h4 className="font-display font-semibold text-foreground mb-3">
                [Informações Adicionais]
              </h4>
              <ul className="space-y-2 text-muted-foreground font-body text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  [Registro CRM: XXXXX/UF]
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  [RQE: XXXXX - Genética Médica]
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  [Outras informações relevantes]
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;
