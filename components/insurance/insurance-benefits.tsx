"use client"

import { motion } from "framer-motion"
import { Shield, Clock, Award, HeadphonesIcon, BadgeCheck, Wallet } from "lucide-react"

const benefits = [
  {
    icon: Shield,
    title: "Wide Coverage",
    description: "Comprehensive plans covering all aspects of health, life, and assets.",
  },
  {
    icon: Clock,
    title: "Quick Claims",
    description: "Hassle-free claim settlement within 24-48 hours for most claims.",
  },
  {
    icon: Award,
    title: "Top Insurers",
    description: "Partnered with India's leading insurance companies for quality coverage.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Round-the-clock customer support for all your insurance needs.",
  },
  {
    icon: BadgeCheck,
    title: "Best Premiums",
    description: "Competitive premiums with exclusive discounts and no hidden charges.",
  },
  {
    icon: Wallet,
    title: "Easy Renewals",
    description: "Seamless online renewal process with reminder notifications.",
  },
]

export function InsuranceBenefits() {
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Why Insure With Us
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Benefits of Choosing KalyaniFinance
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We make insurance simple, affordable, and reliable for everyone.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg hover:border-secondary/20 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
