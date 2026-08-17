"use client"

import { useState } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion"
import { 
  Plus, Minus, MessageCircle, Phone, Clock, 
  HelpCircle, Shield, FileText, TrendingUp,
  ArrowRight, Sparkles, BadgeCheck, Search
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const categories = [
  { id: "all", label: "All Questions", icon: HelpCircle },
  { id: "loans", label: "Loans", icon: TrendingUp },
  { id: "insurance", label: "Insurance", icon: Shield },
  { id: "process", label: "Process", icon: FileText },
]

const faqs = [
  {
    question: "What documents are required for a loan application?",
    answer: "For most loans, you need identity proof (Aadhar/PAN), address proof, income proof (salary slips/ITR), bank statements for the last 6 months, and passport-size photographs. For specific loan types like home or car loans, additional documents like property papers or vehicle quotation may be required. Our team helps you prepare everything.",
    category: "loans",
    popular: true,
  },
  {
    question: "How long does it take to get loan approval?",
    answer: "Personal loans can be approved within 24-48 hours. Home loans typically take 7-10 working days, while car loans take 2-3 days. The timeline depends on document verification and your credit profile. With our direct bank partnerships, we expedite the process significantly.",
    category: "process",
    popular: true,
  },
  {
    question: "What is the minimum credit score required?",
    answer: "We consider applications with credit scores of 650 and above. However, a higher credit score (750+) can help you get better interest rates and faster approvals. We also have special programs for customers with lower credit scores through our partner NBFCs.",
    category: "loans",
    popular: false,
  },
  {
    question: "Can I prepay or foreclose my loan?",
    answer: "Yes, you can prepay or foreclose your loan after completing the minimum tenure (usually 6-12 months). For floating rate loans, there are no prepayment charges as per RBI guidelines. Fixed-rate loans may have nominal charges of 1-3%. We'll help you calculate if prepayment saves you money.",
    category: "loans",
    popular: false,
  },
  {
    question: "How do I claim insurance benefits?",
    answer: "For insurance claims, you need to inform us within 24-48 hours of the incident. Submit the claim form along with required documents (medical reports, bills, FIR for accidents, etc.). Our dedicated claims team will guide you through the process and ensure quick settlement — usually within 7-15 days.",
    category: "insurance",
    popular: true,
  },
  {
    question: "Are there any processing fees for loans?",
    answer: "Yes, there is a nominal processing fee ranging from 0.5% to 2% of the loan amount, depending on the loan type. This is a one-time fee charged at the time of loan disbursal. We often run promotional offers with reduced or waived processing fees — ask our advisor about current offers.",
    category: "loans",
    popular: false,
  },
  {
    question: "Is my data safe with KalyaniFinance?",
    answer: "Absolutely. We use 256-bit SSL encryption for all data transmission. We are RBI-compliant and ISO 27001 certified. Your data is never sold to third parties and is only shared with the specific banks/NBFCs you choose to apply with.",
    category: "process",
    popular: false,
  },
  {
    question: "Can I transfer my existing loan for a lower rate?",
    answer: "Yes! We specialize in balance transfers. If you're paying more than 9% on your existing home loan, we can help you switch to a lower rate and save lakhs over the tenure. Our team handles all the paperwork with your current and new lender.",
    category: "loans",
    popular: true,
  },
]

// 3D Tilt Hook
function useTilt() {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)
  
  const rotateX = useSpring(useTransform(y, [0, 1], [3, -3]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(x, [0, 1], [-3, 3]), { stiffness: 300, damping: 30 })

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

import { useRef } from "react"

function FaqItem({ faq, index, isOpen, onToggle }: { 
  faq: typeof faqs[0]; 
  index: number; 
  isOpen: boolean; 
  onToggle: () => void 
}) {
  const { ref, rotateX, rotateY, handleMouseMove, handleMouseLeave } = useTilt()

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={ref}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <button
          onClick={onToggle}
          className={`
            w-full text-left rounded-2xl border transition-all duration-300 group
            ${isOpen 
              ? 'bg-card border-primary/30 shadow-lg shadow-primary/5' 
              : 'bg-card/50 border-border/50 hover:border-primary/20 hover:bg-card hover:shadow-md'
            }
          `}
        >
          <div className="p-5 lg:p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4 flex-1">
                {/* Number Badge */}
                <div className={`
                  w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 mt-0.5
                  transition-all duration-300
                  ${isOpen 
                    ? 'bg-gradient-to-br from-primary to-secondary text-white shadow-lg' 
                    : 'bg-accent text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary'
                  }
                `}>
                  {String(index + 1).padStart(2, '0')}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className={`font-semibold pr-4 transition-colors ${isOpen ? 'text-primary' : 'text-foreground group-hover:text-primary'}`}>
                      {faq.question}
                    </h3>
                    {faq.popular && (
                      <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 text-[10px] font-bold uppercase tracking-wider">
                        <Sparkles className="w-3 h-3" />
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                      >
                        <p className="text-muted-foreground leading-relaxed mt-3 text-sm">
                          {faq.answer}
                        </p>
                        
                        {/* Related CTA */}
                        <div className="mt-4 pt-4 border-t border-border/50">
                          <Link 
                            href="/contact" 
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2 transition-all"
                          >
                            <MessageCircle className="w-4 h-4" />
                            Ask a follow-up question
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Toggle Icon */}
              <motion.div 
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className={`
                  w-8 h-8 rounded-full shrink-0 flex items-center justify-center transition-colors
                  ${isOpen 
                    ? 'bg-primary text-primary-foreground shadow-lg' 
                    : 'bg-accent text-foreground group-hover:bg-primary/10 group-hover:text-primary'
                  }
                `}
              >
                {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </motion.div>
            </div>
          </div>
          
          {/* Progress Bar for Open State */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="h-0.5 bg-gradient-to-r from-primary to-secondary origin-left"
              />
            )}
          </AnimatePresence>
        </button>
      </motion.div>
    </motion.div>
  )
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number>(0)
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredFaqs = activeCategory === "all" 
    ? faqs 
    : faqs.filter(f => f.category === activeCategory)

  return (
    <section className="relative py-24 lg:py-32 bg-background overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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
            <HelpCircle className="w-4 h-4" />
            Got Questions?
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Questions
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our loan and insurance services. 
            Can't find your answer? Our experts are just a call away.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id)
                setOpenIndex(0)
              }}
              className={`
                flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                ${activeCategory === cat.id
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25'
                  : 'bg-card border border-border/50 text-muted-foreground hover:border-primary/30 hover:text-foreground'
                }
              `}
            >
              <cat.icon className="w-4 h-4" />
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-3 gap-3 mb-10"
        >
          {[
            { icon: Clock, label: "Avg. Response", value: "2 Min" },
            { icon: BadgeCheck, label: "Accuracy", value: "100%" },
            { icon: Phone, label: "Expert Support", value: "24/7" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center justify-center gap-2 p-3 rounded-xl bg-card border border-border/50">
              <stat.icon className="w-4 h-4 text-primary" />
              <div className="text-left">
                <div className="text-xs font-bold text-foreground">{stat.value}</div>
                <div className="text-[10px] text-muted-foreground">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-3">
          <AnimatePresence mode="wait">
            {filteredFaqs.map((faq, index) => (
              <FaqItem
                key={`${activeCategory}-${index}`}
                faq={faq}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12"
        >
          <div className="relative p-8 rounded-3xl bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10 overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            
            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-bold text-foreground">Still have questions?</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Our loan experts are available 24/7 to answer your specific questions. 
                  Get personalized advice — completely free.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild variant="outline" className="gap-2 border-2 hover:bg-primary hover:text-white transition-all">
                  <Link href="tel:+919999999999">
                    <Phone className="w-4 h-4" />
                    Call Now
                  </Link>
                </Button>
                <Button asChild className="gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all">
                  <Link href="/contact">
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Us
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}