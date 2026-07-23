"use client"

import { motion } from "framer-motion"
import { Home, Car, User, Briefcase, GraduationCap, Coins, Building2, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const loanTypes = [
  {
    id: "home-loan",
    icon: Home,
    title: "Home Loan",
    description: "Make your dream home a reality with our affordable home loan solutions.",
    rate: "8.5% p.a.",
    maxAmount: "Up to ₹5 Cr",
    tenure: "Up to 30 years",
    features: [
      "Competitive interest rates",
      "Quick approval process",
      "Flexible repayment options",
      "No hidden charges",
      "Balance transfer facility",
    ],
    color: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    actionLink: "/loans/home-loan",
  },
  {
    id: "car-loan",
    icon: Car,
    title: "Car Loan",
    description: "Drive your dream car today with our hassle-free car loan options.",
    rate: "9.0% p.a.",
    maxAmount: "Up to ₹1 Cr",
    tenure: "Up to 7 years",
    features: [
      "100% on-road funding",
      "Minimal documentation",
      "Same day approval",
      "Attractive interest rates",
      "Used car loans available",
    ],
    color: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    actionLink: "/loans/car-loan",
  },
  {
    id: "personal-loan",
    icon: User,
    title: "Personal Loan",
    description: "Get instant personal loans for weddings, travel, medical emergencies, or any personal need.",
    rate: "10.5% p.a.",
    maxAmount: "Up to ₹40 L",
    tenure: "Up to 5 years",
    features: [
      "No collateral required",
      "Instant approval",
      "Minimal documentation",
      "Flexible tenure options",
      "Quick disbursal",
    ],
    color: "bg-violet-500/10 text-violet-600 border-violet-500/20",
    actionLink: "/loans/personal-loan",
  },
  {
    id: "business-loan",
    icon: Briefcase,
    title: "Business Loan",
    description: "Fuel your business growth with our working capital and expansion loans.",
    rate: "11.0% p.a.",
    maxAmount: "Up to ₹50 L",
    tenure: "Up to 5 years",
    features: [
      "Collateral-free options",
      "Quick processing",
      "Flexible repayment",
      "Working capital loans",
      "Equipment financing",
    ],
    color: "bg-amber-500/10 text-amber-600 border-amber-500/20",
    actionLink: "/loans/business-loan",
  },
  {
    id: "education-loan",
    icon: GraduationCap,
    title: "Education Loan",
    description: "Invest in your future with education loans for studies in India and abroad.",
    rate: "8.0% p.a.",
    maxAmount: "Up to ₹1.5 Cr",
    tenure: "Up to 15 years",
    features: [
      "Cover tuition & living expenses",
      "Moratorium period available",
      "Tax benefits under 80E",
      "No margin for loans up to ₹4L",
      "Study abroad options",
    ],
    color: "bg-rose-500/10 text-rose-600 border-rose-500/20",
    actionLink: "/loans/education-loan",
  },
  {
    id: "gold-loan",
    icon: Coins,
    title: "Gold Loan",
    description: "Get quick funds against your gold jewelry with minimal documentation.",
    rate: "7.5% p.a.",
    maxAmount: "Up to ₹2 Cr",
    tenure: "Up to 3 years",
    features: [
      "Instant disbursal",
      "Minimal documentation",
      "Safe gold storage",
      "Flexible repayment",
      "No processing fee",
    ],
    color: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
    actionLink: "/loans/gold-loan",
  },
  {
    id: "lap",
    icon: Building2,
    title: "Loan Against Property",
    description: "Unlock the value of your property with attractive interest rates.",
    rate: "9.5% p.a.",
    maxAmount: "Up to ₹10 Cr",
    tenure: "Up to 20 years",
    features: [
      "High loan amount",
      "Lower interest rates",
      "Long repayment tenure",
      "Property remains with you",
      "Flexible end-use",
    ],
    color: "bg-cyan-500/10 text-cyan-600 border-cyan-500/20",
    actionLink: "/loans/loan-against-property",
  },
]

export function LoanTypes() {
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
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Loan Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our comprehensive range of loan products designed for every need.
          </p>
        </motion.div>

        <div className="space-y-8">
          {loanTypes.map((loan, index) => (
            <motion.div
              key={loan.id}
              id={loan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`scroll-mt-24 bg-card rounded-3xl border ${loan.color.split(' ')[2]} p-8 lg:p-10 hover:shadow-xl transition-shadow`}
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Left - Info */}
                <div className="lg:col-span-2">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-xl ${loan.color.split(' ').slice(0, 2).join(' ')} flex items-center justify-center shrink-0`}>
                      <loan.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{loan.title}</h3>
                      <p className="text-muted-foreground">{loan.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-3">
                    {loan.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-secondary shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right - Stats & CTA */}
                <div className="bg-accent/50 rounded-2xl p-6 flex flex-col justify-between">
                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Interest Rate</p>
                      <p className="text-2xl font-bold text-primary">{loan.rate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Loan Amount</p>
                      <p className="text-lg font-semibold text-foreground">{loan.maxAmount}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Tenure</p>
                      <p className="text-lg font-semibold text-foreground">{loan.tenure}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {loan.actionLink && (
                      <Button variant="outline" className="w-full" asChild>
                        <Link href={loan.actionLink}>View Details</Link>
                      </Button>
                    )}
                    <Button className="w-full" asChild>
                      <Link href="/contact">Apply Now</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}