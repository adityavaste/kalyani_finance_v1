"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion"
import { 
  Send, CheckCircle, Shield, Clock, Phone, Mail, 
  MapPin, Sparkles, Lock, BadgeCheck, User, MessageSquare,
  ArrowRight, Zap, Star, Users
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRef } from "react"

const services = [
  { value: "", label: "Select a service", icon: "✨" },
  { value: "home-loan", label: "Home Loan", icon: "🏠" },
  { value: "car-loan", label: "Car Loan", icon: "🚗" },
  { value: "personal-loan", label: "Personal Loan", icon: "💰" },
  { value: "business-loan", label: "Business Loan", icon: "💼" },
  { value: "gold-loan", label: "Gold Loan", icon: "🪙" },
  { value: "health-insurance", label: "Health Insurance", icon: "🏥" },
  { value: "life-insurance", label: "Life Insurance", icon: "🛡️" },
  { value: "other", label: "Other / Not Sure", icon: "❓" },
]

const trustPoints = [
  { icon: Shield, label: "Bank-Grade Security", desc: "256-bit SSL Encrypted" },
  { icon: Clock, label: "Response in 2 Hours", desc: "Not 24 — we reply faster" },
  { icon: BadgeCheck, label: "No Spam Guarantee", desc: "We respect your privacy" },
  { icon: Zap, label: "Instant Eligibility Check", desc: "No CIBIL impact" },
]

const recentLeads = [
  "Rahul from Mumbai applied for Home Loan",
  "Priya from Delhi got Personal Loan approval",
  "Amit from Bangalore checked Car Loan rates",
  "Sneha from Pune got Health Insurance quote",
]

// 3D Tilt Hook
function useTilt() {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)
  
  const rotateX = useSpring(useTransform(y, [0, 1], [5, -5]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(x, [0, 1], [-5, 5]), { stiffness: 300, damping: 30 })

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

// Live Activity Ticker
function LiveActivityTicker() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % recentLeads.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
      </span>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="text-xs text-white/80 font-medium"
        >
          {recentLeads[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

// Floating Label Input
function FloatingInput({ 
  id, 
  label, 
  type = "text", 
  required = false, 
  value, 
  onChange, 
  placeholder,
  icon: Icon
}: { 
  id: string; 
  label: string; 
  type?: string; 
  required?: boolean; 
  value: string; 
  onChange: (val: string) => void;
  placeholder?: string;
  icon?: React.ElementType;
}) {
  const [isFocused, setIsFocused] = useState(false)
  const isActive = isFocused || value.length > 0

  return (
    <div className="relative">
      {Icon && (
        <div className={`
          absolute left-4 top-1/2 -translate-y-1/2 z-10 transition-colors duration-300
          ${isActive ? 'text-primary' : 'text-muted-foreground'}
        `}>
          <Icon className="w-5 h-5" />
        </div>
      )}
      <motion.label
        animate={{
          y: isActive ? -28 : 0,
          scale: isActive ? 0.85 : 1,
          color: isActive ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))",
        }}
        className={`
          absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none origin-left
          font-medium transition-colors duration-300
          ${Icon ? 'left-12' : 'left-4'}
        `}
      >
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </motion.label>
      <input
        type={type}
        id={id}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`
          w-full pt-6 pb-3 px-4 ${Icon ? 'pl-12' : 'pl-4'} rounded-xl border-2 bg-background text-foreground
          transition-all duration-300 outline-none
          ${isActive 
            ? 'border-primary shadow-lg shadow-primary/10' 
            : 'border-border hover:border-border-foreground'
          }
        `}
        placeholder={isActive ? placeholder : ""}
      />
    </div>
  )
}

