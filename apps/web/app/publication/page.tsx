"use client"

import { motion } from "framer-motion"
import { 
  BookOpen, 
  Calendar, 
  MapPin, 
  ExternalLink,
  FileText,
  Award
} from 'lucide-react'

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
              <BookOpen className="h-6 w-6 text-[#ADFA1D]" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Publications
            </h1>
          </div>
          <p className="max-w-2xl text-lg text-[var(--muted-foreground)]">
            Peer-reviewed conference proceedings focusing on industrial automation, IoT infrastructure, and embedded hardware design systems.
          </p>
        </motion.div>
      </section>

      {/* Publications Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="mx-auto max-w-4xl space-y-6">
          {publicationsData.map((pub, index) => (
            <motion.article
              key={index}
              custom={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 hover:border-[#ADFA1D]/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="space-y-3 flex-1">
                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-2">
                    {pub.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-[#ADFA1D]/10 text-[#ADFA1D] border border-[#ADFA1D]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h2 className="text-lg font-bold group-hover:text-[#ADFA1D] transition-colors">
                    <a href={pub.ieeeUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {pub.title}
                    </a>
                  </h2>

                  {/* Conference */}
                  <div className="flex items-start gap-2 text-sm text-[var(--muted-foreground)]">
                    <Award className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <p className="font-medium">{pub.conference}</p>
                  </div>

                  {/* Metadata */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[var(--muted-foreground)] pt-1">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {pub.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {pub.location}
                    </span>
                    <span className="font-mono text-xs bg-[var(--secondary-button)] px-2 py-0.5 rounded border border-[var(--border)]">
                      DOI: {pub.doi}
                    </span>
                  </div>
                </div>

                {/* IEEE Link */}
                <div className="pt-2 md:pt-0 shrink-0">
                  <a
                    href={pub.ieeeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold border border-[#ADFA1D] text-[#ADFA1D] hover:bg-[#ADFA1D]/10 transition-colors"
                  >
                    <FileText className="h-4 w-4" />
                    IEEE Xplore
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  )
}
