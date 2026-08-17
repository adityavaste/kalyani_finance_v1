import { Metadata } from "next"
import Link from "next/link"
export { metadata } from "./metadata"
import schemas from "./schema"
import { 
  Bike, Shield, Zap, FileText, Calculator, 
  CheckCircle2, Clock, Award, Banknote, Sparkles, 
  HelpCircle, ArrowRight, PhoneCall, 
  ChevronRight, Star, MousePointerClick, Phone, Mail,
  TrendingUp, Users, ShieldCheck, ArrowUpRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const highlights = [
  { icon: Banknote, label: "Starting Premium", value: "₹800", suffix: "/year*", desc: "Cost-effective two-wheeler security" },
  { icon: Bike, label: "IDV Coverage", value: "Max", suffix: " Value", desc: "Highest insured declared value" },
  { icon: Clock, label: "Claim Settlement", value: "Instant", suffix: "", desc: "Fast digital claim approval" },
  { icon: Award, label: "Network Garages", value: "3,000+", suffix: "", desc: "Cashless repairs nationwide" },
]

const loanCategories = [
  {
    title: "Comprehensive Bike Insurance",
    desc: "Complete protection covering damages to your own vehicle due to accidents, natural disasters, fire, and theft, plus third-party liabilities.",
    badge: "Maximum Cover",
    color: "from-blue-600 to-indigo-600",
    bg: "bg-blue-50 text-blue-700 border-blue-100",
    features: ["Own Damage Cover", "Third-Party Liability", "Natural Calamities", "Theft Protection"]
  },
  {
    title: "Third-Party Liability Cover",
    desc: "Mandatory legal coverage that protects you against financial liabilities arising from injuries, death, or property damage caused to third parties.",
    badge: "Legal Mandate",
    color: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50 text-emerald-700 border-emerald-100",
    features: ["Injury Coverage", "Property Damage", "Legal Compliance", "Death Benefits"]
  },
  {
    title: "Stand-Alone Own Damage",
    desc: "Designed for vehicle owners who already hold a valid third-party policy and want specialized protection for physical damages to their own bike.",
    badge: "Flexible Add-on",
    color: "from-amber-500 to-orange-600",
    bg: "bg-amber-50 text-amber-700 border-amber-100",
    features: ["Accident Damage", "Fire Protection", "Vandalism Cover", "Customizable"]
  },
  {
    title: "Zero Depreciation Add-on",
    desc: "Ensure you receive 100% claim settlement value on plastic, rubber, and metal parts without any depreciation deductions during repairs.",
    badge: "Full Value",
    color: "from-purple-600 to-pink-600",
    bg: "bg-purple-50 text-purple-700 border-purple-100",
    features: ["100% Claim Value", "No Depreciation", "All Parts Covered", "Cost Saver"]
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
    "Previous Policy: Details of past insurance policy (if applicable for NCB transfers)",
  ],
  documents: [
    "Two-Wheeler Registration Certificate (RC)",
    "Previous year insurance policy copy (for renewals)",
    "Identity & Address Proof (PAN Card, Government ID, Driving License)",
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
    a: "IDV (Insured Declared Value) is the current market value of your bike. It represents the maximum amount your insurer will pay in case of total loss or theft."
  },
  {
    q: "Can I transfer my No Claim Bonus (NCB) from my previous insurer?",
    a: "Yes, you can easily retain and transfer your accumulated NCB percentage when switching your bike insurance provider during renewal."
  }
]

const trustBadges = [
  { icon: Users, label: "10L+ Happy Customers", sub: "Across India" },
  { icon: ShieldCheck, label: "IRDAI Approved", sub: "Licensed Provider" },
  { icon: TrendingUp, label: "99% Claim Success", sub: "Quick Settlement" },
  { icon: Star, label: "4.8/5 Rating", sub: "Customer Trust" },
]

const stats = [
  { value: "10L+", label: "Policies Sold" },
  { value: "3,000+", label: "Cashless Garages" },
  { value: "99%", label: "Claim Success" },
  { value: "₹800", label: "Starting Premium" },
]

export default function BikeInsurancePage() {
  return (
    <>
      <Navbar />

      {schemas.map((schema: Record<string, any>, index: number) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden pb-16 lg:pb-0">
        
        {/* ========== HERO SECTION ========== */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
          <div className="absolute w-[500px] h-[500px] -top-20 -left-20 bg-blue-200 rounded-full blur-3xl opacity-50 pointer-events-none" />
          <div className="absolute w-[400px] h-[400px] top-1/3 -right-20 bg-indigo-200 rounded-full blur-3xl opacity-50 pointer-events-none" />
          <div className="absolute w-[350px] h-[350px] bottom-0 left-1/3 bg-cyan-200 rounded-full blur-3xl opacity-50 pointer-events-none" />
          
          <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_30%,transparent_100%)] opacity-40" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-blue-500" /> 
                  Two-Wheeler Protection Shield
                </div>
                
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-slate-900">
                  Ride Securely With{" "}
                  <span className="text-blue-600 bg-clip-text">Comprehensive</span>{" "}
                  Bike Insurance
                </h1>
                
                <p className="text-slate-500 text-base sm:text-xl max-w-2xl leading-relaxed">
                  Protect your motorcycle or scooter against accidents, theft, and third-party liabilities with quick digital issuance starting at just <span className="text-emerald-600 font-bold">₹800/year</span>.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold px-8 h-14 rounded-2xl shadow-xl shadow-blue-500/25 text-base" asChild>
                    <Link href="/contact" className="flex items-center gap-2">
                      <MousePointerClick className="w-5 h-5" />
                      Get Free Quote
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 rounded-2xl px-6 border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold shadow-sm" asChild>
                    <Link href="/emi-calculator" className="flex items-center gap-2">
                      <Calculator className="w-5 h-5" /> 
                      Calculate Premium
                    </Link>
                  </Button>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap gap-6 pt-2">
                  {trustBadges.map((badge, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-500">
                      <badge.icon className="w-4 h-4 text-blue-600" />
                      <div>
                        <p className="text-xs font-bold text-slate-700">{badge.label}</p>
                        <p className="text-[10px] text-slate-400">{badge.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Floating Glass Card */}
              <div className="lg:col-span-5">
                <div className="relative">
                  <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl shadow-slate-200/50 border border-white/60">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-3xl -z-10" />
                    
                    <div className="relative">
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Instant Cover</span>
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                          <span className="text-xs text-emerald-600 font-semibold">Live</span>
                        </div>
                      </div>
                      
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4 shadow-lg shadow-blue-500/20">
                        <Shield className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">Cashless Repairs</h3>
                      <p className="text-sm text-slate-500 mb-6">Access hassle-free claim settlements and network garage repairs nationwide.</p>
                      
                      <div className="space-y-3 pt-4 border-t border-slate-100">
                        {[
                          "Personal Accident Cover up to ₹15 Lakhs",
                          "Zero Depreciation & Add-on Protections",
                          "Instant Digital Policy Issuance"
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center gap-3 text-sm text-slate-600">
                            <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold">✓</div>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== STATS BAR ========== */}
        <section className="relative -mt-16 z-10 px-4 sm:px-6 lg:px-8 mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="group bg-white border border-slate-100 rounded-2xl p-6 text-center shadow-lg shadow-slate-100/50 hover:border-blue-100 transition-all duration-300"
                >
                  <p className="text-3xl sm:text-4xl font-black text-blue-600 mb-1">{stat.value}</p>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== HIGHLIGHTS ========== */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, idx) => {
              const Icon = item.icon
              return (
                <div 
                  key={idx} 
                  className="group bg-white border border-slate-100 rounded-2xl p-6 hover:border-blue-100 transition-all duration-300 shadow-sm shadow-slate-100/30"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="text-2xl font-black text-slate-900 mb-1">
                    {item.value}
                    <span className="text-sm text-slate-400 font-semibold ml-1">{item.suffix}</span>
                  </p>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* ========== MAIN CONTENT ========== */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Left Column */}
            <div className="lg:col-span-8 space-y-16">
              
              {/* Categories */}
              <div>
                <div className="mb-8">
                  <span className="text-blue-600 font-bold text-sm tracking-wider uppercase">Plan Variants</span>
                  <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2">Tailored Bike Insurance Policies</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  {loanCategories.map((category, idx) => (
                    <div 
                      key={idx} 
                      className="group bg-white border border-slate-100 rounded-2xl p-6 hover:border-blue-200 transition-all duration-500 shadow-sm shadow-slate-100/30 overflow-hidden relative"
                    >
                      <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-50 rounded-full blur-2xl group-hover:bg-blue-100 transition-colors duration-500" />
                      
                      <div className="relative">
                        <div className="flex items-center justify-between mb-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300`}>
                            <Shield className="w-6 h-6" />
                          </div>
                          <span className={`text-xs font-bold px-3 py-1 rounded-full border ${category.bg}`}>
                            {category.badge}
                          </span>
                        </div>
                        <h3 className="font-bold text-slate-900 text-xl mb-3 group-hover:text-blue-700 transition-colors">{category.title}</h3>
                        <p className="text-sm text-slate-500 leading-relaxed mb-4">{category.desc}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-5">
                          {category.features.map((feat, fi) => (
                            <span key={fi} className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
                              {feat}
                            </span>
                          ))}
                        </div>
                        
                        <Button className="w-full bg-slate-900 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 text-white transition-all duration-300 font-bold h-11 rounded-xl" asChild>
                          <Link href="/contact" className="flex items-center justify-center gap-2">
                            Get Quote <ArrowUpRight className="w-4 h-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process Steps */}
              <div className="relative">
                <div className="mb-8">
                  <span className="text-blue-600 font-bold text-sm tracking-wider uppercase">Simple Process</span>
                  <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2">4 Easy Steps to Insure Your Bike</h2>
                </div>
                
                <div className="relative">
                  <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-gradient-to-b from-blue-200 via-indigo-200 to-purple-200 hidden sm:block" />
                  
                  <div className="space-y-6">
                    {steps.map((step, idx) => (
                      <div key={step.number} className="group relative flex gap-6 items-start">
                        <div className="relative z-10 shrink-0">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-black text-xl flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border-2 border-white">
                            {step.number}
                          </div>
                        </div>
                        
                        <div className="flex-1 bg-white border border-slate-100 rounded-2xl p-6 group-hover:border-blue-200 transition-all duration-500 shadow-sm shadow-slate-100/30">
                          <h4 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-blue-700 transition-colors">{step.title}</h4>
                          <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Eligibility & Documents */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm shadow-slate-100/30 hover:border-blue-100 transition-all duration-500">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-md shadow-blue-500/20">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    Policy Guidelines
                  </h3>
                  <ul className="space-y-4">
                    {requirements.eligibility.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 pb-4 border-b border-slate-50 last:border-0 last:pb-0 group">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 mt-2 shrink-0 group-hover:scale-150 transition-transform" />
                        <span className="group-hover:text-slate-900 transition-colors font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm shadow-slate-100/30 hover:border-blue-100 transition-all duration-500">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-md shadow-purple-500/20">
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    Required Documents
                  </h3>
                  <ul className="space-y-4">
                    {requirements.documents.map((doc, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 pb-4 border-b border-slate-50 last:border-0 last:pb-0 group">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mt-2 shrink-0 group-hover:scale-150 transition-transform" />
                        <span className="group-hover:text-slate-900 transition-colors font-medium">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA Banner */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-10 lg:p-12 text-center lg:text-left">
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff20_1px,transparent_1px)] bg-[size:20px_20px] opacity-20" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
                
                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
                      Ready to Secure Your Ride?
                    </h2>
                    <p className="text-blue-100 text-lg max-w-xl">
                      Get your bike insurance quote in under 2 minutes. No paperwork, instant coverage.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 h-14 rounded-2xl shadow-xl text-base" asChild>
                      <Link href="/contact" className="flex items-center gap-2">
                        <Phone className="w-5 h-5" /> Talk to Expert
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-bold px-8 h-14 rounded-2xl text-base" asChild>
                      <Link href="/contact" className="flex items-center gap-2">
                        <Mail className="w-5 h-5" /> Get Quote
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-white border border-slate-100 rounded-3xl p-8 sm:p-10 shadow-sm shadow-slate-100/30">
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-md shadow-blue-500/20">
                    <HelpCircle className="w-6 h-6 text-white" />
                  </div>
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq, idx) => (
                    <div 
                      key={idx} 
                      className="group bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:bg-white hover:border-blue-200 transition-all duration-500 cursor-pointer shadow-sm shadow-transparent hover:shadow-slate-100/50"
                    >
                      <h4 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-3 group-hover:text-blue-700 transition-colors">
                        <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-black shrink-0">
                          Q{idx + 1}
                        </span>
                        {faq.q}
                      </h4>
                      <p className="text-sm text-slate-500 leading-relaxed pl-11">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Sidebar - Sticky CTA */}
            <div className="lg:col-span-4 space-y-6">
              
              <div className="sticky top-24">
                {/* Main CTA */}
                <div className="relative bg-gradient-to-br from-slate-900 to-indigo-950 border border-slate-700 rounded-3xl p-8 shadow-2xl shadow-slate-900/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10" />
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
                  
                  <div className="relative">
                    <h3 className="text-2xl font-black text-white mb-3">Insure in 2 Minutes</h3>
                    <p className="text-slate-300 text-sm mb-8 leading-relaxed">
                      Get your bike insurance policy instantly with zero paperwork and digital KYC.
                    </p>
                    
                    <div className="space-y-4 mb-8">
                      {[
                        { icon: Zap, text: "Instant Policy Issuance" },
                        { icon: Shield, text: "3,000+ Cashless Garages" },
                        { icon: PhoneCall, text: "24/7 Claim Assistance" },
                        { icon: Award, text: "NCB Transfer Support" },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-sm text-slate-300">
                          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                            <item.icon className="w-4 h-4 text-blue-400" />
                          </div>
                          <span>{item.text}</span>
                        </div>
                      ))}
                    </div>

                    <Button size="lg" className="w-full bg-white hover:bg-slate-100 text-slate-900 font-bold h-14 rounded-xl text-base" asChild>
                      <Link href="/contact" className="flex items-center justify-center gap-2">
                        Buy Now <ArrowRight className="w-5 h-5" />
                      </Link>
                    </Button>

                    <p className="text-center text-xs text-slate-500 mt-4">
                      IRDAI approved • 100% digital
                    </p>
                  </div>
                </div>

                {/* Calculator Card */}
                <div className="mt-6 bg-white border border-slate-100 rounded-3xl p-8 text-center shadow-sm shadow-slate-100/30 hover:border-blue-100 transition-all duration-500 group">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                    <Calculator className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-xl mb-3">Premium Calculator</h4>
                  <p className="text-sm text-slate-500 mb-6 leading-relaxed">Check your bike insurance premium in seconds based on your vehicle model.</p>
                  <Button variant="outline" className="w-full h-12 rounded-xl border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold" asChild>
                    <Link href="/emi-calculator" className="flex items-center justify-center gap-2">
                      Calculate <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>

                {/* Trust Badge */}
                <div className="mt-6 bg-emerald-50 border border-emerald-100 rounded-3xl p-6 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                    <span className="text-emerald-700 font-bold text-sm">IRDAI Licensed Provider</span>
                  </div>
                  <p className="text-xs text-emerald-600/70">256-bit SSL encryption for your data</p>
                </div>
              </div>

            </div>

          </div>
        </section>

      </div>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-slate-200 p-4 lg:hidden z-50">
        <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold h-12 rounded-xl shadow-lg" asChild>
          <Link href="/contact">Get Free Quote Now</Link>
        </Button>
      </div>

      <Footer />
    </>
  )
}