"use client"

import { type ButtonHTMLAttributes, forwardRef } from "react"
import { motion, type HTMLMotionProps } from "framer-motion"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const fluidButtonVariants = cva(
  [
    "inline-flex items-center justify-center select-none whitespace-nowrap font-medium outline-none",
    "rounded-full transition-colors disabled:pointer-events-none disabled:opacity-50",
    "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  ],
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:brightness-110 active:brightness-90",
        secondary:
          "bg-secondary text-secondary-foreground hover:brightness-105 active:brightness-90",
        ghost:
          "bg-transparent text-foreground hover:bg-muted active:bg-muted/80",
      },
      size: {
        sm: "h-11 min-w-[44px] px-5 text-label-lg",
        md: "h-12 min-w-[48px] px-7 text-label-lg",
        lg: "h-[52px] min-w-[52px] px-9 text-body-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
)

const springTransition = {
  type: "spring",
  stiffness: 400,
  damping: 25,
} as const

type FluidButtonProps = Omit<HTMLMotionProps<"button">, "type"> &
  VariantProps<typeof fluidButtonVariants> & {
    type?: ButtonHTMLAttributes<HTMLButtonElement>["type"]
  }

const FluidButton = forwardRef<HTMLButtonElement, FluidButtonProps>(
  ({ className, variant, size, type = "button", children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        type={type}
        className={cn(fluidButtonVariants({ variant, size, className }))}
        whileTap={{ scale: 0.96 }}
        whileHover={{ scale: 1.02 }}
        transition={springTransition}
        {...props}
      >
        {children}
      </motion.button>
    )
  },
)

FluidButton.displayName = "FluidButton"

export { FluidButton, fluidButtonVariants }
