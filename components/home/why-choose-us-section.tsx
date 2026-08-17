"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { 
  Shield, Clock, BadgeCheck, HeadphonesIcon, Percent, FileCheck,
  ArrowRight, TrendingUp, Users, Award, Star, CheckCircle2,
  Zap, Lock, HeartHandshake, BarChart3, Phone
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRef, useEffect, useState } from "react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Approval",
    description: "Get loan approval within 24 hours with minimal documentation and instant disbursal to your account.",
    stat: "24h",
    statLabel: "Avg. Approval",
    gradient: "from-amber-500 to-orange-500",
    bgGradient: "from-amber-500/10 to-orange-500/5",
  },
  {
    icon: Percent,
    title: "Lowest Interest Rates",
    description: "Enjoy market-leading rates starting at 7.5% with transparent pricing and absolutely zero hidden charges.",
    stat: "7.5%",
    statLabel: "Starting ROI",
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-500/10 to-teal-500/5",
  },
  {
    icon: FileCheck,
    title: "Paperless Process",
    description: "Complete digital KYC with Aadhaar e-sign. Upload documents via WhatsApp. No branch visits needed.",
    stat: "100%",
    statLabel: "Digital",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/5",
  },
  {
    icon: Lock,
    title: "Bank-Grade Security",
    description: "256-bit SSL encryption for all transactions. Your data is never shared with third parties.",
    stat: "256-bit",
    statLabel: "Encryption",
    gradient: "from-violet-500 to-purple-500",
    bgGradient: "from-violet-500/10 to-purple-500/5",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Advisor",
    description: "Get a personal relationship manager who guides you from application to disbursal, always one call away.",
    stat: "1:1",
    statLabel: "Support",
    gradient: "from-rose-500 to-pink-500",
    bgGradient: "from-rose-500/10 to-pink-500/5",
  },
  {
    icon: BarChart3,
    title: "Happy Clients",
    description: "Join thousands of satisfied customers across India who trust us for their financial journey.",
    stat: "✓",
    statLabel: "Customers",
    gradient: "from-indigo-500 to-blue-500",
    bgGradient: "from-indigo-500/10 to-blue-500/5",
  },
]

const trustBadges = [
  { icon: Shield, label: "RBI Compliant", color: "text-emerald-500" },
  { icon: Award, label: "IRDAI Licensed", color: "text-blue-500" },
  { icon: Star, label: "4.9/5 Rating", color: "text-amber-500" },
  { icon: Users, label: "500+ Partners", color: "text-violet-500" },
]

const comparisonPoints = [
  "No hidden charges or processing fees",
  "Free CIBIL score check",
  "Pre-approved offers for existing customers",
  "Balance transfer facility available",
]

// Animated Counter Component
function AnimatedCounter({ value, suffix = "" }: { value: string; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState("0")
  
  useEffect(() => {
    const numericPart = value.replace(/[^0-9.]/g, "")
    const hasDecimal = numericPart.includes(".")
    const target = parseFloat(numericPart)
    
    if (isNaN(target)) {
      setDisplayValue(value)
      return
    }

    let start = 0
    const duration = 2000
    const startTime = Date.now()
    
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const current = start + (target - start) * easeOut
      
      if (hasDecimal) {
        setDisplayValue(current.toFixed(2))
      } else {
        setDisplayValue(Math.floor(current).toString())
      }
      
      if (progress >= 1) {
        clearInterval(timer)
        setDisplayValue(numericPart)
      }
    }, 16)
    
    return () => clearInterval(timer)
  }, [value])
  
  const prefix = value.match(/^[^0-9.]*/)?.[0] || ""
  const suffixFromValue = value.match(/[^0-9.]*$/)?.[0] || ""
  
  return (
    <span>
      {prefix}{displayValue}{suffixFromValue || suffix}
    </span>
  )
}

// 3D Tilt Card
function useTilt() {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)
  
  const rotateX = useSpring(useTransform(y, [0, 1], [10, -10]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(x, [0, 1], [-10, 10]), { stiffness: 300, damping: 30 })

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

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const { ref, rotateX, rotateY, handleMouseMove, handleMouseLeave } = useTilt()

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={ref}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative h-full"
      >
        <div className={`
          relative h-full p-6 lg:p-7 rounded-3xl bg-card border border-border/50
          hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500
          overflow-hidden
        `}>
          {/* Background Gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
          
          {/* Stat Badge */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
            className="absolute top-4 right-4 z-10"
          >
            <div className={`
              px-3 py-1.5 rounded-full bg-gradient-to-r ${feature.gradient} text-white text-xs font-bold shadow-lg
            `}>
              <AnimatedCounter value={feature.stat} />
            </div>
          </motion.div>

          <div className="relative z-10">
            {/* Icon */}
            <motion.div 
              whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className={`
                w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient}
                flex items-center justify-center mb-5 shadow-lg
                group-hover:shadow-xl transition-shadow
              `}
            >
              <feature.icon className="w-7 h-7 text-white" />
            </motion.div>

            <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              {feature.title}
            </h3>
            
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {feature.description}
            </p>

            <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
              <TrendingUp className="w-3.5 h-3.5 text-green-500" />
              <span>{feature.statLabel}</span>
            </div>
          </div>

          {/* Hover Glow */}
          <div className={`absolute -inset-px rounded-3xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-15 blur-sm transition-opacity duration-500 -z-10`} />
        </div>
      </motion.div>
    </motion.div>
  )
}

export function WhyChooseUsSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-secondary/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Content - Sticky on Desktop */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-32"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6"
            >
              <Award className="w-4 h-4" />
              Why Choose KalyaniFinance
            </motion.div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              India's Most Trusted{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Financial Partner
              </span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We don't just process loans — we build relationships. With direct partnerships 
              across 25+ banks and NBFCs, we ensure you get the best rates with zero hassle.
            </p>

            {/* Comparison Points */}
            <div className="space-y-3 mb-8">
              {comparisonPoints.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-sm text-foreground font-medium">{point}</span>
                </motion.div>
              ))}
            </div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 gap-3 mb-8"
            >
              {trustBadges.map((badge) => (
                <div 
                  key={badge.label}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-card border border-border/50 hover:border-primary/20 transition-colors"
                >
                  <badge.icon className={`w-5 h-5 ${badge.color}`} />
                  <span className="text-sm font-semibold text-foreground">{badge.label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <Button size="lg" asChild className="gap-2 px-8 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:-translate-y-0.5">
                <Link href="/contact">
                  Start Your Application
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}

            {/* Floating CTA Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="sm:col-span-2"
            >
              <div className="relative p-6 rounded-3xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
                
                <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      Still have questions?
                    </h3>
                  
                  </div>
                  <Button asChild variant="outline" className="gap-2 border-2 hover:bg-primary hover:text-white transition-all">
                    <Link
    href="tel:+917620838449"
    className="flex items-center gap-2"
  >
    <Phone className="w-5 h-5" />
    <span>Talk to our experts — it's completely free</span>
  </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}