import { Globe02Icon } from "@hugeicons/core-free-icons";
import { ExternalLinkIcon } from "@hugeicons/core-free-icons";
import {FileCodeIcon} from "@hugeicons/core-free-icons";
import {DatabaseIcon} from "@hugeicons/core-free-icons";
import {ServerStack01Icon} from "@hugeicons/core-free-icons";
import {CheckmarkCircle03Icon} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

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

export default async function WebProjectsPage() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="mb-14 border-b border-zinc-200 dark:border-zinc-800 pb-6">
        <div className="flex items-center gap-3 mb-3">
     <HugeiconsIcon icon={Globe02Icon} className="h-7 w-7 text-blue-600 dark:text-blue-400" />

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Web Applications & Digital Platforms
          </h2>
        </div>

        <p className="max-w-3xl text-zinc-500 dark:text-zinc-400">
          Enterprise websites, business portals, e-commerce solutions,
          logistics platforms, and organizational systems developed using
          modern web technologies and scalable architectures.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {webProjects.map((project) => (
          <article
            key={project.id}
            className="group relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-800 hover:shadow-lg"
          >
            {/* Top Glow Line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400">
                {project.category}
              </span>

              <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                ● {project.status}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 mb-5">
              {project.description}
            </p>

            {/* Features */}
            <div className="space-y-2 mb-6">
              {project.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-2 text-sm"
                >
               <HugeiconsIcon icon={CheckmarkCircle03Icon} className="h-4 w-4 mt-0.5 text-blue-500 shrink-0" />
                  <span className="text-zinc-700 dark:text-zinc-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Technologies */}
            <div className="border-t border-zinc-100 dark:border-zinc-800 pt-4">
              <div className="flex items-center gap-2 mb-3">
                <HugeiconsIcon icon={FileCodeIcon} className="h-4 w-4 text-zinc-400" />
                <span className="text-xs uppercase tracking-wider font-semibold text-zinc-500">
                  Technologies
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800 pt-4">
                <div className="flex items-center gap-2 text-zinc-500">
   <HugeiconsIcon icon={ServerStack01Icon}  className="h-4 w-4" />
          <HugeiconsIcon icon={DatabaseIcon}  className="h-4 w-4" />

                  <span className="text-xs">
                    Production Deployment
                  </span>
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400"
                >
                  Visit Site
          <HugeiconsIcon icon={ExternalLinkIcon}  className="h-4 w-4" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}