"use client";

import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function AceternityCard({ children, className = "" }: CardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`
        group relative rounded-2xl border transition-all duration-500 overflow-hidden
        bg-white/[0.6] border-gray-200/80 text-gray-900 shadow-sm
        dark:bg-[#0A0A0A] dark:border-[#ddd]/10 dark:text-gray-100
        hover:shadow-[0_8px_30px_rgba(173,250,29,0.02)]
        ${className}
      `}
    >
      {/* Background Radial Glow Spotlight Tracker */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"
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
      
      {/* Border Highlight Spotlight Tracker */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              160px circle at ${mouseX}px ${mouseY}px,
              rgba(173, 250, 29, 0.3),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="relative z-20 p-6">
        {children}
      </div>
    </div>
  );
}