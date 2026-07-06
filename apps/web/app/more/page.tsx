"use client"

import { motion } from "framer-motion"
import { Trophy, Users, Mic, Code, Mail, Github } from "lucide-react"
import { LinkedinIcon } from "lucide-react"
import Link from "next/link"

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

export default function MorePage() {
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            More About Me
          </h1>
          <p className="max-w-2xl text-lg text-[var(--muted-foreground)]">
            Certifications, community involvement, and additional professional achievements.
          </p>
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <motion.div
          className="mx-auto max-w-5xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Awards & Certifications */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="h-6 w-6 text-[#ADFA1D]" />
              <h2 className="text-3xl font-bold">Certifications & Awards</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "IEEE Member - International Professional Society",
                "Advanced Web Development Certification",
                "IoT Systems Design Specialization",
                "Cloud Architecture Fundamentals",
              ].map(cert => (
                <div key={cert} className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 hover:border-[#ADFA1D]/30 transition-colors">
                  <div className="flex items-start gap-3">
                    <Trophy className="h-5 w-5 text-[#ADFA1D] flex-shrink-0 mt-1" />
                    <p className="font-medium">{cert}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Speaking & Community */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Mic className="h-6 w-6 text-[#ADFA1D]" />
              <h2 className="text-3xl font-bold">Speaking & Community</h2>
            </div>
            <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-6 hover:border-[#ADFA1D]/30 transition-colors">
              <div className="space-y-4">
                {[
                  {
                    title: "Technical Workshop Leader",
                    desc: "Conducted workshops on IoT and embedded systems at universities and tech communities",
                  },
                  {
                    title: "Robotics Club Mentor",
                    desc: "Mentored students in robotics and embedded systems competitions, won 3 regional competitions",
                  },
                  {
                    title: "Open Source Contributor",
                    desc: "Active contributor to embedded systems and IoT-related open source projects",
                  },
                ].map((item, i) => (
                  <div key={i} className="border-b border-[var(--border)] pb-4 last:border-0 last:pb-0">
                    <h3 className="font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-[var(--muted-foreground)]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Languages & Skills */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-6 w-6 text-[#ADFA1D]" />
              <h2 className="text-3xl font-bold">Languages & Soft Skills</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-6 hover:border-[#ADFA1D]/30 transition-colors">
                <h3 className="font-bold mb-3">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {["English", "Bangla", "Basic Hindi"].map(lang => (
                    <span key={lang} className="px-3 py-1 rounded-full bg-[#ADFA1D]/10 text-[#ADFA1D] text-sm font-medium">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-6 hover:border-[#ADFA1D]/30 transition-colors">
                <h3 className="font-bold mb-3">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {["Leadership", "Team Collaboration", "Technical Writing", "Mentoring"].map(skill => (
                    <span key={skill} className="px-3 py-1 rounded-full bg-[#ADFA1D]/10 text-[#ADFA1D] text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Connect */}
          <motion.div variants={itemVariants} className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Code className="h-6 w-6 text-[#ADFA1D]" />
              <h2 className="text-2xl font-bold">Let&apos;s Connect</h2>
            </div>
            <p className="text-[var(--muted-foreground)] mb-6 max-w-xl mx-auto">
              I&apos;m always interested in hearing about new projects, collaborations, and opportunities in embedded systems and full-stack development.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link
                href="mailto:fakwer.uddin@nlytes.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-black text-white dark:bg-white dark:text-black hover:opacity-90 transition-opacity font-medium"
              >
                <Mail className="h-5 w-5" />
                Get in Touch
              </Link>
              <div className="flex gap-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-[var(--border)] hover:bg-[#ADFA1D]/10 hover:border-[#ADFA1D]/50 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-[var(--border)] hover:bg-[#ADFA1D]/10 hover:border-[#ADFA1D]/50 transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
