import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactContent } from "@/components/contact/contact-content"

export const metadata: Metadata = {
  title: "Contact Us - KalyaniFinance | Get In Touch",
  description: "Contact KalyaniFinance for loans and insurance queries. Visit our offices, call us, or fill out the form. We are here to help you 24/7.",
  keywords: "contact kalyanifinance, loan enquiry, insurance query, finance help, customer support",
}


export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ContactHero />
      <ContactContent />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
