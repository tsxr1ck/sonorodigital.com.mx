"use client"

import { type ReactNode } from "react"
import { motion, type HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

interface TonalCardProps extends Omit<HTMLMotionProps<"article">, "title"> {
  icon?: ReactNode
  title?: string
  description?: string
  children?: ReactNode
  interactive?: boolean
}

const cardSpring = {
  type: "spring" as const,
  stiffness: 350,
  damping: 25,
}

export function TonalCard({
  icon,
  title,
  description,
  children,
  interactive = false,
  className,
  ...props
}: TonalCardProps) {
  const baseClasses = cn(
    "relative overflow-hidden rounded-2xl border border-border/40 p-6 lg:p-8",
    "bg-linear-to-br from-background/80 to-primary/[0.03]",
    "shadow-card",
    interactive && "cursor-pointer hover:shadow-card-hover hover:border-primary/20",
    className,
  )

  const content = (
    <>
      {icon && (
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
          {icon}
        </div>
      )}
      {title && (
        <h3 className="text-title-lg font-heading text-foreground mb-2">{title}</h3>
      )}
      {description && (
        <p className="text-body-md text-muted-foreground mb-4">{description}</p>
      )}
      {children}
    </>
  )

  if (interactive) {
    return (
      <motion.article
        className={baseClasses}
        whileHover={{ y: -4 }}
        whileTap={{ y: 0 }}
        transition={cardSpring}
        {...props}
      >
        {content}
      </motion.article>
    )
  }

  return (
    <motion.article className={baseClasses} {...props}>
      {content}
    </motion.article>
  )
}
