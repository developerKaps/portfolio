import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Zibtek",
    role: "Software Developer",
    location: "Bengaluru",
    startDate: "December 2022",
    endDate: "Present",
    duration: "3 years",
    description: "Currently working as a Software Developer, building modern web applications using React, Angular, Next.js and Node.js",
    current: true
  },
  {
    company: "Navsoft",
    role: "Software Developer",
    location: "Kolkata",
    startDate: "September 2022",
    endDate: "November 2022",
    duration: "2 months",
    description: "Worked on frontend development projects utilizing modern JavaScript frameworks and libraries.",
    current: false
  },
  {
    company: "Wipro",
    role: "Senior Associate",
    location: "Pune",
    startDate: "November 2018",
    endDate: "July 2022",
    duration: "3.8 years",
    description: "Worked as a Senior Associate with Openreach and Best Buy clients, providing technical assistance, troubleshooting, and support for enterprise web solutions.",
    current: false
  }
];

export function Experience() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-muted/30" id="experience">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Crafting exceptional web experiences with 3+ years of development expertise and 3.8 years as a Senior Associate in leading organizations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div 
                key={idx} 
                className="relative md:pl-20"
                data-testid={`experience-${idx}`}
              >
                <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-primary border-4 border-background hidden md:block"></div>
                
                <Card className="p-6 md:p-8 hover-elevate">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold" data-testid={`text-role-${idx}`}>
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <Badge data-testid={`badge-current-${idx}`}>Current</Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <Building2 className="h-4 w-4" />
                        <span className="text-lg font-semibold" data-testid={`text-company-${idx}`}>
                          {exp.company}
                        </span>
                        <span className="text-sm">• {exp.location}</span>
                      </div>
                    </div>
                    <Badge variant="secondary" data-testid={`badge-duration-${idx}`}>
                      {exp.duration}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Calendar className="h-4 w-4" />
                    <span data-testid={`text-dates-${idx}`}>
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>

                  <p className="text-base text-foreground" data-testid={`text-description-${idx}`}>
                    {exp.description}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
