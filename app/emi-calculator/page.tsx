import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { EmiCalculator } from "@/components/emi-calculator/emi-calculator"

export const metadata: Metadata = {
  title: "EMI Calculator - KalyaniFinance | Calculate Your Loan EMI",
  description: "Use our free EMI calculator to calculate monthly payments for home loans, car loans, personal loans and more. Plan your finances better.",
  keywords: "emi calculator, loan calculator, home loan emi, car loan emi, personal loan emi, loan emi calculator",
}

export default function EmiCalculatorPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <EmiCalculator />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
