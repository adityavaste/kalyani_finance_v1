"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Heart, Car, Shield, Plane, Users, Building2, Bike, ArrowRight } from "lucide-react"

const insuranceCategories = [
  {
    icon: Heart,
    title: "Health Insurance",
    description: "Comprehensive health coverage for you and your family with cashless hospitalization.",
    coverage: "Up to ₹1 Cr",
    href: "/insurance#health",
    color: "bg-red-500/10 text-red-600",
  },
  {
    icon: Car,
    title: "Car Insurance",
    description: "Complete protection for your car against accidents, theft, and natural disasters.",
    coverage: "IDV + Add-ons",
    href: "/insurance#car",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Bike,
    title: "Bike Insurance",
    description: "Affordable two-wheeler insurance with comprehensive and third-party options.",
    coverage: "IDV Coverage",
    href: "/insurance#bike",
    color: "bg-orange-500/10 text-orange-600",
  },
  {
    icon: Shield,
    title: "Life Insurance",
    description: "Secure your family's future with term plans and endowment policies.",
    coverage: "Up to ₹5 Cr",
    href: "/insurance#life",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    icon: Plane,
    title: "Travel Insurance",
    description: "Worry-free travel with coverage for medical emergencies and trip cancellations.",
    coverage: "$500K+",
    href: "/insurance#travel",
    color: "bg-violet-500/10 text-violet-600",
  },
  {
    icon: Users,
    title: "Family Insurance",
    description: "One policy for your entire family with floater benefits and no-claim bonus.",
    coverage: "Up to ₹50 L",
    href: "/insurance#family",
    color: "bg-pink-500/10 text-pink-600",
  },
  {
    icon: Building2,
    title: "Business Insurance",
    description: "Protect your business from unforeseen risks with comprehensive coverage.",
    coverage: "Custom Plans",
    href: "/insurance#business",
    color: "bg-slate-500/10 text-slate-600",
  },
]

export function InsuranceCategoriesSection() {
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
            Insurance Plans
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Protect What Matters Most
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our curated insurance plans that provide comprehensive coverage for life, health, and assets.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {insuranceCategories.map((insurance, index) => (
            <motion.div
              key={insurance.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                href={insurance.href}
                className="group block h-full bg-card rounded-2xl border border-border p-6 hover:shadow-xl hover:border-secondary/20 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl ${insurance.color} flex items-center justify-center mb-5`}>
                  <insurance.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">
                  {insurance.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {insurance.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-primary">
                    {insurance.coverage}
                  </span>
                  <ArrowRight className="w-4 h-4 text-secondary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/insurance"
            className="inline-flex items-center gap-2 text-secondary font-medium hover:gap-3 transition-all"
          >
            View All Insurance Plans
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
