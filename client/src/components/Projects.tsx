import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
    {
        title: "Zack Academy",
        description: "Developed and maintained a comprehensive web platform for managing athletes and stakeholders across multiple user roles — including SuperAdmin, Admin, Coach, Mentor, Athlete, Alumni, and Recruiter.",
        technologies: ["NextJS", "TypeScript", "Tailwind CSS", "Google Maps", "Payment Integration", "APIs Integration"],
        liveUrl: "https://marketing.zackacademy.com/"
    },
    {
        title: "Wearegameplan",
        description: "Developed and maintained a comprehensive web platform for managing athletes and stakeholders across multiple user roles — including SuperAdmin, Admin, Coach, Mentor, Athlete, Alumni, and Recruiter.",
        technologies: ["Angular", "AngularJS", "Javascript", "TypeScript", "Angular Material"],
        liveUrl: "https://www.wearegameplan.com/"
    },
    {
        title: "Inclusion Pathways",
        description: "Third project description. Describe the challenges you faced and how you overcame them.",
        technologies: ["JavaScript", "Redux", "Google Maps"],
        liveUrl: "https://www.inclusionpathways.com/"
    },
    {
        title: "Diskorse",
        description: "Developed dynamic social features empowering users to create and share articles, participate in debates, and engage through interactive commentary threads.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
        liveUrl: "https://diskorse.com/"
    }
];

export function Projects() {
    return (
        <section className="py-16 md:py-24 lg:py-32" id="projects">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        A showcase of my recent work and technical accomplishments
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, idx) => (
                        <Card
                            key={idx}
                            className="p-6 flex flex-col hover-elevate"
                            data-testid={`card-project-${idx}`}
                        >
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold mb-3" data-testid={`text-project-title-${idx}`}>
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground mb-4" data-testid={`text-project-description-${idx}`}>
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech, techIdx) => (
                                        <Badge
                                            key={techIdx}
                                            variant="secondary"
                                            data-testid={`badge-tech-${idx}-${techIdx}`}
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="flex-1"
                                    data-testid={`button-live-${idx}`}
                                >
                                    <a href={project?.liveUrl} className="flex w-full justify-center" target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="mr-2 h-4 w-4" />
                                        Live Demo</a>
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
