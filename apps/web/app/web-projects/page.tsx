import React from "react";
import Image from "next/image";
import { ArrowUpRight, Calendar } from "lucide-react";
import { FaGithub } from "react-icons/fa";

// Project Interface
interface Project {
  id: string;
  title: string;
  description: string;
  date: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
}

// Sample Data
const projects: Project[] = [
  {
    id: "smart-water",
    title: "Smart Automatic Water Management",
    description: "An automated industrial hardware solution featuring RF communication arrays. Designed to optimize fluid distribution and track consumption metrics in real-time.",
    date: "Feb 2022",
    technologies: ["Embedded C", "Arduino", "RF Modules"],
    imageUrl: "/api/placeholder/600/400", // Replace with your actual image path
    githubUrl: "https://github.com",
  },
  {
    id: "road-monitor",
    title: "IoT-Driven Road Monitoring System",
    description: "An embedded framework developed to monitor rural infrastructure conditions dynamically. Utilizes specialized sensor suites to push metrics over cloud channels.",
    date: "Sep 2024",
    technologies: ["ESP32", "IoT Protocols", "Cloud API"],
    imageUrl: "/api/placeholder/600/400",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "wheelchair",
    title: "Head-Motion Controlled Wheelchair",
    description: "Assistive technology featuring responsive head-gesture processing to translate real-time physical movements into precise mechanical steering.",
    date: "Nov 2023",
    technologies: ["Microcontrollers", "IMU Sensors", "C++"],
    imageUrl: "/api/placeholder/600/400",
  }
];

const ProjectShowcase = () => {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground">
          Selected Works
        </h2>
        <p className="mt-2 text-muted-foreground">
          A collection of embedded systems, hardware integrations, and IoT solutions.
        </p>
      </div>

      {/* Projects List */}
      <div className="flex flex-col gap-16 md:gap-24">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="group flex flex-col md:flex-row gap-8 md:gap-12 items-center"
          >
            {/* Image Section (Left) */}
            <div className="w-full md:w-5/12 shrink-0">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-muted/50 border border-border/50">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </div>

            {/* Content Section (Right) */}
            <div className="w-full md:w-7/12 flex flex-col justify-center">
              {/* Date */}
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-3">
                <Calendar className="h-4 w-4" />
                <span>{project.date}</span>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                {project.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Minimalist Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 text-xs font-medium text-foreground bg-muted/50 rounded-full border border-border/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links - Conditional Rendering */}
              {(project.githubUrl || project.liveUrl) && (
                <div className="flex items-center gap-6">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                    >
                      View Live
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <FaGithub className="h-4 w-4" />
                      Source Code
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;