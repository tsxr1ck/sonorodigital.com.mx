"use client"

import { motion } from "framer-motion"
import { Globe, Mail, MapPin, Send, ExternalLink, Link } from "lucide-react"
import { useTranslations } from "next-intl"
import { FluidButton } from "@/components/ui/fluid-button"

const socialLinks = [
  { icon: <Globe className="h-5 w-5" />, href: "#", label: "Website" },
  { icon: <ExternalLink className="h-5 w-5" />, href: "#", label: "Twitter" },
  { icon: <Link className="h-5 w-5" />, href: "#", label: "LinkedIn" },
]

export function Footer() {
  const t = useTranslations("footer")
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border">
      <section id="contact" className="py-24 lg:py-32">
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
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ type: "spring" as const, stiffness: 200, damping: 20 }}
            >
              <p className="text-label-lg text-primary mb-3 uppercase tracking-wide">
                {t("tagline")}
              </p>
              <h2 className="text-display-sm lg:text-display-md font-heading text-foreground mb-4">
                {t("headline1")}{" "}
                <span className="text-primary">{t("headline2")}</span>
              </h2>
              <p className="text-body-lg text-muted-foreground mb-6">
                {t("description")}
              </p>

              <div className="flex flex-col gap-3 text-body-md text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary shrink-0" />
                  <span>{t("location")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary shrink-0" />
                  <span>{t("email")}</span>
                </div>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ type: "spring" as const, stiffness: 200, damping: 20, delay: 0.1 }}
              onSubmit={(e) => e.preventDefault()}
              className="space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-label-md text-foreground mb-1.5"
                  >
                    {t("nameLabel")}
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder={t("namePlaceholder")}
                    className="w-full h-12 px-4 rounded-xl border border-border bg-background text-body-md text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-shadow"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-label-md text-foreground mb-1.5"
                  >
                    {t("emailLabel")}
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder={t("emailPlaceholder")}
                    className="w-full h-12 px-4 rounded-xl border border-border bg-background text-body-md text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-shadow"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-label-md text-foreground mb-1.5"
                >
                  {t("messageLabel")}
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder={t("messagePlaceholder")}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-body-md text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-shadow resize-none"
                />
              </div>

              <FluidButton type="submit" size="lg" variant="primary" className="w-full sm:w-auto">
                <Send className="mr-2 h-4 w-4" />
                {t("send")}
              </FluidButton>
            </motion.form>
          </div>
        </div>
      </section>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-label-sm text-muted-foreground">
            &copy; {year} {t("copyright")}
          </p>

          {/* <div className="flex items-center gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 hover:border-primary/40 hover:bg-primary/5 text-muted-foreground hover:text-primary transition-all"
              >
                {link.icon}
              </a>
            ))}
          </div> */}
        </div>
      </div>
    </footer>
  )
}
