import { Briefcase, Calendar, MapPin } from "lucide-react";

// Types for strict TypeScript safety
interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

// Data extracted directly from your professional profile
const experiences: ExperienceItem[] = [
  {
    id: "nlytes",
    role: "Founder",
    company: "Nlytes, Chittagong",
    location: "Chittagong, Bangladesh",
    period: "June 2024 – January 2026",
    responsibilities: [
      "Led technical architecture for inventory and e-commerce solutions, focusing on system efficiency and logic flow.",
      "Managed cross-functional teams under tight deadlines by prioritizing core functionalities (MVP) and resource allocation.",
      "Strategic Note: Decided to wind down operations to pursue a specialized career path in the Semiconductor industry.",
    ],
  },
  {
    id: "al-hasanain",
    role: "Admin Officer",
    company: "Al Hasanain, Chittagong",
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
    company: "mPair Technologies Ltd, Chittagong",
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
    company: "mPair Technologies Ltd, Chittagong",
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
    company: "EcoVation Bangladesh, Chittagong",
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
    <div className="w-full max-w-4xl mx-auto px-4 py-12">
      <div className="flex items-center gap-3 mb-10 border-b pb-4">
        <Briefcase className="h-7 w-7 text-primary" />
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          Professional Experience
        </h2>
      </div>

      <div className="relative border-l border-muted-foreground/20 ml-4 md:ml-6 space-y-12">
        {experiences.map((exp) => (
          <div key={exp.id} className="relative pl-8 md:pl-10 group">
            {/* Timeline node icon */}
            <div className="absolute -left-[17px] top-1.5 flex h-8 w-8 items-center justify-center rounded-full border bg-background text-muted-foreground group-hover:border-primary group-hover:text-primary transition-colors duration-300 shadow-sm">
              <Briefcase className="h-4 w-4" />
            </div>

            {/* Experience Content Card */}
            <div className="flex flex-col space-y-2">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                <h3 className="text-xl font-semibold text-foreground tracking-tight">
                  {exp.role}
                </h3>
                
                <div className="flex items-center text-sm text-muted-foreground font-medium bg-muted px-2.5 py-1 rounded-full w-fit">
                  <Calendar className="mr-1.5 h-3.5 w-3.5" />
                  {exp.period}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium text-primary">
                <span className="font-semibold">{exp.company}</span>
                <span className="hidden md:inline text-muted-foreground/40">|</span>
                <span className="flex items-center text-muted-foreground">
                  <MapPin className="mr-1 h-3.5 w-3.5" />
                  {exp.location}
                </span>
              </div>

              <ul className="mt-3 space-y-2.5 text-muted-foreground text-sm leading-relaxed list-disc list-outside pl-4">
                {exp.responsibilities.map((bullet, index) => (
                  <li key={index} className="hover:text-foreground transition-colors duration-200">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperiencePage;