"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import React from "react"

interface TimelineItem {
  title: string
  subtitle: string
  period: string
  description: string
  tags: string[]
  achievements?: string[]
}

interface TimelineProps {
  items: TimelineItem[]
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative space-y-8">
      {/* Vertical Line */}
      <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-[#ADFA1D]/30 to-transparent md:left-8" />

      {/* Timeline Items */}
      <div className="space-y-12">
        {items.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative pl-12 md:pl-20"
          >
            {/* Dot */}
            <motion.div
              className="absolute left-0 top-2 md:left-0 h-8 w-8 rounded-full border-2 border-[#ADFA1D] bg-[var(--card)]"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
            />

            {/* Content */}
            <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 hover:border-[#ADFA1D]/30 transition-colors">
              <div className="mb-2 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-sm text-[var(--muted-foreground)]">{item.subtitle}</p>
                </div>
                <span className="text-sm font-medium text-[#ADFA1D] whitespace-nowrap">{item.period}</span>
              </div>

              <p className="mb-4 text-[var(--muted-foreground)] leading-relaxed">{item.description}</p>

              {item.achievements && item.achievements.length > 0 && (
                <ul className="mb-4 space-y-2">
                  {item.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[var(--muted-foreground)]">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#ADFA1D] flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-2">
                {item.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
