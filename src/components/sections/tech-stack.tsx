"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"

const technologies = [
  { name: "React", slug: "react" },
  { name: "TypeScript", slug: "typescript" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "Python", slug: "python" },
  { name: "Go", slug: "go" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "Docker", slug: "docker" },
  { name: "Kubernetes", slug: "kubernetes" },
  { name: "Redis", slug: "redis" },
  { name: "GraphQL", slug: "graphql" },
]

export function TechStack() {
  const t = useTranslations("techStack")

  return (
    <section id="tech-stack" className="py-20 overflow-hidden">
      <style>{`
        @keyframes infinite-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 30s linear infinite;
        }
      `}</style>
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

      <div className="relative flex overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-linear-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-linear-to-l from-background to-transparent pointer-events-none" />

        <div className="group flex w-max">
          {[0, 1].map((setIndex) => (
            <div 
              key={setIndex}
              className="flex shrink-0 gap-12 px-6 animate-infinite-scroll group-hover:[animation-play-state:paused]"
            >
              {technologies.map((tech) => (
                <div
                  key={tech.slug}
                  className="flex shrink-0 flex-col items-center gap-3 text-center w-[120px]"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-muted/50 border border-border/50 transition-all duration-300 overflow-hidden">
                    <img 
                      src={`https://cdn.simpleicons.org/${tech.slug}`} 
                      alt={tech.name}
                      className="w-8 h-8 grayscale hover:grayscale-0 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-label-sm text-muted-foreground">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
