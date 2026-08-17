"use client"

import Link from "next/link"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { 
  Heart, Car, Shield, Plane, Users, Building2, Bike, 
  ArrowRight, BadgeCheck, Sparkles, CheckCircle2, 
  ShieldCheck, Clock, FileCheck, Phone 
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRef } from "react"

const insuranceCategories = [
  {
    icon: Heart,
    title: "Health Insurance",
    description: "Comprehensive health coverage for you and your family with 10,000+ cashless hospitals across India.",
    coverage: "₹1 Crore",
    startingFrom: "₹499/month",
    href: "/insurance/health-insurance",
    gradient: "from-red-500 to-rose-400",
    bgGradient: "from-red-500/10 to-rose-400/5",
    borderColor: "border-red-500/20",
    popular: true,
    features: ["Cashless Hospitalization", "No Medical Checkup", "Tax Benefits u/s 80D"],
  },
  {
    icon: Car,
    title: "Car Insurance",
    description: "Complete protection for your car against accidents, theft, and natural disasters with zero depreciation.",
    coverage: "IDV + Add-ons",
    startingFrom: "₹2,094/year",
    href: "/insurance/car-insurance",
    gradient: "from-blue-500 to-cyan-400",
    bgGradient: "from-blue-500/10 to-cyan-400/5",
    borderColor: "border-blue-500/20",
    popular: true,
    features: ["Zero Depreciation", "24/7 Roadside Assist", "Instant Claim Settlement"],
  },
  {
    icon: Bike,
    title: "Bike Insurance",
    description: "Affordable two-wheeler insurance with comprehensive and third-party options. Renew in 2 minutes.",
    coverage: "IDV Coverage",
    startingFrom: "₹555/year",
    href: "/insurance/bike-insurance",
    gradient: "from-orange-500 to-amber-400",
    bgGradient: "from-orange-500/10 to-amber-400/5",
    borderColor: "border-orange-500/20",
    popular: false,
    features: ["Third-Party Cover", "Own Damage Cover", "NCB Transfer"],
  },
  {
    icon: Shield,
    title: "Life Insurance",
    description: "Secure your family's future with term plans and endowment policies from top insurers.",
    coverage: "₹5 Crore",
    startingFrom: "₹490/month",
    href: "/insurance/life-insurance",
    gradient: "from-emerald-500 to-teal-400",
    bgGradient: "from-emerald-500/10 to-teal-400/5",
    borderColor: "border-emerald-500/20",
    popular: true,
    features: ["Term Plans", "ULIP Options", "Critical Illness Rider"],
  },
  {
    icon: Plane,
    title: "Travel Insurance",
    description: "Worry-free travel with coverage for medical emergencies, trip cancellations, and lost baggage worldwide.",
    coverage: "$500K+",
    startingFrom: "₹45/day",
    href: "/insurance/travel-insurance",
    gradient: "from-violet-500 to-purple-400",
    bgGradient: "from-violet-500/10 to-purple-400/5",
    borderColor: "border-violet-500/20",
    popular: false,
    features: ["Medical Emergency", "Trip Cancellation", "Lost Baggage Cover"],
  },
 
  {
    icon: Building2,
    title: "Business Insurance",
    description: "Protect your business from unforeseen risks, liability claims, and property damage with custom plans.",
    coverage: "Custom Plans",
    startingFrom: "Custom Quote",
    href: "/insurance/business-insurance",
    gradient: "from-slate-500 to-gray-400",
    bgGradient: "from-slate-500/10 to-gray-400/5",
    borderColor: "border-slate-500/20",
    popular: false,
    features: ["Property Cover", "Liability Protection", "Business Interruption"],
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

function InsuranceCard({ insurance, index }: { insurance: typeof insuranceCategories[0]; index: number }) {
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
        <Link href={insurance.href} className="block h-full">
          <div className={`
            relative h-full bg-card rounded-3xl border ${insurance.borderColor} p-6 lg:p-7
            hover:shadow-2xl hover:shadow-secondary/10 transition-all duration-500
            overflow-hidden
          `}>
            {/* Background Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${insurance.bgGradient} opacity-50`} />
            
            {/* Popular Badge */}
            {insurance.popular && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                className="absolute top-4 right-4 z-10"
              >
                <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold shadow-lg">
                  <Sparkles className="w-3 h-3" />
                  MOST POPULAR
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
                  w-16 h-16 rounded-2xl bg-gradient-to-br ${insurance.gradient}
                  flex items-center justify-center mb-5 shadow-lg
                  group-hover:shadow-xl transition-shadow
                `}
              >
                <insurance.icon className="w-8 h-8 text-white" />
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                {insurance.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-5 line-clamp-2 leading-relaxed">
                {insurance.description}
              </p>

              {/* Coverage & Price Box */}
              <div className="mb-5 p-4 rounded-2xl bg-background/80 border border-border/50 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Coverage</span>
                  <div className="flex items-center gap-1 text-green-500 text-xs font-semibold">
                    <ShieldCheck className="w-3 h-3" />
                    Full Protection
                  </div>
                </div>
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
                  {insurance.coverage}
                </div>
                <div className="h-px bg-border/50" />
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Starting from</span>
                  <span className="text-lg font-bold text-foreground">{insurance.startingFrom}</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {insurance.features.map((feature, i) => (
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
                variant="outline"
                className={`
                  w-full gap-2 border-2 hover:bg-gradient-to-r ${insurance.gradient} 
                  hover:text-white hover:border-transparent transition-all duration-300 group/btn
                `}
              >
                <FileCheck className="w-4 h-4" />
                Apply Now
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Hover Glow */}
            <div className={`absolute -inset-px rounded-3xl bg-gradient-to-r ${insurance.gradient} opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500 -z-10`} />
          </div>
        </Link>
      </motion.div>
    </motion.div>
  )
}

export function InsuranceCategoriesSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-muted/30 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-semibold mb-6"
          >
            <ShieldCheck className="w-4 h-4" />
            Insurance Plans
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Protect What{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
              Matters Most
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compare premiums from top insurers like LIC, HDFC Ergo, ICICI Lombard & more. 
            Get instant quotes and buy online in 5 minutes.
          </p>
        </motion.div>

        {/* Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {[
            
            { icon: Clock, label: "5 Min Purchase", sublabel: "Instant Policy" },
            { icon: ShieldCheck, label: "Zero Paperwork", sublabel: "100% Digital" },
            { icon: Phone, label: "24/7 Support", sublabel: "Claim Assistance" },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="flex items-center gap-3 p-4 rounded-2xl bg-card border border-border/50"
            >
              <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">{item.label}</div>
                <div className="text-xs text-muted-foreground">{item.sublabel}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {insuranceCategories.map((insurance, index) => (
            <InsuranceCard key={insurance.title} insurance={insurance} index={index} />
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
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-3xl bg-gradient-to-r from-secondary/5 to-primary/5 border border-secondary/10">
            <div className="text-left">
              <p className="text-lg font-bold text-foreground">Compare & save up to 25% on premiums</p>
              <p className="text-sm text-muted-foreground">Our experts will find the best plan for your budget</p>
            </div>
            <Button size="lg" asChild className="gap-2 px-8 shadow-lg shadow-secondary/25 hover:shadow-secondary/40 transition-all">
              <Link href="/contact">
                <Phone className="w-4 h-4" />
                Get Expert Advice
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}