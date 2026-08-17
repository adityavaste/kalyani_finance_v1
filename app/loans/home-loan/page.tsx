import { Metadata } from "next"
export { metadata } from "./metadata";
import schemas from "./schema";
import { 
  Home, CheckCircle, ShieldCheck, Clock, 
  FileText, Calculator, Percent, Sparkles, Building2, 
  ArrowRight, PhoneCall, HelpCircle,
  TrendingUp, Award, Zap, ChevronRight, Star,
  MousePointerClick, Landmark, BadgeCheck, TrendingDown
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const loanHighlights = [
  { label: "Interest Rate", value: "8.50% p.a.*", desc: "Lowest rates in the market", icon: Percent },
  { label: "Max Loan Amount", value: "Up to ₹5 Cr", desc: "For plots, flats & construction", icon: Landmark },
  { label: "Max Tenure", value: "30 Years", desc: "Extended repayment plans", icon: Clock },
  { label: "Processing Fee", value: "Up to 0.5%", desc: "Transparent & minimal fees", icon: FileText },
]

const loanTypes = [
  { title: "Home Purchase Loan", desc: "For buying ready-to-move, under-construction, or resale properties.", icon: Home },
  { title: "Home Construction Loan", desc: "Financing specifically for building a house on your own plot of land.", icon: Building2 },
  { title: "Home Improvement Loan", desc: "Upgrade, renovate, or remodel your existing living space effortlessly.", icon: TrendingUp },
  { title: "Home Loan Balance Transfer", desc: "Switch your current expensive loan to us for lower rates and top-up cash.", icon: Zap },
]

const eligibilityCriteria = [
  { title: "Age Requirement", detail: "21 years to 65 years at the time of maturity." },
  { title: "Employment Type", detail: "Salaried professionals or Self-employed business owners." },
  { title: "Income Stability", detail: "Minimum stable monthly income of ₹25,000+." },
  { title: "Credit Score", detail: "Preferred CIBIL score of 750 or above for fast processing." },
]

const documentsRequired = [
  "Identity Proof (PAN Card, Aadhaar Card, Voter ID)",
  "Address Proof (Utility Bill, Passport, Rental Agreement)",
  "Income Proof (Last 3 months' salary slips & Form 16 / 2 years ITR)",
  "Bank Statements (Last 6 months showing salary or business credits)",
  "Property Papers (Sale deed, approved layout, building permission)",
]

const loanSteps = [
  { step: "01", title: "Apply Online", desc: "Submit your basic loan requirements and personal details in under 2 minutes." },
  { step: "02", title: "Advisor Call & Document Pickup", desc: "Our home loan expert connects with you and collects documents at your doorstep." },
  { step: "03", title: "Credit Evaluation & Sanction", desc: "Bank reviews your file and issues an official sanction letter with customized terms." },
  { step: "04", title: "Disbursal", desc: "Funds are safely transferred to the builder, seller, or your account as per agreement." },
]

const faqs = [
  { q: "What is the minimum CIBIL score required for a home loan?", a: "A CIBIL score of 750 and above is ideal for securing the lowest interest rates. However, scores between 700-750 are also accepted with slight adjustments." },
  { q: "Can I prepay my home loan without penalty?", a: "Yes, floating-rate home loans for individuals do not carry any prepayment penalties as per RBI guidelines." },
  { q: "How much loan amount can I typically get?", a: "Banks generally finance up to 75% to 90% of the total property value, depending on your income and property cost." },
]

const stats = [
  { value: "₹2,500Cr+", label: "Loans Disbursed" },
  { value: "50,000+", label: "Happy Families" },
  { value: "4.9/5", label: "Customer Rating" },
  { value: "15+", label: "Bank Partners" },
]

export default function HomeLoanPage() {
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
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white pt-20 lg:pt-0">
          {/* Soft gradient blobs */}
          <div className="blob bg-blue-300 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] -top-20 -left-20" />
          <div className="blob bg-indigo-200 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] top-1/2 -right-20" style={{ animationDelay: '-3s' }} />
          <div className="blob bg-purple-200 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bottom-0 left-1/3" style={{ animationDelay: '-6s' }} />
          
          {/* Dot pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_30%,transparent_100%)] opacity-40" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 w-full">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider shadow-sm mx-auto lg:mx-0">
                  <Sparkles className="w-3.5 h-3.5 text-blue-500" /> 
                  Trusted Housing Finance Partner
                </div>
                
                <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.15] sm:leading-[1.1] text-slate-900">
                  Build or Buy Your{" "}
                  <span className="text-gradient-blue">Dream Home</span>{" "}
                  With Ease
                </h1>
                
                <p className="text-slate-500 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Unlock competitive interest rates, seamless digital documentation, and doorstep guidance tailored to make your property ownership journey completely stress-free.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Button size="lg" className="w-full sm:w-auto btn-magnetic bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold px-8 h-14 rounded-2xl shadow-xl shadow-blue-500/25 text-base" asChild>
                    <Link href="/contact" className="flex items-center justify-center gap-2">
                      <MousePointerClick className="w-5 h-5" />
                      Apply For Home Loan
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 rounded-2xl px-6 border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold shadow-sm" asChild>
                    <Link href="/emi-calculator" className="flex items-center justify-center gap-2">
                      <Calculator className="w-5 h-5" /> 
                      Calculate EMI
                    </Link>
                  </Button>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                  <div className="flex -space-x-3">
                    {[1,2,3,4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 border-2 border-white flex items-center justify-center text-xs font-bold text-blue-700 shadow-sm">
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="flex items-center justify-center sm:justify-start gap-1">
                      {[1,2,3,4,5].map((i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-sm text-slate-400 mt-0.5">Trusted by 50,000+ Homeowners</p>
                  </div>
                </div>
              </div>

              {/* Right - Floating Glass Card */}
              <div className="lg:col-span-5 perspective-1000 mt-6 lg:mt-0">
                <div className="relative preserve-3d animate-float">
                  {/* Main Card */}
                  <div className="relative glass-white rounded-3xl p-6 sm:p-8 shadow-2xl shadow-slate-200/50 border border-white/60">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-3xl" />
                    
                    <div className="relative">
                      <div className="flex items-center justify-between mb-6 sm:mb-8">
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900">Home Loan Snapshot</h3>
                        <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                          <Building2 className="w-5 h-5 text-blue-600" />
                        </div>
                      </div>
                      
                      <div className="space-y-4 sm:space-y-5">
                        {[
                          { label: "Interest Starting", value: "8.50% p.a.", color: "text-emerald-600" },
                          { label: "Maximum Funding", value: "Up to ₹5 Cr", color: "text-slate-900" },
                          { label: "Max Tenure", value: "30 Years", color: "text-slate-900" },
                        ].map((item, idx) => (
                          <div key={idx} className="flex justify-between items-center pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                            <span className="text-sm text-slate-500 font-medium">{item.label}</span>
                            <span className={`text-lg sm:text-xl font-bold ${item.color}`}>{item.value}</span>
                          </div>
                        ))}
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-slate-500 font-medium">Approval Time</span>
                          <span className="text-xs sm:text-sm font-bold text-emerald-600 bg-emerald-50 px-3 sm:px-4 py-1.5 rounded-full border border-emerald-100">
                            48 Hours*
                          </span>
                        </div>
                      </div>
                      
                      <Button className="w-full mt-6 sm:mt-8 bg-slate-900 hover:bg-slate-800 text-white font-bold h-12 rounded-xl btn-magnetic" asChild>
                        <Link href="/contact">Check Eligibility Instantly</Link>
                      </Button>
                    </div>
                  </div>
                  
                  {/* Decorative depth cards */}
                  <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-blue-100/60 to-indigo-100/60 rounded-3xl border border-white/40 -z-10 hidden sm:block animate-float-slow" />
                  <div className="absolute -top-8 -right-8 w-full h-full bg-gradient-to-br from-indigo-50/40 to-blue-50/40 rounded-3xl border border-white/30 -z-20 hidden sm:block" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== STATS BAR ========== */}
        <section className="relative -mt-8 sm:-mt-16 z-10 px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="group bg-white border border-slate-100 rounded-2xl p-4 sm:p-6 text-center shadow-lg shadow-slate-100/50 card-lift hover:border-blue-100"
                >
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-gradient-blue mb-1">{stat.value}</p>
                  <p className="text-[11px] sm:text-xs text-slate-500 uppercase tracking-wider font-semibold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== HIGHLIGHTS ========== */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {loanHighlights.map((item, idx) => {
              const Icon = item.icon
              return (
                <div 
                  key={idx} 
                  className="group bg-white border border-slate-100 rounded-2xl p-5 sm:p-6 card-lift hover:border-blue-100 shadow-sm shadow-slate-100/30"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="text-xl sm:text-2xl font-black text-slate-900 mb-1">{item.value}</p>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* ========== MAIN CONTENT ========== */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Column */}
            <div className="lg:col-span-8 space-y-12 sm:space-y-16">
              
              {/* Loan Types */}
              <div>
                <div className="mb-6 sm:mb-8">
                  <span className="text-blue-600 font-bold text-sm tracking-wider uppercase">Customized Options</span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 mt-2">Types of Home Loans We Offer</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {loanTypes.map((type, idx) => {
                    const Icon = type.icon
                    return (
                      <div 
                        key={idx} 
                        className="group bg-white border border-slate-100 rounded-2xl p-5 sm:p-6 hover:border-blue-200 transition-all duration-500 card-lift shadow-sm shadow-slate-100/30 overflow-hidden relative"
                      >
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-50 rounded-full blur-2xl group-hover:bg-blue-100 transition-colors duration-500" />
                        
                        <div className="relative">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center mb-4 sm:mb-5 shadow-lg shadow-blue-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                            <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                          </div>
                          <h3 className="font-bold text-slate-900 text-lg sm:text-xl mb-2 sm:mb-3 group-hover:text-blue-700 transition-colors">{type.title}</h3>
                          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{type.desc}</p>
                          
                          <div className="mt-4 flex items-center gap-2 text-blue-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                            Learn More <ChevronRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Process Steps */}
              <div className="relative">
                <div className="mb-6 sm:mb-8">
                  <span className="text-blue-600 font-bold text-sm tracking-wider uppercase">How It Works</span>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 mt-2">Simple 4-Step Loan Process</h2>
                </div>
                
                <div className="relative">
                  {/* Connection Line */}
                  <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-gradient-to-b from-blue-200 via-indigo-200 to-purple-200 hidden sm:block" />
                  
                  <div className="space-y-4 sm:space-y-6">
                    {loanSteps.map((step, idx) => (
                      <div key={step.step} className="group relative flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
                        <div className="relative z-10 shrink-0">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-black text-lg sm:text-xl flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border-2 border-white">
                            {step.step}
                          </div>
                        </div>
                        
                        <div className="flex-1 bg-white border border-slate-100 rounded-2xl p-5 sm:p-6 group-hover:border-blue-200 transition-all duration-500 card-lift shadow-sm shadow-slate-100/30 w-full">
                          <h4 className="font-bold text-slate-900 text-base sm:text-lg mb-2 group-hover:text-blue-700 transition-colors">{step.title}</h4>
                          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Eligibility & Documents */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-sm shadow-slate-100/30 hover:border-blue-100 transition-all duration-500">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-md shadow-blue-500/20">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    Eligibility Criteria
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

                <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-sm shadow-slate-100/30 hover:border-blue-100 transition-all duration-500">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-md shadow-purple-500/20">
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    Required Documents
                  </h3>
                  <ul className="space-y-3">
                    {documentsRequired.map((doc, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600 group">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 mt-1.5 sm:mt-2 shrink-0 group-hover:scale-150 transition-transform" />
                        <span className="group-hover:text-slate-900 transition-colors">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* FAQ */}
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

            {/* Right Sidebar - Sticky CTA */}
            <div className="lg:col-span-4 space-y-6 mt-8 lg:mt-0">
              
              <div className="lg:sticky lg:top-24 space-y-6">
                {/* Main CTA */}
                <div className="relative bg-gradient-to-br from-slate-900 to-indigo-950 border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-slate-900/20 overflow-hidden animate-pulse-soft">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10" />
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl" />
                  
                  <div className="relative">
                    <h3 className="text-xl sm:text-2xl font-black text-white mb-3">Ready to Move In?</h3>
                    <p className="text-slate-300 text-xs sm:text-sm mb-6 sm:mb-8 leading-relaxed">
                      Connect with our certified mortgage specialists for a hassle-free loan experience and custom interest offers.
                    </p>
                    
                    <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                      {[
                        { icon: ShieldCheck, text: "100% Secure & Paperless Processing" },
                        { icon: Clock, text: "Quick 48-Hour Sanctions" },
                        { icon: PhoneCall, text: "Dedicated Personal Loan Advisor" },
                        { icon: Award, text: "Lowest Interest Rate Guarantee" },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                            <item.icon className="w-4 h-4 text-blue-400" />
                          </div>
                          <span>{item.text}</span>
                        </div>
                      ))}
                    </div>

                    <Button size="lg" className="w-full bg-white hover:bg-slate-100 text-slate-900 font-bold h-14 rounded-xl btn-magnetic text-base" asChild>
                      <Link href="/contact" className="flex items-center justify-center gap-2">
                        Enquire Now <ArrowRight className="w-5 h-5" />
                      </Link>
                    </Button>

                    <p className="text-center text-xs text-slate-500 mt-4">
                      No impact on credit score
                    </p>
                  </div>
                </div>

                {/* Calculator Card */}
                <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 text-center shadow-sm shadow-slate-100/30 hover:border-blue-100 transition-all duration-500 group">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center mx-auto mb-4 sm:mb-5 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                    <Calculator className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-lg sm:text-xl mb-2 sm:mb-3">Calculate Your Monthly EMI</h4>
                  <p className="text-xs sm:text-sm text-slate-500 mb-6 leading-relaxed">Plan your monthly budget with precision using our advanced EMI tool.</p>
                  <Button variant="outline" className="w-full h-12 rounded-xl border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold btn-magnetic" asChild>
                    <Link href="/emi-calculator" className="flex items-center justify-center gap-2">
                      Open Calculator <ArrowRight className="w-4 h-4" />
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