

import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft } from "@hugeicons/core-free-icons";
import { BookOpen } from "@hugeicons/core-free-icons";
import { LicenseDraftIcon } from "@hugeicons/core-free-icons";
import { Calendar } from "@hugeicons/core-free-icons";
import { MapsSquare01Icon } from "@hugeicons/core-free-icons";
import { Search02Icon } from "@hugeicons/core-free-icons";
import Link from "next/link";

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
    tags: ["IoT", "Embedded Systems", "Smart City"]
  },
  {
    title: "Design and Implementation of Smart Head-Motion Controlled Wheelchair",
    date: "November 2023",
    doi: "10.1109/IEEECONF58110.2023.10520528",
    ieeeUrl: "https://ieeexplore.ieee.org/document/10520528",
    conference: "2023 IEEE Engineering Informatics",
    location: "Dhaka, Bangladesh",
    tags: ["Robotics", "Assistive Tech", "Biomedical"]
  },
  {
    title: "IoT Based Smart Automatic Water Management System with RF Communication and Remote Monitoring",
    date: "February 2022",
    doi: "10.1109/ICISET54810.2022.9775927",
    ieeeUrl: "https://ieeexplore.ieee.org/document/9775927",
    conference: "2022 International Conference on Innovations in Science, Engineering and Technology (ICISET)",
    location: "Chittagong, Bangladesh",
    tags: ["IoT", "RF Communication", "Automation"]
  },
  {
    title: "Design and Implementation of Surface Disinfection Robot Using UVC Light and Liquid Sanitizer",
    date: "February 2022",
    doi: "10.1109/ICISET54810.2022.9775838",
    ieeeUrl: "https://ieeexplore.ieee.org/document/9775838",
    conference: "2022 International Conference on Innovations in Science, Engineering and Technology (ICISET)",
    location: "Chittagong, Bangladesh",
    tags: ["Robotics", "Automation", "UVC Disinfection"]
  }
];

export default function PublicationsPage() {

  return (
    <main className="min-h-screen relative overflow-hidden transition-colors duration-500 bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 selection:bg-emerald-500/20 selection:text-emerald-600 dark:selection:bg-emerald-500/30 dark:selection:text-emerald-400">
      
      {/* Background Micro Glows */}
      <div className="absolute top-0 right-1/4 -z-10 h-[400px] w-[400px] rounded-full blur-[140px] bg-emerald-500/5 dark:bg-emerald-500/[0.02]" />
      <div className="absolute bottom-1/4 left-1/4 -z-10 h-[400px] w-[400px] rounded-full blur-[140px] bg-cyan-500/5 dark:bg-cyan-500/[0.02]" />

      <div className="mx-auto max-w-4xl px-6 py-12 md:py-20 relative z-10">
        
        {/* --- TOP UTILITY CONTROLS --- */}
        <div className="flex items-center justify-between mb-12">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 transition-colors group"
          >
            <HugeiconsIcon icon={ArrowLeft} className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Overview
          </Link>
          
        </div>

        {/* --- PAGE HEADER --- */}
        <header className="mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">
            <HugeiconsIcon icon={BookOpen} className="h-3.5 w-3.5" />
            Research Repository
          </div>
          <h1 className="text-3xl font-black tracking-tight sm:text-5xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 dark:from-slate-50 dark:via-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
            IEEE Publications
          </h1>
          <p className="max-w-xl text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Peer-reviewed conference proceedings focusing on industrial automation, intelligent transportation frameworks, and IoT edge hardware design systems.
          </p>
        </header>

        {/* --- PUBLICATIONS LIST ENGINE --- */}
        <div className="space-y-6">
          {publicationsData.map((pub, index) => (
            <div 
              key={index}
              className="group relative rounded-2xl border p-6 backdrop-blur-md transition-all duration-300
                bg-white/70 border-slate-200/80 shadow-sm
                dark:bg-slate-950/40 dark:border-slate-900 dark:hover:border-slate-800/80
                hover:border-emerald-500/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.02)]"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="space-y-3 flex-1">
                  
                  {/* Tags Row */}
                  <div className="flex flex-wrap items-center gap-2">
                    {pub.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-600 dark:bg-slate-900 dark:text-slate-400 border border-slate-200/50 dark:border-slate-800">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Paper Title */}
                  <h2 className="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-50 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-200 leading-snug">
                    <Link href={pub.ieeeUrl} target="_blank" rel="noopener noreferrer">
                      {pub.title}
                    </Link>
                  </h2>

                  {/* Conference Citation Info */}
                  <div className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                <HugeiconsIcon icon={LicenseDraftIcon}  className="h-4 w-4 mt-0.5 text-slate-400 shrink-0" />
                    <p className="leading-normal font-medium">{pub.conference}</p>
                  </div>

                  {/* Logistics Metadata */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500 dark:text-slate-500 pt-1">
                    <span className="flex items-center gap-1">
                      <HugeiconsIcon icon={Calendar} className="h-3.5 w-3.5" />
                      {pub.date}
                    </span>
                    <span className="flex items-center gap-1">
               <HugeiconsIcon icon={MapsSquare01Icon}   className="h-3.5 w-3.5" />
                      {pub.location}
                    </span>
                    <span className="font-mono text-[11px] bg-slate-100 dark:bg-slate-900/60 px-1.5 py-0.5 rounded border border-transparent dark:border-slate-800/40">
                      DOI: {pub.doi}
                    </span>
                  </div>

                </div>

                {/* IEEE Action Link Button */}
                <div className="pt-2 md:pt-0 shrink-0">
                  <Link 
                    href={pub.ieeeUrl}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex h-9 items-center justify-center gap-2 rounded-xl text-xs font-semibold px-4 border shadow-sm transition-all
                      bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-emerald-600
                      dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-emerald-400"
                  >
 
                    IEEE Xplore
              <HugeiconsIcon icon={Search02Icon}  className="h-3 w-3 opacity-60" />
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* --- SYSTEM FOOTER --- */}
        <footer className="mt-20 border-t border-slate-200/60 dark:border-slate-900 pt-8 text-center text-xs text-slate-400 dark:text-slate-600">
          <p>© {new Date().getFullYear()} Md. Fakwer Uddin. Documented via Digital Object Identifiers.</p>
        </footer>

      </div>
    </main>
  );
}