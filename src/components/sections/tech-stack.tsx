"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"

const technologies = [
  { name: "React", logo: "⚛️" },
  { name: "TypeScript", logo: "🔷" },
  { name: "Next.js", logo: "▲" },
  { name: "Node.js", logo: "💚" },
  { name: "Python", logo: "🐍" },
  { name: "Go", logo: "🔵" },
  { name: "PostgreSQL", logo: "🐘" },
  { name: "Docker", logo: "🐳" },
  { name: "AWS", logo: "☁️" },
  { name: "Kubernetes", logo: "☸️" },
  { name: "Redis", logo: "🔴" },
  { name: "GraphQL", logo: "◈" },
]

const doubled = [...technologies, ...technologies]

export function TechStack() {
  const t = useTranslations("techStack")

  return (
    <section id="tech-stack" className="py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-label-lg text-primary mb-3 uppercase tracking-wide"
        >
          {t("tagline")}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-display-sm font-heading text-foreground"
        >
          {t("headline")}
        </motion.h2>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-linear-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-linear-to-l from-background to-transparent pointer-events-none" />

        <motion.div
          className="flex gap-8 px-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: { repeat: Infinity, duration: 30, ease: "linear" },
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {doubled.map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className="flex shrink-0 flex-col items-center gap-3 text-center"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-muted/50 border border-border/50 text-2xl grayscale hover:grayscale-0 transition-all duration-300">
                {tech.logo}
              </div>
              <span className="text-label-sm text-muted-foreground">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
