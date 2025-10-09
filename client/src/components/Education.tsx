import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Mohan Lal Sukhadia University",
    location: "Udaipur, Rajasthan",
    year: "2018",
    description: "Graduated with comprehensive knowledge in computer applications and software development."
  },
  {
    degree: "Higher Secondary (12th)",
    institution: "RBSE Rajasthan",
    location: "Rajasthan",
    year: "2015",
    description: "Completed higher secondary education with focus on science and mathematics."
  },
  {
    degree: "Secondary (10th)",
    institution: "RBSE Rajasthan",
    location: "Rajasthan",
    year: "2013",
    description: "Completed secondary education with strong academic performance."
  }
];

export function Education() {
  return (
    <section className="py-16 md:py-24 lg:py-32" id="education">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic foundation that shaped my technical career
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {education.map((edu, idx) => (
            <Card 
              key={idx} 
              className="p-6 hover-elevate"
              data-testid={`card-education-${idx}`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-md bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-1" data-testid={`text-degree-${idx}`}>
                    {edu.degree}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-3 w-3" />
                    <span data-testid={`text-year-${idx}`}>{edu.year}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <p className="font-semibold text-base" data-testid={`text-institution-${idx}`}>
                  {edu.institution}
                </p>
                <p className="text-sm text-muted-foreground">
                  {edu.location}
                </p>
                <p className="text-sm text-muted-foreground pt-2" data-testid={`text-edu-description-${idx}`}>
                  {edu.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
