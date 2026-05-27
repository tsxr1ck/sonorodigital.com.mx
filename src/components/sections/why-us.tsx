"use client"

import { motion } from "framer-motion"
import { Brain, Gauge, Shield, Workflow } from "lucide-react"
import { useTranslations } from "next-intl"
import { TonalCard } from "@/components/ui/tonal-card"

const iconMap: Record<string, React.ReactNode> = {
  architecture: <Workflow className="h-6 w-6" />,
  performance: <Gauge className="h-6 w-6" />,
  resilience: <Shield className="h-6 w-6" />,
  ai: <Brain className="h-6 w-6" />,
}

const cells = [
  { key: "architecture", span: "lg:col-span-2" },
  { key: "performance", span: "" },
  { key: "resilience", span: "" },
  { key: "ai", span: "lg:col-span-2" },
]

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, type: "spring" as const, stiffness: 200, damping: 20 },
  }),
}

export function WhyUs() {
  const t = useTranslations("whyUs")

  return (
    <section id="why-us" className="py-24 lg:py-32">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {cells.map((cell, i) => (
            <motion.div
              key={cell.key}
              className={cell.span}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={i}
            >
              <TonalCard
                icon={iconMap[cell.key]}
                title={t(`${cell.key}.title` as Parameters<typeof t>[0])}
                description={t(`${cell.key}.desc` as Parameters<typeof t>[0])}
                className="h-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
