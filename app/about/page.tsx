import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { AboutHero } from "@/components/about/about-hero"
import { AboutStory } from "@/components/about/about-story"
import { AboutStats } from "@/components/about/about-stats"
import { AboutTeam } from "@/components/about/about-team"
import { AboutValues } from "@/components/about/about-values"

export const metadata: Metadata = {
  title: "About Us - KalyaniFinance | Your Trusted Financial Partner",
  description: "Learn about KalyaniFinance - India's trusted financial services company offering loans and insurance solutions since 2009. Our mission, vision, and values.",
  keywords: "about kalyanifinance, finance company India, loan company, insurance company, financial services",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <AboutHero />
      <AboutStory />
      <AboutStats />
      <AboutValues />
      <AboutTeam />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
