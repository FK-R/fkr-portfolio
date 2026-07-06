"use client"

import { motion } from "framer-motion"
import { Cpu, Layers, Radio, CheckCircle2 } from "lucide-react"

interface HardwareProject {
  id: string;
  title: string;
  category: "Large-Scale IoT" | "Industrial Automation" | "Research & Labs";
  description: string;
  hardwareStack: string[];
  protocols: string[];
  keyFeatures: string[];
  liveStatus: string;
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
    hardwareStack: [
      "ESP32",
      "Atmega328P",
      "UVC Hardware",
      "IMU Sensors",
    ],
    protocols: ["I2C", "SPI", "UART", "RF"],
    keyFeatures: [
      "Published IEEE implementations.",
      "Road monitoring infrastructure with cloud analytics.",
      "Low-power rapid prototyping architectures.",
    ],
    liveStatus: "4+ IEEE Publications",
  },
];

export default function EmbeddedProjectsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-32 border-b border-[var(--border)]">
        <motion.div
          className="mx-auto max-w-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-[#ADFA1D]/10">
              <Cpu className="h-6 w-6 text-[#ADFA1D]" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Embedded Projects
            </h1>
          </div>
          <p className="max-w-2xl text-lg text-[var(--muted-foreground)]">
            Production-grade IoT solutions, industrial automation systems, embedded firmware architectures, and research-driven hardware projects.
          </p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <motion.div
          className="mx-auto max-w-7xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {embeddedProjects.map((project) => (
              <motion.article
                key={project.id}
                variants={itemVariants}
                className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 hover:border-[#ADFA1D]/30 hover:shadow-lg transition-all duration-300"
              >
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#ADFA1D]/10 text-[#ADFA1D]">
                    {project.category}
                  </span>
                  <span className="text-xs text-[#ADFA1D] font-medium">
                    ● {project.liveStatus}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold mb-3">{project.title}</h2>

                {/* Description */}
                <p className="text-sm text-[var(--muted-foreground)] mb-5 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {project.keyFeatures.map((feature) => (
                    <div key={feature} className="flex gap-2 items-start text-sm">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-[#ADFA1D] flex-shrink-0" />
                      <span className="text-[var(--muted-foreground)]">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="border-t border-[var(--border)] pt-4 space-y-3">
                  <div className="flex flex-wrap gap-2 items-center">
                    <Layers className="h-4 w-4 text-[var(--muted-foreground)]" />
                    {project.hardwareStack.map((item) => (
                      <span
                        key={item}
                        className="px-2 py-1 text-xs rounded bg-[var(--secondary-button)] border border-[var(--border)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 items-center">
                    <Radio className="h-4 w-4 text-[var(--muted-foreground)]" />
                    {project.protocols.map((protocol) => (
                      <span key={protocol} className="text-xs font-medium text-[#ADFA1D]">
                        {protocol}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  )
}
