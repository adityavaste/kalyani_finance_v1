"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Home, Car, User, Briefcase, GraduationCap, Coins, Building2, ArrowRight } from "lucide-react"

const loanCategories = [
  {
    icon: Home,
    title: "Home Loan",
    description: "Make your dream home a reality with competitive interest rates starting at 8.5% p.a.",
    rate: "7.75% p.a.",
    href: "/loans#home-loan",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Car,
    title: "Car Loan",
    description: "Drive your dream car today with quick approvals and flexible EMI options.",
    rate: "9.0% p.a.",
    href: "/loans#car-loan",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    icon: User,
    title: "Personal Loan",
    description: "Get instant personal loans up to ₹40 lakhs for any personal need.",
    rate: "10.5% p.a.",
    href: "/loans#personal-loan",
    color: "bg-violet-500/10 text-violet-600",
  },
  {
    icon: Briefcase,
    title: "Business Loan",
    description: "Fuel your business growth with hassle-free working capital loans.",
    rate: "11.0% p.a.",
    href: "/loans#business-loan",
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    icon: GraduationCap,
    title: "Education Loan",
    description: "Invest in your future with education loans for India and abroad.",
    rate: "8.0% p.a.",
    href: "/loans#education-loan",
    color: "bg-rose-500/10 text-rose-600",
  },
  {
    icon: Coins,
    title: "Gold Loan",
    description: "Quick funds against your gold jewelry with minimal documentation.",
    rate: "7.5% p.a.",
    href: "/loans#gold-loan",
    color: "bg-yellow-500/10 text-yellow-600",
  },
  {
    icon: Building2,
    title: "Loan Against Property",
    description: "Unlock the value of your property with attractive interest rates.",
    rate: "9.5% p.a.",
    href: "/loans#lap",
    color: "bg-cyan-500/10 text-cyan-600",
  },
]

export function LoanCategoriesSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Loan Products
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Find the Right Loan for You
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our wide range of loan products designed to meet your every financial need with competitive rates.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {loanCategories.map((loan, index) => (
            <motion.div
              key={loan.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                href={loan.href}
                className="group block h-full bg-card rounded-2xl border border-border p-6 hover:shadow-xl hover:border-primary/20 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl ${loan.color} flex items-center justify-center mb-5`}>
                  <loan.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {loan.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {loan.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-secondary">
                    From {loan.rate}
                  </span>
                  <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
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
            href="/loans"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            View All Loan Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
