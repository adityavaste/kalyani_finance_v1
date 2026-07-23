import { Metadata } from "next"
import Link from "next/link"
import { 
  Bike, Shield, Zap, FileText, Calculator, 
  ArrowLeft, CheckCircle2, 
  Clock, Award, Banknote, Sparkles, HelpCircle 
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { metadata } from "./metadata";
import schemas from "./schema";

export { metadata };

const highlights = [
  { icon: Banknote, label: "Starting Premium", value: "₹800 / year*", desc: "Cost-effective two-wheeler security", accent: "bg-emerald-50 text-emerald-600 border-emerald-100" },
  { icon: Bike, label: "IDV Coverage", value: "Max Value", desc: "Highest insured declared value for your bike", accent: "bg-blue-50 text-blue-600 border-blue-100" },
  { icon: Clock, label: "Claim Settlement", value: "Instant", desc: "Fast digital claim approval process", accent: "bg-amber-50 text-amber-600 border-amber-100" },
  { icon: Award, label: "Network Garages", value: "3,000+", desc: "Cashless garage repairs across the country", accent: "bg-purple-50 text-purple-600 border-purple-100" },
]

const loanCategories = [
  {
    title: "Comprehensive Bike Insurance",
    desc: "Complete protection covering damages to your own vehicle due to accidents, natural disasters, fire, and theft, plus third-party liabilities.",
    badge: "Maximum Cover",
  },
  {
    title: "Third-Party Liability Cover",
    desc: "Mandatory legal coverage that protects you against financial liabilities arising from injuries, death, or property damage caused to third parties.",
    badge: "Legal Mandate",
  },
  {
    title: "Stand-Alone Own Damage Cover",
    desc: "Designed for vehicle owners who already hold a valid third-party policy and want specialized protection for physical damages to their own bike.",
    badge: "Flexible Add-on",
  },
  {
    title: "Zero Depreciation Add-on",
    desc: "Ensure you receive 100% claim settlement value on plastic, rubber, and metal parts without any depreciation deductions during repairs.",
    badge: "Full Value",
  },
]

const steps = [
  { number: "01", title: "Enter Bike Registration", desc: "Provide your two-wheeler registration number and previous policy details to fetch instant quotes." },
  { number: "02", title: "Select Coverage Plan", desc: "Choose between third-party or comprehensive plans along with preferred add-on covers." },
  { number: "03", title: "Quick Online Payment", desc: "Pay securely via net banking, UPI, credit, or debit card without cumbersome paperwork." },
  { number: "04", title: "Instant Policy Delivery", desc: "Receive your official bike insurance policy copy instantly in your email and WhatsApp." },
]

const requirements = {
  eligibility: [
    "Vehicle Ownership: Valid registration certificate (RC) in the owner's name",
    "Usage: Commercial or personal two-wheelers registered within India",
    "Inspection: No physical inspection needed for timely policy renewals",
    "Previous Policy: Details of past insurance policy (if applicable for No Claim Bonus transfers)",
  ],
  documents: [
    "Two-Wheeler Registration Certificate (RC)",
    "Previous year insurance policy copy (for renewals)",
    "Identity & Address Proof (PAN Card, [Aadhaar Redacted], Driving License)",
    "Passport-size photographs of the vehicle owner",
  ]
}

const faqs = [
  {
    q: "Is bike insurance legally mandatory in India?",
    a: "Yes, having at least a valid third-party bike insurance policy is compulsory under the Motor Vehicles Act to ride legally on public roads."
  },
  {
    q: "What is IDV and how does it affect my bike insurance premium?",
    a: "IDV (Insured Declared Value) is the current market value of your bike. It represents the maximum amount your insurer will pay in case of total loss or theft. A higher IDV slightly increases your premium but ensures better payout security."
  },
  {
    q: "Can I transfer my No Claim Bonus (NCB) from my previous insurer?",
    a: "Yes, you can easily retain and transfer your accumulated NCB percentage when switching your bike insurance provider during renewal."
  }
]

export default function BikeInsurancePage() {
  return (
    <>
      <Navbar />
  {schemas.map((schema, index) => (
    <script
      key={index}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  ))}


      <div className="min-h-screen bg-slate-50/50 text-slate-900 pb-24 pt-20">
        
        {/* Navigation Breadcrumb Bar */}
        <div className="bg-white/80 border-b border-slate-200/80 sticky top-16 lg:top-20 z-40 py-3 backdrop-blur-md mb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/insurance" className="inline-flex items-center text-xs font-bold text-slate-600 hover:text-blue-600 transition-colors">
              <ArrowLeft className="w-3.5 h-3.5 mr-1.5" /> Back to Insurance Options
            </Link>
          </div>
        </div>

        {/* Hero Banner Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white py-20 lg:py-28 mx-4 sm:mx-6 lg:mx-8 rounded-3xl mb-12 shadow-xl">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" /> Two-Wheeler Protection Shield
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                  Ride Securely with Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Bike Insurance</span>
                </h1>
                <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mb-8 leading-relaxed">
                  Protect your motorcycle or scooter against accidents, theft, and third-party liabilities with quick digital issuance starting at just ₹800/year.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 h-12 rounded-xl shadow-lg shadow-blue-600/30 transition-all" asChild>
                    <Link href="/contact">Get Quote</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-slate-700 bg-slate-800/50 hover:bg-slate-800 text-white h-12 px-7 rounded-xl backdrop-blur-md transition-all font-semibold" asChild>
                    <Link href="/emi-calculator" className="flex items-center gap-2">
                      <Calculator className="w-4 h-4 text-blue-400" /> Calculate Premium
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Side Summary Card */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-md bg-slate-800/80 border border-slate-700/80 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Instant Cover</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Cashless Repairs</h3>
                  <p className="text-sm text-slate-300 mb-6">Access hassle-free claim settlements and network garage repairs nationwide.</p>
                  
                  <div className="space-y-3 pt-4 border-t border-slate-700">
                    <div className="flex items-center gap-3 text-sm text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold">✓</div>
                      <span>Personal Accident Cover up to ₹15 Lakhs</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold">✓</div>
                      <span>Zero Depreciation & Add-on Protections</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold">✓</div>
                      <span>Instant Digital Policy Issuance</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Highlights Stat Cards */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((item, index) => {
              const IconComponent = item.icon
              return (
                <div key={index} className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-semibold text-slate-400">0{index + 1}</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{item.label}</p>
                    <p className="text-2xl sm:text-3xl font-extrabold text-blue-900 mt-1 mb-1">{item.value}</p>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Categories Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="mb-6">
            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">Plan Variants</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">Tailored Bike Insurance Policies</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {loanCategories.map((category, idx) => (
              <div key={idx} className="bg-white border border-slate-200/80 rounded-2xl p-6 hover:border-blue-300 transition-all group flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      0{idx + 1}
                    </div>
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                      {category.badge}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">{category.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">{category.desc}</p>
                </div>
                <div>
                  <Button className="w-full bg-slate-900 hover:bg-blue-600 text-white transition-colors" asChild>
                    <Link href="/contact">Get Quote</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Step-by-Step Workflow */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-10 shadow-sm">
            <div className="mb-8">
              <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">Simple Process</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">4 Easy Steps to Insure Your Bike</h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((s, i) => (
                <div key={i} className="flex flex-col justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center mb-4 shadow-sm">
                    {s.number}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{s.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Eligibility and Documents */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid lg:grid-cols-2 gap-8">
            
            <div className="bg-white border border-slate-200/80 rounded-3xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600" /> Policy Guidelines
              </h3>
              <ul className="space-y-4">
                {requirements.eligibility.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 pb-3 border-b border-slate-100 last:border-0 last:pb-0">
                    <span className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0" />
                    <span className="leading-relaxed font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-slate-200/80 rounded-3xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" /> Required Documents
              </h3>
              <ul className="space-y-4">
                {requirements.documents.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 pb-3 border-b border-slate-100 last:border-0 last:pb-0">
                    <span className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0" />
                    <span className="leading-relaxed font-medium">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </section>

        {/* FAQs */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-10 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-blue-600" /> Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="pb-6 border-b border-slate-100 last:border-0 last:pb-0">
                  <h4 className="font-semibold text-slate-900 text-base mb-2">{faq.q}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </>
  )
}