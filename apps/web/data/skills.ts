import { Cpu, Globe, Terminal, Database, Layers, Smartphone } from 'lucide-react'

export const skillsData = [
  {
    title: "Hardware & Embedded Systems",
    description: "Microcontrollers, firmware design & peripheral interfaces",
    icon: Cpu,
    technologies: ["Arduino Architecture", "ESP32 / ESP8266", "Microcontrollers", "STM32 Ecosystem", "FreeRTOS", "I2C / SPI / UART", "Firmware (C/C++)"],
    color: "#ADFA1D",
    span: "sm:col-span-2",
  },
  {
    title: "Frontend Core",
    description: "Reactive layouts & complex interfaces",
    icon: Globe,
    technologies: ["React", "Next.js", "TailwindCSS", "Zustand", "TypeScript"],
    color: "cyan",
  },
  {
    title: "Backend & Runtimes",
    description: "APIs, distributed architectures & services",
    icon: Terminal,
    technologies: ["Node.js", "Express.js", "Hono.js", "FastAPI", "Go", "Prisma ORM"],
    color: "purple",
  },
  {
    title: "Data Infrastructure",
    description: "Relational databases & high performance caches",
    icon: Database,
    technologies: ["PostgreSQL", "MongoDB", "MySQL", "SQLite", "Redis"],
    color: "amber",
  },
  {
    title: "Cloud & DevOps",
    description: "Optimized deployment & modern runtime environments",
    icon: Layers,
    technologies: ["Vercel", "AWS", "Google Cloud", "Docker"],
    color: "blue",
  },
  {
    title: "Mobile & Frameworks",
    description: "Cross-platform integration & configuration control",
    icon: Smartphone,
    technologies: ["React Native", "Expo", "Git Frameworks", "Figma"],
    color: "orange",
    span: "sm:col-span-2 lg:col-span-1",
  },
]
