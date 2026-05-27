import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { WhyUs } from "@/components/sections/why-us"
import { TechStack } from "@/components/sections/tech-stack"
import { CaseStudies } from "@/components/sections/case-studies"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <TechStack />
      <CaseStudies />
      <Footer />
    </>
  )
}
