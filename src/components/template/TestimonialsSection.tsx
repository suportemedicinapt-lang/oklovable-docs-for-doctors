import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "[Nome do Paciente 1]",
      role: "[Tipo de atendimento, ex: Aconselhamento Genético]",
      content: "[Depoimento do paciente. Ex: 'A Dra. [Nome] foi fundamental no meu processo de investigação genética. Sua atenção aos detalhes e cuidado humanizado fizeram toda a diferença.']",
      rating: 5,
    },
    {
      name: "[Nome do Paciente 2]",
      role: "[Tipo de atendimento]",
      content: "[Depoimento do paciente. Ex: 'Profissional extremamente competente e acolhedora. Explicou cada etapa do processo de forma clara e me deixou muito mais tranquila.']",
      rating: 5,
    },
    {
      name: "[Nome do Paciente 3]",
      role: "[Tipo de atendimento]",
      content: "[Depoimento do paciente. Ex: 'Excelente médica! Muito atenciosa e dedicada. Recomendo a todos que precisam de acompanhamento em genética médica.']",
      rating: 5,
    },
  ];

  return (
    <section id="depoimentos" className="py-20 md:py-32 bg-hero-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 dna-pattern opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <span className="text-primary-foreground/80 font-body font-semibold text-sm uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mt-4 mb-6">
            [O Que Dizem Sobre Mim]
          </h2>
          <p className="text-primary-foreground/80 font-body text-lg">
            [Descrição opcional. Ex: "A satisfação dos meus pacientes é o que me motiva 
            a continuar oferecendo um atendimento de excelência."]
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 card-shadow animate-fade-in-up relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                  <Quote className="w-5 h-5 text-accent-foreground" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground font-body leading-relaxed mb-6">
                {testimonial.content}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <span className="font-display font-semibold text-foreground">
                    {testimonial.name.charAt(1)}
                  </span>
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-muted-foreground font-body text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 text-center animate-fade-in-up animation-delay-500">
          <p className="text-primary-foreground/60 font-body text-sm mb-6 uppercase tracking-wider">
            [Avaliações em outras plataformas]
          </p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="bg-primary-foreground/10 rounded-xl px-6 py-3 backdrop-blur-sm">
              <p className="text-primary-foreground font-body font-medium">
                ⭐ [X.X] no Doctoralia
              </p>
            </div>
            <div className="bg-primary-foreground/10 rounded-xl px-6 py-3 backdrop-blur-sm">
              <p className="text-primary-foreground font-body font-medium">
                ⭐ [X.X] no Google
              </p>
            </div>
            <div className="bg-primary-foreground/10 rounded-xl px-6 py-3 backdrop-blur-sm">
              <p className="text-primary-foreground font-body font-medium">
                [X]+ avaliações
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
