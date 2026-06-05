import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { InsuranceHero } from "@/components/insurance/insurance-hero"
import { InsuranceTypes } from "@/components/insurance/insurance-types"
import { InsuranceBenefits } from "@/components/insurance/insurance-benefits"
import { InsuranceCta } from "@/components/insurance/insurance-cta"

export const metadata: Metadata = {
  title: "Insurance - KalyaniFinance | Health, Life, Car & Travel Insurance",
  description: "Protect what matters most with our comprehensive insurance solutions - Health Insurance, Life Insurance, Car Insurance, Travel Insurance & more.",
  keywords: "health insurance, life insurance, car insurance, bike insurance, travel insurance, family insurance, India",
}

export default function InsurancePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <InsuranceHero />
      <InsuranceTypes />
      <InsuranceBenefits />
      <InsuranceCta />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
