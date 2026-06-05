"use client"

import { motion } from "framer-motion"
import { FileText, Search, CheckCircle, Banknote } from "lucide-react"

const steps = [
  {
    icon: FileText,
    title: "Submit Application",
    description: "Fill out our simple online application form with your basic details and loan requirements.",
  },
  {
    icon: Search,
    title: "Document Verification",
    description: "Upload required documents. Our team verifies them within 24 hours.",
  },
  {
    icon: CheckCircle,
    title: "Loan Approval",
    description: "Get instant approval notification. Review and accept the loan terms.",
  },
  {
    icon: Banknote,
    title: "Disbursal",
    description: "Funds transferred directly to your bank account within 48 hours of approval.",
  },
]

export function LoanProcess() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Simple 4-Step Loan Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get your loan approved in just 4 simple steps. Quick, easy, and hassle-free.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-border" />
              )}
              
              <div className="relative bg-card rounded-2xl border border-border p-6 text-center h-full">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
