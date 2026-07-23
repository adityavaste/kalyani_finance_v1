import { Metadata } from "next"
import Link from "next/link"
import { 
  Car, Shield, Zap, FileText, Calculator, 
  ArrowLeft, CheckCircle2, 
  Clock, Award, Banknote, Sparkles, HelpCircle 
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
export { metadata } from "./metadata";
import schemas from "./schema";

const highlights = [
  { icon: Shield, label: "Coverage Type", value: "Comprehensive", desc: "Third-party & own damage protection", accent: "bg-emerald-50 text-emerald-600 border-emerald-100" },
  { icon: Car, label: "Network Garages", value: "5,000+", desc: "Cashless repairs across the country", accent: "bg-blue-50 text-blue-600 border-blue-100" },
  { icon: Clock, label: "Claim Settlement", value: "Fast Track", desc: "Hassle-free digital claim processing", accent: "bg-amber-50 text-amber-600 border-amber-100" },
  { icon: Award, label: "No Claim Bonus", value: "Up to 50%", desc: "Discounts for safe driving records", accent: "bg-purple-50 text-purple-600 border-purple-100" },
]

const loanCategories = [
  {
    title: "Comprehensive Car Insurance",
    desc: "Complete protection covering third-party liability, theft, fire, natural calamities, and own vehicle damages.",
    badge: "Recommended",
  },
  {
    title: "Third-Party Liability Only",
    desc: "Mandatory legal coverage that protects you against financial liabilities towards third-party injury, death, or property damage.",
    badge: "Mandatory",
  },
  {
    title: "Zero Depreciation Add-On",
    desc: "Ensure 100% claim payout on plastic, rubber, and fiber parts without deduction for normal wear and tear.",
    badge: "Popular Add-On",
  },
  {
    title: "Engine & Gearbox Protection",
    desc: "Safeguard core mechanical components against water damage, oil leakage, and hydrostatic lock incidents.",
    badge: "High Security",
  },
]

const steps = [
  { number: "01", title: "Enter Car Details", desc: "Provide your vehicle registration number and previous policy details to view tailored quotes." },
  { number: "02", title: "Select Coverage Plan", desc: "Choose your preferred IDV (Insured Declared Value) and essential add-on covers." },
  { number: "03", title: "Instant Payment", desc: "Complete secure online payment using digital gateways without any physical inspection hassles." },
  { number: "04", title: "Policy Issuance", desc: "Receive your official digital car insurance policy instantly straight to your email and WhatsApp." },
]

const requirements = {
  eligibility: [
    "Vehicle Ownership: Valid registration certificate (RC) in your name or transferred legally",
    "Vehicle Type: Private cars, hatchbacks, sedans, SUVs, and electric vehicles",
    "Inspection: Required only if previous policy has lapsed beyond the grace period",
    "Usage: Personal use vehicles registered within India",
  ],
  documents: [
    "Vehicle Registration Certificate (RC Copy)",
    "Previous Insurance Policy Document (if applicable for NCB transfer)",
    "Identity Proof (PAN Card, [Aadhaar Redacted], or Driving License)",
    "Address Proof (Utility bill or valid passport)",
  ]
}

const faqs = [
  {
    q: "What is IDV (Insured Declared Value) in car insurance?",
    a: "IDV is the maximum sum assured fixed by the insurer, representing the current market value of your vehicle. It is payable in case of total loss or theft."
  },
  {
    q: "How can I transfer my No Claim Bonus (NCB) from a previous insurer?",
    a: "You can obtain an NCB reserve letter or certificate from your previous insurance provider and submit it during policy renewal to retain accumulated discounts."
  },
  {
    q: "What is cashless claim settlement?",
    a: "Under cashless settlement, your vehicle is repaired at any of our authorized network garages, and the repair bills are settled directly by KalyaniFinance."
  }
]

export default function CarInsurancePage() {
  return (
    <>
      <Navbar />
<>
  {schemas.map((schema, index) => (
    <script
      key={index}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  ))}

  {/* Rest of your page */}
</>
      <div className="min-h-screen bg-slate-50/50 text-slate-900 pb-24 pt-20">
        
        

        {/* Hero Banner Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white py-20 lg:py-28 mx-4 sm:mx-6 lg:mx-8 rounded-3xl mb-12 shadow-xl">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" /> Comprehensive Protection
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                  Drive Worry-Free with Reliable <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Car Insurance</span>
                </h1>
                <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mb-8 leading-relaxed">
                  Protect your vehicle against accidents, theft, and natural disasters with instant policy issuance, zero depreciation add-ons, and cashless repairs.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 h-12 rounded-xl shadow-lg shadow-blue-600/30 transition-all" asChild>
                    <Link href="/contact">Get Car Insurance Quote</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-slate-700 bg-slate-800/50 hover:bg-slate-800 text-white h-12 px-7 rounded-xl backdrop-blur-md transition-all font-semibold" asChild>
                    <Link href="/contact" className="flex items-center gap-2">
                      <Calculator className="w-4 h-4 text-blue-400" /> Renew Existing Policy
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Side Summary Card */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-md bg-slate-800/80 border border-slate-700/80 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Instant Coverage</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">5,000+ Garages</h3>
                  <p className="text-sm text-slate-300 mb-6">Enjoy seamless cashless claim settlements nationwide across our extensive partner network.</p>
                  
                  <div className="space-y-3 pt-4 border-t border-slate-700">
                    <div className="flex items-center gap-3 text-sm text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold">✓</div>
                      <span>Up to 50% No Claim Bonus Discounts</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold">✓</div>
                      <span>24/7 Roadside Assistance Support</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold">✓</div>
                      <span>Zero Paperwork Digital Issuance</span>
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
            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">Protection Plans</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">Car Insurance Coverage Options</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {loanCategories.map((category, idx) => (
              <div key={idx} className="bg-white border border-slate-200/80 rounded-2xl p-6 hover:border-blue-300 transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    0{idx + 1}
                  </div>
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                    {category.badge}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">{category.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{category.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Step-by-Step Workflow */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-10 shadow-sm">
            <div className="mb-8">
              <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">Simple Process</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">4 Easy Steps to Insure Your Car</h2>
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