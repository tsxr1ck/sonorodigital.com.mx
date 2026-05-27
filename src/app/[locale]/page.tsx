import { Hero } from "@/components/sections/hero"
import { WhyUs } from "@/components/sections/why-us"
import { TechStack } from "@/components/sections/tech-stack"
import { CaseStudies } from "@/components/sections/case-studies"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <>
      <Hero />
      <WhyUs />
      <TechStack />
      <CaseStudies />
      <Footer />
    </>
  )
}
