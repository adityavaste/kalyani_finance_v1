import { Metadata } from "next"
import Link from "next/link"
import { 
  Bike, Shield, Zap, FileText, Calculator, 
  ArrowLeft, CheckCircle2, ArrowRight,
  Clock, Award, Banknote, Sparkles, HelpCircle,
  ChevronRight, PhoneCall, Star,
  TrendingUp, Users, ShieldCheck, MousePointerClick,
  BadgeCheck, MapPin
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import schemas from "./schema";

export const metadata: Metadata = {
  title: "Bike Insurance | Comprehensive Two-Wheeler Coverage Starting ₹800/year",
  description: "Protect your motorcycle with India's best bike insurance. Comprehensive coverage, cashless claims at 3000+ garages, instant policy issuance.",
};

const stats = [
  { value: "10L+", label: "Happy Riders" },
  { value: "3,000+", label: "Network Garages" },
  { value: "99%", label: "Claim Success" },
  { value: "4.8/5", label: "Customer Rating" },
]

const highlights = [
  { icon: Banknote, label: "Starting Premium", value: "₹800", suffix: "/year*", desc: "Cost-effective two-wheeler security", color: "from-emerald-500 to-teal-400", shadow: "shadow-emerald-500/25" },
  { icon: Bike, label: "IDV Coverage", value: "Max", suffix: " Value", desc: "Highest insured declared value", color: "from-blue-500 to-cyan-400", shadow: "shadow-blue-500/25" },
  { icon: Clock, label: "Claim Settlement", value: "Instant", suffix: "", desc: "Fast digital claim approval", color: "from-amber-500 to-orange-400", shadow: "shadow-amber-500/25" },
  { icon: Award, label: "Network Garages", value: "3,000+", suffix: "", desc: "Cashless repairs nationwide", color: "from-purple-500 to-pink-400", shadow: "shadow-purple-500/25" },
]

const planTypes = [
  {
    title: "Comprehensive Bike Insurance",
    desc: "Complete protection covering damages to your own vehicle due to accidents, natural disasters, fire, and theft, plus third-party liabilities.",
    badge: "Maximum Cover",
    icon: Shield,
  },
  {
    title: "Third-Party Liability Cover",
    desc: "Mandatory legal coverage that protects you against financial liabilities arising from injuries, death, or property damage caused to third parties.",
    badge: "Legal Mandate",
    icon: FileText,
  },
  {
    title: "Stand-Alone Own Damage",
    desc: "Designed for vehicle owners who already hold a valid third-party policy and want specialized protection for physical damages to their own bike.",
    badge: "Flexible Add-on",
    icon: Zap,
  },
  {
    title: "Zero Depreciation Add-on",
    desc: "Ensure you receive 100% claim settlement value on plastic, rubber, and metal parts without any depreciation deductions during repairs.",
    badge: "Full Value",
    icon: Star,
  },
]

const steps = [
  { step: "01", title: "Enter Bike Registration", desc: "Provide your two-wheeler registration number and previous policy details to fetch instant quotes." },
  { step: "02", title: "Select Coverage Plan", desc: "Choose between third-party or comprehensive plans along with preferred add-on covers." },
  { step: "03", title: "Quick Online Payment", desc: "Pay securely via net banking, UPI, credit, or debit card without cumbersome paperwork." },
  { step: "04", title: "Instant Policy Delivery", desc: "Receive your official bike insurance policy copy instantly in your email and WhatsApp." },
]

const eligibilityCriteria = [
  { title: "Vehicle Ownership", detail: "Valid registration certificate (RC) in the owner's name." },
  { title: "Usage Type", detail: "Commercial or personal two-wheelers registered within India." },
  { title: "Inspection", detail: "No physical inspection needed for timely policy renewals." },
  { title: "Previous Policy", detail: "Details of past insurance policy for No Claim Bonus transfers." },
]

const documentsRequired = [
  "Two-Wheeler Registration Certificate (RC)",
  "Previous year insurance policy copy (for renewals)",
  "Identity & Address Proof (PAN Card, Aadhaar, Driving License)",
  "Passport-size photographs of the vehicle owner",
]

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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">
        
        {/* ========== HERO SECTION ========== */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
          {/* Soft gradient blobs */}
          <div className="blob bg-blue-300 w-[500px] h-[500px] -top-20 -left-20" />
          <div className="blob bg-indigo-200 w-[400px] h-[400px] top-1/2 -right-20" style={{ animationDelay: '-3s' }} />
          <div className="blob bg-purple-200 w-[300px] h-[300px] bottom-0 left-1/3" style={{ animationDelay: '-6s' }} />
          
          {/* Dot pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_30%,transparent_100%)] opacity-40" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-8 animate-fade-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-blue-500" /> 
                  Two-Wheeler Protection Shield
                </div>
                
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-slate-900">
                  Ride Securely With{" "}
                  <span className="text-gradient-blue">Comprehensive</span>{" "}
                  Bike Insurance
                </h1>
                
                <p className="text-slate-500 text-lg sm:text-xl max-w-2xl leading-relaxed">
                  Protect your motorcycle or scooter against accidents, theft, and third-party liabilities with quick digital issuance starting at just{" "}
                  <span className="text-emerald-600 font-bold">₹800/year</span>.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="btn-magnetic bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold px-8 h-14 rounded-2xl shadow-xl shadow-blue-500/25 text-base" asChild>
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
                <div className="flex items-center gap-6 pt-2">
                  <div className="flex -space-x-3">
                    {[1,2,3,4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 border-2 border-white flex items-center justify-center text-xs font-bold text-blue-700 shadow-sm">
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      {[1,2,3,4,5].map((i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-sm text-slate-400 mt-0.5">Trusted by 10L+ Riders Across India</p>
                  </div>
                </div>
              </div>

              {/* Right - Floating Glass Card */}
              <div className="lg:col-span-5 perspective-1000">
                <div className="relative preserve-3d animate-float">
                  {/* Main Card */}
                  <div className="relative glass-white rounded-3xl p-8 shadow-2xl shadow-slate-200/50 border border-white/60">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-3xl" />
                    
                    <div className="relative">
                      <div className="flex items-center justify-between mb-8">
                        <h3 className="text-xl font-bold text-slate-900">Bike Insurance Snapshot</h3>
                        <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                          <Bike className="w-5 h-5 text-blue-600" />
                        </div>
                      </div>
                      
                      <div className="space-y-5">
                        {[
                          { label: "Starting Premium", value: "₹800/year", color: "text-emerald-600" },
                          { label: "IDV Coverage", value: "Max Value", color: "text-slate-900" },
                          { label: "Claim Settlement", value: "Instant", color: "text-slate-900" },
                        ].map((item, idx) => (
                          <div key={idx} className="flex justify-between items-center pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                            <span className="text-sm text-slate-500 font-medium">{item.label}</span>
                            <span className={`text-xl font-bold ${item.color}`}>{item.value}</span>
                          </div>
                        ))}
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-slate-500 font-medium">Network Garages</span>
                          <span className="text-sm font-bold text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100">
                            3,000+ Cashless
                          </span>
                        </div>
                      </div>
                      
                      <Button className="w-full mt-8 bg-slate-900 hover:bg-slate-800 text-white font-bold h-12 rounded-xl btn-magnetic" asChild>
                        <Link href="/contact">Check Premium Instantly</Link>
                      </Button>
                    </div>
                  </div>
                  
                  {/* Decorative depth cards */}
                  <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-blue-100/60 to-indigo-100/60 rounded-3xl border border-white/40 -z-10 animate-float-slow" />
                  <div className="absolute -top-8 -right-8 w-full h-full bg-gradient-to-br from-indigo-50/40 to-blue-50/40 rounded-3xl border border-white/30 -z-20" />
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
                  className="group bg-white border border-slate-100 rounded-2xl p-6 text-center shadow-lg shadow-slate-100/50 card-lift hover:border-blue-100"
                >
                  <p className="text-3xl sm:text-4xl font-black text-gradient-blue mb-1">{stat.value}</p>
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
                  className="group bg-white border border-slate-100 rounded-2xl p-6 card-lift hover:border-blue-100 shadow-sm shadow-slate-100/30"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg ${item.shadow} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="text-2xl font-black text-slate-900 mb-1">
                    {item.value}
                    <span className="text-lg text-slate-400 font-semibold ml-1">{item.suffix}</span>
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
              
              {/* Plan Variants */}
              <div>
                <div className="mb-8">
                  <span className="text-blue-600 font-bold text-sm tracking-wider uppercase">Plan Variants</span>
                  <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2">Tailored Bike Insurance Policies</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  {planTypes.map((type, idx) => {
                    const Icon = type.icon
                    return (
                      <div 
                        key={idx} 
                        className="group bg-white border border-slate-100 rounded-2xl p-6 hover:border-blue-200 transition-all duration-500 card-lift shadow-sm shadow-slate-100/30 overflow-hidden relative"
                      >
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-50 rounded-full blur-2xl group-hover:bg-blue-100 transition-colors duration-500" />
                        
                        <div className="relative">
                          <div className="flex items-center justify-between mb-5">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                              <Icon className="w-7 h-7 text-white" />
                            </div>
                            <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                              {type.badge}
                            </span>
                          </div>
                          
                          <h3 className="font-bold text-slate-900 text-xl mb-3 group-hover:text-blue-700 transition-colors">{type.title}</h3>
                          <p className="text-sm text-slate-500 leading-relaxed">{type.desc}</p>
                          
                          <div className="mt-4 flex items-center gap-2 text-blue-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                            Get Quote <ChevronRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Process Steps */}
              <div className="relative">
                <div className="mb-8">
                  <span className="text-blue-600 font-bold text-sm tracking-wider uppercase">Simple Process</span>
                  <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2">4 Easy Steps to Insure Your Bike</h2>
                </div>
                
                <div className="relative">
                  {/* Connection Line */}
                  <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-gradient-to-b from-blue-200 via-indigo-200 to-purple-200 hidden sm:block" />
                  
                  <div className="space-y-6">
                    {steps.map((step, idx) => (
                      <div key={step.step} className="group relative flex gap-6 items-start">
                        <div className="relative z-10 shrink-0">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-black text-xl flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border-2 border-white">
                            {step.step}
                          </div>
                        </div>
                        
                        <div className="flex-1 bg-white border border-slate-100 rounded-2xl p-6 group-hover:border-blue-200 transition-all duration-500 card-lift shadow-sm shadow-slate-100/30">
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
                  <div className="space-y-4">
                    {eligibilityCriteria.map((item, idx) => (
                      <div key={idx} className="pb-4 border-b border-slate-50 last:border-0 last:pb-0 group">
                        <p className="font-bold text-sm text-slate-900 group-hover:text-blue-700 transition-colors">{item.title}</p>
                        <p className="text-xs text-slate-500 mt-1">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm shadow-slate-100/30 hover:border-blue-100 transition-all duration-500">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-md shadow-purple-500/20">
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    Required Documents
                  </h3>
                  <ul className="space-y-3">
                    {documentsRequired.map((doc, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 group">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 mt-2 shrink-0 group-hover:scale-150 transition-transform" />
                        <span className="group-hover:text-slate-900 transition-colors">{doc}</span>
                      </li>
                    ))}
                  </ul>
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
                <div className="relative bg-gradient-to-br from-slate-900 to-indigo-950 border border-slate-700 rounded-3xl p-8 shadow-2xl shadow-slate-900/20 overflow-hidden animate-pulse-soft">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10" />
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />
                  
                  <div className="relative">
                    <h3 className="text-2xl font-black text-white mb-3">Secure Your Ride Today</h3>
                    <p className="text-slate-300 text-sm mb-8 leading-relaxed">
                      Get comprehensive coverage with instant digital policy issuance and cashless repairs at 3,000+ garages.
                    </p>
                    
                    <div className="space-y-4 mb-8">
                      {[
                        { icon: ShieldCheck, text: "Cashless Repairs at Network Garages" },
                        { icon: Clock, text: "Instant Digital Policy Issuance" },
                        { icon: PhoneCall, text: "24/7 Claim Assistance" },
                        { icon: Award, text: "Zero Depreciation Add-ons" },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-sm text-slate-300">
                          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                            <item.icon className="w-4 h-4 text-blue-400" />
                          </div>
                          <span>{item.text}</span>
                        </div>
                      ))}
                    </div>

                    <Button size="lg" className="w-full bg-white hover:bg-slate-100 text-slate-900 font-bold h-14 rounded-xl btn-magnetic text-base" asChild>
                      <Link href="/contact" className="flex items-center justify-center gap-2">
                        Get Free Quote <ArrowRight className="w-5 h-5" />
                      </Link>
                    </Button>

                    <p className="text-center text-xs text-slate-500 mt-4">
                      No paperwork required
                    </p>
                  </div>
                </div>

                {/* Calculator Card */}
                <div className="mt-6 bg-white border border-slate-100 rounded-3xl p-8 text-center shadow-sm shadow-slate-100/30 hover:border-blue-100 transition-all duration-500 group">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                    <Calculator className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-xl mb-3">Calculate Your Premium</h4>
                  <p className="text-sm text-slate-500 mb-6 leading-relaxed">Estimate your bike insurance premium in seconds based on your vehicle and coverage needs.</p>
                  <Button variant="outline" className="w-full h-12 rounded-xl border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold btn-magnetic" asChild>
                    <Link href="/emi-calculator" className="flex items-center justify-center gap-2">
                      Open Calculator <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>

                {/* Trust Badge */}
                <div className="mt-6 bg-emerald-50 border border-emerald-100 rounded-3xl p-6 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <BadgeCheck className="w-5 h-5 text-emerald-600" />
                    <span className="text-emerald-700 font-bold text-sm">IRDAI Approved Provider</span>
                  </div>
                  <p className="text-xs text-emerald-600/70">Your data is encrypted with 256-bit SSL security</p>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Sticky Bottom CTA for Mobile */}
        <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-slate-200 p-4 lg:hidden z-50">
          <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold h-12 rounded-xl shadow-lg" asChild>
            <Link href="/contact">Get Free Quote Now</Link>
          </Button>
        </div>

      </div>

      <Footer />
    </>
  )
}