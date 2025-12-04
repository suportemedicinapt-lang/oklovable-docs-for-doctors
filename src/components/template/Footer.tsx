import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Name */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-full bg-primary-foreground flex items-center justify-center">
                <span className="text-primary font-display font-bold text-lg">
                  [L]
                </span>
              </div>
              <span className="font-display font-semibold text-lg text-primary-foreground">
                [Seu Nome]
              </span>
            </div>
            <p className="text-primary-foreground/60 font-body text-sm mt-2">
              Genética Médica • CRM [XXXXX/UF]
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <nav className="flex flex-wrap justify-center gap-6">
              <a href="#sobre" className="text-primary-foreground/80 hover:text-primary-foreground font-body text-sm transition-colors">
                Sobre
              </a>
              <a href="#servicos" className="text-primary-foreground/80 hover:text-primary-foreground font-body text-sm transition-colors">
                Serviços
              </a>
              <a href="#formacao" className="text-primary-foreground/80 hover:text-primary-foreground font-body text-sm transition-colors">
                Formação
              </a>
              <a href="#contato" className="text-primary-foreground/80 hover:text-primary-foreground font-body text-sm transition-colors">
                Contato
              </a>
            </nav>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-primary-foreground/60 font-body text-sm">
              © {currentYear} [Seu Nome]. Todos os direitos reservados.
            </p>
            <p className="text-primary-foreground/40 font-body text-xs mt-1 flex items-center justify-center md:justify-end gap-1">
              Feito com <Heart className="w-3 h-3 fill-current" /> por [Desenvolvedor]
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/10">
          <p className="text-primary-foreground/40 font-body text-xs text-center max-w-3xl mx-auto">
            [Aviso legal opcional: "Este site tem caráter informativo e não substitui 
            a consulta médica presencial. Em caso de emergência, procure atendimento 
            médico imediato."]
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
