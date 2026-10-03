import { ThemeProvider } from "@/components/theme-provider"
import { BlocksBackground } from "@/components/ui/blocks-bg"
import { Navbar } from "@/components/ui/navbar"
import { TooltipProvider } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { Geist, JetBrains_Mono, Merriweather } from "next/font/google"
import "./globals.css"
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
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="fixed bottom-0 z-30">
            <Navbar />
          </div>

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
