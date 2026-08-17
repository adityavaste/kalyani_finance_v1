"use client"

import Link from "next/link"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { 
  ArrowRight, Clock, Eye, TrendingUp, BookOpen, 
  Sparkles, Bookmark, Share2, ChevronRight, Mail
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRef, useState } from "react"

const blogPosts = [
  {
    title: "How to Improve Your Credit Score Before Applying for a Loan",
    excerpt: "Learn the top strategies to boost your CIBIL score and increase your chances of loan approval with better interest rates. A 50-point increase can save you lakhs.",
    category: "Finance Tips",
    date: "May 15, 2026",
    readTime: "5 min read",
    views: "12.5K",
    trending: true,
    href: "/blog/improve-credit-score",
    gradient: "from-blue-500 to-cyan-400",
    bgGradient: "from-blue-500/10 to-cyan-400/5",
    icon: "📈",
  },
  {
    title: "Complete Guide to Health Insurance in India 2026",
    excerpt: "Everything you need to know about choosing the right health insurance plan for you and your family. Compare top plans and save up to 30% on premiums.",
    category: "Insurance",
    date: "May 12, 2026",
    readTime: "8 min read",
    views: "8.2K",
    trending: true,
    href: "/blog/health-insurance-guide",
    gradient: "from-emerald-500 to-teal-400",
    bgGradient: "from-emerald-500/10 to-teal-400/5",
    icon: "🏥",
  },
  {
    title: "Home Loan vs. Rent: Which is Better for You?",
    excerpt: "A comprehensive comparison to help you decide whether to buy a home with a loan or continue renting. Includes EMI calculator and tax benefit analysis.",
    category: "Home Loan",
    date: "May 10, 2026",
    readTime: "6 min read",
    views: "15.1K",
    trending: false,
    href: "/blog/home-loan-vs-rent",
    gradient: "from-violet-500 to-purple-400",
    bgGradient: "from-violet-500/10 to-purple-400/5",
    icon: "🏠",
  },
]

// 3D Tilt Hook
function useTilt() {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)
  
  const rotateX = useSpring(useTransform(y, [0, 1], [8, -8]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(x, [0, 1], [-8, 8]), { stiffness: 300, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width)
    y.set((e.clientY - rect.top) / rect.height)
  }

  const handleMouseLeave = () => {
    x.set(0.5)
    y.set(0.5)
  }

  return { ref, rotateX, rotateY, handleMouseMove, handleMouseLeave }
}

function BlogCard({ post, index }: { post: typeof blogPosts[0]; index: number }) {
  const { ref, rotateX, rotateY, handleMouseMove, handleMouseLeave } = useTilt()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <motion.div
        ref={ref}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={() => setIsHovered(true)}
        className="group relative h-full"
      >
        <Link href={post.href} className="block h-full">
          <div className={`
            relative h-full bg-card rounded-3xl border border-border/50 overflow-hidden
            hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500
          `}>
            {/* Image Area */}
            <div className={`relative aspect-[16/10] bg-gradient-to-br ${post.bgGradient} overflow-hidden`}>
              {/* Animated Pattern */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)/0.15) 1px, transparent 0)`,
                  backgroundSize: '24px 24px'
                }} />
              </div>
              
              {/* Icon */}
              <motion.div 
                animate={{ 
                  scale: isHovered ? 1.1 : 1,
                  rotate: isHovered ? 5 : 0 
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className={`
                  w-24 h-24 rounded-3xl bg-gradient-to-br ${post.gradient}
                  flex items-center justify-center shadow-2xl
                  group-hover:shadow-xl transition-shadow
                `}>
                  <span className="text-4xl">{post.icon}</span>
                </div>
              </motion.div>

              {/* Trending Badge */}
              {post.trending && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                  className="absolute top-4 left-4"
                >
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-amber-600 text-xs font-bold shadow-lg">
                    <TrendingUp className="w-3.5 h-3.5" />
                    TRENDING
                  </div>
                </motion.div>
              )}

              {/* Views Badge */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-medium">
                <Eye className="w-3.5 h-3.5" />
                {post.views} views
              </div>

              {/* Hover Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center pb-6"
              >
                <div className="flex items-center gap-2 text-white text-sm font-medium">
                  <BookOpen className="w-4 h-4" />
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            </div>

            {/* Content */}
            <div className="p-6 lg:p-7">
              {/* Meta Row */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className={`
                    px-3 py-1 rounded-full text-xs font-semibold
                    bg-gradient-to-r ${post.gradient} text-white
                  `}>
                    {post.category}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-5">
                {post.excerpt}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <span className="text-xs text-muted-foreground font-medium">{post.date}</span>
                <div className="flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                  Read More
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Hover Glow */}
            <div className={`absolute -inset-px rounded-3xl bg-gradient-to-r ${post.gradient} opacity-0 group-hover:opacity-15 blur-sm transition-opacity duration-500 -z-10`} />
          </div>
        </Link>
      </motion.div>
    </motion.article>
  )
}

export function BlogPreviewSection() {
  const [email, setEmail] = useState("")

  return (
    <section className="relative py-24 lg:py-32 bg-background overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-secondary/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16"
        >
          <div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6"
            >
              <BookOpen className="w-4 h-4" />
              Financial Insights
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Latest from Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Knowledge Hub
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              Expert advice, market insights, and financial tips to help you make smarter money decisions.
            </p>
          </div>

          <Button asChild variant="outline" className="gap-2 border-2 hover:bg-primary hover:text-white transition-all self-start lg:self-auto">
            <Link href="/blog">
              View All Articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.title} post={post} index={index} />
          ))}
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="relative"
        >
          <div className="relative p-8 lg:p-10 rounded-3xl bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10 overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 rounded-full blur-3xl" />
            
            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <h3 className="text-xl font-bold text-foreground">Stay Financially Smart</h3>
                </div>
                <p className="text-muted-foreground max-w-md">
                  Get weekly financial tips, loan rate updates, and exclusive offers delivered to your inbox. 
                  Join 10,000+ subscribers.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <div className="relative flex-1 lg:w-80">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-card border border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                  />
                </div>
                <Button className="gap-2 px-8 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all whitespace-nowrap">
                  <Sparkles className="w-4 h-4" />
                  Subscribe Free
                </Button>
              </div>
            </div>

            <div className="relative flex items-center justify-center lg:justify-start gap-6 mt-6 pt-6 border-t border-border/30">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Bookmark className="w-3.5 h-3.5" />
                <span>No spam, ever</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Share2 className="w-3.5 h-3.5" />
                <span>Unsubscribe anytime</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Eye className="w-3.5 h-3.5" />
                <span>10,000+ subscribers</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}