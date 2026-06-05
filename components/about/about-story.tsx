"use client"

import { motion } from "framer-motion"
import { Target, Eye } from "lucide-react"

export function AboutStory() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Our Story
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2023, KalyaniFinance started with a simple mission - to make quality 
                financial services accessible to every Indian household. What began as a small 
                loan distribution company in Mumbai has now grown into one of India&apos;s most 
                trusted financial service providers.
              </p>
              <p>
                Over the years, we have helped more customers achieve their dreams - 
                whether it&apos;s buying their first home, starting a business, securing their family&apos;s 
                future, or getting quality education. Our journey has been defined by trust, 
                transparency, and an unwavering commitment to customer satisfaction.
              </p>
              <p>
                Today, we partner with 25+ leading banks and insurance companies to offer 
                comprehensive financial solutions that cater to diverse needs and budgets.
              </p>
            </div>
          </motion.div>

          {/* Mission & Vision */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-2xl border border-border p-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To empower individuals and businesses with the right financial solutions 
                that help them achieve their goals while maintaining the highest standards 
                of integrity, transparency, and customer service.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card rounded-2xl border border-border p-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To be India&apos;s most trusted and preferred financial services partner, known 
                for our customer-centric approach, innovative solutions, and contribution 
                to the financial well-being of millions.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
