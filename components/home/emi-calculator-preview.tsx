"use client"

import { useState, useEffect, useMemo } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { 
  Calculator, ArrowRight, TrendingDown, Wallet, 
  Clock, BadgePercent, 
  Home, Car, User, Briefcase, Sparkles
} from "lucide-react"
import { Button } from "@/components/ui/button"

const loanPresets = [
  { icon: Home, label: "Home Loan", amount: 5000000, rate: 8.5, tenure: 240, color: "from-blue-500 to-cyan-400" },
  { icon: Car, label: "Car Loan", amount: 800000, rate: 9.0, tenure: 60, color: "from-emerald-500 to-teal-400" },
  { icon: User, label: "Personal", amount: 500000, rate: 11.5, tenure: 36, color: "from-violet-500 to-purple-400" },
  { icon: Briefcase, label: "Business", amount: 2000000, rate: 12.0, tenure: 84, color: "from-amber-500 to-orange-400" },
]

function formatCurrency(amount: number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount)
}

function formatCompact(num: number) {
  if (num >= 10000000) return `₹${(num / 10000000).toFixed(1)}Cr`
  if (num >= 100000) return `₹${(num / 100000).toFixed(0)}L`
  if (num >= 1000) return `₹${(num / 1000).toFixed(0)}K`
  return `₹${num}`
}

// Animated Counter
function AnimatedNumber({ value, formatter = (v: number) => v.toString() }: { value: number; formatter?: (v: number) => string }) {
  const [display, setDisplay] = useState(0)
  
  useEffect(() => {
    let start = display
    const duration = 600
    const startTime = Date.now()
    
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const current = start + (value - start) * easeOut
      setDisplay(current)
      if (progress >= 1) clearInterval(timer)
    }, 16)
    
    return () => clearInterval(timer)
  }, [value])
  
  return <span>{formatter(display)}</span>
}

// Donut Chart Component
function DonutChart({ principal, interest }: { principal: number; interest: number }) {
  const total = principal + interest
  const principalPct = (principal / total) * 100
  const interestPct = (interest / total) * 100
  const circumference = 2 * Math.PI * 80
  const principalOffset = circumference - (principalPct / 100) * circumference
  const interestOffset = circumference - (interestPct / 100) * circumference

  return (
    <div className="relative w-36 h-36 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="16" className="text-accent/30" />
        
        <motion.circle
          cx="100"
          cy="100"
          r="80"
          fill="none"
          stroke="url(#gradientInterest)"
          strokeWidth="16"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: interestOffset }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        
        <motion.circle
          cx="100"
          cy="100"
          r="80"
          fill="none"
          stroke="url(#gradientPrincipal)"
          strokeWidth="16"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: principalOffset }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        />
        
        <defs>
          <linearGradient id="gradientPrincipal" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--secondary))" />
          </linearGradient>
          <linearGradient id="gradientInterest" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#ef4444" />
          </linearGradient>
        </defs>
      </svg>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-2">
        <span className="text-[10px] sm:text-[11px] lg:text-xs text-muted-foreground font-medium">Total Payable</span>
        <span className="text-sm sm:text-base lg:text-lg font-bold text-foreground truncate max-w-full">{formatCompact(total)}</span>
      </div>
    </div>
  )
}

