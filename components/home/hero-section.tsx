"use client"

import Link from "next/link"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ArrowRight, Shield, Clock, Users, Award, TrendingUp, BadgeCheck, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRef, useEffect, useState } from "react"

const stats = [
  { value: "", label: "Trusted Clients", suffix: "✓", icon: Users },
  { value: "₹1Cr", label: "Loans Facilitated", suffix: "+", icon: TrendingUp },
  { value: "2+", label: "Years of Expertise", suffix: "+", icon: Award },
  { value: "100%", label: "Client Satisfaction", suffix: "", icon: BadgeCheck },
]

const features = [
  { icon: Clock, text: "Approval in 24 Hours", color: "from-amber-500 to-orange-500" },
  { icon: Shield, text: "Bank-Grade Security", color: "from-emerald-500 to-teal-500" },
  { icon: Users, text: "Dedicated Advisor", color: "from-blue-500 to-indigo-500" },
  { icon: Award, text: "Lowest Interest Rates", color: "from-violet-500 to-purple-500" },
]

const trustLogos = [
  "HDFC Bank", "SBI", "ICICI", "Axis Bank", "Bajaj Finserv", "Punjab National Bank"
]

// 3D Tilt Card Component
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
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

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Floating particles background
function FloatingParticles() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number; delay: number }>>([])
  
  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary/20"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

// Animated counter
function AnimatedCounter({ value, suffix = "" }: { value: string; suffix?: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, type: "spring" }}
      className="inline-block"
    >
      {value}{suffix}
    </motion.span>
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full blur-3xl" />
        <FloatingParticles />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10"
          >
            {/* Trust Badge */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Trusted by Clients
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] mb-6"
            >
              Get Your{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Loan Approved
                </span>
                <motion.svg
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                >
                  <motion.path
                    d="M2 10C50 2 100 2 150 6C200 10 250 10 298 2"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="text-primary/30"
                  />
                </motion.svg>
              </span>
              <br />
              in Just 24 Hours
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl"
            >
              From personal loans to business funding — we connect you with the best banks at 
              <span className="text-primary font-semibold"> lowest interest rates</span>. 
              Zero hidden charges. 100% transparent process.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <Button 
                size="lg" 
                asChild 
                className="gap-2 text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Link href="/contact">
                  Apply Now — It&apos;s Free
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild
                className="gap-2 text-lg px-8 py-6 border-2 hover:bg-secondary/10 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Link href="tel:+917620838449">
                  <Phone className="w-5 h-5" />
                  Talk to an Expert
                </Link>
              </Button>
            </motion.div>

            {/* Feature Pills */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-3"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow cursor-default"
                >
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center`}>
                    <feature.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Trust Logos */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-10 pt-8 border-t border-border/50"
            >
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4 font-medium">
                Associated with India&apos;s Leading Banks
              </p>
              <div className="flex flex-wrap gap-6 items-center opacity-60">
                {trustLogos.map((logo) => (
                  <span key={logo} className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">
                    {logo}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - 3D Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative lg:pl-8"
          >
            <TiltCard className="relative">
              <div className="relative bg-card/85 backdrop-blur-xl rounded-3xl shadow-2xl border border-border/50 p-8 lg:p-10 overflow-hidden">
                {/* Glow Effects */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/30 rounded-full blur-[80px]" />
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-secondary/30 rounded-full blur-[80px]" />
                
                {/* Card Content */}
                <div className="relative">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">
                        Why KalyaniFinance?
                      </h2>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-8">
                    Numbers that reflect our commitment to your financial success.
                  </p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 30, rotateX: -15 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: 0.8 + index * 0.15,
                          type: "spring",
                          stiffness: 100
                        }}
                        whileHover={{ 
                          scale: 1.05, 
                          rotateY: 5,
                          transition: { duration: 0.2 }
                        }}
                        className="relative group cursor-default"
                      >
                        <div className="text-center p-5 rounded-2xl bg-gradient-to-br from-accent/80 to-accent/40 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                          <stat.icon className="w-6 h-6 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                          <div className="text-2xl lg:text-3xl font-bold text-foreground mb-1">
                            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                          </div>
                          <div className="text-xs text-muted-foreground font-medium leading-tight">
                            {stat.label}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Bottom CTA in Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    className="mt-8 pt-6 border-t border-border/50"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-foreground">Free Eligibility Check</p>
                        <p className="text-xs text-muted-foreground">No CIBIL score impact</p>
                      </div>
                      <Button size="sm" asChild className="gap-1 rounded-full px-6">
                        <Link href="/contact">
                          Check Now
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </TiltCard>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8, type: "spring" }}
              className="absolute -top-4 -right-4 lg:top-4 lg:-right-8 z-20"
            >
              <div className="bg-gradient-to-br from-amber-400 to-orange-500 text-white p-4 rounded-2xl shadow-xl shadow-orange-500/30 rotate-12 hover:rotate-0 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold">7.5%</div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider">Starting ROI</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}