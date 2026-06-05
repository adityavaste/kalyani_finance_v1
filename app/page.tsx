import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { HeroSection } from "@/components/home/hero-section"
import { LoanCategoriesSection } from "@/components/home/loan-categories-section"
import { InsuranceCategoriesSection } from "@/components/home/insurance-categories-section"
import { WhyChooseUsSection } from "@/components/home/why-choose-us-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { EmiCalculatorPreview } from "@/components/home/emi-calculator-preview"
import { FaqSection } from "@/components/home/faq-section"
import { BlogPreviewSection } from "@/components/home/blog-preview-section"
import { ContactFormSection } from "@/components/home/contact-form-section"
import { NewsletterSection } from "@/components/home/newsletter-section"
import { PartnersSection } from "@/components/home/partners-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <PartnersSection />
      <LoanCategoriesSection />
      <InsuranceCategoriesSection />
      <WhyChooseUsSection />
      <EmiCalculatorPreview />
      <TestimonialsSection />
      <FaqSection />
      <BlogPreviewSection />
      <ContactFormSection />
      <NewsletterSection />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
