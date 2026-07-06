import { Geist, Geist_Mono } from "next/font/google"
import "@/styles/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Metadata } from "next"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Md. Fakwer Uddin | Embedded Systems & Full-Stack Engineer",
  description: "Bridging the gap between physical hardware architectures and modern software ecosystems. I design robust IoT infrastructures and high-performance modular web layouts.",
  keywords: ["embedded systems", "full-stack", "IoT", "web development", "firmware"],
  authors: [{ name: "Md. Fakwer Uddin" }],
  creator: "Md. Fakwer Uddin",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fakwer.dev",
    title: "Md. Fakwer Uddin | Embedded Systems & Full-Stack Engineer",
    description: "Bridging the gap between physical hardware architectures and modern software ecosystems.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md. Fakwer Uddin | Embedded Systems & Full-Stack Engineer",
    description: "Bridging the gap between physical hardware architectures and modern software ecosystems.",
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#000000",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="min-h-screen pt-16">
            {children}
          </main>
          <footer className="border-t border-[var(--border)] bg-[var(--card)] py-12 text-center text-sm text-[var(--muted-foreground)]">
            <p>&copy; {new Date().getFullYear()} Md. Fakwer Uddin. All rights reserved.</p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
