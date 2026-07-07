

import {
  Certificate01Icon,
  CpuIcon,
  ChampionIcon,
  BookOpen01Icon,
  Mic01Icon,
  Github01Icon,
  Linkedin01Icon,
  Mail01Icon,
  CodeIcon,
  MentoringIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";


const ENGAGEMENTS = [
  {
    role: "Technology Facilitator",
    org: "BuildNation (Ispahani AI Accelerator)",
    desc: "Facilitated a 30-hour intensive workshop for senior management, focusing on AI proficiency and the \"Game of Skill\" framework to transform leadership and operational efficiency.",
  },
  {
    role: "Lead Judge",
    org: "IIUC Tech Fest 2025",
    desc: "Primary adjudicator for the Robo Soccer competition. Evaluated inter-university teams on mechanical design, programming efficiency, and tactical execution.",
  },
  {
    role: "Workshop Instructor",
    org: "IEEE RAS & Automation Society IIUC",
    desc: "Designed and delivered a comprehensive technical workshop on Robo Soccer assembly. Mentored participants on chassis construction, motor control, and wireless comms.",
  },
] as const;

const COURSES = [
  { title: "PCB Design and Fabrication", type: "5-Day Workshop", issuer: "IEEE RAS IIUC SBC", icon: CpuIcon },
  { title: "Microcontroller & Robotics", type: "45-Hour Course", issuer: "Desikarigor Training Circle", icon: CpuIcon },
  { title: "Embedded Design Challenge", type: "Participation", issuer: "Embedded System & Robotics Group", icon: CpuIcon },
  { title: "Bluetooth & RF Controlled Robot", type: "Workshop", issuer: "Embedded System & Robotics Group", icon: CpuIcon },
  { title: "Full Stack Web Development (Node.js)", type: "40-Hour Course", issuer: "mPair Lab", icon: CodeIcon },
  { title: "Scientific Research Paper Writing", type: "Workshop", issuer: "IEEE, IIUC", icon: BookOpen01Icon },
  { title: "Inter-University Hackathon 2020", type: "24-Hour Event", issuer: "FSE, IIUC", icon: CodeIcon },
  { title: "Soccer Bot Challenge / Robot-Fight", type: "Participant", issuer: "IIUC Tech Fest", icon: CpuIcon },
] as const;

const LEADERSHIP = [
  { role: "Executive Member", org: "Embedded & Robotics Group, EEE, IIUC", date: "2022", current: false },
  { role: "Former Ambassador", org: "mPair Lab", date: "Mar 2021 - Sep 2021", current: false },
  { role: "Assistant Trainer", org: "Technotra Robotics Association", date: "2019 - 2021", current: false },
  { role: "Volunteer", org: "IIUC Tech Fest (Robo Fight Segment)", date: "2020", current: false },
] as const;

const SOCIALS = [
  { href: "https://github.com/FK-R", icon: Github01Icon, label: "GitHub" },
  { href: "https://www.linkedin.com/in/fkr-uddin/", icon: Linkedin01Icon, label: "LinkedIn" },
  { href: "mailto:fakwer.uddin@gmail.com", icon: Mail01Icon, label: "Email" },
] as const;

/* ------------------------------------------------------------------ */
/*  Shared primitives                                                 */
/* ------------------------------------------------------------------ */

const Card = ({
  children,
  className = "",
  noPadding = false,
}: {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}) => (
  <div
    className={`
      relative overflow-hidden rounded-2xl sm:rounded-3xl border transition-colors duration-300 ease-out
      bg-white border-slate-200/80 shadow-sm
      dark:bg-[#0a0a0a] dark:border-white/10
      hover:border-slate-300 dark:hover:border-[#ADFA1D]/30
      ${noPadding ? "" : "p-5 sm:p-6 md:p-8"}
      ${className}
    `}
  >
    {/* Subtle inner ambient glow */}
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#ADFA1D]/0 to-[#ADFA1D]/[0.02] dark:to-[#ADFA1D]/[0.05]" />
    <div className="relative z-10 flex h-full flex-col">{children}</div>
  </div>
);

const SectionHeading = ({
  icon,
  iconWrapClass,
  title,
  size = "lg",
}: {
  icon: any;
  iconWrapClass: string;
  title: string;
  size?: "lg" | "xl";
}) => (
  <div
    className={`mb-6 flex items-center gap-3 border-b border-slate-100 pb-4 dark:border-white/5 ${
      size === "xl" ? "sm:mb-8" : ""
    }`}
  >
    <div className={`shrink-0 rounded-xl p-2.5 ${iconWrapClass}`}>
      <HugeiconsIcon icon={icon} className="h-5 w-5" />
    </div>
    <h2
      className={`font-bold tracking-tight text-slate-900 dark:text-white ${
        size === "xl" ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"
      }`}
    >
      {title}
    </h2>
  </div>
);

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function MoreInfoPage() {
  return (
    <main className="relative">
      {/* --- HEADER --- */}
      <header className="mb-10 sm:mb-16">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 shadow-sm dark:border-[#ADFA1D]/20 dark:bg-[#ADFA1D]/5 sm:mb-6">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#6a9911] opacity-75 dark:bg-[#ADFA1D]" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#6a9911] dark:bg-[#ADFA1D]" />
          </span>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-[#5c850e] dark:text-[#ADFA1D] sm:text-xs">
            Beyond The Code
          </p>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tighter text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
          Impact &amp; Engagements
        </h1>
        <p className="mt-4 max-w-2xl text-base text-slate-600 dark:text-slate-400 sm:text-lg">
          A comprehensive overview of my leadership roles, technical workshops, competition
          achievements, and community involvement.
        </p>
      </header>

      {/* --- BENTO GRID --- */}
      <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-12">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-5 sm:gap-6 lg:col-span-7">
          {/* Professional Engagements — simple left-rail timeline,
              consistent on every viewport instead of a desktop-only
              zig-zag that breaks below md. */}
          <Card>
            <SectionHeading
              icon={Mic01Icon}
              iconWrapClass="bg-[#ADFA1D]/10 text-[#5c850e] dark:text-[#ADFA1D]"
              title="Professional Engagements"
              size="xl"
            />

            <ol className="relative space-y-6 pl-7 sm:pl-8">
              <div
                aria-hidden
                className="absolute bottom-2 left-[9px] top-2 w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent dark:via-white/10 sm:left-[11px]"
              />
              {ENGAGEMENTS.map((item) => (
                <li key={item.role} className="group relative">
                  <span
                    aria-hidden
                    className="absolute -left-7 top-1 h-5 w-5 rounded-full border-2 border-white bg-slate-200 shadow-sm transition-colors group-hover:bg-[#ADFA1D] dark:border-[#0a0a0a] dark:bg-white/20 sm:-left-8 sm:h-6 sm:w-6"
                  />
                  <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 transition-colors group-hover:border-[#ADFA1D]/30 dark:border-white/5 dark:bg-white/5 sm:p-5">
                    <h3 className="mb-1 text-base font-bold text-slate-900 dark:text-white sm:text-lg">
                      {item.role}
                    </h3>
                    <p className="mb-2.5 text-sm font-semibold text-[#5c850e] dark:text-[#ADFA1D] sm:mb-3">
                      {item.org}
                    </p>
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Card>

          {/* Courses & Workshops */}
          <Card>
            <SectionHeading
              icon={BookOpen01Icon}
              iconWrapClass="bg-blue-500/10 text-blue-600 dark:text-blue-400"
              title="Courses & Workshops"
            />

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {COURSES.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-3 rounded-2xl border border-transparent bg-slate-50 p-4 transition-colors hover:border-slate-200 dark:bg-white/5 dark:hover:border-white/10"
                >
                  <HugeiconsIcon
                    icon={item.icon}
                    className="mt-1 h-4 w-4 shrink-0 text-slate-400"
                  />
                  <div className="min-w-0">
                    <h4 className="mb-1 text-sm font-semibold leading-tight text-slate-900 dark:text-slate-200">
                      {item.title}
                    </h4>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
                      <span className="rounded bg-[#ADFA1D]/10 px-1.5 py-0.5 font-medium text-[#5c850e] dark:text-[#ADFA1D]">
                        {item.type}
                      </span>
                      <span className="truncate">{item.issuer}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-5 sm:gap-6 lg:col-span-5">
          {/* Key Achievements */}
          <Card>
            <SectionHeading
              icon={ChampionIcon}
              iconWrapClass="bg-amber-500/10 text-amber-600 dark:text-amber-400"
              title="Key Achievements"
            />

            <div className="flex flex-col gap-4">
              <div className="group relative overflow-hidden rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-500/20 dark:bg-amber-500/5">
                <HugeiconsIcon
                  icon={Certificate01Icon}
                  aria-hidden
                  className="pointer-events-none absolute -right-4 -top-4 h-24 w-24 text-amber-500 opacity-10 transition-transform duration-500 group-hover:scale-110"
                />
                <span className="relative mb-3 inline-block rounded-full bg-amber-200/50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-800 dark:bg-amber-500/20 dark:text-amber-300">
                  Champion
                </span>
                <h3 className="relative mb-1 font-bold text-slate-900 dark:text-white">
                  Embedded System Challenge
                </h3>
                <p className="relative text-sm text-slate-600 dark:text-slate-400">
                  Tech Fest 2020 • Faculty of Science &amp; Engineering, IIUC
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-colors hover:border-cyan-500/30 dark:border-white/10 dark:bg-white/5">
                <span className="mb-3 inline-block rounded-full bg-cyan-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400">
                  Selected Team
                </span>
                <h3 className="mb-1 font-bold text-slate-900 dark:text-white">
                  National Hackathon on Frontier Tech
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Feb 2020 • Organized by &quot;idea&quot; at Independent University, Bangladesh
                </p>
              </div>
            </div>
          </Card>

          {/* Leadership & Volunteering */}
          <Card>
            <SectionHeading
              icon={MentoringIcon}
              iconWrapClass="bg-purple-500/10 text-purple-600 dark:text-purple-400"
              title="Leadership & Volunteering"
            />

            <ul className="space-y-4">
              {LEADERSHIP.map((item, idx) => (
                <li
                  key={item.role}
                  className={`flex items-start justify-between gap-3 pb-4 ${
                    idx !== LEADERSHIP.length - 1
                      ? "border-b border-slate-100 dark:border-white/5"
                      : "pb-0"
                  }`}
                >
                  <div className="min-w-0">
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-200">
                      {item.role}
                    </h4>
                    <p className="mt-0.5 truncate text-xs text-slate-500">{item.org}</p>
                  </div>
                  <span
                    className={`shrink-0 whitespace-nowrap rounded px-2 py-1 text-[10px] font-semibold ${
                      item.current
                        ? "bg-[#ADFA1D]/10 text-[#5c850e] dark:text-[#ADFA1D]"
                        : "bg-slate-100 text-slate-400 dark:bg-white/5 dark:text-slate-500"
                    }`}
                  >
                    {item.date}
                  </span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Contact CTA */}
          <Card className="mt-auto border-transparent bg-slate-900 dark:border-[#ADFA1D]/20 dark:bg-[#ADFA1D]/5">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h3 className="font-bold text-white dark:text-[#ADFA1D]">Let&apos;s collaborate.</h3>
                <p className="mt-1 text-sm text-slate-400">Available for new opportunities.</p>
              </div>
              <div className="flex gap-2">
                {SOCIALS.map(({ href, icon, label }) => (
                  <Link
                    key={label}
                    href={href}
                    aria-label={label}
                    className="rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-[#ADFA1D] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ADFA1D]"
                  >
                    <HugeiconsIcon icon={icon} className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}