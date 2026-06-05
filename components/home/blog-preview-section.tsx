"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Clock } from "lucide-react"

const blogPosts = [
  {
    title: "How to Improve Your Credit Score Before Applying for a Loan",
    excerpt: "Learn the top strategies to boost your CIBIL score and increase your chances of loan approval with better interest rates.",
    category: "Finance Tips",
    date: "May 15, 2026",
    readTime: "5 min read",
    href: "/blog/improve-credit-score",
    image: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Complete Guide to Health Insurance in India 2026",
    excerpt: "Everything you need to know about choosing the right health insurance plan for you and your family.",
    category: "Insurance",
    date: "May 12, 2026",
    readTime: "8 min read",
    href: "/blog/health-insurance-guide",
    image: "bg-gradient-to-br from-emerald-500/20 to-green-500/20",
  },
  {
    title: "Home Loan vs. Rent: Which is Better for You?",
    excerpt: "A comprehensive comparison to help you decide whether to buy a home with a loan or continue renting.",
    category: "Home Loan",
    date: "May 10, 2026",
    readTime: "6 min read",
    href: "/blog/home-loan-vs-rent",
    image: "bg-gradient-to-br from-violet-500/20 to-purple-500/20",
  },
]

export function BlogPreviewSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14"
        >
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              Our Blog
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Latest Financial Insights
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link href={post.href} className="group block h-full">
                <div className={`aspect-[16/10] rounded-2xl ${post.image} mb-5 overflow-hidden`}>
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-6xl font-bold text-foreground/5">K</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full bg-accent text-xs font-medium text-foreground">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                  {post.excerpt}
                </p>
                <span className="text-xs text-muted-foreground">{post.date}</span>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
