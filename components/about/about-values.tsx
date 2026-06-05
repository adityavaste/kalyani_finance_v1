"use client"

import { motion } from "framer-motion"
import { Heart, Shield, Users, Zap, Award, Scale } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Customer First",
    description: "Every decision we make is guided by what's best for our customers.",
  },
  {
    icon: Shield,
    title: "Trust & Integrity",
    description: "We maintain the highest standards of honesty and transparency.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description: "We collaborate and support each other to achieve common goals.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We continuously evolve to provide better solutions and experiences.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in everything we do.",
  },
  {
    icon: Scale,
    title: "Fairness",
    description: "We treat everyone with respect and ensure fair practices.",
  },
]

export function AboutValues() {
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
            Our Values
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            What We Stand For
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our core values guide every interaction and decision we make.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
