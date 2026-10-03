import AceternityCard from "@/components/ui/AceternityCard"
import {
  Calendar03Icon,
  ComputerTerminal01Icon,
  CpuChargeIcon,
  Database01Icon,
  Github01Icon,
  Globe02Icon,
  LayerIcon,
  Linkedin01Icon,
  MailAtSign02Icon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import Link from "next/link"
export const metadata = {
  title: "Md. Fakwer Uddin | Embedded Systems & Full-Stack Engineer",
  description:
    "Bridging the gap between physical hardware architectures and modern software ecosystems. I design robust IoT infrastructures and high-performance modular web layouts.",
}

export default function PortfolioHome() {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[size:24px_24px]" />
      <div className="-trangray-x-1/2 absolute top-[-10%] left-1/2 -z-10 h-[600px] w-[1000px] rounded-full bg-gradient-to-tr from-[#ADFA1D]/10 via-cyan-500/[0.05] to-transparent opacity-60 blur-[140px] dark:from-[#ADFA1D]/[0.02] dark:via-cyan-500/[0.02]" />
      <div className="relative z-10">
        <header className="mb-16 space-y-8">
          <div>
            <span className="relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none">
              {/* Spinning Accent Border Loop */}
              <span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg,#E2E8F0_0%,#E2E8F0_25%,#ADFA1D_50%,#E2E8F0_75%,#E2E8F0_100%)] dark:bg-[conic-gradient(from_90deg,#0F172A_0%,#0F172A_25%,#ADFA1D_50%,#0F172A_75%,#0F172A_100%)]" />
              <div className="inline-flex h-full w-full cursor-default items-center justify-center rounded-full bg-white px-3.5 py-1 text-xs font-semibold tracking-wide text-gray-800 backdrop-blur-3xl dark:bg-gray-950 dark:text-[#ADFA1D]">
                ⚡ Embedded Systems & Full-Stack Engineer
              </div>
            </span>
          </div>

          <div className="space-y-6">
            <h1 className="bg-gradient-to-b from-gray-950 via-gray-800 to-gray-700 bg-clip-text text-5xl font-black tracking-tight text-transparent sm:text-7xl dark:from-white dark:via-gray-200 dark:to-gray-400">
              Md. Fakwer Uddin
            </h1>
            <p className="max-w-2xl text-base leading-relaxed font-normal text-gray-600 sm:text-lg dark:text-gray-400">
              Bridging the gap between physical hardware architectures and
              modern software ecosystems. I design robust IoT infrastructures
              and high-performance, modular web layouts.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="mailto:fakwer.uddin@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="inline-flex h-11 animate-shimmer items-center justify-center gap-2 rounded-xl border border-gray-200 bg-[linear-gradient(110deg,#fff,45%,#f1f5f9,55%,#fff)] bg-[size:200%_100%] px-5 text-sm font-semibold text-gray-900 shadow-sm shadow-gray-200 transition-colors focus:outline-none dark:border-gray-800/80 dark:bg-[linear-gradient(110deg,#030712,45%,#1A2E05,55%,#030712)] dark:text-[#ADFA1D] dark:shadow-none">
                <HugeiconsIcon icon={Calendar03Icon} className="h-4 w-4" />
                Contact Now
              </button>
            </Link>
            {/* <button className="inline-flex h-11 animate-shimmer items-center justify-center gap-2 rounded-xl border border-gray-200 dark:border-gray-800/80 bg-[linear-gradient(110deg,#fff,45%,#f1f5f9,55%,#fff)] dark:bg-[linear-gradient(110deg,#030712,45%,#1A2E05,55%,#030712)] bg-[size:200%_100%] px-5 font-semibold text-sm text-gray-900 dark:text-[#ADFA1D] transition-colors shadow-sm shadow-gray-200 dark:shadow-none focus:outline-none">
        <HugeiconsIcon icon={Calendar03Icon}  className="h-4 w-4" />
              Schedule a call
            </button>
            <button className="group inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white/60 text-gray-700 font-medium text-sm px-5 backdrop-blur-sm hover:bg-gray-50 hover:text-black dark:border-gray-800 dark:bg-gray-950/20 dark:text-gray-300 dark:hover:bg-gray-900/60 dark:hover:text-white transition-all">
              <HugeiconsIcon icon={File02Icon}  className="h-4 w-4 text-gray-400 group-hover:text-gray-900 dark:group-hover:text-[#ADFA1D] transition-colors" />
              Resume
            </button> */}

            <div className="mx-2 hidden h-6 w-px bg-gray-200 sm:block dark:bg-gray-800/60" />

            <div className="flex items-center gap-1">
              {[
                {
                  href: "mailto:fakwer.uddin@gmail.com",
                  label: "Email Address Link",
                  icon: (
                    <HugeiconsIcon
                      icon={MailAtSign02Icon}
                      className="h-5 w-5"
                    />
                  ),
                },
                {
                  href: "https://github.com/FK-R",
                  label: "GitHub Profile Portfolio",
                  icon: (
                    <HugeiconsIcon icon={Github01Icon} className="h-5 w-5" />
                  ),
                },
                {
                  href: "https://www.linkedin.com/in/fkr-uddin/",
                  label: "LinkedIn Professional Profile",
                  icon: (
                    <HugeiconsIcon icon={Linkedin01Icon} className="h-5 w-5" />
                  ),
                },
              ].map((link, i) => (
                <Link
                  key={i}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={link.href}
                  className="rounded-xl border border-transparent p-2.5 text-gray-500 transition-all hover:bg-gray-200/50 hover:text-black dark:text-gray-400 dark:hover:border-gray-900 dark:hover:bg-gray-950 dark:hover:text-[#ADFA1D]"
                  aria-label={link.label}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </header>
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AceternityCard className="sm:col-span-2 dark:border-[#ddd]/10">
            <div className="flex items-start justify-between">
              <div className="space-y-1.5">
                <h2 className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-50">
                  Hardware & Embedded Systems
                </h2>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Microcontrollers, firmware design & peripheral interfaces
                </p>
              </div>
              <span className="rounded-xl bg-gray-100 p-2 text-gray-700 dark:bg-[#ADFA1D]/10 dark:text-[#ADFA1D]">
                {" "}
                <HugeiconsIcon icon={CpuChargeIcon} className="h-4 w-4" />
              </span>
            </div>
            <div className="mt-8 flex flex-wrap gap-1.5">
              {[
                "Arduino Architecture",
                "ESP32 / ESP8266",
                "Microcontrollers",
                "I2C / SPI / UART",
                "Firmware (C/C++)",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-gray-200/80 bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 dark:border-[#ADFA1D]/10 dark:bg-[#ADFA1D]/[0.02] dark:text-[#ADFA1D]/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </AceternityCard>
          <AceternityCard>
            <div className="flex items-start justify-between">
              <div className="space-y-1.5">
                <h2 className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-50">
                  Frontend Core
                </h2>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Reactive layouts & complex interfaces
                </p>
              </div>
              <span className="rounded-xl bg-gray-100 p-2 text-gray-700 dark:bg-cyan-500/10 dark:text-cyan-400">
                <HugeiconsIcon icon={Globe02Icon} className="h-4 w-4" />
              </span>
            </div>
            <div className="mt-8 flex flex-wrap gap-1.5">
              {[
                "React",
                "Next.js",
                "TailwindCSS",
                "TypeScript",
                "Framer Motion",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-gray-200/60 bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 dark:border-gray-800/80 dark:bg-gray-900/40 dark:text-gray-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </AceternityCard>
          <AceternityCard>
            <div className="flex items-start justify-between">
              <div className="space-y-1.5">
                <h2 className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-50">
                  Backend & Runtimes
                </h2>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  APIs, distributed architectures & services
                </p>
              </div>
              <span className="rounded-xl bg-gray-100 p-2 text-gray-700 dark:bg-purple-500/10 dark:text-purple-400">
                <HugeiconsIcon
                  icon={ComputerTerminal01Icon}
                  className="h-4 w-4"
                />
              </span>
            </div>
            <div className="mt-8 flex flex-wrap gap-1.5">
              {["Node.js", "Express.js", "REST API", "Prisma ORM"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-gray-200/60 bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 dark:border-gray-800/80 dark:bg-gray-900/40 dark:text-gray-400"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </AceternityCard>
          <AceternityCard>
            <div className="flex items-start justify-between">
              <div className="space-y-1.5">
                <h2 className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-50">
                  Data Infrastructure
                </h2>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Relational databases & high performance caches
                </p>
              </div>
              <span className="rounded-xl bg-gray-100 p-2 text-gray-700 dark:bg-amber-500/10 dark:text-amber-400">
                <HugeiconsIcon icon={Database01Icon} className="h-4 w-4" />
              </span>
            </div>
            <div className="mt-8 flex flex-wrap gap-1.5">
              {["PostgreSQL", "MySQL", "Google Sheets"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-gray-200/60 bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 dark:border-gray-800/80 dark:bg-gray-900/40 dark:text-gray-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </AceternityCard>
          <AceternityCard>
            <div className="flex items-start justify-between">
              <div className="space-y-1.5">
                <h2 className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-50">
                  Cloud & Devops
                </h2>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Optimized deployment & modern runtime environments
                </p>
              </div>
              <span className="rounded-xl bg-gray-100 p-2 text-gray-700 dark:bg-blue-500/10 dark:text-blue-400">
                <HugeiconsIcon icon={LayerIcon} className="h-4 w-4" />
              </span>
            </div>
            <div className="mt-8 flex flex-wrap gap-1.5">
              {["Vercel", "Cpanel", "VPS"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-gray-200/60 bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 dark:border-gray-800/80 dark:bg-gray-900/40 dark:text-gray-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </AceternityCard>
          {/* <AceternityCard className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-start justify-between">
              <div className="space-y-1.5">
                <h2 className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-50">
                  Mobile & Frameworks
                </h2>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Cross-platform integration & configuration control
                </p>
              </div>
              <span className="rounded-xl bg-gray-100 p-2 text-gray-700 dark:bg-orange-500/10 dark:text-orange-400">
                <HugeiconsIcon icon={SmartPhone01Icon} className="h-4 w-4" />
              </span>
            </div>
            <div className="mt-8 flex flex-wrap gap-1.5">
              {["React Native", "Expo", "Git Frameworks", "Figma"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-gray-200/60 bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 dark:border-gray-800/80 dark:bg-gray-900/40 dark:text-gray-400"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </AceternityCard> */}
        </section>
      </div>
    </main>
  )
}
