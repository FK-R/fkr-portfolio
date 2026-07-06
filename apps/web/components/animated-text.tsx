"use client"

import { motion } from "framer-motion"
import React from "react"

interface AnimatedTextProps {
  children: string
  className?: string
  delay?: number
  duration?: number
}

export function AnimatedText({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
}: AnimatedTextProps) {
  const variants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: delay + i * 0.05,
        duration,
      },
    }),
  }

  const words = children.split(" ")

  return (
    <div className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={variants}
          initial="hidden"
          animate="visible"
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </div>
  )
}
