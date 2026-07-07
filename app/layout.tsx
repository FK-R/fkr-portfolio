import {
  Geist,
  Geist_Mono,
  JetBrains_Mono,
  Merriweather,
} from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Navbar } from "@/components/ui/navbar"
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"
import { FlickeringGrid } from "@/components/ui/flickering-grid"
import { BlocksBackground } from "@/components/ui/blocks-bg"
import { TooltipProvider } from "@/components/ui/tooltip"
const merriweatherHeading = Merriweather({
  subsets: ["latin"],
  variable: "--font-heading",
})
const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontSans.variable,
        "font-mono",
        jetbrainsMono.variable,
        merriweatherHeading.variable
      )}
    >
      <body className="relative">
        <BlocksBackground />
        <ThemeProvider>
          <div className="fixed bottom-0 z-30">
            <Navbar />
          </div>
          {/* <AnimatedThemeToggler className="fixed bottom-0 z-50 p-5" /> */}
          <TooltipProvider>
            <div className="px-4 py-10 pb-24 md:px-20 md:pt-20 md:pb-24">
              {children}
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
