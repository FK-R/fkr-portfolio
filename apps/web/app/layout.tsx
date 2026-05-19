import { Geist, Geist_Mono, Inter } from "next/font/google"
// @ts-ignore: CSS module import type declarations are defined elsewhere
import "@workspace/ui/styles/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@workspace/ui/lib/utils";
import { Navbar } from "@workspace/ui/components/navbar";
import { AnimatedThemeToggler } from "@workspace/ui/components/animated-theme-toggler";

const inter = Inter({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
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
      className={cn("antialiased", fontMono.variable, "font-sans", inter.variable)}
    >
      <body>
        
        <ThemeProvider
        attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
   <div className="fixed bottom-0 z-30">
       
        <Navbar/> </div>
              <AnimatedThemeToggler className=" fixed bottom-0 p-5 z-50"/>
   
        {children}
        
        </ThemeProvider>
      </body>
    </html>
  )
}
