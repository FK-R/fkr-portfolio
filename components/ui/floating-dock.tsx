// "use client";
// import { cn } from "@/lib/utils";
// import {
//   AnimatePresence,
//   MotionValue,
//   motion,
//   useMotionValue,
//   useSpring,
//   useTransform,
// } from "motion/react";
// import { HugeiconsIcon } from "@hugeicons/react";
// import { CancelSquareIcon } from "@hugeicons/core-free-icons";
// import { useRef, useState } from "react";
// import Link from "next/link";

// export const FloatingDock = ({
//   items,
//   desktopClassName,
//   mobileClassName,
// }: {
//   items: { title: string; icon: React.ReactNode; href: string }[];
//   desktopClassName?: string;
//   mobileClassName?: string;
// }) => {
//   return (
//     <>
//       <FloatingDockDesktop items={items} className={desktopClassName} />
//       <FloatingDockMobile items={items} className={mobileClassName} />
//     </>
//   );
// };

// const FloatingDockMobile = ({
//   items,
//   className,
// }: {
//   items: { title: string; icon: React.ReactNode; href: string }[];
//   className?: string;
// }) => {
//   const [open, setOpen] = useState(false);
//   return (
//     <div className={cn("relative block md:hidden", className)}>
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             layoutId="nav"
//             className="absolute inset-x-0 bottom-full mb-2 flex flex-col gap-2"
//           >
//             {items.map((item, idx) => (
//               <motion.div
//                 key={item.title}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 exit={{
//                   opacity: 0,
//                   y: 10,
//                   transition: {
//                     delay: idx * 0.05,
//                   },
//                 }}
//                 transition={{ delay: (items.length - 1 - idx) * 0.05 }}
//               >
//                 <a
//                   href={item.href}
//                   key={item.title}
//                   className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-900"
//                 >
//                   <div className="h-4 w-4">{item.icon}</div>
//                 </a>
//               </motion.div>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>
//       <button
//         onClick={() => setOpen(!open)}
//         className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-800"
//       >
//     <HugeiconsIcon icon={CancelSquareIcon}  className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
//       </button>
//     </div>
//   );
// };

// const FloatingDockDesktop = ({
//   items,
//   className,
// }: {
//   items: { title: string; icon: React.ReactNode; href: string }[];
//   className?: string;
// }) => {
//   let mouseX = useMotionValue(Infinity);
//   return (
//     <motion.div
//       onMouseMove={(e) => mouseX.set(e.pageX)}
//       onMouseLeave={() => mouseX.set(Infinity)}
//       className={cn(
//         "mx-auto hidden h-16 items-end gap-4 rounded-2xl bg-gray-50 px-4 pb-3 md:flex dark:bg-neutral-900",
//         className,
//       )}
//     >
//       {items.map((item) => (
//         <IconContainer mouseX={mouseX} key={item.title} {...item} />
//       ))}
//     </motion.div>
//   );
// };

// function IconContainer({
//   mouseX,
//   title,
//   icon,
//   href,
// }: {
//   mouseX: MotionValue;
//   title: string;
//   icon: React.ReactNode;
//   href: string;
// }) {
//   let ref = useRef<HTMLDivElement>(null);

//   let distance = useTransform(mouseX, (val) => {
//     let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

//     return val - bounds.x - bounds.width / 2;
//   });

//   let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
//   let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

//   let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
//   let heightTransformIcon = useTransform(
//     distance,
//     [-150, 0, 150],
//     [20, 40, 20],
//   );

//   let width = useSpring(widthTransform, {
//     mass: 0.1,
//     stiffness: 150,
//     damping: 12,
//   });
//   let height = useSpring(heightTransform, {
//     mass: 0.1,
//     stiffness: 150,
//     damping: 12,
//   });

//   let widthIcon = useSpring(widthTransformIcon, {
//     mass: 0.1,
//     stiffness: 150,
//     damping: 12,
//   });
//   let heightIcon = useSpring(heightTransformIcon, {
//     mass: 0.1,
//     stiffness: 150,
//     damping: 12,
//   });

//   const [hovered, setHovered] = useState(false);

