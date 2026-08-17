"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { 
  Star, Quote, BadgeCheck, TrendingUp, Users, 
  MessageCircle, ArrowRight, Sparkles, ThumbsUp
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRef } from "react"

const testimonials = [
  {
    name: "Aditya Vaste",
    role: "IT Professional",
    location: "Pune",
    content: "KalyaniFinance helped me get a business loan within 48 hours. Their process is incredibly smooth and the interest rates are very competitive. Highly recommended!",
    rating: 5,
    loanType: "Business Loan",
    amount: "₹15 Lakh",
    verified: true,
    initials: "AV",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    name: "Anirudha Vadgavkar",
    role: "IT Professional",
    location: "Pune",
    content: "I got my home loan and personal loan approved at the best rate in the market. The team was very supportive throughout the process and explained everything clearly.",
    rating: 5,
    loanType: "Home Loan",
    amount: "₹45 Lakh",
    verified: true,
    initials: "AV",
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    name: "Pradip Shinde",
    role: "Electrical Contractor",
    location: "Nanded",
    content: "Excellent service for car loan. They compared multiple plans and helped me choose the best one for my family. Very professional team.",
    rating: 5,
    loanType: "Car Loan",
    amount: "₹8 Lakh",
    verified: true,
    initials: "PS",
    gradient: "from-orange-500 to-amber-400",
  },
  {
    name: "Ganesh Tanvade",
    role: "Business Owner",
    location: "Pune",
    content: "Got my car loan sanctioned in just one day! The EMI calculator on their website helped me plan my finances perfectly. Great experience overall.",
    rating: 5,
    loanType: "Car Loan",
    amount: "₹12 Lakh",
    verified: true,
    initials: "GT",
    gradient: "from-violet-500 to-purple-400",
  },
  {
    name: "Vishal Jadhav",
    role: "Entrepreneur",
    location: "Delhi",
    content: "Their personal loan service is the best in the market. Quick disbursal, low interest rates, and transparent process. I have been their customer for 5 years now.",
    rating: 5,
    loanType: "Personal Loan",
    amount: "₹5 Lakh",
    verified: true,
    initials: "VJ",
    gradient: "from-rose-500 to-pink-400",
  },
  {
    name: "Shubham Aher",
    role: "IT Professional",
    location: "Chennai",
    content: "I was skeptical at first, but KalyaniFinance exceeded my expectations. The personal loan process was seamless and the customer support is top-notch.",
    rating: 5,
    loanType: "Personal Loan",
    amount: "₹3 Lakh",
    verified: true,
    initials: "SA",
    gradient: "from-indigo-500 to-blue-400",
  },
]

const stats = [
  { value: "4.9", label: "Google Rating", icon: Star, suffix: "/5" },
  { value: "500+", label: "Reviews", icon: MessageCircle, suffix: "" },
  { value: "98%", label: "Would Recommend", icon: ThumbsUp, suffix: "" },
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

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  const { ref, rotateX, rotateY, handleMouseMove, handleMouseLeave } = useTilt()

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <motion.div
        ref={ref}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative h-full"
      >
        <div className={`
          relative h-full bg-card rounded-3xl border border-border/50 p-6 lg:p-7
          hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500
          overflow-hidden
        `}>
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10">
            {/* Header: Rating + Loan Type */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.05, type: "spring" }}
                  >
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  </motion.div>
                ))}
              </div>
              
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                <TrendingUp className="w-3 h-3" />
                {testimonial.loanType}
              </div>
            </div>

            {/* Quote */}
            <div className="relative mb-6">
              <Quote className="absolute -top-2 -left-1 w-10 h-10 text-primary/10" />
              <p className="text-muted-foreground leading-relaxed text-sm relative z-10">
                "{testimonial.content}"
              </p>
            </div>

            {/* Loan Amount Badge */}
            <div className="mb-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent/50 border border-border/50 text-xs font-medium text-foreground">
              <span className="text-muted-foreground">Loan Amount:</span>
              <span className="font-bold text-primary">{testimonial.amount}</span>
            </div>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-border/50">
              <div className={`
                w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient}
                flex items-center justify-center text-white font-bold text-sm shadow-lg
                group-hover:scale-110 transition-transform duration-300
              `}>
                {testimonial.initials}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-bold text-foreground truncate">{testimonial.name}</h4>
                  {testimonial.verified && (
                    <BadgeCheck className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  )}
                </div>
                <p className="text-xs text-muted-foreground truncate">
                  {testimonial.role} • {testimonial.location}
                </p>
              </div>
            </div>
          </div>

          {/* Hover Glow */}
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 -z-10" />
        </div>
      </motion.div>
    </motion.div>
  )
}

// Infinite Marquee Row
function MarqueeRow({ 
  items, 
  direction = "left", 
  speed = 40,
  className = ""
}: { 
  items: typeof testimonials; 
  direction?: "left" | "right"; 
  speed?: number;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  
  return (
    <div className={`relative overflow-hidden group ${className}`}>
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none" />
      
      <motion.div
        ref={containerRef}
        className="flex gap-6 py-2"
        animate={{
          x: direction === "left" ? [0, -50 * items.length * 4] : [-50 * items.length * 4, 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {[...items, ...items, ...items, ...items].map((testimonial, index) => (
          <div key={`${testimonial.name}-${index}`} className="flex-shrink-0 w-[380px]">
            <div className={`
              bg-card rounded-2xl border border-border/50 p-5 h-full
              hover:shadow-lg hover:border-primary/20 transition-all duration-300
            `}>
              <div className="flex items-center gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-2.5">
                <div className={`
                  w-9 h-9 rounded-full bg-gradient-to-br ${testimonial.gradient}
                  flex items-center justify-center text-white text-xs font-bold
                `}>
                  {testimonial.initials}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-semibold text-foreground">{testimonial.name}</span>
                    <BadgeCheck className="w-3.5 h-3.5 text-blue-500" />
                  </div>
                  <span className="text-xs text-muted-foreground">{testimonial.loanType} • {testimonial.amount}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-muted/30 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative">
        {/* Section Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Customer Stories
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Trusted by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Indians
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Real stories from real customers who achieved their financial goals with KalyaniFinance.
            </p>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto mb-16">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="text-center p-4 rounded-2xl bg-card border border-border/50 hover:border-primary/20 transition-colors"
                >
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-xs text-muted-foreground font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Marquee Rows */}
        <div className="space-y-4 mb-12">
          <MarqueeRow items={testimonials} direction="left" speed={50} />
          <MarqueeRow items={[...testimonials].reverse()} direction="right" speed={45} />
        </div>

        {/* Featured Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-16"
          >
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-3xl bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10">
              <div className="text-left">
                <p className="text-lg font-bold text-foreground">Join Us and become happy customers</p>
                <p className="text-sm text-muted-foreground">Your success story could be next</p>
              </div>
              <Button size="lg" asChild className="gap-2 px-8 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all">
                <Link href="/contact">
                  <Users className="w-4 h-4" />
                  Apply Now — It's Free
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}