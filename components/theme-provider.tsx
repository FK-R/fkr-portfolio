// "use client"

// import * as React from "react"

// function ThemeProvider({ children }: React.PropsWithChildren) {
//   return (
//     <>
//       <ThemeHotkey />
//       {children}
//     </>
//   )
// }

// function isTypingTarget(target: EventTarget | null) {
//   if (!(target instanceof HTMLElement)) {
//     return false
//   }

//   return (
//     target.isContentEditable ||
//     target.tagName === "INPUT" ||
//     target.tagName === "TEXTAREA" ||
//     target.tagName === "SELECT"
//   )
// }

// function applyTheme(theme: "light" | "dark" | null) {
//   if (typeof window === "undefined") {
//     return
//   }

//   const root = document.documentElement
//   const resolvedTheme =
//     theme === "dark" || theme === "light"
//       ? theme
//       : window.matchMedia("(prefers-color-scheme: dark)").matches
//         ? "dark"
//         : "light"

//   root.classList.toggle("dark", resolvedTheme === "dark")
//   root.style.colorScheme = resolvedTheme

//   if (theme) {
//     window.localStorage.setItem("theme", theme)
//   }
// }

// function ThemeHotkey() {
//   React.useEffect(() => {
//     const storedTheme = window.localStorage.getItem("theme")
//     const initialTheme = storedTheme === "dark" || storedTheme === "light"
//       ? storedTheme
//       : null

//     applyTheme(initialTheme)

//     function onKeyDown(event: KeyboardEvent) {
//       if (event.defaultPrevented || event.repeat) {
//         return
//       }

//       if (event.metaKey || event.ctrlKey || event.altKey) {
//         return
//       }

//       if (event.key.toLowerCase() !== "d") {
//         return
//       }

//       if (isTypingTarget(event.target)) {
//         return
//       }

//       const nextTheme = document.documentElement.classList.contains("dark")
//         ? "light"
//         : "dark"

//       applyTheme(nextTheme)
//     }

//     function onStorage(event: StorageEvent) {
//       if (event.key === "theme") {
//         applyTheme(event.newValue === "dark" || event.newValue === "light" ? event.newValue : null)
//       }
//     }

//     window.addEventListener("keydown", onKeyDown)
//     window.addEventListener("storage", onStorage)

//     return () => {
//       window.removeEventListener("keydown", onKeyDown)
//       window.removeEventListener("storage", onStorage)
//     }
//   }, [])

//   return null
// }

// export { ThemeProvider }

"use client";

import * as React from "react";

function ThemeProvider({ children }: React.PropsWithChildren) {
  React.useEffect(() => {
    const root = document.documentElement;

    root.classList.add("dark");
    root.classList.remove("light");
    root.style.colorScheme = "dark";

    localStorage.setItem("theme", "dark");
  }, []);

  return <>{children}</>;
}

export { ThemeProvider };