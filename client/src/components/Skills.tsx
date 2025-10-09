import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Palette,
  Layout,
  MapPin,
  Boxes
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Frameworks",
    icon: Layout,
    skills: [
      { name: "Angular", years: "3 years" },
      { name: "React", years: "3 years" },
      { name: "Next.js", years: "2 years" },
    ]
  },
  {
    title: "Core Technologies",
    icon: Code2,
    skills: [
      { name: "HTML", years: "3 years" },
      { name: "CSS", years: "3 years" },
      { name: "JavaScript", years: "3 years" },
      { name: "TypeScript", years: "3 years" },
    ]
  },
  {
    title: "State Management",
    icon: Boxes,
    skills: [
      { name: "Redux", years: "3 years" },
      { name: "RxJS", years: "3 years" },
    ]
  },
  {
    title: "Styling Frameworks",
    icon: Palette,
    skills: [
      { name: "Tailwind CSS", years: "3 years" },
      { name: "Bootstrap", years: "3 years" },
      { name: "Angular Material", years: "2 years" }
    ]
  },
  {
    title: "APIs & Services",
    icon: MapPin,
    skills: [
      { name: "Google Maps & Signup", years: "" },
      { name: "Payment Gateways (Apple Pay, Amazon Pay, Google Pay)", years: "" },
    ]
  },
];

export function Skills() {
  return (
    <section className="py-16 md:py-24 lg:py-32" id="skills">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set built over 3+ years of professional web development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <Card
                key={idx}
                className="p-6 hover-elevate"
                data-testid={`card-skill-category-${idx}`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-md bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold pt-2">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIdx) => (
                    <div
                      key={skillIdx}
                      className="flex items-center justify-between"
                      data-testid={`skill-${category.title}-${skillIdx}`}
                    >
                      <span className="text-base">{skill.name}</span>
                      <Badge variant="secondary" data-testid={`badge-years-${idx}-${skillIdx}`}>
                        {skill.years}
                      </Badge>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
