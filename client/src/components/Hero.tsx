import { Button } from "@/components/ui/button";
import { ChevronDown, Linkedin, Mail } from "lucide-react";
import heroImage from "@assets/generated_images/Professional_workspace_hero_background_9a284088.png";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="home">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-background"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
        <div className="space-y-6">
          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold text-white">
            Krishnpal Singh
          </h1>
          <p className="text-2xl md:text-3xl text-white/95 font-semibold">
            Web Developer
          </p>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Crafting exceptional web experiences with 3+ years of expertise in Angular, React, Next.js, and modern web technologies
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <Button
              size="lg"
              onClick={() => scrollToSection('contact')}
              data-testid="button-contact"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="backdrop-blur-md bg-white/10 border-white/20 text-white hover:bg-white/20"
              onClick={() => scrollToSection('experience')}
              data-testid="button-view-work"
            >
              View My Work
              <ChevronDown className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 pt-8">
            <Button
              size="icon"
              variant="ghost"
              className="text-white hover:bg-white/10"
              data-testid="link-linkedin"
            >
              <a
                href="https://www.linkedin.com/in/krishnpal-singh-solanki-8454b4169"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('skills')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
        data-testid="button-scroll-down"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
}
