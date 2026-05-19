import { 
  Cpu, 
  Layers, 
  Terminal, 
  Database, 
  Globe, 
  Smartphone, 
  Mail,
  Calendar,
  FileText
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

// Furnished Card component supporting dark/light variants natively
const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`
    rounded-2xl border p-6 backdrop-blur-md transition-all duration-500
    bg-white/70 border-slate-200/80 text-slate-900 shadow-sm
    dark:bg-slate-950/40 dark:border-slate-800/80 dark:text-slate-100
    hover:border-[#ADFA1D]/50 hover:shadow-[0_8px_30px_rgba(173,250,29,0.08)]
    dark:hover:border-[#ADFA1D]/40 dark:hover:shadow-[0_0_30px_rgba(173,250,29,0.12)]
    ${className}
  `}>
    {children}
  </div>
);

export default function PortfolioHome() {
  return (
    <main className="min-h-screen relative overflow-hidden transition-colors duration-500 bg-slate-50 text-black dark:bg-black dark:text-slate-100 selection:bg-[#ADFA1D]/30 selection:text-[#5c850e] dark:selection:bg-[#ADFA1D]/30 dark:selection:text-[#ADFA1D]">
      
      {/* Dynamic Ambient Background Glow Elements */}
      <div className="absolute top-0 left-1/4 -z-10 h-[500px] w-[500px] rounded-full blur-[140px] transition-colors duration-700 bg-[#ADFA1D]/10 dark:bg-[#ADFA1D]/[0.04]" />
      <div className="absolute top-1/4 right-1/4 -z-10 h-[500px] w-[500px] rounded-full blur-[140px] transition-colors duration-700 bg-cyan-500/5 dark:bg-cyan-500/[0.02]" />

      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24 relative z-10">
        
        {/* --- HEADER & UTILITY BAR --- */}
        <header className="mb-16 space-y-6">
          <div className="flex items-center justify-between">
            <p className="text-xs font-bold tracking-widest uppercase text-[#6a9911] dark:text-[#ADFA1D] bg-[#ADFA1D]/20 dark:bg-[#ADFA1D]/10 border border-[#ADFA1D]/30 dark:border-[#ADFA1D]/20 px-3 py-1 rounded-full shadow-sm">
              [ Embedded Systems & Full-Stack Engineer ]
            </p>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl font-black tracking-tight sm:text-6xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 dark:from-slate-50 dark:via-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
              Md. Fakwer Uddin
            </h1>
            <p className="max-w-xl text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
              Bridging the gap between physical hardware architectures and modern software ecosystems. I design robust IoT infrastructures and modular web systems.
            </p>
          </div>

          {/* Furnished Action Layout */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            {/* Primary Button updated to use the neon accent elegantly */}
            <button className="group inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-slate-900 text-white font-medium text-sm px-5 shadow-md hover:bg-slate-800 hover:text-[#ADFA1D] dark:bg-[#ADFA1D] dark:text-slate-950 dark:hover:bg-[#bcfc47] transition-all">
              <Calendar className="h-4 w-4 transition-transform group-hover:scale-110" />
              Schedule a call
            </button>
            
            <button className="group inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white text-slate-700 font-medium text-sm px-5 shadow-sm hover:border-[#ADFA1D]/40 hover:bg-[#ADFA1D]/5 dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:border-[#ADFA1D]/30 transition-all">
              <FileText className="h-4 w-4 text-slate-400 group-hover:text-[#6a9911] dark:group-hover:text-[#ADFA1D] transition-colors" />
              Resume
            </button>

            <div className="hidden sm:block h-6 w-px bg-slate-200 dark:bg-slate-800 mx-1" />

            {/* Micro-interactive Connect Matrix */}
            <div className="flex items-center gap-1">
              <a 
                href="mailto:fakwer.uddin@nlytes.com" 
                className="p-2.5 rounded-xl border border-transparent text-slate-500 hover:text-[#6a9911] hover:bg-[#ADFA1D]/10 dark:text-slate-400 dark:hover:text-[#ADFA1D] dark:hover:border-slate-800 dark:hover:bg-slate-900/40 transition-all"
                aria-label="Email Address"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2.5 rounded-xl border border-transparent text-slate-500 hover:text-[#6a9911] hover:bg-[#ADFA1D]/10 dark:text-slate-400 dark:hover:text-[#ADFA1D] dark:hover:border-slate-800 dark:hover:bg-slate-900/40 transition-all"
                aria-label="GitHub Repository"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="p-2.5 rounded-xl border border-transparent text-slate-500 hover:text-[#6a9911] hover:bg-[#ADFA1D]/10 dark:text-slate-400 dark:hover:text-[#ADFA1D] dark:hover:border-slate-800 dark:hover:bg-slate-900/40 transition-all"
                aria-label="LinkedIn Network"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </header>

        {/* --- SKILLS BENTO GRID --- */}
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          
          {/* Card 1: Hardware & Embedded Core (Now using the new accent color) */}
          <Card className="sm:col-span-2 border-slate-200 dark:border-[#ADFA1D]/20">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <h3 className="font-bold text-lg tracking-tight">Hardware & Embedded Systems</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Microcontrollers, low-level architecture & sensor integration</p>
              </div>
              <span className="p-2 rounded-xl bg-[#ADFA1D]/20 text-[#6a9911] dark:bg-[#ADFA1D]/10 dark:text-[#ADFA1D]"><Cpu className="h-5 w-5" /></span>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Arduino (UNO, Nano, Micro, Mini)", "ESP32", "ESP8266", "Microcontrollers", "STM32", "FreeRTOS", "I2C/SPI/UART", "Firmware (C/C++)"].map((tech) => (
                <span key={tech} className="rounded-lg bg-[#ADFA1D]/10 dark:bg-[#ADFA1D]/5 border border-[#ADFA1D]/30 dark:border-[#ADFA1D]/20 px-3 py-1 text-xs font-semibold text-[#5c850e] dark:text-[#ADFA1D] transition-colors hover:bg-[#ADFA1D]/20">
                  {tech}
                </span>
              ))}
            </div>
          </Card>

          {/* Card 2: Frontend */}
          <Card>
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <h3 className="font-bold text-lg tracking-tight">Frontend</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">User systems & reactive layers</p>
              </div>
              <span className="p-2 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400"><Globe className="h-5 w-5" /></span>
            </div>
            <div className="mt-6 flex flex-wrap gap-1.5">
              {["React", "Next.js", "TailwindCSS", "Zustand", "Tanstack Query", "TypeScript"].map((tech) => (
                <span key={tech} className="rounded-md bg-slate-100 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 px-2.5 py-1 text-xs font-medium text-slate-600 dark:text-slate-300">
                  {tech}
                </span>
              ))}
            </div>
          </Card>

          {/* Card 3: Backend */}
          <Card>
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <h3 className="font-bold text-lg tracking-tight">Backend</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">APIs, runtimes & logical layout</p>
              </div>
              <span className="p-2 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400"><Terminal className="h-5 w-5" /></span>
            </div>
            <div className="mt-6 flex flex-wrap gap-1.5">
              {["Node.js", "Express.js", "Hono.js", "Fastapi", "Go", "Prisma ORM"].map((tech) => (
                <span key={tech} className="rounded-md bg-slate-100 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 px-2.5 py-1 text-xs font-medium text-slate-600 dark:text-slate-300">
                  {tech}
                </span>
              ))}
            </div>
          </Card>

          {/* Card 4: Database Logic */}
          <Card>
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <h3 className="font-bold text-lg tracking-tight">Databases</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Relational & transactional storage</p>
              </div>
              <span className="p-2 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400"><Database className="h-5 w-5" /></span>
            </div>
            <div className="mt-6 flex flex-wrap gap-1.5">
              {["MongoDB", "MySQL", "PostgreSQL", "SQLite", "Redis"].map((tech) => (
                <span key={tech} className="rounded-md bg-slate-100 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 px-2.5 py-1 text-xs font-medium text-slate-600 dark:text-slate-300">
                  {tech}
                </span>
              ))}
            </div>
          </Card>

          {/* Card 5: Cloud Engineering */}
          <Card>
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <h3 className="font-bold text-lg tracking-tight">Cloud & Deploy</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Edge hosting & scalable runtimes</p>
              </div>
              <span className="p-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400"><Layers className="h-5 w-5" /></span>
            </div>
            <div className="mt-6 flex flex-wrap gap-1.5">
              {["Vercel", "Google Cloud", "AWS", "Netlify", "Docker"].map((tech) => (
                <span key={tech} className="rounded-md bg-slate-100 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 px-2.5 py-1 text-xs font-medium text-slate-600 dark:text-slate-300">
                  {tech}
                </span>
              ))}
            </div>
          </Card>

          {/* Card 6: Mobile Core & Tools */}
          <Card className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <h3 className="font-bold text-lg tracking-tight">Mobile & Tools</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Native clients & systems sync</p>
              </div>
              <span className="p-2 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400"><Smartphone className="h-5 w-5" /></span>
            </div>
            <div className="mt-6 flex flex-wrap gap-1.5">
              {["React Native", "Expo", "Git", "GitHub/GitLab", "Figma"].map((tech) => (
                <span key={tech} className="rounded-md bg-slate-100 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800 px-2.5 py-1 text-xs font-medium text-slate-600 dark:text-slate-300">
                  {tech}
                </span>
              ))}
            </div>
          </Card>

        </section>
      </div>
    </main>
  );
}