"use client"

import { motion } from "framer-motion"
import {
  Globe,
  Code2,
  Server,
  Database,
  ExternalLink,
  CheckCircle2,
} from "lucide-react"

interface WebProject {
  id: string;
  title: string;
  category:
    | "Corporate Website"
    | "Logistics Platform"
    | "E-Commerce"
    | "Organization Portal";

  description: string;
  technologies: string[];
  features: string[];
  url: string;
  status: string;
}

const webProjects: WebProject[] = [
  {
    id: "mpairtech",
    title: "mPair Technologies",
    category: "Corporate Website",
    description:
      "Enterprise technology company website showcasing software development, cloud services, robotics, IoT solutions, and digital transformation offerings.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
    ],
    features: [
      "Corporate service showcase",
      "Responsive user interface",
      "SEO-friendly architecture",
      "Project portfolio management",
      "Performance optimized pages",
    ],
    url: "https://mpairtech.com",
    status: "Live",
  },

  {
    id: "handyman",
    title: "Handyman AHM",
    category: "Corporate Website",
    description:
      "Professional home maintenance and repair service platform designed to streamline customer engagement and service inquiries.",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Responsive Design",
    ],
    features: [
      "Service presentation",
      "Quotation request forms",
      "Mobile-first design",
      "Customer contact integration",
      "Lead generation workflow",
    ],
    url: "https://handymanahm.com",
    status: "Live",
  },

  {
    id: "books",
    title: "Books of Bengal",
    category: "E-Commerce",
    description:
      "Online bookstore platform providing a modern shopping experience with book discovery, ordering, and customer engagement features.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "REST API",
      "Payment Integration",
    ],
    features: [
      "Book catalog management",
      "Product search system",
      "Shopping cart functionality",
      "Order processing workflow",
      "Responsive storefront",
    ],
    url: "https://www.booksofbengal.com",
    status: "Live",
  },

  {
    id: "nationalgroup",
    title: "National Group Bangladesh",
    category: "Corporate Website",
    description:
      "Corporate profile website presenting industrial operations, business activities, services, and company information.",
    technologies: [
      "React",
      "JavaScript",
      "CMS Integration",
      "Responsive UI",
    ],
    features: [
      "Business profile presentation",
      "Corporate service showcase",
      "Contact management",
      "Media gallery",
      "SEO optimization",
    ],
    url: "https://www.nationalgroupbd.com",
    status: "Live",
  },

  {
    id: "alphaship",
    title: "Alpha Ship BD",
    category: "Logistics Platform",
    description:
      "Maritime and logistics company website providing vessel management, freight forwarding, and shipping solutions.",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Node.js",
    ],
    features: [
      "Shipping service presentation",
      "Inquiry management",
      "Responsive business portal",
      "Service information architecture",
      "Corporate branding system",
    ],
    url: "https://www.alphashipbd.co",
    status: "Live",
  },

  {
    id: "fastship",
    title: "FastShip BD",
    category: "Logistics Platform",
    description:
      "Digital logistics platform highlighting freight, shipping, and transportation services with a modern web experience.",
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "Tailwind CSS",
    ],
    features: [
      "Freight service showcase",
      "Customer inquiry forms",
      "Responsive interface",
      "Business workflow presentation",
      "SEO-ready structure",
    ],
    url: "https://www.fastshipbd.com",
    status: "Live",
  },

  {
    id: "iiu-alumni",
    title: "IIUC EEE Alumni",
    category: "Organization Portal",
    description:
      "Community platform connecting alumni through membership services, events, announcements, and organizational activities.",
    technologies: [
      "Next.js",
      "React",
      "MongoDB",
      "Node.js",
      "REST API",
    ],
    features: [
      "Member management",
      "Event management",
      "News & announcements",
      "Community engagement",
      "Administrative dashboard",
    ],
    url: "https://www.iiuceeealumni.com",
    status: "Live",
  },
];

export default function WebProjectsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-32 border-b border-[var(--border)]">
        <motion.div
          className="mx-auto max-w-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-[#ADFA1D]/10">
              <Globe className="h-6 w-6 text-[#ADFA1D]" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Web Projects
            </h1>
          </div>
          <p className="max-w-2xl text-lg text-[var(--muted-foreground)]">
            Enterprise websites, e-commerce platforms, and logistics solutions built with modern web technologies and scalable architectures.
          </p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <motion.div
          className="mx-auto max-w-7xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {webProjects.map((project) => (
              <motion.article
                key={project.id}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 hover:border-[#ADFA1D]/30 hover:shadow-lg transition-all duration-300"
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#ADFA1D]/10 text-[#ADFA1D]">
                    {project.category}
                  </span>
                  <span className="text-xs font-medium text-[#ADFA1D]">
                    ● {project.status}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#ADFA1D] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {project.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-[#ADFA1D] flex-shrink-0" />
                      <span className="text-[var(--muted-foreground)]">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies & Footer */}
                <div className="border-t border-[var(--border)] pt-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Code2 className="h-4 w-4 text-[var(--muted-foreground)]" />
                    <span className="text-xs uppercase tracking-wider font-semibold text-[var(--muted-foreground)]">
                      Technologies
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-[var(--secondary-button)] border border-[var(--border)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between border-t border-[var(--border)] pt-4">
                    <div className="flex items-center gap-2 text-[var(--muted-foreground)] text-xs">
                      <Server className="h-4 w-4" />
                      <Database className="h-4 w-4" />
                      <span>Production Deployment</span>
                    </div>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-[#ADFA1D] hover:opacity-80 transition-opacity"
                    >
                      Visit Site
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  )
}