export function ContactFormSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { ref, rotateX, rotateY, handleMouseMove, handleMouseLeave } = useTilt()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const data = await response.json()

      if (data.success) {
        setIsSubmitted(true)
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({ name: "", email: "", phone: "", service: "", message: "" })
        }, 5000)
      }
    } catch (error) {
      console.error(error)
      alert("Something went wrong. Please try again or call us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const fillProgress = Object.values(formData).filter(v => v.length > 0).length / 5

  return (
    <section className="relative py-24 lg:py-32 bg-foreground overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[150px]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Live Activity */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <LiveActivityTicker />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-32"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-semibold mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Free Consultation
            </motion.div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-background mb-6 leading-tight">
              Ready to Get the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Best Deal?
              </span>
            </h2>
            
            <p className="text-lg text-background/70 leading-relaxed mb-8">
              Fill out the form and our financial experts will analyze your profile 
              and get back to you with the best offers from 25+ banks — all within 2 hours.
            </p>

            {/* Trust Points Grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {trustPoints.map((point, index) => (
                <motion.div
                  key={point.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <point.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-background">{point.label}</div>
                    <div className="text-xs text-background/60">{point.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-background/70">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-background/50">Call us anytime</div>
                  <div className="text-sm font-semibold text-background">+91 99999 99999</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-background/70">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-background/50">Email us</div>
                  <div className="text-sm font-semibold text-background">help@kalyanifinance.com</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-background/70">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-background/50">Visit us</div>
                  <div className="text-sm font-semibold text-background">Pune, Maharashtra</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ perspective: 1000 }}
          >
            <motion.div
              ref={ref}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="bg-card rounded-3xl border border-border/50 shadow-2xl overflow-hidden">
                {/* Progress Bar */}
                <div className="h-1 bg-accent">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-secondary"
                    animate={{ width: `${fillProgress * 100}%` }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                </div>

                <div className="p-8 lg:p-10">
                  <AnimatePresence mode="wait">
                    {isSubmitted ? (
                      <motion.div
                        key="success"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        className="text-center py-12"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", delay: 0.2 }}
                          className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-green-500/30"
                        >
                          <CheckCircle className="w-10 h-10 text-white" />
                        </motion.div>
                        
                        <motion.h3
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="text-2xl font-bold text-foreground mb-3"
                        >
                          Application Received! 🎉
                        </motion.h3>
                        
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.4 }}
                          className="text-muted-foreground mb-6 max-w-sm mx-auto"
                        >
                          Our expert advisor will call you within <span className="text-primary font-bold">2 hours</span> with personalized offers.
                        </motion.p>

                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                          className="flex items-center justify-center gap-2 text-sm text-muted-foreground"
                        >
                          <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                          <span>Join Us and become happy customers</span>
                        </motion.div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <div className="flex items-center justify-between mb-8">
                          <div>
                            <h3 className="text-xl font-bold text-foreground">Get Your Free Quote</h3>
                            <p className="text-sm text-muted-foreground">Takes less than 2 minutes</p>
                          </div>
                          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/10 text-green-600 text-xs font-bold">
                            <Lock className="w-3.5 h-3.5" />
            Secure
                          </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                          <FloatingInput
                            id="name"
                            label="Full Name"
                            required
                            value={formData.name}
                            onChange={(v) => updateField("name", v)}
                            placeholder="Enter your full name"
                            icon={User}
                          />

                          <div className="grid sm:grid-cols-2 gap-5">
                            <FloatingInput
                              id="email"
                              label="Email Address"
                              type="email"
                              required
                              value={formData.email}
                              onChange={(v) => updateField("email", v)}
                              placeholder="you@example.com"
                              icon={Mail}
                            />
                            <FloatingInput
                              id="phone"
                              label="Phone Number"
                              type="tel"
                              required
                              value={formData.phone}
                              onChange={(v) => updateField("phone", v)}
                              placeholder="+91 99999 99999"
                              icon={Phone}
                            />
                          </div>

                          {/* Service Select */}
                          <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                              <Sparkles className="w-5 h-5" />
                            </div>
                            <select
                              id="service"
                              required
                              value={formData.service}
                              onChange={(e) => updateField("service", e.target.value)}
                              className={`
                                w-full pt-6 pb-3 pl-12 pr-4 rounded-xl border-2 bg-background text-foreground
                                transition-all duration-300 outline-none appearance-none
                                ${formData.service ? 'border-primary shadow-lg shadow-primary/10' : 'border-border'}
                              `}
                            >
                              {services.map(s => (
                                <option key={s.value} value={s.value}>
                                  {s.icon} {s.label}
                                </option>
                              ))}
                            </select>
                            <label className="absolute left-12 top-3 text-xs font-medium text-primary">
                              Service Interested In *
                            </label>
                          </div>

                          {/* Message */}
                          <div className="relative">
                            <div className="absolute left-4 top-4 text-muted-foreground">
                              <MessageSquare className="w-5 h-5" />
                            </div>
                            <textarea
                              id="message"
                              rows={3}
                              value={formData.message}
                              onChange={(e) => updateField("message", e.target.value)}
                              className={`
                                w-full pt-6 pb-3 pl-12 pr-4 rounded-xl border-2 bg-background text-foreground
                                transition-all duration-300 outline-none resize-none
                                ${formData.message ? 'border-primary shadow-lg shadow-primary/10' : 'border-border hover:border-border-foreground'}
                              `}
                              placeholder="Tell us about your requirements (optional)"
                            />
                            <label className="absolute left-12 top-3 text-xs font-medium text-primary">
                              Additional Details
                            </label>
                          </div>

                          {/* Submit */}
                          <Button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="w-full gap-2 text-lg py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 disabled:opacity-50"
                          >
                            {isSubmitting ? (
                              <>
                                <motion.div
                                  animate={{ rotate: 360 }}
                                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                                  className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                />
                                Processing...
                              </>
                            ) : (
                              <>
                                <Sparkles className="w-5 h-5" />
                                Get Free Quote Now
                                <ArrowRight className="w-5 h-5" />
                              </>
                            )}
                          </Button>

                          {/* Trust Footer */}
                          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                              <Lock className="w-3.5 h-3.5" />
                              <span>Your data is secure</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                              <Users className="w-3.5 h-3.5" />
                              <span>applications processed</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                              <Clock className="w-3.5 h-3.5" />
                              <span>Response in 2 hours</span>
                            </div>
                          </div>
                        </form>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}