// Custom Range Slider
function RangeSlider({ 
  label, value, min, max, step, onChange, displayValue, 
  gradient = "from-primary to-secondary" 
}: { 
  label: string; value: number; min: number; max: number; step: number; 
  onChange: (val: number) => void; displayValue: string;
  gradient?: string;
}) {
  const percentage = ((value - min) / (max - min)) * 100
  
  return (
    <div className="space-y-2.5 sm:space-y-3">
      <div className="flex justify-between items-center gap-2">
        <label className="text-xs sm:text-sm font-medium text-foreground">{label}</label>
        <motion.span 
          key={displayValue}
          initial={{ scale: 1.2, color: "hsl(var(--primary))" }}
          animate={{ scale: 1, color: "hsl(var(--foreground))" }}
          className="text-xs sm:text-sm font-bold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-primary/10 text-primary whitespace-nowrap"
        >
          {displayValue}
        </motion.span>
      </div>
      
      <div className="relative h-6 flex items-center">
        <div className="absolute inset-0 h-2 rounded-full bg-accent overflow-hidden">
          <motion.div 
            className={`h-full bg-gradient-to-r ${gradient}`}
            initial={false}
            animate={{ width: `${percentage}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        </div>
        
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10 touch-none"
        />
        
        <motion.div
          className="absolute w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white shadow-lg border-2 border-primary pointer-events-none z-0"
          initial={false}
          animate={{ left: `calc(${percentage}% - 8px)` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      </div>
      
      <div className="flex justify-between text-[10px] sm:text-[11px] lg:text-xs text-muted-foreground font-medium">
        <span>{formatCompact(min)}</span>
        <span>{formatCompact(max)}</span>
      </div>
    </div>
  )
}

export function EmiCalculatorPreview() {
  const [loanAmount, setLoanAmount] = useState(5000000)
  const [interestRate, setInterestRate] = useState(8.5)
  const [tenure, setTenure] = useState(240)
  const [activePreset, setActivePreset] = useState(0)

  const { emi, totalAmount, totalInterest } = useMemo(() => {
    const monthlyRate = interestRate / 12 / 100
    const emi = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenure) / (Math.pow(1 + monthlyRate, tenure) - 1)
    const totalAmount = emi * tenure
    const totalInterest = totalAmount - loanAmount
    return {
      emi,
      totalAmount,
      totalInterest,
    }
  }, [loanAmount, interestRate, tenure])

  const applyPreset = (index: number) => {
    const preset = loanPresets[index]
    setLoanAmount(preset.amount)
    setInterestRate(preset.rate)
    setTenure(preset.tenure)
    setActivePreset(index)
  }

  return (
    <section className="relative py-14 sm:py-20 lg:py-32 bg-muted/30 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[500px] lg:w-[800px] h-[280px] sm:h-[500px] lg:h-[800px] bg-primary/5 rounded-full blur-[90px] sm:blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-semibold mb-3 sm:mb-6"
          >
            <Calculator className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            Smart Financial Tools
          </motion.div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2.5 sm:mb-4 px-2">
            Plan Your EMIs{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Before You Apply
            </span>
          </h2>
          
          <p className="text-xs sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Use our interactive calculator to find the perfect loan amount and tenure. 
            See exactly how much you&apos;ll pay — no surprises.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-12 items-start">
          
          {/* Left - Calculator */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 w-full"
          >
            <div className="bg-card rounded-2xl sm:rounded-3xl border border-border/50 shadow-xl sm:shadow-2xl shadow-primary/5 overflow-hidden">
              {/* Header */}
              <div className="p-4 sm:p-6 lg:p-8 border-b border-border/50 bg-gradient-to-r from-card to-card/95">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg flex-shrink-0">
                    <Calculator className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-sm sm:text-lg">EMI Calculator</h3>
                    <p className="text-[11px] sm:text-sm text-muted-foreground">Adjust sliders to see your monthly payment</p>
                  </div>
                </div>

                {/* Loan Type Presets - Mobile Optimized Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {loanPresets.map((preset, index) => (
                    <motion.button
                      key={preset.label}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => applyPreset(index)}
                      className={`
                        flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all text-center
                        ${activePreset === index 
                          ? `bg-gradient-to-r ${preset.color} text-white shadow-md sm:shadow-lg` 
                          : 'bg-accent/50 text-muted-foreground hover:bg-accent hover:text-foreground'
                        }
                      `}
                    >
                      <preset.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                      <span className="truncate">{preset.label}</span>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Sliders */}
              <div className="p-4 sm:p-6 lg:p-8 space-y-5 sm:space-y-8">
                <RangeSlider
                  label="Loan Amount"
                  value={loanAmount}
                  min={100000}
                  max={10000000}
                  step={100000}
                  onChange={setLoanAmount}
                  displayValue={formatCompact(loanAmount)}
                />
                
                <RangeSlider
                  label="Interest Rate (p.a.)"
                  value={interestRate}
                  min={5}
                  max={20}
                  step={0.25}
                  onChange={setInterestRate}
                  displayValue={`${interestRate}%`}
                  gradient="from-emerald-500 to-teal-400"
                />
                
                <RangeSlider
                  label="Loan Tenure"
                  value={tenure}
                  min={6}
                  max={360}
                  step={6}
                  onChange={setTenure}
                  displayValue={`${Math.floor(tenure / 12)}Y ${tenure % 12}M`}
                  gradient="from-violet-500 to-purple-400"
                />
              </div>

              {/* Results Bar */}
              <div className="p-4 sm:p-6 lg:p-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-t border-border/50">
                {/* Responsive Summary Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 pb-4 sm:pb-0 border-b border-border/50 sm:border-b-0">
                  <div className="text-center sm:text-left">
                    <p className="text-[10px] sm:text-[11px] lg:text-xs text-muted-foreground font-medium uppercase tracking-wider mb-0.5 sm:mb-1">Monthly EMI</p>
                    <motion.p 
                      key={emi}
                      initial={{ scale: 1.1, color: "hsl(var(--primary))" }}
                      animate={{ scale: 1, color: "hsl(var(--foreground))" }}
                      className="text-base sm:text-xl lg:text-2xl font-bold"
                    >
                      <AnimatedNumber value={emi} formatter={formatCurrency} />
                    </motion.p>
                  </div>
                  
                  <div className="text-center sm:border-x sm:border-border/50 sm:px-4">
                    <p className="text-[10px] sm:text-[11px] lg:text-xs text-muted-foreground font-medium uppercase tracking-wider mb-0.5 sm:mb-1">Total Interest</p>
                    <motion.p 
                      key={totalInterest}
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      className="text-base sm:text-xl lg:text-2xl font-bold text-amber-500"
                    >
                      <AnimatedNumber value={totalInterest} formatter={formatCurrency} />
                    </motion.p>
                  </div>
                  
                  <div className="text-center sm:text-right">
                    <p className="text-[10px] sm:text-[11px] lg:text-xs text-muted-foreground font-medium uppercase tracking-wider mb-0.5 sm:mb-1">Total Payable</p>
                    <motion.p 
                      key={totalAmount}
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      className="text-base sm:text-xl lg:text-2xl font-bold text-foreground"
                    >
                      <AnimatedNumber value={totalAmount} formatter={formatCurrency} />
                    </motion.p>
                  </div>
                </div>

                {/* Apply CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mt-5 sm:mt-6"
                >
                  <Button size="lg" asChild className="w-full gap-2 text-xs sm:text-base py-4 sm:py-6 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all">
                    <Link href={`/contact?amount=${loanAmount}&emi=${Math.round(emi)}&type=${loanPresets[activePreset].label}`}>
                      <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                      <span className="truncate">Apply for This Loan — Get Best Rates</span>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    </Link>
                  </Button>
                  <p className="text-center text-[10px] sm:text-xs text-muted-foreground mt-2.5 sm:mt-3">
                    No impact on CIBIL score • Approval in 24 hours
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right - Visualization & Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 space-y-5 sm:space-y-6 w-full"
          >
            {/* Chart Card */}
            <div className="bg-card rounded-2xl sm:rounded-3xl border border-border/50 p-4 sm:p-6 lg:p-8 shadow-xl">
              <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-4 sm:mb-6 text-center uppercase tracking-wider">
                Payment Breakdown
              </h4>
              
              <DonutChart principal={loanAmount} interest={totalInterest} />
              
              <div className="mt-5 sm:mt-6 space-y-2.5 sm:space-y-3">
                <div className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-primary/5 border border-primary/10">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-secondary flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-foreground">Principal Amount</span>
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-foreground truncate max-w-[110px] sm:max-w-none">{formatCurrency(loanAmount)}</span>
                </div>
                
                <div className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-amber-500/5 border border-amber-500/10">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-500 to-red-500 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-foreground">Interest Payable</span>
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-amber-600 truncate max-w-[110px] sm:max-w-none">{formatCurrency(totalInterest)}</span>
                </div>
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid gap-3">
              {[
                { icon: TrendingDown, title: "Save on Interest", desc: "Increase EMI by 10% to save lakhs in interest", color: "text-emerald-500" },
                { icon: Wallet, title: "Affordability Check", desc: "Your EMI should be less than 40% of monthly income", color: "text-blue-500" },
                { icon: Clock, title: "Tenure Tip", desc: "Shorter tenure = Less total interest paid", color: "text-violet-500" },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-card border border-border/50 hover:border-primary/20 transition-colors"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                    <item.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${item.color}`} />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-foreground">{item.title}</h4>
                    <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10 text-center"
            >
              <div className="flex items-center justify-center gap-2 mb-1">
                <BadgePercent className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-foreground">Lowest Rate Guarantee</span>
              </div>
              <p className="text-[10px] sm:text-xs text-muted-foreground">
                Found a lower rate elsewhere? We&apos;ll match it and reduce it by 0.5%
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}