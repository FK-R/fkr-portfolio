"use client"

import { motion } from "framer-motion"
import { GraduationCap, CircuitBoard, Activity, Network } from "lucide-react"
import Link from "next/link"

const educationData = [
  {
    institution: "International Islamic University Chittagong",
    degree: "Bachelor of Science in Electrical and Electronic Engineering (EEE)",
    period: "2018 — 2023",
    location: "Chittagong, Bangladesh",
    link: "https://www.iiuc.ac.bd/",
    highlights: [
      {
        icon: CircuitBoard,
        text: "Acquired comprehensive core competencies across analog and digital circuit architectures, automated control systems, microelectronics processing, and high-efficiency power electronics frameworks.",
      },
      {
        icon: Activity,
        text: "Spearheaded the design and structural logic of a smart grid architecture simulation, successfully modeling the distribution balancing mechanics between renewable energy generators and localized storage matrix systems.",
      },
      {
        icon: Network,
        text: "Directed engineering processes for a low-power wireless sensor network (WSN) engineered for environmental monitoring, implementing data telemetry pipes to enable continuous remote analytics.",
      },
    ],
  },
]

export default function EducationPage() {
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
              <GraduationCap className="h-6 w-6 text-[#ADFA1D]" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Education
            </h1>
          </div>
          <p className="max-w-2xl text-lg text-[var(--muted-foreground)]">
            Comprehensive education in electrical engineering with focus on embedded systems and modern technologies.
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
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="relative pl-12 md:pl-20"
                >
                  {/* Animated Dot */}
                  <motion.div
                    className="absolute left-0 top-2 md:left-0 h-8 w-8 rounded-full border-2 border-[#ADFA1D] bg-[#ADFA1D]/10 flex items-center justify-center shadow-[0_0_20px_rgba(173,250,29,0.3)]"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <GraduationCap className="h-4 w-4 text-[#ADFA1D]" />
                  </motion.div>

                  {/* Content Card */}
                  <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 hover:border-[#ADFA1D]/30 transition-all duration-300">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                      <div>
                        <Link
                          href={edu.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xl font-bold hover:text-[#ADFA1D] transition-colors"
                        >
                          {edu.institution}
                        </Link>
                        <p className="text-sm font-semibold text-[var(--muted-foreground)] mt-1">
                          {edu.degree}
                        </p>
                        <p className="text-xs text-[var(--muted-foreground)] mt-1">
                          {edu.location}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 text-sm font-semibold text-[#ADFA1D] bg-[#ADFA1D]/10 px-3 py-1 rounded-lg w-fit whitespace-nowrap">
                        {edu.period}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-4 mt-6">
                      {edu.highlights.map((highlight, i) => {
                        const Icon = highlight.icon
                        return (
                          <div key={i} className="flex gap-3 items-start">
                            <div className="mt-1 p-2 rounded-lg bg-[#ADFA1D]/10 text-[#ADFA1D] flex-shrink-0">
                              <Icon className="h-4 w-4" />
                            </div>
                            <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                              {highlight.text}
                            </p>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
