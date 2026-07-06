"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { flushSync } from "react-dom"
import { cn } from "@/lib/utils"

interface ThemeTogglerProps extends React.ComponentPropsWithoutRef<"button"> {
  duration?: number
  variant?: "circle" | "square"
}

function polygonCollapsed(cx: number, cy: number, vertexCount: number): string {
  const pairs = Array.from(
    { length: vertexCount },
    () => `${cx}px ${cy}px`
  ).join(", ")
  return `polygon(${pairs})`
}

function getThemeTransitionClipPaths(
  variant: "circle" | "square",
  cx: number,
  cy: number,
  maxRadius: number,
  viewportWidth: number,
  viewportHeight: number
): [string, string] {
  if (variant === "square") {
    const halfW = Math.max(cx, viewportWidth - cx)
    const halfH = Math.max(cy, viewportHeight - cy)
    const halfSide = Math.max(halfW, halfH) * 1.05
    const end = [
      `${cx - halfSide}px ${cy - halfSide}px`,
      `${cx + halfSide}px ${cy - halfSide}px`,
      `${cx + halfSide}px ${cy + halfSide}px`,
      `${cx - halfSide}px ${cy + halfSide}px`,
    ].join(", ")
    return [polygonCollapsed(cx, cy, 4), `polygon(${end})`]
  }

  return [
    `circle(0px at ${cx}px ${cy}px)`,
    `circle(${maxRadius}px at ${cx}px ${cy}px)`,
  ]
}

export const ThemeToggler = ({
  className,
  duration = 400,
  variant = "circle",
  ...props
}: ThemeTogglerProps) => {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    setMounted(true)
    const updateTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"))
    }

    updateTheme()

    const observer = new MutationObserver(updateTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => observer.disconnect()
  }, [])

  const toggleTheme = useCallback(() => {
    const button = buttonRef.current
    if (!button) return

    const viewportWidth = window.visualViewport?.width ?? window.innerWidth
    const viewportHeight = window.visualViewport?.height ?? window.innerHeight

    const { top, left, width, height } = button.getBoundingClientRect()
    const x = left + width / 2
    const y = top + height / 2

    const maxRadius = Math.hypot(
      Math.max(x, viewportWidth - x),
      Math.max(y, viewportHeight - y)
    )

    const applyTheme = () => {
      const newTheme = !isDark
      setIsDark(newTheme)
      document.documentElement.classList.toggle("dark")
      localStorage.setItem("theme", newTheme ? "dark" : "light")
    }

    if (typeof document.startViewTransition !== "function") {
      applyTheme()
      return
    }

    const clipPath = getThemeTransitionClipPaths(
      variant,
      x,
      y,
      maxRadius,
      viewportWidth,
      viewportHeight
    )

    const root = document.documentElement
    root.dataset.themeVt = "active"
    root.style.setProperty("--theme-toggle-vt-duration", `${duration}ms`)
    root.style.setProperty("--theme-vt-clip-from", clipPath[0])

    const cleanup = () => {
      delete root.dataset.themeVt
      root.style.removeProperty("--theme-toggle-vt-duration")
      root.style.removeProperty("--theme-vt-clip-from")
    }

    const transition = document.startViewTransition(() => {
      flushSync(applyTheme)
    })

    if (typeof transition?.finished?.finally === "function") {
      transition.finished.finally(cleanup)
    } else {
      cleanup()
    }

    const ready = transition?.ready
    if (ready && typeof ready.then === "function") {
      ready.then(() => {
        document.documentElement.animate(
          { clipPath },
          {
            duration,
            easing: "ease-in-out",
            fill: "forwards",
            pseudoElement: "::view-transition-new(root)",
          }
        )
      })
    }
  }, [variant, duration, isDark])

  if (!mounted) return null

  return (
    <button
      type="button"
      ref={buttonRef}
      onClick={toggleTheme}
      className={cn(
        "p-2 rounded-lg transition-colors duration-200",
        "hover:bg-gray-100 dark:hover:bg-gray-900",
        className
      )}
      aria-label="Toggle theme"
      {...props}
    >
      {isDark ? (
        <Sun className="size-5" />
      ) : (
        <Moon className="size-5" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
