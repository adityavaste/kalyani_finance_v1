"use client"

import { motion } from "framer-motion"
import { Heart, Car, Shield, Plane, Users, Building2, Bike, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const insuranceTypes = [
  {
    id: "health",
    icon: Heart,
    title: "Health Insurance",
    description: "Comprehensive health coverage for you and your family with cashless hospitalization at 10,000+ network hospitals.",
    coverage: "Up to ₹1 Crore",
    premium: "₹500/month",
    features: [
      "Cashless hospitalization",
      "Pre & post hospitalization",
      "Day care procedures",
      "No claim bonus up to 50%",
      "Free annual health checkup",
    ],
    color: "bg-red-500/10 text-red-600 border-red-500/20",
    actionLink: "/insurance/health-insurance",
  },
  {
    id: "car",
    icon: Car,
    title: "Car Insurance",
    description: "Complete protection for your car against accidents, theft, natural disasters, and third-party liabilities.",
    coverage: "IDV + Add-ons",
    premium: "₹3,000/year",
    features: [
      "Comprehensive coverage",
      "Third-party liability",
      "Own damage cover",
      "24/7 roadside assistance",
      "Cashless repairs at 5000+ garages",
    ],
    color: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    actionLink: "/insurance/car-insurance",
  },
  {
    id: "bike",
    icon: Bike,
    title: "Bike Insurance",
    description: "Affordable two-wheeler insurance with comprehensive and third-party coverage options.",
    coverage: "IDV Coverage",
    premium: "₹800/year",
    features: [
      "Third-party liability",
      "Own damage protection",
      "Personal accident cover",
      "Theft protection",
      "Easy claim process",
    ],
    color: "bg-orange-500/10 text-orange-600 border-orange-500/20",
    actionLink: "/insurance/bike-insurance",
  },
  {
    id: "life",
    icon: Shield,
    title: "Life Insurance",
    description: "Secure your family's financial future with term plans, endowment policies, and ULIPs.",
    coverage: "Up to ₹5 Crore",
    premium: "₹400/month",
    features: [
      "High sum assured",
      "Tax benefits under 80C",
      "Critical illness cover",
      "Accidental death benefit",
      "Premium waiver options",
    ],
    color: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    actionLink: "/insurance/life-insurance",
  },
  {
    id: "travel",
    icon: Plane,
    title: "Travel Insurance",
    description: "Travel worry-free with coverage for medical emergencies, trip cancellations, and lost baggage.",
    coverage: "$500,000+",
    premium: "₹500/trip",
    features: [
      "Medical emergency cover",
      "Trip cancellation cover",
      "Lost baggage protection",
      "Flight delay compensation",
      "24/7 worldwide assistance",
    ],
    color: "bg-violet-500/10 text-violet-600 border-violet-500/20",
    actionLink: "/insurance/travel-insurance",
  },
  {
    id: "family",
    icon: Users,
    title: "Family Floater",
    description: "One policy for your entire family with floater benefits and attractive no-claim bonus.",
    coverage: "Up to ₹50 Lakhs",
    premium: "₹800/month",
    features: [
      "Cover entire family",
      "Floater sum insured",
      "Maternity benefits",
      "New born baby cover",
      "Domiciliary treatment",
    ],
    color: "bg-pink-500/10 text-pink-600 border-pink-500/20",
    actionLink: "/insurance/family-floater",
  },
  {
    id: "business",
    icon: Building2,
    title: "Business Insurance",
    description: "Protect your business from unforeseen risks with our comprehensive commercial insurance plans.",
    coverage: "Custom Plans",
    premium: "Get Quote",
    features: [
      "Property insurance",
      "Liability coverage",
      "Employee benefits",
      "Business interruption",
      "Cyber insurance",
    ],
    color: "bg-slate-500/10 text-slate-600 border-slate-500/20",
    actionLink: "/insurance/business-insurance",
  },
]

export function InsuranceTypes() {
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
            Our Insurance Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive insurance solutions from India&apos;s leading insurers at competitive premiums.
          </p>
        </motion.div>

        <div className="space-y-8">
          {insuranceTypes.map((insurance, index) => (
            <motion.div
              key={insurance.id}
              id={insurance.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`scroll-mt-24 bg-card rounded-3xl border ${insurance.color.split(' ')[2]} p-8 lg:p-10 hover:shadow-xl transition-shadow`}
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Left - Info */}
                <div className="lg:col-span-2">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-xl ${insurance.color.split(' ').slice(0, 2).join(' ')} flex items-center justify-center shrink-0`}>
                      <insurance.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{insurance.title}</h3>
                      <p className="text-muted-foreground">{insurance.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-3">
                    {insurance.features.map((feature) => (
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
                      <p className="text-sm text-muted-foreground mb-1">Coverage</p>
                      <p className="text-2xl font-bold text-secondary">{insurance.coverage}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Starting From</p>
                      <p className="text-lg font-semibold text-foreground">{insurance.premium}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={insurance.actionLink}>View Details</Link>
                    </Button>
                    <Button className="w-full" asChild>
                      <Link href="/contact">Get Quote</Link>
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