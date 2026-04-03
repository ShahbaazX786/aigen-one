"use client"

import { useTheme } from "next-themes"
import { ClerkProvider } from "@clerk/nextjs"
import { dark } from "@clerk/themes"
import { useEffect, useState } from "react"

export function ClerkThemeProvider({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <ClerkProvider>
        {children}
      </ClerkProvider>
    )
  }

  const isDark = resolvedTheme === "dark"

  return (
    <ClerkProvider
      appearance={{
        baseTheme: isDark ? dark : undefined,
        variables: {
          colorPrimary: "oklch(0.7357 0.1641 34.7091)",
          // Background colors
          colorBackground: isDark ? "oklch(0.2569 0.0169 352.4042)" : "oklch(0.9856 0.0084 56.3169)",
          colorInputBackground: isDark ? "oklch(0.2848 0.0159 343.6554)" : "oklch(0.9296 0.037 38.6868)",
          // Text colors
          colorInputText: isDark ? "oklch(0.9397 0.0119 51.3156)" : "oklch(0.3353 0.0132 2.7676)",
          colorText: isDark ? "oklch(0.9397 0.0119 51.3156)" : "oklch(0.3353 0.0132 2.7676)",
          colorTextSecondary: isDark ? "oklch(0.8378 0.0237 52.6346)" : "oklch(0.5534 0.0116 58.0708)",
          borderRadius: "0.625rem",
        },
        elements: {
          card: "shadow-2xl border border-border/40",
        }
      }}
    >
      {children}
    </ClerkProvider>
  )
}
