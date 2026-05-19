import { FloatingDock } from "@workspace/ui/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import { BookOpenCheck, CircleStar, CircuitBoard, GraduationCap, ZoomIn } from "lucide-react";

export function Navbar() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "Web Projects",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
        {
      title: "Embedded Projects",
      icon: (
        <CircuitBoard className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Experiences",
      icon: (
        <CircleStar className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Education",
      icon: (
        <GraduationCap className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Publications",
      icon: (
        <BookOpenCheck className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/publications",
    },
    {
      title: "More",
      icon: (
        <ZoomIn className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
  return (
    
    <div className="flex items-center justify-center w-full fixed bottom-0 md:left-0 md:right-0 md:p-4 p-28">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
