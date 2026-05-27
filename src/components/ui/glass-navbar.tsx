"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useTranslations, useLocale } from "next-intl"
import { useRouter, usePathname } from "@/i18n/navigation"
import { FluidButton } from "@/components/ui/fluid-button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { cn } from "@/lib/utils"

const navLinks = ["services", "caseStudies", "stack", "whyUs"] as const

const menuVariants = {
  closed: {
    opacity: 0,
    x: "100%",
    transition: { type: "spring" as const, stiffness: 350, damping: 30 },
  },
  open: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" as const, stiffness: 350, damping: 30 },
  },
}

const itemVariants = {
  closed: { opacity: 0, x: 20 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.1 + i * 0.05, type: "spring" as const, stiffness: 300, damping: 24 },
  }),
}

export function GlassNavbar() {
  const t = useTranslations("nav")
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  const switchLocale = () => {
    const newLocale = locale === "en" ? "es" : "en"
    router.replace(pathname, { locale: newLocale })
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          "backdrop-blur-lg border-b",
          scrolled ? "bg-background/70 border-border/60 shadow-elevation-2" : "bg-transparent border-transparent",
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a
            href="#"
            className="flex items-center gap-2 font-heading text-title-md font-medium tracking-tight"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-bold">
              SD
            </span>
            <span className="hidden sm:inline">Sonoro Digital</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((key) => (
              <a
                key={key}
                href={`#${key === "whyUs" ? "why-us" : key === "caseStudies" ? "case-studies" : key === "stack" ? "tech-stack" : "services"}`}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(`#${key === "whyUs" ? "why-us" : key === "caseStudies" ? "case-studies" : key === "stack" ? "tech-stack" : "services"}`)
                }}
                className="text-label-md text-foreground/70 hover:text-foreground transition-colors"
              >
                {t(key)}
              </a>
            ))}
            <div className="flex items-center gap-2 ml-2">
              <ThemeToggle />
              <button
                type="button"
                onClick={switchLocale}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 hover:border-primary/40 hover:bg-primary/5 text-label-md text-muted-foreground hover:text-primary transition-all font-medium"
                aria-label="Switch language"
              >
                {locale === "en" ? "ES" : "EN"}
              </button>
              <FluidButton size="sm" variant="primary">
                {t("cta")}
              </FluidButton>
            </div>
          </nav>

          <button
            type="button"
            className="flex md:hidden h-11 w-11 items-center justify-center rounded-full hover:bg-muted transition-colors"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? t("closeMenu") : t("openMenu")}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.nav
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-background border-l md:hidden"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="flex flex-col gap-4 p-6 pt-24">
                {navLinks.map((key, i) => (
                  <motion.a
                    key={key}
                    href={`#${key === "whyUs" ? "why-us" : key === "caseStudies" ? "case-studies" : key === "stack" ? "tech-stack" : "#services"}`}
                    variants={itemVariants}
                    custom={i}
                    initial="closed"
                    animate="open"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(`#${key === "whyUs" ? "why-us" : key === "caseStudies" ? "case-studies" : key === "stack" ? "tech-stack" : "#services"}`)
                    }}
                    className="text-title-md text-foreground/70 hover:text-foreground transition-colors py-2"
                  >
                    {t(key)}
                  </motion.a>
                ))}
                <motion.div
                  variants={itemVariants}
                  custom={navLinks.length}
                  initial="closed"
                  animate="open"
                  className="flex items-center gap-2"
                >
                  <ThemeToggle />
                  <button
                    type="button"
                    onClick={() => { switchLocale(); setMenuOpen(false) }}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 hover:border-primary/40 hover:bg-primary/5 text-label-md text-muted-foreground hover:text-primary transition-all font-medium"
                  >
                    {locale === "en" ? "ES" : "EN"}
                  </button>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  custom={navLinks.length + 1}
                  initial="closed"
                  animate="open"
                  className="pt-4"
                >
                  <FluidButton size="md" variant="primary" className="w-full">
                    <button onClick={() => { handleNavClick('#contact') }}>
                    {t("cta")}
                    </button>
                  </FluidButton>
                </motion.div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
