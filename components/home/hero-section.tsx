"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Shield, Clock, Users, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

const stats = [
  { value: "5+", label: "Trusted Clients" },
  { value: "₹1Cr+", label: "Loans Facilitated" },
  { value: "2+", label: "Years of Expertise" },
  { value: "100%", label: "Client-Focused Support" },
]

const features = [
  { icon: Clock, text: "Quick Approval" },
  { icon: Shield, text: "100% Secure" },
  { icon: Users, text: "Expert Support" },
  { icon: Award, text: "Best Rates" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/50 via-background to-background" />
      <div 
       
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Trusted by Clients
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Smart Loans &{" "}
              <span className="text-primary">Insurance Solutions</span>{" "}
              for Every Need
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Get instant loan approvals and comprehensive insurance coverage at the best rates. 
              Your financial freedom starts here with KalyaniFinance.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Button size="lg" asChild className="gap-2">
                <Link href="/contact">
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Get Free Consultation</Link>
              </Button>
            </div>

            {/* Quick Features */}
            <div className="flex flex-wrap gap-6">
              {features.map((feature) => (
                <div key={feature.text} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <feature.icon className="w-4 h-4 text-primary" />
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-card rounded-3xl shadow-2xl border border-border p-8 lg:p-10">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
              
              <div className="relative">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Why Choose KalyaniFinance?
                </h2>
                <p className="text-muted-foreground mb-8">
                  Numbers that speak for our commitment to excellence.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="text-center p-4 rounded-2xl bg-accent/50"
                    >
                      <div className="text-3xl lg:text-4xl font-bold text-primary mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
