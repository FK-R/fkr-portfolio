// import { FloatingDock } from "@/components/ui/floating-dock"
// import { Home01Icon } from "@hugeicons/core-free-icons"
// import { WebProgrammingIcon } from "@hugeicons/core-free-icons"
// import { HugeiconsIcon } from "@hugeicons/react"
// import { CircuitBoardIcon } from "@hugeicons/core-free-icons"
// import { StarSquareIcon } from "@hugeicons/core-free-icons"
// import { Mortarboard02Icon } from "@hugeicons/core-free-icons"
// import { BookOpenTextIcon } from "@hugeicons/core-free-icons"
// import { MoreHorizontalSquare02Icon } from "@hugeicons/core-free-icons"

// export function Navbar() {
//   const links = [
//     {
//       title: "Home",
//       icon: (
//         <HugeiconsIcon
//           icon={Home01Icon}
//           className="h-full w-full text-neutral-500 dark:text-neutral-300"
//         />
//       ),
//       href: "/",
//     },

//     {
//       title: "Web Project",
//       icon: (
//         <HugeiconsIcon
//           icon={WebProgrammingIcon}
//           className="h-full w-full text-neutral-500 dark:text-neutral-300"
//         />
//       ),
//       href: "/web-project",
//     },
//     {
//       title: "Embedded Project",
//       icon: (
//         <HugeiconsIcon
//           icon={CircuitBoardIcon}
//           className="h-full w-full text-neutral-500 dark:text-neutral-300"
//         />
//       ),
//       href: "/embedded-project",
//     },
//     {
//       title: "Experience",
//       icon: (
//         <HugeiconsIcon
//           icon={StarSquareIcon}
//           className="h-full w-full text-neutral-500 dark:text-neutral-300"
//         />
//       ),
//       href: "/experience",
//     },
//     {
//       title: "Education",
//       icon: (
//         <HugeiconsIcon
//           icon={Mortarboard02Icon}
//           className="h-full w-full text-neutral-500 dark:text-neutral-300"
//         />
//       ),
//       href: "/education",
//     },

//     {
//       title: "Publication",
//       icon: (
//         <HugeiconsIcon
//           icon={BookOpenTextIcon}
//           className="h-full w-full text-neutral-500 dark:text-neutral-300"
//         />
//       ),
//       href: "/publication",
//     },
//     {
//       title: "More",
//       icon: (
//         <HugeiconsIcon
//           icon={MoreHorizontalSquare02Icon}
//           className="h-full w-full text-neutral-500 dark:text-neutral-300"
//         />
//       ),
//       href: "/more",
//     },
//   ]
//   return (
//     <div className="fixed bottom-0 flex w-full items-center justify-center p-28 md:right-0 md:left-0 md:p-4">
//       <FloatingDock
//         // mobileClassName="translate-y-20"
//         items={links}
//       />
//     </div>
//   )
// }


import { FloatingDock } from "@/components/ui/floating-dock"
import { Home01Icon } from "@hugeicons/core-free-icons"
import { WebProgrammingIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { CircuitBoardIcon } from "@hugeicons/core-free-icons"
import { StarSquareIcon } from "@hugeicons/core-free-icons"
import { Mortarboard02Icon } from "@hugeicons/core-free-icons"
import { BookOpenTextIcon } from "@hugeicons/core-free-icons"
import { MoreHorizontalSquare02Icon } from "@hugeicons/core-free-icons"

export function Navbar() {
  const links = [
    {
      title: "Home",
      icon: (
        <HugeiconsIcon
          icon={Home01Icon}
          className="h-full w-full text-neutral-500 dark:text-neutral-300"
        />
      ),
      href: "/",
    },
    {
      title: "Web Project",
      icon: (
        <HugeiconsIcon
          icon={WebProgrammingIcon}
          className="h-full w-full text-neutral-500 dark:text-neutral-300"
        />
      ),
      href: "/web-project",
    },
    {
      title: "Embedded Project",
      icon: (
        <HugeiconsIcon
          icon={CircuitBoardIcon}
          className="h-full w-full text-neutral-500 dark:text-neutral-300"
        />
      ),
      href: "/embedded-project",
    },
    {
      title: "Experience",
      icon: (
        <HugeiconsIcon
          icon={StarSquareIcon}
          className="h-full w-full text-neutral-500 dark:text-neutral-300"
        />
      ),
      href: "/experience",
    },
    {
      title: "Education",
      icon: (
        <HugeiconsIcon
          icon={Mortarboard02Icon}
          className="h-full w-full text-neutral-500 dark:text-neutral-300"
        />
      ),
      href: "/education",
    },
    {
      title: "Publication",
      icon: (
        <HugeiconsIcon
          icon={BookOpenTextIcon}
          className="h-full w-full text-neutral-500 dark:text-neutral-300"
        />
      ),
      href: "/publication",
    },
    {
      title: "More",
      icon: (
        <HugeiconsIcon
          icon={MoreHorizontalSquare02Icon}
          className="h-full w-full text-neutral-500 dark:text-neutral-300"
        />
      ),
      href: "/more",
    },
  ]

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex w-full justify-center px-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] pt-2 md:px-4 md:pb-4">
      <FloatingDock
        items={links}
        mobileClassName="mx-auto"
        desktopClassName="mx-auto"
      />
    </div>
  )
}