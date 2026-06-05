"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Aditya Vaste",
    role: "IT Professional, Pune",
    content: "KalyaniFinance helped me get a business loan within 48 hours. Their process is incredibly smooth and the interest rates are very competitive. Highly recommended!",
    rating: 5,
    image: "RK",
  },
  {
    name: "Anirudha Vadgavkar",
    role: "IT Professional, Pune",
    content: "I got my home loan And personal loan approved at the best rate in the market. The team was very supportive throughout the process and explained everything clearly.",
    rating: 5,
    image: "PS",
  },
  {
    name: "Pradip Shinde",
    role: "Electrical Contractor, Nanded",
    content: "Excellent service for Car loan. They compared multiple plans and helped me choose the best one for my family. Very professional team.",
    rating: 5,
    image: "AP",
  },
  {
    name: "Ganesh Tanvade",
    role: "Bussiness Owner, Pune",
    content: "Got my car loan sanctioned in just one day! The EMI calculator on their website helped me plan my finances perfectly. Great experience overall.",
    rating: 5,
    image: "SR",
  },
  {
    name: "Vishal Jadhav",
    role: "Entrepreneur, Delhi",
    content: "Their Persoanl loan service is the best in the market. Quick disbursal, low interest rates, and transparent process. I have been their customer for 5 years now.",
    rating: 5,
    image: "MA",
  },
  {
    name: "Shubham Aher",
    role: "IT Professional, Chennai",
    content: "I was skeptical at first, but KalyaniFinance exceeded my expectations. The personal loan process was seamless and the customer support is top-notch.",
    rating: 5,
    image: "KN",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who have trusted us with their financial journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/10" />
                <p className="text-muted-foreground leading-relaxed relative z-10">
                  {testimonial.content}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold">{testimonial.image}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
