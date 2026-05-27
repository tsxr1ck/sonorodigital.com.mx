"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Cloud, BarChart3, Workflow } from "lucide-react"
import { useTranslations } from "next-intl"
import { TonalCard } from "@/components/ui/tonal-card"

const iconMap: Record<number, React.ReactNode> = {
  0: <Cloud className="h-6 w-6" />,
  1: <BarChart3 className="h-6 w-6" />,
  2: <Workflow className="h-6 w-6" />,
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, type: "spring" as const, stiffness: 200, damping: 20 },
  }),
}

export function CaseStudies() {
  const t = useTranslations("caseStudies")
  const items = t.raw("items") as Array<{
    title: string
    tags: string[]
    problem: string
    solution: string
    result: string
  }>

  return (
    <section id="case-studies" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring" as const, stiffness: 200, damping: 20 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-label-lg text-primary mb-3 uppercase tracking-wide">
            {t("tagline")}
          </p>
          <h2 className="text-display-sm lg:text-display-md font-heading text-foreground mb-4">
            {t("headline1")}{" "}
            <span className="text-primary">{t("headline2")}</span>
          </h2>
          <p className="text-body-lg text-muted-foreground">
            {t("description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items.map((c, i) => (
            <motion.div
              key={c.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={i}
            >
              <TonalCard className="h-full flex flex-col" interactive>
                <div>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    {iconMap[i]}
                  </div>
                  <h3 className="text-title-lg font-heading text-foreground mb-3">
                    {c.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {c.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-primary/5 px-2.5 py-0.5 text-label-sm text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex-1 space-y-5">
                  <div>
                    <p className="text-label-sm text-muted-foreground mb-1 uppercase tracking-wide">
                      {t("problem")}
                    </p>
                    <p className="text-body-md text-foreground/80">{c.problem}</p>
                  </div>
                  <div>
                    <p className="text-label-sm text-muted-foreground mb-1 uppercase tracking-wide">
                      {t("solution")}
                    </p>
                    <p className="text-body-md text-foreground/80">{c.solution}</p>
                  </div>
                  <div className="rounded-lg bg-primary/5 p-4">
                    <p className="text-label-sm text-primary mb-1 uppercase tracking-wide">
                      {t("result")}
                    </p>
                    <p className="text-body-sm text-foreground font-medium">{c.result}</p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border/40 flex items-center text-label-md text-primary">
                  {t("readMore")}
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </div>
              </TonalCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
