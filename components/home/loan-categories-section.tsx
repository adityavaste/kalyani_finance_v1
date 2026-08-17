"use client"

import Link from "next/link"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { 
  Home, Car, User, Briefcase, GraduationCap, Coins, Building2, 
  ArrowRight, TrendingDown, Clock, BadgePercent, Sparkles, CheckCircle2 
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRef } from "react"

const loanCategories = [
  {
    icon: Home,
    title: "Home Loan",
    description: "Make your dream home a reality with competitive interest rates and flexible tenure up to 30 years.",
    rate: "7.75%",
    maxAmount: "₹5 Crore",
    approvalTime: "3 Days",
    href: "/loans#home-loan",
    gradient: "from-blue-500 to-cyan-400",
    bgGradient: "from-blue-500/10 to-cyan-400/5",
    borderColor: "border-blue-500/20",
    popular: true,
    features: ["Zero Processing Fee", "Balance Transfer", "Top-up Available"],
  },
  {
    icon: Car,
    title: "Car Loan",
    description: "Drive your dream car today with quick approvals and flexible EMI options up to 7 years.",
    rate: "9.0%",
    maxAmount: "₹50 Lakh",
    approvalTime: "24 Hours",
    href: "/loans#car-loan",
    gradient: "from-emerald-500 to-teal-400",
    bgGradient: "from-emerald-500/10 to-teal-400/5",
    borderColor: "border-emerald-500/20",
    popular: false,
    features: ["100% On-Road Finance", "No Income Proof", "Instant Approval"],
  },
  {
    icon: User,
    title: "Personal Loan",
    description: "Get instant personal loans up to ₹40 lakhs for any personal need with minimal documentation.",
    rate: "10.5%",
    maxAmount: "₹40 Lakh",
    approvalTime: "24 Hours",
    href: "/loans#personal-loan",
    gradient: "from-violet-500 to-purple-400",
    bgGradient: "from-violet-500/10 to-purple-400/5",
    borderColor: "border-violet-500/20",
    popular: true,
    features: ["No Collateral", "Pre-Approved Offers", "Flexible Tenure"],
  },
  {
    icon: Briefcase,
    title: "Business Loan",
    description: "Fuel your business growth with hassle-free working capital loans for MSMEs and startups.",
    rate: "11.0%",
    maxAmount: "₹2 Crore",
    approvalTime: "2 Days",
    href: "/loans#business-loan",
    gradient: "from-amber-500 to-orange-400",
    bgGradient: "from-amber-500/10 to-orange-400/5",
    borderColor: "border-amber-500/20",
    popular: false,
    features: ["Unsecured Option", "GST Based", "Quick Disbursal"],
  },
  {
    icon: GraduationCap,
    title: "Education Loan",
    description: "Invest in your future with education loans for India and abroad with moratorium period.",
    rate: "8.0%",
    maxAmount: "₹1.5 Crore",
    approvalTime: "5 Days",
    href: "/loans#education-loan",
    gradient: "from-rose-500 to-pink-400",
    bgGradient: "from-rose-500/10 to-pink-400/5",
    borderColor: "border-rose-500/20",
    popular: false,
    features: ["Moratorium Period", "Tax Benefits u/s 80E", "Cover Living Expenses"],
  },
  {
    icon: Coins,
    title: "Gold Loan",
    description: "Quick funds against your gold jewelry with minimal documentation and instant disbursal.",
    rate: "7.5%",
    maxAmount: "₹2 Crore",
    approvalTime: "30 Minutes",
    href: "/loans#gold-loan",
    gradient: "from-yellow-500 to-amber-400",
    bgGradient: "from-yellow-500/10 to-amber-400/5",
    borderColor: "border-yellow-500/20",
    popular: true,
    features: ["Lowest Rate", "Instant Cash", "Safe Vault Storage"],
  },
  {
    icon: Building2,
    title: "Loan Against Property",
    description: "Unlock the value of your residential or commercial property with attractive interest rates.",
    rate: "9.5%",
    maxAmount: "₹10 Crore",
    approvalTime: "5 Days",
    href: "/loans#lap",
    gradient: "from-cyan-500 to-sky-400",
    bgGradient: "from-cyan-500/10 to-sky-400/5",
    borderColor: "border-cyan-500/20",
    popular: false,
    features: ["High LTV Ratio", "Balance Transfer", "Long Tenure"],
  },
]

// 3D Tilt Card Hook
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

function LoanCard({ loan, index }: { loan: typeof loanCategories[0]; index: number }) {
  const { ref, rotateX, rotateY, handleMouseMove, handleMouseLeave } = useTilt()

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={ref}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative h-full"
      >
        <Link href={loan.href} className="block h-full">
          <div className={`
            relative h-full bg-card rounded-3xl border ${loan.borderColor} p-6 lg:p-7
            hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500
            overflow-hidden
          `}>
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${loan.bgGradient} opacity-50`} />
            
            {/* Popular Badge */}
            {loan.popular && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                className="absolute top-4 right-4 z-10"
              >
                <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold shadow-lg">
                  <Sparkles className="w-3 h-3" />
                  BEST RATE
                </div>
              </motion.div>
            )}

            {/* Content */}
            <div className="relative z-10">
              {/* Icon */}
              <motion.div 
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className={`
                  w-16 h-16 rounded-2xl bg-gradient-to-br ${loan.gradient}
                  flex items-center justify-center mb-5 shadow-lg
                  group-hover:shadow-xl transition-shadow
                `}
              >
                <loan.icon className="w-8 h-8 text-white" />
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {loan.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-5 line-clamp-2 leading-relaxed">
                {loan.description}
              </p>

              {/* Rate Highlight */}
              <div className="mb-5 p-4 rounded-2xl bg-background/80 border border-border/50">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Interest Rate</span>
                  <div className="flex items-center gap-1 text-green-500 text-xs font-semibold">
                    <TrendingDown className="w-3 h-3" />
                    Lowest
                  </div>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    {loan.rate}
                  </span>
                  <span className="text-sm text-muted-foreground">p.a.</span>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <BadgePercent className="w-3.5 h-3.5 text-primary" />
                  <span>Up to {loan.maxAmount}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="w-3.5 h-3.5 text-primary" />
                  <span>{loan.approvalTime}</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {loan.features.map((feature, i) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="flex items-center gap-2 text-xs text-muted-foreground"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <Button 
                className={`
                  w-full gap-2 bg-gradient-to-r ${loan.gradient} text-white
                  hover:opacity-90 transition-all duration-300 group/btn
                  shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30
                `}
              >
                Apply Now
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Hover Glow */}
            <div className={`absolute -inset-px rounded-3xl bg-gradient-to-r ${loan.gradient} opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500 -z-10`} />
          </div>
        </Link>
      </motion.div>
    </motion.div>
  )
}

export function LoanCategoriesSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-background overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6"
          >
            <BadgePercent className="w-4 h-4" />
            Loan Products
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Find the Perfect{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Loan for You
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compare interest rates, loan amounts, and approval times across all major loan products. 
            Get instant approval with minimal documentation.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {loanCategories.map((loan, index) => (
            <LoanCard key={loan.title} loan={loan} index={index} />
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
              <p className="text-lg font-bold text-foreground">Not sure which loan is right for you?</p>
              <p className="text-sm text-muted-foreground">Get a free consultation with our loan experts</p>
            </div>
            <Button size="lg" asChild className="gap-2 px-8 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all">
              <Link href="/contact">
                Talk to an Expert
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}