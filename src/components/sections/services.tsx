"use client"

import { motion } from "framer-motion"
import { Cloud, Cpu, Workflow, GitBranch, BarChart, Gauge } from "lucide-react"
import { useTranslations } from "next-intl"
import { TonalCard } from "@/components/ui/tonal-card"

const iconMap: Record<number, React.ReactNode> = {
  0: <Cloud className="h-6 w-6" />,
  1: <Cpu className="h-6 w-6" />,
  2: <Workflow className="h-6 w-6" />,
  3: <GitBranch className="h-6 w-6" />,
  4: <BarChart className="h-6 w-6" />,
  5: <Gauge className="h-6 w-6" />,
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, type: "spring" as const, stiffness: 200, damping: 20 },
  }),
}

export function Services() {
  const t = useTranslations("services")
  const items = t.raw("items") as Array<{ title: string; desc: string }>

  return (
    <section id="services" className="py-24 lg:py-32">
      <style>{`
        @keyframes infinite-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 30s linear infinite;
        }
      `}</style>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={i}
            >
              <TonalCard
                icon={iconMap[i]}
                title={item.title}
                description={item.desc}
                className="h-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
