"use client"

import { Mail, Calendar, FileText, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { skillsData } from '@/data/skills'
import { motion } from 'framer-motion'

const socialLinks = [
  {
    href: "mailto:fakwer.uddin@nlytes.com",
    icon: Mail,
    label: "Email",
  },
  {
    href: "https://github.com",
    icon: FileText,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com",
    icon: ExternalLink,
    label: "LinkedIn",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20 md:py-32 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 -z-10 h-full w-full">
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ADFA1D]/20 to-transparent opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>

        <motion.div
          className="mx-auto max-w-5xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <Badge variant="accent" className="animate-pulse">
              ⚡ Embedded Systems & Full-Stack Engineer
            </Badge>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
              Md. Fakwer Uddin
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-base sm:text-lg text-[var(--muted-foreground)] leading-relaxed mb-8"
          >
            Bridging the gap between physical hardware architectures and modern software ecosystems. I design robust IoT infrastructures and high-performance, modular web layouts.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-12">
            <Link href="mailto:fakwer.uddin@nlytes.com">
              <Button variant="primary" size="lg" className="gap-2">
                <Calendar className="h-4 w-4" />
                Get in Touch
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="gap-2">
              <FileText className="h-4 w-4" />
              Resume
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex gap-3">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-[var(--border)] text-[var(--muted-foreground)] hover:text-[#ADFA1D] hover:border-[#ADFA1D]/50 transition-colors"
              >
                <Icon className="h-5 w-5" />
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-32 border-t border-[var(--border)]">
        <motion.div
          className="mx-auto max-w-5xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Technical Expertise
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skillsData.map((skill, index) => {
              const Icon = skill.icon
              return (
                <motion.div
                  key={skill.title}
                  variants={itemVariants}
                  className={skill.span}
                >
                  <Card interactive className="h-full flex flex-col">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="font-bold text-lg tracking-tight mb-1">
                          {skill.title}
                        </h3>
                        <p className="text-sm text-[var(--muted-foreground)]">
                          {skill.description}
                        </p>
                      </div>
                      <div className="p-2 rounded-lg bg-[#ADFA1D]/10 text-[#ADFA1D] flex-shrink-0">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {skill.technologies.map(tech => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-32 border-t border-[var(--border)]">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Let&apos;s Build Something Amazing
          </h2>
          <p className="text-lg text-[var(--muted-foreground)] mb-8">
            Whether you have a project in mind or just want to chat, I&apos;m always excited to explore new opportunities.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="mailto:fakwer.uddin@nlytes.com">
              <Button variant="primary" size="lg">
                Get in Touch
              </Button>
            </Link>
            <Link href="/experience">
              <Button variant="outline" size="lg">
                View My Work
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
