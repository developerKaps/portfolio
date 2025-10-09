import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:solankikaps111@gmail.com';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+917877976163';
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-muted/30" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interested in collaborating or have a project in mind? I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="p-8 md:p-12">
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>

                  <Button
                    variant="outline"
                    className="w-full justify-start hover-elevate"
                    onClick={handleEmailClick}
                    data-testid="button-email"
                  >
                    <Mail className="mr-3 h-5 w-5" />
                    <span className="text-sm">solankikaps111@gmail.com</span>
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full justify-start hover-elevate"
                    onClick={handlePhoneClick}
                    data-testid="button-phone"
                  >
                    <Phone className="mr-3 h-5 w-5" />
                    <span>+91 7877976163</span>
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full justify-start hover-elevate"
                    data-testid="button-linkedin-contact"
                  >
                    <a
                      href="https://www.linkedin.com/in/krishnpal-singh-solanki-8454b4169"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex"
                    >
                      <Linkedin className="mr-3 h-5 w-5" />
                      <span>Connect on LinkedIn</span>
                    </a>
                  </Button>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4">Location</h3>

                  <div className="flex items-start gap-3 text-muted-foreground">
                    <MapPin className="h-5 w-5 mt-1 text-primary" />
                    <div>
                      <p className="font-medium text-foreground mb-1">Based in India (Bengaluru)</p>
                      <p className="text-sm">Available for remote opportunities worldwide</p>
                    </div>
                  </div>

                  <div className="pt-6">
                    <h4 className="font-semibold mb-3">Professional Availability</h4>
                    <p className="text-sm text-muted-foreground">
                      Currently employed and open to discussing new opportunities, freelance projects, and collaborations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
