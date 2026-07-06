
import Link from 'next/link';
import { HugeiconsIcon } from "@hugeicons/react";
import { CircuitBoardIcon } from "@hugeicons/core-free-icons";
import { Activity03Icon } from "@hugeicons/core-free-icons";
import { NeuralNetworkIcon } from "@hugeicons/core-free-icons";
import { Mortarboard02Icon } from "@hugeicons/core-free-icons";

export default function EducationTimeline() {

  return (
    <div className="w-full min-h-screen transition-colors duration-500 bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 md:ml-6 space-y-12">
          
          {/* Timeline Entry */}
          <div className="relative pl-8 group">

            <span className="absolute -left-[21px] top-1.5 bg-white dark:bg-slate-950 border-2 border-indigo-600 dark:border-indigo-400 rounded-xl p-2 text-indigo-600 dark:text-indigo-400 shadow-sm dark:shadow-[0_0_15px_rgba(99,102,241,0.15)] transition-colors duration-300 group-hover:border-cyan-500 dark:group-hover:border-cyan-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
            <HugeiconsIcon icon={Mortarboard02Icon} className="h-5 w-5" />
            </span>

            {/* Core Institution Details */}
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <Link href={"https://www.iiuc.ac.bd/"} className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
                  International Islamic University Chittagong
                </Link>
                <span className="inline-flex items-center text-xs font-semibold tracking-wider text-indigo-700 dark:text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-md shrink-0 w-fit">
                  2018 — 2023
                </span>
              </div>
              
              <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                Bachelor of Science in Electrical and Electronic Engineering (EEE)
              </p>
              <p className="text-xs text-slate-400 dark:text-slate-500 tracking-wide">
                Chittagong, Bangladesh
              </p>
            </div>

            {/* Paraphrased Experience Breakdown */}
            <div className="mt-8 space-y-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
              
              {/* Point 1 */}
              <div className="flex gap-3 items-start">
                <div className="mt-0.5 p-1 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 text-slate-500 dark:text-slate-400">
           <HugeiconsIcon icon={CircuitBoardIcon}  className="h-3.5 w-3.5" />
                </div>
                <p>
                  Acquired comprehensive core competencies across analog and digital circuit architectures, automated control systems, microelectronics processing, and high-efficiency power electronics frameworks.
                </p>
              </div>

              {/* Point 2 */}
              <div className="flex gap-3 items-start">
                <div className="mt-0.5 p-1 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 text-slate-500 dark:text-slate-400">
                <HugeiconsIcon icon={Activity03Icon}  className="h-3.5 w-3.5" />
                </div>
                <p>
                  Spearheaded the design and structural logic of a smart grid architecture simulation, successfully modeling the distribution balancing mechanics between renewable energy generators and localized storage matrix systems.
                </p>
              </div>

              {/* Point 3 */}
              <div className="flex gap-3 items-start">
                <div className="mt-0.5 p-1 rounded bg-slate-100 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 text-slate-500 dark:text-slate-400">
                  <HugeiconsIcon icon={NeuralNetworkIcon} className="h-3.5 w-3.5" />
                </div>
                <p>
                  Directed engineering processes for a low-power wireless sensor network (WSN) engineered for environmental monitoring, implementing data telemetry pipes to enable continuous remote analytics.
                </p>
              </div>

            </div>

          </div>
          
        </div>
      </div>
    </div>
  );
}