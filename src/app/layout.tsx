import "./globals.css"
import { ThemeProvider } from "@/components/ui/theme-provider"

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale?: string }>
}) {
  const { locale } = await params

  return (
    <html lang={locale ?? "en"} suppressHydrationWarning>
      <head>
        <title>Sonoro Digital | SaaS Architecture & Engineering</title>
        <meta name="description" content="Sonoro Digital designs and builds high-performance cloud platforms, AI orchestration systems, and resilient architectures for ambitious product teams." />
        <meta name="keywords" content="SaaS Architecture, AI Engineering, Cloud Platforms, Performance Engineering, Resilient Architectures" />
      </head>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
