"use client"

import { motion, useAnimationControls } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { BadgeCheck, Building2, Handshake, Star } from "lucide-react"

const partners = [
  { name: "HDFC Bank", color: "from-blue-600 to-blue-800", bgColor: "bg-blue-50" },
  { name: "ICICI Bank", color: "from-orange-500 to-red-600", bgColor: "bg-orange-50" },
  { name: "State Bank of India", color: "from-blue-700 to-blue-900", bgColor: "bg-slate-50" },
  { name: "Axis Bank", color: "from-purple-600 to-pink-600", bgColor: "bg-purple-50" },
  { name: "Kotak Mahindra", color: "from-red-500 to-rose-600", bgColor: "bg-red-50" },
  { name: "LIC", color: "from-amber-500 to-yellow-600", bgColor: "bg-amber-50" },
  { name: "Bajaj Finserv", color: "from-teal-500 to-emerald-600", bgColor: "bg-teal-50" },
  { name: "Tata AIG", color: "from-indigo-600 to-blue-700", bgColor: "bg-indigo-50" },
  { name: "Punjab National Bank", color: "from-green-600 to-emerald-700", bgColor: "bg-green-50" },
  { name: "Bank of Baroda", color: "from-orange-600 to-amber-700", bgColor: "bg-orange-50" },
]

const trustBadges = [
  { icon: Building2, label: "25+ Partner Banks", sublabel: "All Major NBFCs" },
  { icon: Handshake, label: "Direct Tie-ups with DSA", sublabel: "No Middlemen" },
  { icon: BadgeCheck, label: "Channel partner", sublabel: "Fully Regulated" },
  { icon: Star, label: "4.9/5 Rating", sublabel: "Google Reviews" },
]

// Infinite Marquee Component
function InfiniteMarquee({ direction = "left", speed = 30 }: { direction?: "left" | "right"; speed?: number }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [contentWidth, setContentWidth] = useState(0)
  
  useEffect(() => {
    if (containerRef.current) {
      setContentWidth(containerRef.current.scrollWidth / 2)
    }
  }, [])

  return (
    <div className="relative overflow-hidden group">
      {/* Edge Fades */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      
      <motion.div
        ref={containerRef}
        className="flex gap-6 py-4"
        animate={{
          x: direction === "left" ? [0, -contentWidth] : [-contentWidth, 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {[...partners, ...partners].map((partner, index) => (
          <motion.div
            key={`${partner.name}-${index}`}
            whileHover={{ scale: 1.1, y: -5, rotateY: 5 }}
            className="flex-shrink-0 relative group/card"
          >
            <div className={`
              relative px-8 py-5 rounded-2xl border border-border/60 
              bg-gradient-to-br from-card to-card/80 backdrop-blur-sm
              shadow-sm hover:shadow-xl hover:shadow-primary/10 
              transition-all duration-500 cursor-default
              min-w-[200px] text-center
            `}>
              {/* Gradient Border Effect on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />
              
              {/* Partner Initials/Logo Placeholder */}
              <div className={`
                w-14 h-14 mx-auto mb-3 rounded-xl bg-gradient-to-br ${partner.color}
                flex items-center justify-center shadow-lg
                group-hover/card:scale-110 transition-transform duration-300
              `}>
                <span className="text-white font-bold text-lg">
                  {partner.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                </span>
              </div>
              
              <h3 className="text-sm font-bold text-foreground group-hover/card:text-primary transition-colors">
                {partner.name}
              </h3>
              
              {/* Verified Badge */}
              <div className="absolute -top-2 -right-2 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                <div className="bg-green-500 text-white p-1 rounded-full shadow-lg">
                  <BadgeCheck className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export function PartnersSection() {
  return (
    <section className="relative py-20 bg-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6"
          >
            <Handshake className="w-4 h-4" />
            Strategic Partnerships
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Trusted by India's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Leading Financial Institutions
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We have direct partnerships with top banks and NBFCs to get you the best loan rates 
            and fastest approvals — all under one roof.
          </p>
        </motion.div>

        {/* Trust Badges Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {trustBadges.map((badge, index) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
                <badge.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-lg font-bold text-foreground">{badge.label}</div>
              <div className="text-sm text-muted-foreground">{badge.sublabel}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Marquee Row 1 - Left */}
        <div className="mb-4">
          <InfiniteMarquee direction="left" speed={40} />
        </div>

        {/* Marquee Row 2 - Right */}
        <div className="mb-16">
          <InfiniteMarquee direction="right" speed={35} />
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
            <div className="flex -space-x-3">
              {partners.slice(0, 4).map((p, i) => (
                <div
                  key={i}
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${p.color} flex items-center justify-center border-2 border-background text-white text-xs font-bold`}
                >
                  {p.name[0]}
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-foreground">Compare Rates from 25+ Lenders</p>
              <p className="text-xs text-muted-foreground">Find your best match in 2 minutes</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}