"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "What documents are required for a loan application?",
    answer: "For most loans, you need identity proof (Aadhar/PAN), address proof, income proof (salary slips/ITR), bank statements for the last 6 months, and passport-size photographs. For specific loan types like home or car loans, additional documents like property papers or vehicle quotation may be required.",
  },
  {
    question: "How long does it take to get loan approval?",
    answer: "Personal loans can be approved within 24-48 hours. Home loans typically take 7-10 working days, while car loans take 2-3 days. The timeline depends on document verification and your credit profile.",
  },
  {
    question: "What is the minimum credit score required?",
    answer: "We consider applications with credit scores of 650 and above. However, a higher credit score (750+) can help you get better interest rates and faster approvals. We also have special programs for customers with lower credit scores.",
  },
  {
    question: "Can I prepay or foreclose my loan?",
    answer: "Yes, you can prepay or foreclose your loan after completing the minimum tenure (usually 6-12 months). For floating rate loans, there are no prepayment charges as per RBI guidelines. Fixed-rate loans may have nominal charges.",
  },
  {
    question: "How do I claim insurance benefits?",
    answer: "For insurance claims, you need to inform us within 24-48 hours of the incident. Submit the claim form along with required documents (medical reports, bills, FIR for accidents, etc.). Our claims team will guide you through the process and ensure quick settlement.",
  },
  {
    question: "Are there any processing fees for loans?",
    answer: "Yes, there is a nominal processing fee ranging from 0.5% to 2% of the loan amount, depending on the loan type. This is a one-time fee charged at the time of loan disbursal. We often run promotional offers with reduced or waived processing fees.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our loan and insurance services.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-card rounded-2xl border border-border p-6 text-left hover:border-primary/20 transition-colors"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-semibold text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <div className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center transition-colors ${openIndex === index ? 'bg-primary text-primary-foreground' : 'bg-accent text-foreground'}`}>
                    {openIndex === index ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-muted-foreground mt-4 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
