"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function InsuranceCta() {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary-foreground mb-4">
            Get Your Free Insurance Quote Today
          </h2>
          <p className="text-lg text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
            Compare plans from top insurers and find the perfect coverage for your needs. 
            Our experts will help you choose the right plan.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="outline" asChild className="gap-2 bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90">
              <Link href="/contact">
                Get Free Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="gap-2 bg-transparent border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
              <a href="tel:+91 7620838449">
                <Phone className="w-4 h-4" />
                Talk to Expert
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
