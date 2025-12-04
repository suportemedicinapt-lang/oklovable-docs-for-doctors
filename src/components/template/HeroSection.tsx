import { Button } from "@/components/ui/button";
import doctorImage from "@/assets/doctor-placeholder.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 dna-pattern opacity-30" />
      
      {/* Content */}
      <div className="container mx-auto px-4 pt-32 pb-20 md:pt-40 md:pb-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-primary-foreground space-y-6 animate-fade-in-left">
            <div className="inline-block px-4 py-2 bg-primary-foreground/10 rounded-full border border-primary-foreground/20 backdrop-blur-sm">
              <span className="text-sm font-body font-medium">
                Genética Médica • CRM [Seu CRM aqui]
              </span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              [Seu Nome Completo Aqui]
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/90 font-body leading-relaxed max-w-lg">
              [Escreva aqui uma breve descrição sobre você e sua especialidade. 
              Ex: "Especialista em Genética Médica com mais de X anos de experiência, 
              dedicada ao diagnóstico e acompanhamento de doenças genéticas."]
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero" size="xl">
                Agendar Consulta
              </Button>
              <Button variant="heroOutline" size="xl">
                Saiba Mais
              </Button>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-primary-foreground/20 mt-8">
              <div>
                <p className="text-3xl font-display font-bold">[X]+</p>
                <p className="text-sm text-primary-foreground/80 font-body">Anos de Experiência</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold">[X]+</p>
                <p className="text-sm text-primary-foreground/80 font-body">Pacientes Atendidos</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold">[X]+</p>
                <p className="text-sm text-primary-foreground/80 font-body">Publicações</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in-right animation-delay-200">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-primary-foreground/10 rounded-full blur-2xl" />
              
              {/* Main image container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-primary-foreground/20">
                <img
                  src={doctorImage}
                  alt="[Coloque sua foto profissional aqui]"
                  className="w-full h-auto object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 md:-left-8 bg-card rounded-xl p-4 shadow-xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🧬</span>
                  </div>
                  <div>
                    <p className="font-display font-semibold text-foreground text-sm">Especialista em</p>
                    <p className="text-accent font-body text-xs">Genética Médica</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
