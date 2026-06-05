import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { BlogHero } from "@/components/blog/blog-hero"
import { BlogList } from "@/components/blog/blog-list"

export const metadata: Metadata = {
  title: "Blog - KalyaniFinance | Financial Tips & Insights",
  description: "Read our latest articles on personal finance, loans, insurance, investment tips, and market updates. Stay informed with KalyaniFinance.",
  keywords: "finance blog, loan tips, insurance guide, personal finance, investment tips, financial planning",
}

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <BlogHero />
      <BlogList />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
