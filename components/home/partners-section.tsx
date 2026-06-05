"use client"

import { motion } from "framer-motion"

const partners = [
  { name: "HDFC Bank", initials: "HDFC" },
  { name: "ICICI Bank", initials: "ICICI" },
  { name: "SBI", initials: "SBI" },
  { name: "Axis Bank", initials: "AXIS" },
  { name: "Kotak", initials: "KOTAK" },
  { name: "LIC", initials: "LIC" },
  { name: "Bajaj Finserv", initials: "BAJAJ" },
  { name: "Tata AIG", initials: "TATA" },
]

export function PartnersSection() {
  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            We Work With
          </p>
        </motion.div>
        
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="text-2xl font-bold text-muted-foreground/40 hover:text-muted-foreground/60 transition-colors cursor-default"
            >
              {partner.initials}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
