import { Metadata } from "next"
import Link from "next/link"
export { metadata } from "./metadata";
import schemas from "./schema";
import { 
  Building, Shield, Zap, FileText, Calculator, 
  CheckCircle2, Clock, Award, Banknote, Sparkles, 
  HelpCircle, ArrowRight, PhoneCall, BadgeCheck, 
  ChevronRight, Star, MousePointerClick, Landmark,
  TrendingUp, Home
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const highlights = [
  { icon: Banknote, label: "Interest Rate", value: "9.25% p.a.*", desc: "Cost-effective borrowing against assets" },
  { icon: Building, label: "Loan Amount", value: "Up to ₹10 Cr", desc: "Maximize your property's market worth" },
  { icon: Clock, label: "Sanction Time", value: "72 Hours", desc: "Fast approval for urgent needs" },
  { icon: Award, label: "Loan Tenure", value: "Up to 15 Years", desc: "Extended repayment plans" },
]

const loanCategories = [
  {
    title: "Business Expansion",
    desc: "Fuel your enterprise growth, invest in new inventory, or upgrade machinery by leveraging commercial or residential real estate.",
    badge: "Enterprise Growth",
    color: "from-blue-600 to-indigo-600",
    bg: "bg-blue-50 text-blue-700 border-blue-100"
  },
  {
    title: "Debt Consolidation",
    desc: "Merge expensive unsecured debts, high-interest credit cards, and short-term liabilities into a single low-interest LAP account.",
    badge: "Smart Savings",
    color: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50 text-emerald-700 border-emerald-100"
  },
  {
    title: "Higher Education & Personal Goals",
    desc: "Fund specialized international studies, dream weddings, or significant life milestones without liquidating core investments.",
    badge: "Multipurpose",
    color: "from-purple-600 to-pink-600",
    bg: "bg-purple-50 text-purple-700 border-purple-100"
  },
  {
    title: "Medical & Emergency Funding",
    desc: "Obtain high-ticket capital immediately to address critical healthcare expenses or unforeseen financial requirements.",
    badge: "High Liquidity",
    color: "from-amber-500 to-orange-600",
    bg: "bg-amber-50 text-amber-700 border-amber-100"
  },
]

const steps = [
  { number: "01", title: "Property Valuation", desc: "Submit basic property papers and ownership details to assess maximum loan-to-value (LTV) eligibility." },
  { number: "02", title: "Application & Documentation", desc: "Provide income proofs, tax filings, and identity credentials alongside property deeds." },
  { number: "03", title: "Legal & Technical Clearance", desc: "Our specialists conduct thorough title deed checks, municipal compliance, and market evaluation." },
  { number: "04", title: "Quick Sanction & Disbursal", desc: "Upon final agreement execution, funds are directly credited to your designated bank account." },
]

const requirements = {
  eligibility: [
    "Age: 21 years to 65 years at the time of loan maturity",
    "Employment: Salaried professionals, self-employed individuals, business owners, and partners",
    "Property Type: Freehold residential or commercial properties with clear and marketable titles",
    "Credit Health: Strong financial background with a CIBIL score of 700 or above",
  ],
  documents: [
    "Identity & Address Proof (PAN Card, Passport, Voter ID)",
    "Income Proof (Last 2 years ITR, profit & loss statements, or salary slips)",
    "Bank Statements (Last 6 months reflecting regular transactions)",
    "Complete Property Documents (Title deed, approved building plan, tax receipts)",
  ]
}

const faqs = [
  {
    q: "Can I continue to use my property while the loan is active?",
    a: "Yes, absolutely. You retain absolute ownership and physical possession of your residential or commercial property throughout the loan tenure."
  },
  {
    q: "What is the maximum loan amount I can get against my property?",
    a: "You can typically secure up to 60% to 75% of the verified market value of your property, depending on internal credit guidelines."
  },
  {
    q: "How can I utilize the funds obtained from a Loan Against Property?",
    a: "LAP funds come with flexible end-use restrictions. You can use them for business expansion, personal expenses, or debt restructuring (speculative use excluded)."
  }
]

const stats = [
  
  { value: "75%", label: "Max LTV Ratio" },
  { value: "15 Yrs", label: "Longest Tenure" },
]

export default function LoanAgainstPropertyPage() {
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

      <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">
        
        {/* ========== HERO SECTION ========== */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
          <div className="blob bg-blue-200 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] -top-20 -left-20" />
          <div className="blob bg-indigo-200 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] top-1/3 -right-20" style={{ animationDelay: '-3s' }} />
          <div className="blob bg-teal-200 w-[200px] sm:w-[350px] h-[200px] sm:h-[350px] bottom-0 left-1/3" style={{ animationDelay: '-6s' }} />
          
          <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_30%,transparent_100%)] opacity-40" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 w-full">
            <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-6 md:space-y-8 animate-fade-up">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[11px] sm:text-xs font-bold uppercase tracking-wider shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-blue-500" /> 
                  High-Value Asset Backing
                </div>
                
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-slate-900">
                  Unlock Your Property's{" "}
                  <span className="text-gradient-blue">True Potential</span>
                </h1>
                
                <p className="text-slate-500 text-base sm:text-xl max-w-2xl leading-relaxed">
                  Leverage residential or commercial property value to secure high-ticket funding up to ₹10 Crores with competitive interest rates starting at 9.25% p.a.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button size="lg" className="btn-magnetic bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold px-8 h-12 sm:h-14 rounded-2xl shadow-xl shadow-blue-500/25 text-base w-full sm:w-auto" asChild>
                    <Link href="/contact" className="flex items-center justify-center gap-2">
                      <MousePointerClick className="w-5 h-5" />
                      Apply For LAP
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="h-12 sm:h-14 rounded-2xl px-6 border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold shadow-sm w-full sm:w-auto" asChild>
                    <Link href="/emi-calculator" className="flex items-center justify-center gap-2">
                      <Calculator className="w-5 h-5" /> 
                      Calculate EMI
                    </Link>
                  </Button>
                </div>

                <div className="flex items-center gap-4 sm:gap-6 pt-2">
                  <div className="flex -space-x-3">
                    {[1,2,3,4].map((i) => (
                      <div key={i} className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 border-2 border-white flex items-center justify-center text-xs font-bold text-blue-700 shadow-sm">
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      {[1,2,3,4,5].map((i) => (
                        <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-400 mt-0.5">Trusted by Property Owners</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 perspective-1000 mt-6 lg:mt-0">
                <div className="relative preserve-3d animate-float">
                  <div className="relative glass-white rounded-3xl p-6 sm:p-8 shadow-2xl shadow-slate-200/50 border border-white/60">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-3xl" />
                    
                    <div className="relative">
                      <div className="flex items-center justify-between mb-4 sm:mb-6">
                        <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Asset Monetization</span>
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">Flexible End-Use</h3>
                      <p className="text-xs sm:text-sm text-slate-500 mb-4 sm:mb-6">Fulfill broad personal or commercial liquidity requirements while maintaining property ownership.</p>
                      
                      <div className="space-y-2.5 sm:space-y-3 pt-4 border-t border-slate-100">
                        {[
                          "High LTV up to 75% of Valuation",
                          "Extended Repayment Tenure up to 15 Years",
                          "Simplified Doorstep Documentation"
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-600">
                            <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold shrink-0">✓</div>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-5 sm:mt-6 pt-4 border-t border-slate-100">
                        <div className="flex justify-between items-center">
                          <span className="text-xs sm:text-sm text-slate-500 font-medium">Max Funding</span>
                          <span className="text-base sm:text-lg font-bold text-slate-900">₹10 Crores</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-blue-100/60 to-indigo-100/60 rounded-3xl border border-white/40 -z-10 animate-float-slow hidden sm:block" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== STATS BAR ========== */}
        <section className="relative -mt-10 sm:-mt-16 z-10 px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="group bg-white border border-slate-100 rounded-2xl p-4 sm:p-6 text-center shadow-lg shadow-slate-100/50 card-lift hover:border-blue-100"
                >
                  <p className="text-2xl sm:text-4xl font-black text-gradient-blue mb-1">{stat.value}</p>
                  <p className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider font-semibold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== HIGHLIGHTS ========== */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {highlights.map((item, idx) => {
              const Icon = item.icon
              return (
                <div 
                  key={idx} 
                  className="group bg-white border border-slate-100 rounded-2xl p-5 sm:p-6 card-lift hover:border-blue-100 shadow-sm shadow-slate-100/30"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  </div>
                  <p className="text-[11px] sm:text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="text-xl sm:text-2xl font-black text-slate-900 mb-1">{item.value}</p>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* ========== MAIN CONTENT ========== */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            
            <div className="lg:col-span-8 space-y-12 sm:space-y-16">
              
              <div>
                <div className="mb-6 sm:mb-8">
                  <span className="text-blue-600 font-bold text-xs sm:text-sm tracking-wider uppercase">Borrowing Objectives</span>
                  <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mt-2">Tailored Loan Against Property Uses</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  {loanCategories.map((category, idx) => (
                    <div 
                      key={idx} 
                      className="group bg-white border border-slate-100 rounded-2xl p-5 sm:p-6 hover:border-blue-200 transition-all duration-500 card-lift shadow-sm shadow-slate-100/30 overflow-hidden relative"
                    >
                      <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-50 rounded-full blur-2xl group-hover:bg-blue-100 transition-colors duration-500" />
                      
                      <div className="relative">
                        <div className="flex items-center justify-between mb-3 sm:mb-4">
                          <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300`}>
                            <Landmark className="w-5 h-5 sm:w-6 sm:h-6" />
                          </div>
                          <span className={`text-[10px] sm:text-xs font-bold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border ${category.bg}`}>
                            {category.badge}
                          </span>
                        </div>
                        <h3 className="font-bold text-slate-900 text-lg sm:text-xl mb-2 sm:mb-3 group-hover:text-blue-700 transition-colors">{category.title}</h3>
                        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{category.desc}</p>
                        
                        <div className="mt-4 flex items-center gap-2 text-blue-600 text-xs sm:text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                          Learn More <ChevronRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="mb-6 sm:mb-8">
                  <span className="text-blue-600 font-bold text-xs sm:text-sm tracking-wider uppercase">Streamlined Journey</span>
                  <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mt-2">4 Easy Steps to Unlock Your Funds</h2>
                </div>
                
                <div className="relative">
                  <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-gradient-to-b from-blue-200 via-indigo-200 to-purple-200 hidden sm:block" />
                  
                  <div className="space-y-4 sm:space-y-6">
                    {steps.map((step, idx) => (
                      <div key={step.number} className="group relative flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
                        <div className="relative z-10 shrink-0">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-black text-lg sm:text-xl flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border-2 border-white">
                            {step.number}
                          </div>
                        </div>
                        
                        <div className="flex-1 bg-white border border-slate-100 rounded-2xl p-5 sm:p-6 group-hover:border-blue-200 transition-all duration-500 card-lift shadow-sm shadow-slate-100/30 w-full">
                          <h4 className="font-bold text-slate-900 text-base sm:text-lg mb-1.5 sm:mb-2 group-hover:text-blue-700 transition-colors">{step.title}</h4>
                          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-sm shadow-slate-100/30 hover:border-blue-100 transition-all duration-500">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 sm:mb-6 flex items-center gap-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-md shadow-blue-500/20">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    Eligibility Criteria
                  </h3>
                  <ul className="space-y-3 sm:space-y-4">
                    {requirements.eligibility.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600 pb-3 sm:pb-4 border-b border-slate-50 last:border-0 last:pb-0 group">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 mt-1.5 sm:mt-2 shrink-0 group-hover:scale-150 transition-transform" />
                        <span className="group-hover:text-slate-900 transition-colors font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-sm shadow-slate-100/30 hover:border-blue-100 transition-all duration-500">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 sm:mb-6 flex items-center gap-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-md shadow-purple-500/20">
                      <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    Required Documents
                  </h3>
                  <ul className="space-y-3 sm:space-y-4">
                    {requirements.documents.map((doc, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600 pb-3 sm:pb-4 border-b border-slate-50 last:border-0 last:pb-0 group">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mt-1.5 sm:mt-2 shrink-0 group-hover:scale-150 transition-transform" />
                        <span className="group-hover:text-slate-900 transition-colors font-medium">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-10 shadow-sm shadow-slate-100/30">
                <h2 className="text-xl sm:text-3xl font-black text-slate-900 mb-6 sm:mb-8 flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-md shadow-blue-500/20">
                    <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq, idx) => (
                    <div 
                      key={idx} 
                      className="group bg-slate-50 border border-slate-100 rounded-2xl p-5 sm:p-6 hover:bg-white hover:border-blue-200 transition-all duration-500 cursor-pointer shadow-sm shadow-transparent hover:shadow-slate-100/50"
                    >
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-2 sm:mb-3 flex items-start sm:items-center gap-3 group-hover:text-blue-700 transition-colors">
                        <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center text-xs sm:text-sm font-black shrink-0">
                          Q{idx + 1}
                        </span>
                        <span>{faq.q}</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed pl-0 sm:pl-11">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            <div className="lg:col-span-4 space-y-6">
              
              <div className="lg:sticky lg:top-24 space-y-6">
                <div className="relative bg-gradient-to-br from-slate-900 to-indigo-950 border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-slate-900/20 overflow-hidden animate-pulse-soft">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10" />
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />
                  
                  <div className="relative">
                    <h3 className="text-xl sm:text-2xl font-black text-white mb-2 sm:mb-3">Unlock Up to ₹10 Crores</h3>
                    <p className="text-slate-300 text-xs sm:text-sm mb-6 sm:mb-8 leading-relaxed">
                      Get a high-value loan against your residential or commercial property with flexible end-use and long repayment tenures.
                    </p>
                    
                    <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                      {[
                        { icon: Home, text: "Residential & Commercial Both" },
                        { icon: TrendingUp, text: "LTV Up to 75%" },
                        { icon: PhoneCall, text: "Dedicated Relationship Manager" },
                        { icon: Shield, text: "Retain Property Ownership" },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                            <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" />
                          </div>
                          <span>{item.text}</span>
                        </div>
                      ))}
                    </div>

                    <Button size="lg" className="w-full bg-white hover:bg-slate-100 text-slate-900 font-bold h-12 sm:h-14 rounded-xl btn-magnetic text-sm sm:text-base" asChild>
                      <Link href="/contact" className="flex items-center justify-center gap-2">
                        Get Free Valuation <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </Link>
                    </Button>

                    <p className="text-center text-[11px] sm:text-xs text-slate-500 mt-3 sm:mt-4">
                      No impact on credit score • Doorstep service
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 text-center shadow-sm shadow-slate-100/30 hover:border-blue-100 transition-all duration-500 group">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center mx-auto mb-4 sm:mb-5 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                    <Calculator className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-slate-950 text-lg sm:text-xl mb-2 sm:mb-3">Property EMI Calculator</h4>
                  <p className="text-xs sm:text-sm text-slate-500 mb-5 sm:mb-6 leading-relaxed">Estimate your monthly outgo across different tenures and loan amounts.</p>
                  <Button variant="outline" className="w-full h-11 sm:h-12 rounded-xl border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold btn-magnetic text-xs sm:text-sm" asChild>
                    <Link href="/emi-calculator" className="flex items-center justify-center gap-2">
                      Calculate Now <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
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