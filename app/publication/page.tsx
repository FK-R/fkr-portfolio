import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft, BookOpen, LicenseDraftIcon, Calendar, MapsSquare01Icon, Search02Icon, Mortarboard01Icon, TestTube01Icon, CircuitBoardIcon } from "@hugeicons/core-free-icons";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";


interface Publication {
  title: string;
  date: string;
  doi: string;
  ieeeUrl: string;
  conference: string;
  location: string;
  tags: string[];
}

const publicationsData: Publication[] = [
  {
    title: "Design and Implementation of Road Monitoring System using Embedded System and IoT",
    date: "September 2024",
    doi: "10.1109/ACIT62333.2024.10712498",
    ieeeUrl: "https://ieeexplore.ieee.org/document/10712498",
    conference: "2024 14th International Conference on Advanced Computer Information Technologies (ACIT)",
    location: "Ceske Budejovice, Czech Republic",
    tags: ["IoT", "Embedded Systems", "Smart City"],
  },
  {
    title: "Design and Implementation of Smart Head-Motion Controlled Wheelchair",
    date: "November 2023",
    doi: "10.1109/IEEECONF58110.2023.10520528",
    ieeeUrl: "https://ieeexplore.ieee.org/document/10520528",
    conference: "2023 IEEE Engineering Informatics",
    location: "Dhaka, Bangladesh",
    tags: ["Robotics", "Assistive Tech", "Biomedical"],
  },
  {
    title: "IoT Based Smart Automatic Water Management System with RF Communication and Remote Monitoring",
    date: "February 2022",
    doi: "10.1109/ICISET54810.2022.9775927",
    ieeeUrl: "https://ieeexplore.ieee.org/document/9775927",
    conference: "2022 International Conference on Innovations in Science, Engineering and Technology (ICISET)",
    location: "Chittagong, Bangladesh",
    tags: ["IoT", "RF Communication", "Automation"],
  },
  {
    title: "Design and Implementation of Surface Disinfection Robot Using UVC Light and Liquid Sanitizer",
    date: "February 2022",
    doi: "10.1109/ICISET54810.2022.9775838",
    ieeeUrl: "https://ieeexplore.ieee.org/document/9775838",
    conference: "2022 International Conference on Innovations in Science, Engineering and Technology (ICISET)",
    location: "Chittagong, Bangladesh",
    tags: ["Robotics", "Automation", "UVC Disinfection"],
  },
];

const profileLinks = [
  {
    label: "IEEE Xplore",
    href: "https://ieeexplore.ieee.org/",
    icon: (
  
  <HugeiconsIcon className="size-4" icon={CircuitBoardIcon} />
    ),
  },
  {
    label: "ResearchGate",
    href: "https://www.researchgate.net/",
    icon: (
  <HugeiconsIcon className="size-4" icon={TestTube01Icon} />
    ),
  },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/",
    icon: (
 <HugeiconsIcon className="size-4" icon={Mortarboard01Icon} />
    ),
  },
];

function ProfileIconLink({ label, href, icon }: (typeof profileLinks)[number]) {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300/70 bg-white/70 text-zinc-700 shadow-[0_10px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl transition-all duration-200 hover:-translate-y-0.5 hover:border-[#ADFA1D]/50 hover:text-[#ADFA1D] dark:border-zinc-800 dark:bg-black/40 dark:text-zinc-200 dark:hover:border-[#ADFA1D]/50 dark:hover:text-[#ADFA1D]"
        >
          {icon}
        </Link>
      </TooltipTrigger>
      <TooltipContent
        side="top"
        sideOffset={8}
        // className="rounded-full border border-zinc-200/70 bg-white/80 px-3 py-1.5 text-[11px] font-semibold text-zinc-700 shadow-[0_10px_25px_rgba(0,0,0,0.1)] backdrop-blur-xl dark:border-zinc-800 dark:bg-black/70 dark:text-zinc-200"
      >
        {label}
      </TooltipContent>
    </Tooltip>
  );
}

export default function PublicationsPage() {
  return (
    <main>
      <div className="relative">
        <header className="mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#ADFA1D]/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#ADFA1D]">
            <HugeiconsIcon icon={BookOpen} className="h-3.5 w-3.5" />
            Research Repository
          </div>
          <h1 className="bg-linear-to-r from-zinc-950 via-zinc-800 to-zinc-700 bg-clip-text text-3xl font-black tracking-tight text-transparent sm:text-5xl dark:from-zinc-50 dark:via-zinc-200 dark:to-zinc-400">
            IEEE Publications
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            Peer-reviewed conference proceedings focusing on industrial automation, intelligent transportation frameworks, and IoT edge hardware design systems.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            {profileLinks.map((link) => (
              <ProfileIconLink key={link.label} {...link} />
            ))}
          </div>
        </header>

        <div className="space-y-6">
          {publicationsData.map((pub, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-zinc-200/70 bg-white/45 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.05)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-0.5 hover:border-[#ADFA1D]/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:border-zinc-800/80 dark:bg-black/40 dark:hover:border-[#ADFA1D]/30"
            >
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                <div className="flex-1 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    {pub.tags.map((tag) => (
                      <span key={tag} className="rounded border border-zinc-200/70 bg-zinc-100/80 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-400">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-lg font-bold leading-snug tracking-tight text-zinc-900 transition-colors duration-200 group-hover:text-[#ADFA1D] dark:text-zinc-50 dark:group-hover:text-[#ADFA1D]">
                    <Link href={pub.ieeeUrl} target="_blank" rel="noopener noreferrer">
                      {pub.title}
                    </Link>
                  </h2>

                  <div className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <HugeiconsIcon icon={LicenseDraftIcon} className="mt-0.5 h-4 w-4 shrink-0 text-zinc-400" />
                    <p className="font-medium leading-normal">{pub.conference}</p>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1 text-xs text-zinc-500 dark:text-zinc-500">
                    <span className="flex items-center gap-1">
                      <HugeiconsIcon icon={Calendar} className="h-3.5 w-3.5" />
                      {pub.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <HugeiconsIcon icon={MapsSquare01Icon} className="h-3.5 w-3.5" />
                      {pub.location}
                    </span>
                    <span className="rounded border border-transparent bg-zinc-100/80 px-1.5 py-0.5 font-mono text-[11px] dark:bg-zinc-900/60 dark:border-zinc-800/40">
                      DOI: {pub.doi}
                    </span>
                  </div>
                </div>

                <div className="shrink-0 pt-2 md:pt-0">
                  <Link
                    href={pub.ieeeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 items-center justify-center gap-2 rounded-xl border border-zinc-300/70 bg-white/80 px-4 text-xs font-semibold text-zinc-700 shadow-sm transition-all hover:bg-zinc-50 hover:text-[#ADFA1D] dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-[#ADFA1D]"
                  >
                    IEEE Xplore
                    <HugeiconsIcon icon={Search02Icon} className="h-3 w-3 opacity-60" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      
      </div>
    </main>
  );
}