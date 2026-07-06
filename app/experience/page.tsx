
import { CpuChargeIcon } from "@hugeicons/core-free-icons";
import { Navigation03Icon } from "@hugeicons/core-free-icons";
import { Calendar03Icon } from "@hugeicons/core-free-icons";
import { Briefcase08Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

// Types for strict TypeScript safety
interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  isStrategic?: boolean;
}

// Data extracted directly from your professional profile and synced chronologically
const experiences: ExperienceItem[] = [
  {
    id: "robotics-trainer",
    role: "Robotics Trainer",
    company: "Al Hasanain and Gunners English School",
    location: "Chittagong, Bangladesh",
    period: "March 2026 – Present",
    responsibilities: [
      "Provide hands-on training in embedded system projects and programming with Arduino, covering both theoretical concepts and practical applications.",
    ],
  },
  {
    id: "nlytes",
    role: "Founder",
    company: "Nlytes",
    location: "Chittagong, Bangladesh",
    period: "June 2024 – January 2026",
    responsibilities: [
      "Led technical architecture for inventory and e-commerce solutions, focusing on system efficiency and logic flow.",
      "Managed cross-functional teams under tight deadlines by prioritizing core functionalities (MVP) and resource allocation.",
      "Strategic Note: Decided to wind down operations to pursue a specialized career path in the Semiconductor industry.",
    ],
    isStrategic: true,
  },
  {
    id: "al-hasanain-admin",
    role: "Jr. Admin Officer",
    company: "Al Hasanain",
    location: "Chittagong, Bangladesh",
    period: "April 2025 – July 2025",
    responsibilities: [
      "Managed multi-functional operations including student affairs, guardian relations, and comprehensive HR administration.",
      "Handled critical HR documentation such as drafting offer letters, appointments, and salary increment records.",
      "Streamlined organizational workflows using ERP software and provided cross-departmental support in accounting and IT.",
      "Ensured high operational efficiency through professional communication and systematic resource management.",
    ],
  },
  {
    id: "mpair-support",
    role: "Support Engineer",
    company: "mPair Technologies Ltd",
    location: "Chittagong, Bangladesh",
    period: "January 2023 – March 2024",
    responsibilities: [
      "Developed and maintained high-performance full-stack web applications and administrative dashboards using Next.js and Node.js.",
      "Engineered hardware-to-cloud integrations, ensuring seamless data flow between IoT devices and web interfaces.",
      "Led software testing and UI/UX design initiatives to drive product optimization and user experience.",
      "Bridged technical development and user requirements to ensure delivered solutions met complex end-user needs.",
    ],
  },
  {
    id: "mpair-intern",
    role: "Intern (Jr. IoT Developer)",
    company: "mPair Technologies Ltd",
    location: "Chittagong, Bangladesh",
    period: "January 2022 – October 2022",
    responsibilities: [
      "Hardware Prototyping: Designed and tested embedded systems using Arduino and ESP32 platforms, focusing on sensor integration and data acquisition.",
      "Full-Stack Support: Assisted in developing backend services using Node.js to visualize real-time sensor data for IoT dashboards.",
      "Rapid Iteration: Contributed to the design of PCB layouts for various internal projects, optimizing for size and power consumption.",
    ],
  },
  {
    id: "ecovation",
    role: "Assistant Engineer",
    company: "EcoVation Bangladesh",
    location: "Chittagong, Bangladesh",
    period: "October 2021 – December 2021",
    responsibilities: [
      "R&D & Manufacturing: Spearheaded the research, design, and assembly of low-cost and sustainable, handmade lighting solutions for off-grid communities.",
      "Technical Mentorship: Empowered Rohingya-affected residents in Teknaf by providing hands-on training in solar-light assembly and maintenance, fostering local self-reliance.",
    ],
  },
];

const ExperiencePage = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-16 animate-fade-in transition-colors duration-300">
      {/* Section Header */}
      <div className="flex items-center gap-3.5 mb-14 border-b border-zinc-200 dark:border-zinc-800 pb-5">
        <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200">
     <HugeiconsIcon icon={Briefcase08Icon} className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
        </div>
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Professional Experience
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
            Engineering hardware logic and full-stack web architectures.
          </p>
        </div>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative border-l-2 border-zinc-200 dark:border-zinc-800 ml-4 md:ml-8 space-y-12 after:absolute after:bottom-0 after:left-[-2px] after:h-16 after:w-[2px] after:bg-gradient-to-b after:from-zinc-200 after:to-transparent dark:after:from-zinc-800">
        {experiences.map((exp) => {
          const isCurrent = exp.period.includes("Present");

          return (
            <div key={exp.id} className="relative pl-8 md:pl-12 group animate-slide-up">
              {/* Interactive Timeline Node */}
              <div 
                className={`absolute -left-[11px] top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 
                  bg-white dark:bg-zinc-950 transition-all duration-300 ease-in-out shadow-sm
                  ${isCurrent 
                    ? "border-emerald-500 dark:border-emerald-400 scale-110 ring-4 ring-emerald-500/10 dark:ring-emerald-400/10" 
                    : "border-zinc-300 dark:border-zinc-700 group-hover:border-emerald-500 dark:group-hover:border-emerald-400 group-hover:scale-110"
                  }`}
              >
                {isCurrent && (
                  <span className="absolute h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                )}
              </div>

              {/* Card Meta Container */}
              <div className="flex flex-col space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200">
                    {exp.role}
                  </h3>
                  
                  <div className="flex items-center text-xs font-semibold tracking-wide uppercase text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 px-3 py-1 rounded-md w-fit shadow-2xs">
             <HugeiconsIcon icon={Calendar03Icon}  className="mr-1.5 h-3.5 w-3.5 text-zinc-400" />
                    {exp.period}
                  </div>
                </div>

                {/* Sub-header detailing Company & Location */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium">
                  <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                    {exp.company}
                  </span>
                  <span className="hidden sm:inline text-zinc-300 dark:text-zinc-700">|</span>
                  <span className="flex items-center text-zinc-500 dark:text-zinc-400">
             <HugeiconsIcon icon={Navigation03Icon}  className="mr-1 h-3.5 w-3.5 opacity-70" />
                    {exp.location}
                  </span>
                </div>

                {/* Main Accomplishments List */}
                <ul className="mt-2 space-y-3 text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed list-none pl-0">
                  {exp.responsibilities.map((bullet, index) => {
                    const isStrategicNote = bullet.startsWith("Strategic Note:");
                    
                    if (isStrategicNote) {
                      return (
                        <li 
                          key={index} 
                          className="mt-4 p-3 rounded-lg border border-emerald-500/20 bg-emerald-50/30 dark:bg-emerald-950/10 text-zinc-700 dark:text-zinc-300 flex items-start gap-2.5 shadow-2xs"
                        >
                      <HugeiconsIcon icon={CpuChargeIcon}  className="h-4 w-4 mt-0.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                          <span className="text-xs font-medium">
                            <strong className="text-emerald-700 dark:text-emerald-400">Strategic Pivot:</strong>{" "}
                            {bullet.replace("Strategic Note:", "").trim()}
                          </span>
                        </li>
                      );
                    }

                    return (
                      <li key={index} className="relative pl-5 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors duration-150 group/item">
                        <span className="absolute left-0 top-[7px] h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600 group-hover/item:bg-emerald-500 dark:group-hover/item:bg-emerald-400 transition-colors duration-150" />
                        {bullet}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExperiencePage;