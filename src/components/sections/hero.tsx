"use client"

import { motion } from "framer-motion"
import { Code2, ArrowRight } from "lucide-react"
import { useTranslations } from "next-intl"
import { FluidButton } from "@/components/ui/fluid-button"

const codeLines = [
  { text: "export interface SaaSPlatform {", indent: 0 },
  { text: '  name: "Sonoro Digital"', indent: 2 },
  { text: "  stack: (", indent: 2 },
  { text: "    'React' | 'Next.js' | 'Node'", indent: 4 },
  { text: "    | 'TypeScript' | 'Python' | 'Go'", indent: 4 },
  { text: "  )", indent: 2 },
  { text: "  guarantees: (", indent: 2 },
  { text: "    scalable: true,", indent: 4 },
  { text: "    performant: true,", indent: 4 },
  { text: "    resilient: true", indent: 4 },
  { text: "  )", indent: 2 },
  { text: "}", indent: 0 },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
}

const lineVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } },
}

export function Hero() {
  const t = useTranslations("hero")

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgb(148 163 184) 1px, transparent 1px), linear-gradient(90deg, rgb(148 163 184) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring" as const, stiffness: 200, damping: 20 }}
            className="max-w-xl"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-label-lg text-primary mb-4 tracking-wide uppercase"
            >
              {t("tagline")}
            </motion.p>

            <h1 className="text-display-lg lg:text-[4rem] lg:leading-[1.1] font-heading text-foreground mb-6 tracking-tight">
              {t("headline1")}{" "}
              <span className="text-primary">{t("headline2")}</span>{" "}
              {t("headline3")}
            </h1>

            <p className="text-body-lg text-muted-foreground mb-8 max-w-lg">
              {t("description")}
            </p>

            <div className="flex flex-wrap gap-3">
              <FluidButton size="lg" variant="primary">
                {t("cta")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </FluidButton>
              <FluidButton size="lg" variant="ghost">
                {t("secondary")}
              </FluidButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring" as const, stiffness: 200, damping: 20, delay: 0.1 }}
            className="relative"
          >
            <div className="rounded-2xl border border-border bg-card/80 backdrop-blur-md overflow-hidden shadow-elevation-3">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/50">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
                <span className="ml-2 text-label-sm text-muted-foreground">
                  platform.ts
                </span>
                <Code2 className="ml-auto h-4 w-4 text-muted-foreground" />
              </div>

              <motion.div
                className="p-5 font-mono text-label-md leading-6 overflow-x-auto"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {codeLines.map((line, i) => (
                  <motion.div
                    key={i}
                    variants={lineVariants}
                    className="whitespace-pre"
                  >
                    <span className="select-none text-muted-foreground/40 mr-4 inline-block w-6 text-right">
                      {i + 1}
                    </span>
                    <span style={{ paddingLeft: `${line.indent * 0.75}rem` }}>
                      <span className="text-violet-400">
                        {line.text.match(/^(export|interface|const|let|function)/)?.[0] && (
                          <span className="text-violet-400">
                            {line.text.match(/^(export|interface|const|let|function)/)?.[0]}{" "}
                          </span>
                        )}
                      </span>
                      <span className="text-cyan-400">
                        {line.text.match(/^\s*(?:export\s+)?(interface|const|let|function)\s+\w+/)?.[0]
                          ?.split(/\s+/)
                          .slice(-1)[0] && (
                          <span>
                            {line.text.match(/^\s*(?:export\s+)?(interface|const|let|function)\s+\w+/)?.[0]
                              ?.split(/\s+/)
                              .slice(-1)[0]}
                          </span>
                        )}
                      </span>
                      <span className="text-foreground/80">
                        {line.text.replace(
                          /^(export\s+)?(interface|const|let|function)\s+\w+/,
                          "",
                        )}
                      </span>
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-primary/20 via-transparent to-secondary/20 blur-xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
