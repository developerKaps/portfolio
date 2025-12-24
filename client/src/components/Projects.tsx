import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
    {
        title: "Zack Academy",
        description: "Developed a responsive e-learning platform with interactive course listings and secure payment integration. Collaborated with backend teams to integrate APIs for real-time updates and payment gateways, delivering a scalable and mobile-optimized user experience.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Google Maps", "Payment Integration", "APIs Integration"],
        liveUrl: "https://marketing.zackacademy.com/",
        current: true
    },
    {
        title: "Wearegameplan",
        description: "Developed a role-based athlete management platform supporting multiple user types and real-time collaboration. Optimized frontend performance to improve load times and user experience for a national user base.",
        technologies: ["Angular", "AngularJS", "Javascript", "TypeScript", "APIs Integration", "Angular Material", "Bootstrap", "SCSS"],
        liveUrl: "https://www.wearegameplan.com/",
        current: false
    },
    {
        title: "Not the headlines",
        description: "Built a community-driven news platform that promotes underrepresented and unbiased stories. Enabled user-submitted articles and videos with transparent source attribution to encourage deeper, more informed news consumption.",
        technologies: ["Next.js", "Node.js", "Typescript", "Rxjs", "APIs Integration", "Material UI", "Tailwind"],
        liveUrl: "https://nottheheadlines.in/",
        current: false
    },
    {
        title: "Campaign Donut",
        description: "Built a marketing content planning app that enables teams to create, collaborate, and organize marketing content across email and social media channels.",
        technologies: ["Angular", "Typescript", "Rxjs", "APIs Integration", "Material UI", "Tailwind"],
        liveUrl: "https://campaigndonut.com/",
        current: false
    },
    {
        title: "Inclusion Pathways",
        description: "Contributed to an accessibility-focused platform built by and for people with disabilities, emphasizing inclusive design, empowerment, and real-world lived experience.",
        technologies: ["Angular", "Typescript", "Rxjs", "APIs Integration", "Material UI", "Tailwind"],
        liveUrl: "https://www.inclusionpathways.com/",
        current: false
    },
    {
        title: "Diskorse",
        description: "Developed a structured discussion platform enabling users to create topic-based spaces, choose debate formats, and engage through stance-driven conversations, fostering meaningful community interactions.",
        technologies: ["Next.js", "Node.js", "TypeScript", "APIs Integration", "Tailwind"],
        liveUrl: "https://diskorse.com/",
        current: false
    },
    {
        title: "Buchheit",
        description: "Contributed to a dynamic e-commerce platform with admin-controlled layouts and content management, enabling real-time customization and scalable online shopping experiences.",
        technologies: ["Angular", "Typescript", "Rxjs", "APIs Integration", "Material UI", "Bootstrap"],
        liveUrl: "https://www.buchheits.com/",
        current: false
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
                                <h3 className="flex justify-between text-2xl font-bold mb-3" data-testid={`text-project-title-${idx}`}>
                                    {project.title}
                                    {project.current && (
                                        <Badge data-testid={`badge-current-${idx}`}>Current</Badge>
                                    )}
                                </h3>
                                <p className="text-muted-foreground mb-4" data-testid={`text-project-description-${idx}`}>
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto mb-4">
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
