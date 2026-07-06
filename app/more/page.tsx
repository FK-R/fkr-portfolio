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
  MentoringIcon
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

// Premium Structural Card Component
const Card = ({ children, className = "", noPadding = false }: { children: React.ReactNode; className?: string, noPadding?: boolean }) => (
  <div className={`
    relative overflow-hidden rounded-3xl border transition-all duration-300 ease-out
    bg-white border-slate-200/80 shadow-sm
    dark:bg-[#0a0a0a] dark:border-white/10
    hover:border-slate-300 dark:hover:border-[#ADFA1D]/30
    ${noPadding ? '' : 'p-6 md:p-8'}
    ${className}
  `}>
    {/* Subtle inner ambient glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#ADFA1D]/0 to-[#ADFA1D]/[0.02] dark:to-[#ADFA1D]/[0.05] pointer-events-none" />
    <div className="relative z-10 h-full flex flex-col">{children}</div>
  </div>
);

export default function MoreInfoPage() {
  return (
    <main className="min-h-screen relative overflow-hidden transition-colors duration-300 bg-slate-50 text-slate-900 dark:bg-[#050505] dark:text-slate-100 selection:bg-[#ADFA1D]/30 selection:text-[#5c850e] dark:selection:bg-[#ADFA1D]/30 dark:selection:text-[#ADFA1D] pb-24">
      
      {/* Background Ambience */}
      <div className="absolute top-[5%] right-[10%] -z-10 h-[500px] w-[500px] rounded-full blur-[120px] bg-[#ADFA1D]/5 dark:bg-[#ADFA1D]/[0.04]" />
      
      <div className="mx-auto max-w-6xl px-6 pt-24 relative z-10">
        
        {/* --- HEADER --- */}
        <header className="mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 shadow-sm dark:border-[#ADFA1D]/20 dark:bg-[#ADFA1D]/5 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6a9911] dark:bg-[#ADFA1D] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6a9911] dark:bg-[#ADFA1D]"></span>
            </span>
            <p className="text-xs font-semibold tracking-widest uppercase text-[#5c850e] dark:text-[#ADFA1D]">
              Beyond The Code
            </p>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tighter sm:text-6xl text-slate-900 dark:text-white mb-4">
            Impact & Engagements
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
            A comprehensive overview of my leadership roles, technical workshops, competition achievements, and community involvement.
          </p>
        </header>

        {/* --- STRUCTURAL BENTO GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* LEFT COLUMN (Wider for heavy text content) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* 1. Professional Engagements (Timeline Structure) */}
            <Card>
              <div className="flex items-center gap-3 mb-8 border-b border-slate-100 dark:border-white/5 pb-4">
                <div className="p-2.5 rounded-xl bg-[#ADFA1D]/10 text-[#5c850e] dark:text-[#ADFA1D]">
                  <HugeiconsIcon icon={Mic01Icon} className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight">Professional Engagements</h2>
              </div>

              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-white/10 before:to-transparent">
                
                {/* Engagement 1 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-white dark:border-[#0a0a0a] bg-slate-200 dark:bg-white/20 group-hover:bg-[#ADFA1D] transition-colors shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10" />
                  <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 hover:border-[#ADFA1D]/30 transition-colors">
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">Technology Facilitator</h3>
                    <p className="text-sm font-semibold text-[#5c850e] dark:text-[#ADFA1D] mb-3">BuildNation (Ispahani AI Accelerator)</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      Facilitated a 30-hour intensive workshop for senior management, focusing on AI proficiency and the "Game of Skill" framework to transform leadership and operational efficiency.
                    </p>
                  </div>
                </div>

                {/* Engagement 2 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-white dark:border-[#0a0a0a] bg-slate-200 dark:bg-white/20 group-hover:bg-[#ADFA1D] transition-colors shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10" />
                  <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 hover:border-[#ADFA1D]/30 transition-colors">
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">Lead Judge</h3>
                    <p className="text-sm font-semibold text-[#5c850e] dark:text-[#ADFA1D] mb-3">IIUC Tech Fest 2025</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      Primary adjudicator for the Robo Soccer competition. Evaluated inter-university teams on mechanical design, programming efficiency, and tactical execution.
                    </p>
                  </div>
                </div>

                {/* Engagement 3 */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-white dark:border-[#0a0a0a] bg-slate-200 dark:bg-white/20 group-hover:bg-[#ADFA1D] transition-colors shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10" />
                  <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 hover:border-[#ADFA1D]/30 transition-colors">
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">Workshop Instructor</h3>
                    <p className="text-sm font-semibold text-[#5c850e] dark:text-[#ADFA1D] mb-3">IEEE RAS & Automation Society IIUC</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      Designed and delivered a comprehensive technical workshop on Robo Soccer assembly. Mentored participants on chassis construction, motor control, and wireless comms.
                    </p>
                  </div>
                </div>

              </div>
            </Card>

            {/* 2. Courses & Workshops (Data Table / Grid Structure) */}
            <Card>
              <div className="flex items-center gap-3 mb-6 border-b border-slate-100 dark:border-white/5 pb-4">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <HugeiconsIcon icon={BookOpen01Icon} className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight">Courses & Workshops</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  { title: "PCB Design and Fabrication", type: "5-Day Workshop", issuer: "IEEE RAS IIUC SBC", icon: CpuIcon },
                  { title: "Microcontroller & Robotics", type: "45-Hour Course", issuer: "Desikarigor Training Circle", icon: CpuIcon },
                  { title: "Embedded Design Challenge", type: "Participation", issuer: "Embedded System & Robotics Group", icon: CpuIcon },
                  { title: "Bluetooth & RF Controlled Robot", type: "Workshop", issuer: "Embedded System & Robotics Group", icon: CpuIcon },
                  { title: "Full Stack Web Development (Node.js)", type: "40-Hour Course", issuer: "mPair Lab", icon: CodeIcon },
                  { title: "Scientific Research Paper Writing", type: "Workshop", issuer: "IEEE, IIUC", icon: BookOpen01Icon },
                  { title: "Inter-University Hackathon 2020", type: "24-Hour Event", issuer: "FSE, IIUC", icon: CodeIcon },
                  { title: "Soccer Bot Challenge / Robot-Fight", type: "Participant", issuer: "IIUC Tech Fest", icon: CpuIcon },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-transparent hover:border-slate-200 dark:hover:border-white/10 transition-colors">
                    <div className="mt-1">
                      <HugeiconsIcon icon={item.icon} className="h-4 w-4 text-slate-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-slate-900 dark:text-slate-200 leading-tight mb-1">{item.title}</h4>
                      <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                        <span className="font-medium text-[#5c850e] dark:text-[#ADFA1D] bg-[#ADFA1D]/10 px-1.5 py-0.5 rounded">{item.type}</span>
                        <span className="truncate">{item.issuer}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

          </div>

          {/* RIGHT COLUMN (Narrower for highlight cards) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* 3. Achievements (Trophy layout) */}
            <Card>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  <HugeiconsIcon icon={ChampionIcon} className="h-5 w-5" />
                </div>
                <h2 className="text-xl font-bold tracking-tight">Key Achievements</h2>
              </div>
              
              <div className="flex flex-col gap-4">
                <div className="p-5 rounded-2xl border border-amber-200 dark:border-amber-500/20 bg-amber-50 dark:bg-amber-500/5 relative overflow-hidden group">
                  <div className="absolute -right-4 -top-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
                    <HugeiconsIcon icon={Certificate01Icon} className="h-24 w-24 text-amber-500" />
                  </div>
                  <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-200/50 dark:bg-amber-500/20 text-amber-800 dark:text-amber-300 mb-3">
                    Champion
                  </span>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1">Embedded System Challenge</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Tech Fest 2020 • Faculty of Science & Engineering, IIUC</p>
                </div>

                <div className="p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 hover:border-cyan-500/30 transition-colors">
                  <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 mb-3">
                    Selected Team
                  </span>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1">National Hackathon on Frontier Tech</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Feb 2020 • Organized by "idea" at Independent University, Bangladesh</p>
                </div>
              </div>
            </Card>

            {/* 4. Leadership & Volunteer */}
            <Card>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                  <HugeiconsIcon icon={MentoringIcon} className="h-5 w-5" />
                </div>
                <h2 className="text-xl font-bold tracking-tight">Leadership & Volunteering</h2>
              </div>

              <div className="space-y-4">
                {[
                  { role: "Executive Member", org: "Embedded & Robotics Group, EEE, IIUC", date: "Present" },
                  { role: "Former Ambassador", org: "mPair Lab", date: "Mar 2021 - Sep 2021" },
                  { role: "Assistant Trainer", org: "Technotra Robotics Association", date: "2019 - 2021" },
                  { role: "Volunteer", org: "IIUC Tech Fest (Robo Fight Segment)", date: "2020" },
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-start pb-4 border-b border-slate-100 dark:border-white/5 last:border-0 last:pb-0">
                    <div>
                      <h4 className="font-semibold text-sm text-slate-900 dark:text-slate-200">{item.role}</h4>
                      <p className="text-xs text-slate-500 mt-0.5">{item.org}</p>
                    </div>
                    <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-white/5 px-2 py-1 rounded">
                      {item.date}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            {/* 5. Connect / Socials Footer Card */}
            <Card className="mt-auto bg-slate-900 dark:bg-[#ADFA1D]/5 border-transparent dark:border-[#ADFA1D]/20">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="font-bold text-white dark:text-[#ADFA1D]">Let's collaborate.</h3>
                  <p className="text-sm text-slate-400 dark:text-slate-400 mt-1">Available for new opportunities.</p>
                </div>
                <div className="flex gap-2">
                  <Link href="#" className="p-2.5 rounded-full bg-white/10 text-white hover:bg-[#ADFA1D] hover:text-black transition-colors">
                    <HugeiconsIcon icon={Github01Icon} className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="p-2.5 rounded-full bg-white/10 text-white hover:bg-[#ADFA1D] hover:text-black transition-colors">
                    <HugeiconsIcon icon={Linkedin01Icon} className="h-5 w-5" />
                  </Link>
                  <Link href="mailto:hello@example.com" className="p-2.5 rounded-full bg-white/10 text-white hover:bg-[#ADFA1D] hover:text-black transition-colors">
                    <HugeiconsIcon icon={Mail01Icon} className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </Card>

          </div>
        </div>
      </div>
    </main>
  );
}