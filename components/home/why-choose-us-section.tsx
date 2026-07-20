"use client"

import { motion } from "framer-motion"
import { Shield, Clock, BadgeCheck, HeadphonesIcon, Percent, FileCheck } from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "Quick Approval",
    description: "Get loan approval within 24 hours with minimal documentation and instant disbursal.",
  },
  {
    icon: Percent,
    title: "Best Interest Rates",
    description: "Enjoy the lowest interest rates in the market with transparent pricing and no hidden charges.",
  },
  {
    icon: FileCheck,
    title: "Easy Documentation",
    description: "Simple paperwork with digital KYC process. Upload documents online from anywhere.",
  },
  {
    icon: Shield,
    title: "100% Secure",
    description: "Bank-grade security for all your transactions. Your data is safe with us.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Our expert team is available round the clock to assist you with any queries.",
  },
  {
    icon: BadgeCheck,
    title: "Trusted by Millions",
    description: "Over 50,000+ satisfied customers across India trust us for their financial needs.",
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Your Trusted Financial Partner 
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              At KalyaniFinance, we believe in making financial services accessible, 
              transparent, and customer-friendly. Our commitment to excellence has made 
              us a preferred choice for thousands of Indians.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-sm font-medium">
                <Shield className="w-4 h-4 text-primary" />
                 Channel Partner
              </div>
              
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
