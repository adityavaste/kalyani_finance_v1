import { Metadata } from "next"
import Link from "next/link"
import { 
  HeartPulse, Shield, Zap, FileText, Calculator, 
  ArrowLeft, CheckCircle2, 
  Clock, Award, Banknote, Sparkles, HelpCircle,
  ArrowRight, PhoneCall, BadgeCheck, Star,
  MousePointerClick, TrendingUp, Users, Landmark
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
export { metadata } from "./metadata";
import schemas from "./schema";

const highlights = [
  { icon: Banknote, label: "Coverage Amount", value: "Up to ₹1 Cr", desc: "Extensive protection for major medical events" },
  { icon: HeartPulse, label: "Network Hospitals", value: "10,000+", desc: "Pan-India cashless treatment network" },
  { icon: Clock, label: "Claim Settlement", value: "99.4%", desc: "Fast and transparent claim processing" },
  { icon: Award, label: "Tax Benefits", value: "Under Sec 80D", desc: "Save up to ₹75,000 on annual premiums" },
]

const loanCategories = [
  {
    title: "Individual Health Cover",
    desc: "Personalized medical insurance plans designed to cover hospitalization, diagnostics, and daycare procedures for a single member.",
    badge: "Solo Protection",
    color: "from-blue-600 to-indigo-600",
    bg: "bg-blue-50 text-blue-700 border-blue-100"
  },
  {
    title: "Family Floater Plans",
    desc: "Single comprehensive policy covering you, your spouse, children, and dependent parents under one unified sum insured.",
    badge: "Family Favorite",
    color: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50 text-emerald-700 border-emerald-100"
  },
  {
    title: "Critical Illness Rider",
    desc: "Specialized lump-sum payout protection against life-threatening illnesses like cancer, heart attack, and kidney failure.",
    badge: "High Risk Cover",
    color: "from-purple-600 to-pink-600",
    bg: "bg-purple-50 text-purple-700 border-purple-100"
  },
  {
    title: "Senior Citizen Health Cover",
    desc: "Tailored medical policies addressing age-related health needs, pre-existing conditions, and regular health check-ups.",
    badge: "Elder Care",
    color: "from-amber-500 to-orange-600",
    bg: "bg-amber-50 text-amber-700 border-amber-100"
  },
]

const steps = [
  { number: "01", title: "Select Coverage", desc: "Choose your desired sum insured and family members to be covered under the health policy." },
  { number: "02", title: "Instant Quote & Comparison", desc: "View transparent premium options tailored to your medical history and age group." },
  { number: "03", title: "Easy Medical Declaration", desc: "Complete a quick health questionnaire online without cumbersome physical check-ups for standard tiers." },
  { number: "04", title: "Policy Issuance", desc: "Receive your digital policy kit instantly via email with immediate coverage commencement." },
]

const requirements = {
  eligibility: [
    "Age: Adults from 18 years to 65 years (lifelong renewals available)",
    "Dependents: Dependent children can be covered from 90 days of age",
    "Medical Screening: May require minor diagnostic tests based on age and pre-existing conditions",
    "Residency: Indian citizens and residents living in India",
  ],
  documents: [
    "Identity Proof (PAN Card, Passport, Voter ID)",
    "Address Proof (Utility Bill, Rental Agreement)",
    "Age Proof (Birth Certificate, School Leaving Certificate, Passport)",
    "Previous medical records or prescriptions (if declaring pre-existing illnesses)",
  ]
}

const faqs = [
  {
    q: "What is a cashless hospitalization facility?",
    a: "With cashless hospitalization, you can receive medical treatment at any of our 10,000+ network hospitals without paying out of pocket. The bill is settled directly by us."
  },
  {
    q: "Are pre-existing diseases covered under the health policy?",
    a: "Yes, pre-existing conditions are covered after a designated waiting period ranging from 24 to 48 months, depending on the specific insurance policy terms."
  },
  {
    q: "Can I claim tax deductions on health insurance premiums?",
    a: "Yes, premiums paid toward health insurance qualify for tax deductions under Section 80D of the Income Tax Act, up to ₹25,000 for individuals and up to ₹50,000 for senior citizens."
  }
]

const stats = [
  { value: "10,000+", label: "Network Hospitals" },
  { value: "₹1 Cr", label: "Max Coverage" },
  { value: "99.4%", label: "Claim Settlement" },
  { value: "₹75K", label: "Tax Savings" },
]

export default function HealthInsurancePage() {
  return (
    <>
      <Navbar />
      <>
        {schemas.map((schema: Record<string, any>, index: number) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema),
            }}
          />
        ))}
      </>

      <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">
        
        {/* ========== HERO SECTION ========== */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
          <div className="absolute w-[500px] h-[500px] -top-20 -left-20 bg-rose-200 rounded-full blur-3xl opacity-50 pointer-events-none" />
          <div className="absolute w-[400px] h-[400px] top-1/3 -right-20 bg-indigo-200 rounded-full blur-3xl opacity-50 pointer-events-none" />
          <div className="absolute w-[350px] h-[350px] bottom-0 left-1/3 bg-cyan-200 rounded-full blur-3xl opacity-50 pointer-events-none" />
          
          <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_30%,transparent_100%)] opacity-40" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 border border-rose-100 text-rose-700 text-xs font-bold uppercase tracking-wider shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-rose-500" /> 
                  Comprehensive Medical Shield
                </div>
                
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-slate-900">
                  Protect Your Family's Health with{" "}
                  <span className="text-blue-600 bg-clip-text">Complete Insurance</span>
                </h1>
                
                <p className="text-slate-500 text-base sm:text-xl max-w-2xl leading-relaxed">
                  Secure comprehensive coverage up to ₹1 Crore with cashless treatments across 10,000+ network hospitals, fast claim settlements, and valuable tax savings.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold px-8 h-14 rounded-2xl shadow-xl shadow-blue-500/25 text-base" asChild>
                    <Link href="/contact" className="flex items-center gap-2">
                      <MousePointerClick className="w-5 h-5" />
                      Get Health Cover Quote
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
                      <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-100 to-indigo-100 border-2 border-white flex items-center justify-center text-xs font-bold text-rose-700 shadow-sm">
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
                    <p className="text-sm text-slate-400 mt-0.5">Trusted by 1,00,000+ Families</p>
                  </div>
                </div>
              </div>

              {/* Right - Floating Glass Card */}
              <div className="lg:col-span-5">
                <div className="relative">
                  <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl shadow-slate-200/50 border border-white/60">
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 to-indigo-50/50 rounded-3xl -z-10" />
                    
                    <div className="relative">
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-xs font-bold uppercase tracking-widest text-rose-600">Medical Security</span>
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">10,000+ Network Hospitals</h3>
                      <p className="text-sm text-slate-500 mb-6">Experience worry-free hospitalization with direct cashless settlements pan-India.</p>
                      
                      <div className="space-y-3 pt-4 border-t border-slate-100">
                        {[
                          "No Claim Bonus for Claim-Free Years",
                          "Pre & Post Hospitalization Expenses Covered",
                          "Free Annual Health Check-ups Included"
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center gap-3 text-sm text-slate-600">
                            <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center text-xs font-bold">✓</div>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 pt-4 border-t border-slate-100">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-slate-500 font-medium">Coverage Up To</span>
                          <span className="text-lg font-bold text-slate-900">₹1 Crore</span>
                        </div>
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
                  className="group bg-white border border-slate-100 rounded-2xl p-6 text-center shadow-lg shadow-slate-100/50 hover:border-rose-100 transition-all duration-300"
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
                  className="group bg-white border border-slate-100 rounded-2xl p-6 hover:border-rose-100 transition-all duration-300 shadow-sm shadow-slate-100/30"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-50 to-indigo-50 border border-rose-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-rose-600" />
                  </div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="text-2xl font-black text-slate-900 mb-1">{item.value}</p>
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
                  <span className="text-rose-600 font-bold text-sm tracking-wider uppercase">Insurance Plans</span>
                  <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2">Tailored Health Insurance Options</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  {loanCategories.map((category, idx) => (
                    <div 
                      key={idx} 
                      className="group bg-white border border-slate-100 rounded-2xl p-6 hover:border-rose-200 transition-all duration-500 shadow-sm shadow-slate-100/30 overflow-hidden relative"
                    >
                      <div className="absolute -top-10 -right-10 w-32 h-32 bg-rose-50 rounded-full blur-2xl group-hover:bg-rose-100 transition-colors duration-500" />
                      
                      <div className="relative">
                        <div className="flex items-center justify-between mb-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white font-bold shadow-lg shadow-rose-500/20 group-hover:scale-110 transition-transform duration-300`}>
                            <HeartPulse className="w-6 h-6" />
                          </div>
                          <span className={`text-xs font-bold px-3 py-1 rounded-full border ${category.bg}`}>
                            {category.badge}
                          </span>
                        </div>
                        <h3 className="font-bold text-slate-900 text-xl mb-3 group-hover:text-rose-700 transition-colors">{category.title}</h3>
                        <p className="text-sm text-slate-500 leading-relaxed mb-5">{category.desc}</p>
                        
                        <Button className="w-full bg-slate-900 hover:bg-gradient-to-r hover:from-rose-600 hover:to-indigo-600 text-white transition-all duration-300 font-bold h-11 rounded-xl" asChild>
                          <Link href="/contact" className="flex items-center justify-center gap-2">
                            Get Quote <ArrowRight className="w-4 h-4" />
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
                  <span className="text-rose-600 font-bold text-sm tracking-wider uppercase">Purchase Journey</span>
                  <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2">4 Easy Steps to Get Covered</h2>
                </div>
                
                <div className="relative">
                  <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-gradient-to-b from-rose-200 via-indigo-200 to-purple-200 hidden sm:block" />
                  
                  <div className="space-y-6">
                    {steps.map((step, idx) => (
                      <div key={step.number} className="group relative flex gap-6 items-start">
                        <div className="relative z-10 shrink-0">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-600 to-indigo-600 text-white font-black text-xl flex items-center justify-center shadow-lg shadow-rose-500/25 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border-2 border-white">
                            {step.number}
                          </div>
                        </div>
                        
                        <div className="flex-1 bg-white border border-slate-100 rounded-2xl p-6 group-hover:border-rose-200 transition-all duration-500 shadow-sm shadow-slate-100/30">
                          <h4 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-rose-700 transition-colors">{step.title}</h4>
                          <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Eligibility & Documents */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm shadow-slate-100/30 hover:border-rose-100 transition-all duration-500">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-600 to-indigo-600 flex items-center justify-center shadow-md shadow-rose-500/20">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    Eligibility Criteria
                  </h3>
                  <ul className="space-y-4">
                    {requirements.eligibility.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 pb-4 border-b border-slate-50 last:border-0 last:pb-0 group">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-rose-500 to-indigo-500 mt-2 shrink-0 group-hover:scale-150 transition-transform" />
                        <span className="group-hover:text-slate-900 transition-colors font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm shadow-slate-100/30 hover:border-rose-100 transition-all duration-500">
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

              {/* FAQ */}
              <div className="bg-white border border-slate-100 rounded-3xl p-8 sm:p-10 shadow-sm shadow-slate-100/30">
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-rose-600 to-indigo-600 flex items-center justify-center shadow-md shadow-rose-500/20">
                    <HelpCircle className="w-6 h-6 text-white" />
                  </div>
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq, idx) => (
                    <div 
                      key={idx} 
                      className="group bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:bg-white hover:border-rose-200 transition-all duration-500 cursor-pointer shadow-sm shadow-transparent hover:shadow-slate-100/50"
                    >
                      <h4 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-3 group-hover:text-rose-700 transition-colors">
                        <span className="w-8 h-8 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center text-sm font-black shrink-0">
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
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-600/10 via-transparent to-purple-600/10" />
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-rose-500/20 rounded-full blur-3xl pointer-events-none" />
                  
                  <div className="relative">
                    <h3 className="text-2xl font-black text-white mb-3">Secure Your Family Today</h3>
                    <p className="text-slate-300 text-sm mb-8 leading-relaxed">
                      Get instant health insurance quotes with cashless hospitalization, critical illness riders, and tax benefits under Section 80D.
                    </p>
                    
                    <div className="space-y-4 mb-8">
                      {[
                        { icon: HeartPulse, text: "Individual & Family Floater" },
                        { icon: Zap, text: "Critical Illness Rider" },
                        { icon: PhoneCall, text: "Cashless Hospitalization" },
                        { icon: Award, text: "Section 80D Tax Benefits" },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-sm text-slate-300">
                          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                            <item.icon className="w-4 h-4 text-rose-400" />
                          </div>
                          <span>{item.text}</span>
                        </div>
                      ))}
                    </div>

                    <Button size="lg" className="w-full bg-white hover:bg-slate-100 text-slate-900 font-bold h-14 rounded-xl text-base" asChild>
                      <Link href="/contact" className="flex items-center justify-center gap-2">
                        Get Instant Quote <ArrowRight className="w-5 h-5" />
                      </Link>
                    </Button>

                    <p className="text-center text-xs text-slate-500 mt-4">
                      Free comparison • No spam calls
                    </p>
                  </div>
                </div>

                {/* Calculator Card */}
                <div className="mt-6 bg-white border border-slate-100 rounded-3xl p-8 text-center shadow-sm shadow-slate-100/30 hover:border-rose-100 transition-all duration-500 group">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-600 to-indigo-600 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-rose-500/20 group-hover:scale-110 transition-transform">
                    <Calculator className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-xl mb-3">Premium Calculator</h4>
                  <p className="text-sm text-slate-500 mb-6 leading-relaxed">Estimate your health insurance premium based on age, coverage amount, and family members.</p>
                  <Button variant="outline" className="w-full h-12 rounded-xl border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold" asChild>
                    <Link href="/emi-calculator" className="flex items-center justify-center gap-2">
                      Calculate <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>

                {/* Trust Badge */}
                <div className="mt-6 bg-emerald-50 border border-emerald-100 rounded-3xl p-6 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <BadgeCheck className="w-5 h-5 text-emerald-600" />
                    <span className="text-emerald-700 font-bold text-sm">IRDAI Licensed Provider</span>
                  </div>
                  <p className="text-xs text-emerald-600/70">256-bit SSL encryption for your data</p>
                </div>
              </div>

            </div>

          </div>
        </section>

      </div>

      <Footer />
    </>
  )
}