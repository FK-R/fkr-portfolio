import { CpuChargeIcon } from "@hugeicons/core-free-icons"
import { CheckmarkCircle01Icon } from "@hugeicons/core-free-icons"
import { LayerIcon } from "@hugeicons/core-free-icons"
import { BotIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
interface HardwareProject {
  id: string
  title: string
  category: "Large-Scale IoT" | "Industrial Automation" | "Research & Labs"
  description: string
  hardwareStack: string[]
  protocols: string[]
  keyFeatures: string[]
  liveStatus: string
}
const embeddedProjects: HardwareProject[] = [
  {
    id: "water-management",
    title: "IoT Dual-Tank Smart Water Management System",
    category: "Large-Scale IoT",
    description:
      "An enterprise and residential automated water distribution system monitoring real-time levels across multiple reservoirs and handling dynamic load routing.",
    hardwareStack: [
      "ESP32",
      "Ultrasonic Sensors",
      "Dual Relay Modules",
      "High-Current AC Motors",
    ],
    protocols: ["MQTT", "RF Communication", "I2C"],
    keyFeatures: [
      "Simultaneous dual-tank telemetry and depth measurement tracking.",
      "Automated dual-motor safety interlocks to prevent dry running.",
      "Cloud dashboard integration for real-time remote monitoring and overriding.",
    ],
    liveStatus: "Deployed / Operational",
  },
  {
    id: "crane-depot",
    title: "Kone Cranes Industrial Container Counter",
    category: "Industrial Automation",
    description:
      "A ruggedized hardware module designed for depot logistics tracking, using electromagnetic field disturbance to register shipping container movements.",
    hardwareStack: [
      "ESP32",
      "Industrial Inductive Proximity Sensors",
      "Optocoupler Isolation",
      "EEPROM Storage",
    ],
    protocols: ["UART", "Wi-Fi Telemetry", "SPI"],
    keyFeatures: [
      "High-precision metal mass detection calibrated specifically for Kone Cranes.",
      "Edge-side non-volatile data logging to prevent tracking loss during power drops.",
      "Real-time central registry sync for automated depot inventory tracking.",
    ],
    liveStatus: "Field Tested",
  },
  {
    id: "mushroom-environment",
    title: "Closed-Loop Automated Mushroom Chamber",
    category: "Large-Scale IoT",
    description:
      "A climate-sensitive precision agriculture station executing responsive automation loops to sustain strict microclimates.",
    hardwareStack: [
      "Arduino / Atmega",
      "DHT22",
      "Solenoid Water Valves",
      "AC Solid State Relays",
    ],
    protocols: ["I2C", "HTTP REST API"],
    keyFeatures: [
      "Autonomous responsive climate tuning.",
      "Automated target-threshold micro-spraying.",
      "Live microclimate streaming to web infrastructure.",
    ],
    liveStatus: "Active R&D",
  },
  {
    id: "ieee-research-labs",
    title: "Academic Hardware Research & Prototyping Archive",
    category: "Research & Labs",
    description:
      "A repository of academic designs, firmware studies, and hardware explorations built across multiple microcontrollers.",
    hardwareStack: ["ESP32", "Atmega328P", "UVC Hardware", "IMU Sensors"],
    protocols: ["I2C", "SPI", "UART", "RF"],
    keyFeatures: [
      "Published IEEE implementations.",
      "Road monitoring infrastructure with cloud analytics.",
      "Low-power rapid prototyping architectures.",
    ],
    liveStatus: "4+ IEEE Publications",
  },
]

export default async function ProjectsPage() {
  return (
    <section className="w-full relative">
      {/* Header */}
      <div className="mb-12 border-b border-zinc-200 pb-6 dark:border-zinc-800">
        <div className="mb-2 flex items-center gap-3">
          <HugeiconsIcon
            icon={CpuChargeIcon}
            className="h-7 w-7 text-[#ADFA1D] dark:text-[#ADFA1D]"
          />
          <h1 className="text-3xl font-bold md:text-4xl">
            Hardware & Embedded Systems
          </h1>
        </div>

        <p className="max-w-3xl text-zinc-500 dark:text-zinc-400">
          Production-grade IoT solutions, industrial automation systems,
          embedded firmware architectures, and research-driven hardware
          projects.
        </p>
      </div>

      {/* Projects */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {embeddedProjects.map((project) => (
          <article
            key={project.id}
            className="rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:shadow-lg dark:border-zinc-800 dark:hover:border-zinc-500  dark:bg-zinc-950"
          >
            {/* Top Row */}
            <div className="mb-4 flex items-center justify-between">
              <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold dark:bg-zinc-900">
                {project.category}
              </span>

              <span className="text-xs font-medium text-[#ADFA1D]">
                ● {project.liveStatus}
              </span>
            </div>

            {/* Title */}
            <h2 className="mb-3 text-xl font-bold">{project.title}</h2>

            {/* Description */}
            <p className="mb-5 text-sm text-zinc-600 dark:text-zinc-400">
              {project.description}
            </p>

            {/* Features */}
            <div className="mb-6 space-y-2">
              {project.keyFeatures.map((feature) => (
                <div key={feature} className="flex items-start gap-2 text-sm">
                  <HugeiconsIcon
                    icon={CheckmarkCircle01Icon}
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#ADFA1D]"
                  />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="space-y-3 border-t border-zinc-200 pt-4 dark:border-zinc-800">
              <div className="flex flex-wrap items-center gap-2">
                <HugeiconsIcon
                  icon={LayerIcon}
                  className="h-4 w-4 text-zinc-400"
                />
                {project.hardwareStack.map((item) => (
                  <span
                    key={item}
                    className="rounded bg-zinc-100 px-2 py-1 text-xs dark:bg-zinc-900"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <HugeiconsIcon
                  icon={BotIcon}
                  className="h-4 w-4 text-zinc-400"
                />
                {project.protocols.map((protocol) => (
                  <span
                    key={protocol}
                    className="text-xs font-medium text-[#ADFA1D]"
                  >
                    {protocol}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
