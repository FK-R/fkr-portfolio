import Link from "next/link"
import { HugeiconsIcon } from "@hugeicons/react"
import { 
  CircuitBoardIcon, 
  Activity03Icon, 
  NeuralNetworkIcon, 
  Mortarboard02Icon,
  Certificate01Icon,
  SchoolIcon
} from "@hugeicons/core-free-icons"

export default function EducationTimeline() {
  const educationData = [
    {
      institution: "International Islamic University Chittagong",
      url: "https://www.iiuc.ac.bd/",
      degree: "Bachelor of Science in Electrical and Electronic Engineering (EEE)",
      duration: "2018 — 2023",
      location: "Chattogram, Bangladesh",
      icon: Mortarboard02Icon,
      points: [
        {
          icon: CircuitBoardIcon,
          text: "Acquired comprehensive core competencies across analog and digital circuit architectures, automated control systems, microelectronics processing, and high-efficiency power electronics frameworks."
        },
        {
          icon: Activity03Icon,
          text: "Spearheaded the design and structural logic of a smart grid architecture simulation, successfully modeling the distribution balancing mechanics between renewable energy generators and localized storage matrix systems."
        },
        {
          icon: NeuralNetworkIcon,
          text: "Directed engineering processes for a low-power wireless sensor network (WSN) engineered for environmental monitoring, implementing data telemetry pipes to enable continuous remote analytics."
        }
      ]
    },
    {
      institution: "Omargani M.E.S. College",
      url: null,
      degree: "Higher Secondary Certificate (HSC) — Science",
      duration: "2016 — 2018",
      location: "Chattogram, Bangladesh",
      icon: Certificate01Icon,
      points: [
        {
          icon: SchoolIcon,
          text: "Developed strong foundational knowledge in Higher Mathematics, Physics, and Chemistry, setting the analytical groundwork for engineering studies."
        }
      ]
    },
    {
      institution: "Govt. Muslim High School",
      url: null,
      degree: "Secondary School Certificate (SSC) — Science",
      duration: "2011 — 2016",
      location: "Chattogram, Bangladesh",
      icon: SchoolIcon,
      points: [
        {
          icon: Certificate01Icon,
          text: "Graduated with a focus on general science disciplines, participating in regional science fairs and academic competitions."
        }
      ]
    }
  ]

  return (
    <div className="w-full relative overflow-hidden">
  

      <div className="mx-auto max-w-3xl space-y-8 z-10">
        {educationData.map((edu, index) => (
          <div 
            key={index} 
            className="relative overflow-hidden rounded-4xlxl border border-white/50 p-6 transition-all duration-300 hover:border-white/20 hover:shadow-2xl dark:border-zinc-800/40 dark:hover:border-zinc-700/60 backdrop-blur-sm bg-white/5 dark:bg-transparent"
          >
         

            <div className="flex items-start gap-4 pl-2">
                <HugeiconsIcon icon={edu.icon} className="h-6 w-6 text-[#ADFA1D]" />
              <div className="flex-1 space-y-4">
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                  <div>
                    {edu.url ? (
                      <Link
                        href={edu.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-bold tracking-tight text-slate-900 transition-colors hover:text-[#ADFA1D] dark:text-slate-50 dark:hover:text-[#ADFA1D]"
                      >
                        {edu.institution}
                      </Link>
                    ) : (
                      <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-50">
                        {edu.institution}
                      </span>
                    )}
                    <p className="mt-1 text-sm font-medium text-slate-600 dark:text-zinc-400">
                      {edu.degree}
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-start gap-1 sm:items-end shrink-0">
                    <span className="inline-flex items-center rounded-full bg-slate-100/50 px-3 py-0.5 text-xs font-semibold text-slate-600 dark:bg-zinc-800/30 dark:text-zinc-400 backdrop-blur-lg border border-slate-200/50 dark:border-zinc-700/50">
                      {edu.duration}
                    </span>
                    <span className="text-xs text-slate-400 dark:text-zinc-500">
                      {edu.location}
                    </span>
                  </div>
                </div>

      
                <div className="space-y-3 pt-2">
                  {edu.points.map((point, ptIndex) => (
                    <div key={ptIndex} className="flex items-start gap-3 text-sm leading-relaxed text-slate-600 dark:text-zinc-400">
          
                        <HugeiconsIcon icon={point.icon} className="h-3.5 w-3.5 text-[#ADFA1D]" />
                   
                      <p className="flex-1">{point.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}