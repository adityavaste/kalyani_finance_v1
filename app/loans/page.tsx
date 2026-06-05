import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { LoansHero } from "@/components/loans/loans-hero"
import { LoanTypes } from "@/components/loans/loan-types"
import { LoanProcess } from "@/components/loans/loan-process"
import { LoanCta } from "@/components/loans/loan-cta"

export const metadata: Metadata = {
  title: "Loans - KalyaniFinance | Home, Car, Personal & Business Loans",
  description: "Explore our wide range of loan products - Home Loans, Car Loans, Personal Loans, Business Loans, Education Loans & Gold Loans at competitive interest rates.",
  keywords: "home loan, car loan, personal loan, business loan, education loan, gold loan, loan against property, India",
}

export default function LoansPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <LoansHero />
      <LoanTypes />
      <LoanProcess />
      <LoanCta />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
