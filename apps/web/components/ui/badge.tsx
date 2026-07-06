import React from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'primary' | 'secondary' | 'accent'
  children: React.ReactNode
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = 'secondary', children, ...props }, ref) => {
    const variants = {
      primary: 'bg-black text-white dark:bg-white dark:text-black',
      secondary: 'bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100',
      accent: 'bg-[#ADFA1D]/10 text-[#ADFA1D] border border-[#ADFA1D]/30',
    }

    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-full px-3 py-1 text-sm font-medium transition-colors',
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Badge.displayName = 'Badge'

export { Badge }
