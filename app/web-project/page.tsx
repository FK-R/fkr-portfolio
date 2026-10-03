import {
  CheckmarkCircle03Icon,
  DatabaseIcon,
  ExternalLinkIcon,
  FileCodeIcon,
  Globe02Icon,
  ServerStack01Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import Link from "next/link"

interface WebProject {
  id: string
  title: string
  category: string
  description: string
  technologies: string[]
  features: string[]
  url: string
  status: string
}

const webProjects: WebProject[] = [
  {
    id: "mpairtech",
    title: "mPair Technologies",
    category: "Corporate Website",
    description:
      "Enterprise technology company website showcasing software development, cloud services, robotics, IoT solutions, and digital transformation offerings.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Node.js"],
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
    technologies: ["Next.js", "React", "Tailwind CSS", "Responsive Design"],
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
    category: "Preorder E-Commerce",
    description:
      "Online bookstore platform providing a modern shopping experience with book discovery, ordering, and customer engagement features.",
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "PostgreSQL",
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
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
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
    technologies: ["Next.js", "React", "Tailwind CSS"],
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
    id: "iiu-alumni",
    title: "IIUC EEE Alumni",
    category: "Organization Portal",
    description:
      "Community platform connecting alumni through membership services, events, announcements, and organizational activities.",
    technologies: ["Next.js", "React", "MySQL", "Node.js", "REST API"],
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
  {
    id: "electroxplore",
    title: "ElectroXplore",
    category: "Research Organization",
    description:
      "Research platform connecting new researchers through membership services, training,  and Engineering activities.",
    technologies: ["Next.js", "React", "Google Sheets", "REST API"],
    features: [
      "Member management",
      "Blog, News & announcements",
      "Administrative dashboard",
    ],
    url: "https://www.electroxplore.com",
    status: "Live",
  },
]

export default async function WebProjectsPage() {
  return (
    <section className="relative w-full">
      <div className="mb-14 border-b border-zinc-200 pb-6 dark:border-zinc-800">
        <div className="mb-3 flex items-center gap-3">
          <HugeiconsIcon
            icon={Globe02Icon}
            className="h-7 w-7 text-[#ADFA1D] dark:text-[#ADFA1D]"
          />

          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl dark:text-zinc-50">
            Web Applications & Digital Platforms
          </h2>
        </div>

        <p className="max-w-3xl text-zinc-500 dark:text-zinc-400">
          Enterprise websites, business portals, e-commerce solutions, logistics
          platforms, and organizational systems developed using modern web
          technologies and scalable architectures.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {webProjects.map((project) => (
          <article
            key={project.id}
            className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:border-[#ADFA1D] hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-[#ADFA1D]"
          >
            <div className="absolute top-0 right-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-[#ADFA1D] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="mb-4 flex items-center justify-between">
              <span className="rounded-full bg-zinc-100 px-3 py-1 text-[11px] font-semibold text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400">
                {project.category}
              </span>

              <span className="text-xs font-medium text-[#ADFA1D] dark:text-[#ADFA1D]">
                ● {project.status}
              </span>
            </div>

            {/* Title */}
            <h3 className="mb-3 text-xl font-bold text-zinc-900 transition-colors group-hover:text-[#ADFA1D] dark:text-zinc-100 dark:group-hover:text-[#ADFA1D]">
              {project.title}
            </h3>

            {/* Description */}
            <p className="mb-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {project.description}
            </p>
            <div className="mb-6 space-y-2">
              {project.features.map((feature) => (
                <div key={feature} className="flex items-start gap-2 text-sm">
                  <HugeiconsIcon
                    icon={CheckmarkCircle03Icon}
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#ADFA1D]"
                  />
                  <span className="text-zinc-700 dark:text-zinc-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
            <div className="border-t border-zinc-100 pt-4 dark:border-zinc-800">
              <div className="mb-3 flex items-center gap-2">
                <HugeiconsIcon
                  icon={FileCodeIcon}
                  className="h-4 w-4 text-zinc-400"
                />
                <span className="text-xs font-semibold tracking-wider text-zinc-500 uppercase">
                  Technologies
                </span>
              </div>
              <div className="mb-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-medium dark:border-zinc-800 dark:bg-zinc-900"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between border-t border-zinc-100 pt-4 dark:border-zinc-800">
                <div className="flex items-center gap-2 text-zinc-500">
                  <HugeiconsIcon icon={ServerStack01Icon} className="h-4 w-4" />
                  <HugeiconsIcon icon={DatabaseIcon} className="h-4 w-4" />
                  <span className="text-xs">Production Deployment</span>
                </div>
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-medium text-[#ADFA1D] transition-colors hover:text-[#ADFA1D] dark:text-[#ADFA1D] dark:hover:text-[#ADFA1D]"
                >
                  Visit Site
                  <HugeiconsIcon icon={ExternalLinkIcon} className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
