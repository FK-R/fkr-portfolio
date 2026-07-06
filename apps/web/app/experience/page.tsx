"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin, Cpu } from "lucide-react"

interface ExperienceItem {
  id: string
  role: string
  company: string
  location: string
  period: string
  responsibilities: string[]
  isStrategic?: boolean
}

const experiences: ExperienceItem[] = [
  {
    id: "robotics-trainer",
    role: "Robotics Trainer",
    company: "Al Hasanain and Gunners English School",
    location: "Chittagong, Bangladesh",
    period: "March 2026 – Present",
    responsibilities: [
      "Provide hands-on training in embedded system projects and programming with Arduino, covering both theoretical concepts and practical applications.",
    ],
  },
  {
    id: "nlytes",
    role: "Founder",
    company: "Nlytes",
    location: "Chittagong, Bangladesh",
    period: "June 2024 – January 2026",
    responsibilities: [
      "Led technical architecture for inventory and e-commerce solutions, focusing on system efficiency and logic flow.",
      "Managed cross-functional teams under tight deadlines by prioritizing core functionalities (MVP) and resource allocation.",
      "Strategic Note: Decided to wind down operations to pursue a specialized career path in the Semiconductor industry.",
    ],
    isStrategic: true,
  },
  {
    id: "al-hasanain-admin",
    role: "Jr. Admin Officer",
    company: "Al Hasanain",
    location: "Chittagong, Bangladesh",
    period: "April 2025 – July 2025",
    responsibilities: [
      "Managed multi-functional operations including student affairs, guardian relations, and comprehensive HR administration.",
      "Handled critical HR documentation such as drafting offer letters, appointments, and salary increment records.",
      "Streamlined organizational workflows using ERP software and provided cross-departmental support in accounting and IT.",
      "Ensured high operational efficiency through professional communication and systematic resource management.",
    ],
  },
  {
    id: "mpair-support",
    role: "Support Engineer",
    company: "mPair Technologies Ltd",
    location: "Chittagong, Bangladesh",
    period: "January 2023 – March 2024",
    responsibilities: [
      "Developed and maintained high-performance full-stack web applications and administrative dashboards using Next.js and Node.js.",
      "Engineered hardware-to-cloud integrations, ensuring seamless data flow between IoT devices and web interfaces.",
      "Led software testing and UI/UX design initiatives to drive product optimization and user experience.",
      "Bridged technical development and user requirements to ensure delivered solutions met complex end-user needs.",
    ],
  },
  {
    id: "mpair-intern",
    role: "Intern (Jr. IoT Developer)",
    company: "mPair Technologies Ltd",
    location: "Chittagong, Bangladesh",
    period: "January 2022 – October 2022",
    responsibilities: [
      "Hardware Prototyping: Designed and tested embedded systems using Arduino and ESP32 platforms, focusing on sensor integration and data acquisition.",
      "Full-Stack Support: Assisted in developing backend services using Node.js to visualize real-time sensor data for IoT dashboards.",
      "Rapid Iteration: Contributed to the design of PCB layouts for various internal projects, optimizing for size and power consumption.",
    ],
  },
  {
    id: "ecovation",
    role: "Assistant Engineer",
    company: "EcoVation Bangladesh",
    location: "Chittagong, Bangladesh",
    period: "October 2021 – December 2021",
    responsibilities: [
      "R&D & Manufacturing: Spearheaded the research, design, and assembly of low-cost and sustainable, handmade lighting solutions for off-grid communities.",
      "Technical Mentorship: Empowered Rohingya-affected residents in Teknaf by providing hands-on training in solar-light assembly and maintenance, fostering local self-reliance.",
    ],
  },
]

export default function ExperiencePage() {
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
              <Briefcase className="h-6 w-6 text-[#ADFA1D]" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Professional Experience
            </h1>
          </div>
          <p className="max-w-2xl text-lg text-[var(--muted-foreground)]">
            Engineering hardware logic and full-stack web architectures across diverse organizations.
          </p>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="relative space-y-8">
            {/* Vertical Line */}
            <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-[#ADFA1D]/30 to-transparent md:left-8" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => {
                const isCurrent = exp.period.includes("Present")

                return (
                  <motion.div
                    key={exp.id}
                    custom={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="relative pl-12 md:pl-20"
                  >
                    {/* Animated Dot */}
                    <motion.div
                      className={`absolute left-0 top-2 md:left-0 h-8 w-8 rounded-full border-2 ${
                        isCurrent
                          ? "border-[#ADFA1D] bg-[#ADFA1D]/10 shadow-[0_0_20px_rgba(173,250,29,0.3)]"
                          : "border-[var(--border)] bg-[var(--card)]"
                      } flex items-center justify-center transition-all`}
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.2 }}
                    >
                      {isCurrent && (
                        <motion.span
                          className="h-2.5 w-2.5 rounded-full bg-[#ADFA1D]"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      )}
                    </motion.div>

                    {/* Content Card */}
                    <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 hover:border-[#ADFA1D]/30 transition-all duration-300">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                        <div>
                          <h3 className="text-xl font-bold">{exp.role}</h3>
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2">
                            <span className="font-medium text-[var(--foreground)]">{exp.company}</span>
                            <span className="hidden sm:inline text-[var(--border)]">|</span>
                            <span className="flex items-center text-sm text-[var(--muted-foreground)]">
                              <MapPin className="mr-1 h-4 w-4" />
                              {exp.location}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-sm font-semibold text-[#ADFA1D] bg-[#ADFA1D]/10 px-3 py-1 rounded-lg w-fit whitespace-nowrap">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <ul className="space-y-3 text-[var(--muted-foreground)] text-sm">
                        {exp.responsibilities.map((bullet, i) => {
                          const isStrategicNote = bullet.startsWith("Strategic Note:")

                          if (isStrategicNote) {
                            return (
                              <li
                                key={i}
                                className="mt-4 p-3 rounded-lg border border-[#ADFA1D]/20 bg-[#ADFA1D]/5 text-[var(--foreground)] flex items-start gap-2.5"
                              >
                                <Cpu className="h-4 w-4 mt-0.5 text-[#ADFA1D] flex-shrink-0" />
                                <span className="text-xs font-medium">
                                  <strong className="text-[#ADFA1D]">Strategic Pivot:</strong>{" "}
                                  {bullet.replace("Strategic Note:", "").trim()}
                                </span>
                              </li>
                            )
                          }

                          return (
                            <li key={i} className="relative pl-5 hover:text-[var(--foreground)] transition-colors">
                              <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-[#ADFA1D]/50" />
                              {bullet}
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
