"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Clock, ArrowRight, Search } from "lucide-react"

const categories = [
  "All",
  "Finance Tips",
  "Loans",
  "Insurance",
  "Investment",
  "Tax Planning",
]

const blogPosts = [
  {
    id: 1,
    title: "How to Improve Your Credit Score Before Applying for a Loan",
    excerpt: "Learn the top strategies to boost your CIBIL score and increase your chances of loan approval with better interest rates. A good credit score can save you lakhs in interest.",
    category: "Finance Tips",
    date: "May 15, 2026",
    readTime: "5 min read",
    image: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 2,
    title: "Complete Guide to Health Insurance in India 2026",
    excerpt: "Everything you need to know about choosing the right health insurance plan for you and your family. Compare plans, understand coverage, and make informed decisions.",
    category: "Insurance",
    date: "May 12, 2026",
    readTime: "8 min read",
    image: "bg-gradient-to-br from-emerald-500/20 to-green-500/20",
  },
  {
    id: 3,
    title: "Home Loan vs. Rent: Which is Better for You?",
    excerpt: "A comprehensive comparison to help you decide whether to buy a home with a loan or continue renting. Understand the financial implications of both choices.",
    category: "Loans",
    date: "May 10, 2026",
    readTime: "6 min read",
    image: "bg-gradient-to-br from-violet-500/20 to-purple-500/20",
  },
  {
    id: 4,
    title: "Top 10 Tax-Saving Investment Options for 2026",
    excerpt: "Maximize your tax savings with these smart investment options under Section 80C and beyond. Start planning early to save more.",
    category: "Tax Planning",
    date: "May 8, 2026",
    readTime: "7 min read",
    image: "bg-gradient-to-br from-amber-500/20 to-orange-500/20",
  },
  {
    id: 5,
    title: "Understanding Personal Loan Interest Rates in India",
    excerpt: "A detailed breakdown of how personal loan interest rates are determined and tips to get the best rates for your loan application.",
    category: "Loans",
    date: "May 5, 2026",
    readTime: "5 min read",
    image: "bg-gradient-to-br from-rose-500/20 to-pink-500/20",
  },
  {
    id: 6,
    title: "SIP vs Lumpsum: Which Investment Strategy is Right for You?",
    excerpt: "Compare systematic investment plans with lumpsum investments to find the best approach for your financial goals and risk appetite.",
    category: "Investment",
    date: "May 3, 2026",
    readTime: "6 min read",
    image: "bg-gradient-to-br from-teal-500/20 to-cyan-500/20",
  },
  {
    id: 7,
    title: "Car Insurance Claim Process: A Step-by-Step Guide",
    excerpt: "Navigate the car insurance claim process smoothly with our comprehensive guide. Know what documents you need and how to get quick settlements.",
    category: "Insurance",
    date: "May 1, 2026",
    readTime: "4 min read",
    image: "bg-gradient-to-br from-indigo-500/20 to-blue-500/20",
  },
  {
    id: 8,
    title: "How to Start a Business with a Small Loan",
    excerpt: "Essential tips for entrepreneurs looking to start their business journey with limited capital. Learn how to utilize business loans effectively.",
    category: "Loans",
    date: "April 28, 2026",
    readTime: "7 min read",
    image: "bg-gradient-to-br from-fuchsia-500/20 to-pink-500/20",
  },
  {
    id: 9,
    title: "Emergency Fund: How Much Should You Save?",
    excerpt: "Building an emergency fund is crucial for financial security. Learn how to calculate the right amount and where to keep your emergency savings.",
    category: "Finance Tips",
    date: "April 25, 2026",
    readTime: "5 min read",
    image: "bg-gradient-to-br from-lime-500/20 to-green-500/20",
  },
]

export function BlogList() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-accent text-foreground hover:bg-accent/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full lg:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
            />
          </div>
        </div>

        {/* Blog Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link href={`/blog/${post.id}`} className="group block h-full">
                  <div className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all h-full flex flex-col">
                    <div className={`aspect-[16/10] ${post.image}`}>
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-6xl font-bold text-foreground/5">K</span>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 rounded-full bg-accent text-xs font-medium text-foreground">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </div>
                      </div>
                      <h2 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{post.date}</span>
                        <span className="flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                          Read more
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No articles found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  )
}
