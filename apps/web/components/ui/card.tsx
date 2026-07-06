"use client"

import React from 'react'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  interactive?: boolean
  className?: string
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, interactive = true, className, ...props }, ref) => {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const handleMouseMove = (event: React.MouseEvent) => {
      if (!interactive) return
      const { left, top } = event.currentTarget.getBoundingClientRect()
      mouseX.set(event.clientX - left)
      mouseY.set(event.clientY - top)
    }

    return (
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        className={cn(
          'group relative rounded-xl border border-[var(--border)] bg-[var(--card)] text-[var(--card-foreground)] p-6',
          'transition-all duration-300 overflow-hidden',
          interactive && 'hover:border-[#ADFA1D]/30 hover:shadow-lg',
          className
        )}
        {...props}
      >
        {interactive && (
          <>
            {/* Background Glow Effect */}
            <motion.div
              className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition duration-300"
              style={{
                background: useMotionTemplate`
                  radial-gradient(
                    350px circle at ${mouseX}px ${mouseY}px,
                    rgba(173, 250, 29, 0.07),
                    transparent 80%
                  )
                `,
              }}
            />

            {/* Border Highlight */}
            <motion.div
              className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition duration-300"
              style={{
                background: useMotionTemplate`
                  radial-gradient(
                    160px circle at ${mouseX}px ${mouseY}px,
                    rgba(173, 250, 29, 0.15),
                    transparent 80%
                  )
                `,
              }}
            />
          </>
        )}

        <div className="relative z-10">
          {children}
        </div>
      </div>
    )
  }
)

Card.displayName = 'Card'

export { Card }