//   return (
//     <Link href={href}>
//       <motion.div
//         ref={ref}
//         style={{ width, height }}
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//         className="relative flex aspect-square items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-800"
//       >
//         <AnimatePresence>
//           {hovered && (
//             <motion.div
//               initial={{ opacity: 0, y: 10, x: "-50%" }}
//               animate={{ opacity: 1, y: 0, x: "-50%" }}
//               exit={{ opacity: 0, y: 2, x: "-50%" }}
//               className="absolute -top-8 start-1/2 w-fit rounded-md border border-gray-200 bg-gray-100 px-2 py-0.5 text-xs whitespace-pre text-neutral-700 dark:border-neutral-900 dark:bg-neutral-800 dark:text-white"
//           //  ata hoccche button ar uporer likha gular bg
//            >
//               {title}
//             </motion.div>
//           )}
//         </AnimatePresence>
//         <motion.div
//           style={{ width: widthIcon, height: heightIcon }}
//           className="flex items-center justify-center"
//         >
//           {icon}
//         </motion.div>
//       </motion.div>
//     </Link>
//   );
// }


"use client";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import Link from "next/link";

type DockItem = { title: string; icon: React.ReactNode; href: string };

/**
 * A route is "active" if it's an exact match, or — for non-root links —
 * if the current path is nested under it (e.g. /web-project/foo still
 * highlights "Web Project").
 */
function isRouteActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: DockItem[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

/* ------------------------------------------------------------------ */
/*  Mobile — same horizontal-bar dock as desktop, just without the    */
/*  mouse-driven magnification (there's no cursor on touch) and with  */
/*  a tap-scale instead. No more expand/collapse toggle.              */
/* ------------------------------------------------------------------ */

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: DockItem[];
  className?: string;
}) => {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "flex md:hidden w-full max-w-md items-center justify-between gap-1 rounded-2xl bg-gray-50 px-2 py-2 dark:bg-neutral-900",
        className,
      )}
    >
      {items.map((item) => {
        const active = isRouteActive(pathname, item.href);
        return (
          <Link
            href={item.href}
            key={item.title}
            aria-label={item.title}
            aria-current={active ? "page" : undefined}
            className="flex min-w-0 flex-1 items-center justify-center"
          >
            <motion.div
              whileTap={{ scale: 0.9 }}
              className={cn(
                "relative flex aspect-square w-full max-w-11 items-center justify-center rounded-full transition-colors",
                active
                  ? "bg-[#ADFA1D]/15 dark:bg-[#ADFA1D]/15"
                  : "bg-gray-200 dark:bg-neutral-800",
              )}
            >
              <div
                className={cn(
                  "h-[45%] w-[45%]",
                  active && "[&_svg]:!text-[#5c850e] dark:[&_svg]:!text-[#ADFA1D]",
                )}
              >
                {item.icon}
              </div>
              {active && (
                <motion.span
                  layoutId="mobile-dock-active-dot"
                  className="absolute -bottom-1 h-1 w-1 rounded-full bg-[#5c850e] dark:bg-[#ADFA1D]"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </motion.div>
          </Link>
        );
      })}
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Desktop                                                            */
/* ------------------------------------------------------------------ */

const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: DockItem[];
  className?: string;
}) => {
  let mouseX = useMotionValue(Infinity);
  const pathname = usePathname();

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden h-16 items-end gap-4 rounded-2xl bg-gray-50 px-4 pb-3 md:flex dark:bg-neutral-900",
        className,
      )}
    >
      {items.map((item) => (
        <IconContainer
          mouseX={mouseX}
          key={item.title}
          active={isRouteActive(pathname, item.href)}
          {...item}
        />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
  active,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
  active: boolean;
}) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  let heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20],
  );

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <Link href={href} aria-label={title} aria-current={active ? "page" : undefined}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          "relative flex aspect-square items-center justify-center rounded-full transition-colors",
          active
            ? "bg-[#ADFA1D]/15 dark:bg-[#ADFA1D]/15"
            : "bg-gray-200 dark:bg-neutral-800",
        )}
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-8 start-1/2 w-fit rounded-md border border-gray-200 bg-gray-100 px-2 py-0.5 text-xs whitespace-pre text-neutral-700 dark:border-neutral-900 dark:bg-neutral-800 dark:text-white"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className={cn(
            "flex items-center justify-center",
            active && "[&_svg]:!text-[#5c850e] dark:[&_svg]:!text-[#ADFA1D]",
          )}
        >
          {icon}
        </motion.div>
        {active && (
          <motion.span
            layoutId="desktop-dock-active-dot"
            className="absolute -bottom-1.5 h-1 w-1 rounded-full bg-[#5c850e] dark:bg-[#ADFA1D]"
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        )}
      </motion.div>
    </Link>
  );
}