import { Metadata } from "next"
export { metadata } from "./metadata";
import schemas from "./schema";
import Link from "next/link"
import { 
  GraduationCap, Shield, Zap, FileText, Calculator, 
  CheckCircle2, Clock, Award, Banknote, Sparkles, 
  HelpCircle, ArrowRight, PhoneCall, BadgeCheck, 
  ChevronRight, Star, MousePointerClick, Globe, BookOpen
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const highlights = [
  { icon: Banknote, label: "Interest Rate", value: "9.25% p.a.*", desc: "Affordable rates with tax benefits" },
  { icon: GraduationCap, label: "Loan Amount", value: "Up to ₹1.5 Cr", desc: "For domestic & international studies" },
  { icon: Clock, label: "Sanction Time", value: "24 Hours", desc: "Fast pre-visa loan approvals" },
  { icon: Award, label: "Moratorium", value: "Course + 6 Mo", desc: "Repayment starts after graduation" },
]

const loanCategories = [
  {
    title: "Study Abroad Loans",
    desc: "Comprehensive funding covering tuition fees, living expenses, airfare, and visa costs for top universities worldwide.",
    badge: "Global Reach",
    color: "from-blue-600 to-indigo-600",
    bg: "bg-blue-50 text-blue-700 border-blue-100"
  },
  {
    title: "Domestic Higher Education",
    desc: "Specialized financial backing for premier institutions like IITs, IIMs, NITs, and medical colleges across India.",
    badge: "Top Institutions",
    color: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50 text-emerald-700 border-emerald-100"
  },
  {
    title: "Vocational & Skill Courses",
    desc: "Short-term technical certificate courses and professional training programs designed for skill enhancement.",
    badge: "Skill Development",
    color: "from-amber-500 to-orange-600",
    bg: "bg-amber-50 text-amber-700 border-amber-100"
  },
  {
    title: "Executive & Management Programs",
    desc: "Tailored funding options for working professionals pursuing executive MBAs and specialized postgraduate degrees.",
    badge: "Career Growth",
    color: "from-purple-600 to-pink-600",
    bg: "bg-purple-50 text-purple-700 border-purple-100"
  },
]

const steps = [
  { number: "01", title: "Course & University Assessment", desc: "Share your chosen course, admission status, and financial estimation to check maximum loan eligibility." },
  { number: "02", title: "Digital Documentation", desc: "Upload academic records, co-applicant financial papers, and admission offer letters securely." },
  { number: "03", title: "Sanction & Visa Support", desc: "Receive your official loan sanction letter required for embassy visa processing and university submission." },
  { number: "04", title: "Direct University Disbursal", desc: "Funds are disbursed directly to the educational institution in installments as per fee schedules." },
]

const requirements = {
  eligibility: [
    "Nationality: Indian citizen with a confirmed admission offer from a recognized university",
    "Academic Record: Strong academic track record in previous qualifying examinations",
    "Co-applicant: Mandatory co-applicant (parent, guardian, or spouse) with a steady income source",
    "Credit Health: Clean repayment track record with an acceptable credit score",
  ],
  documents: [
    "Identity & Address Proof of student and co-applicant (PAN, [Aadhaar Redacted], Passport)",
    "Academic Records (Mark sheets from 10th grade onwards, entrance exam scorecards)",
    "Admission Letter / Offer Letter with complete fee structure from the university",
    "Income Proof of co-applicant (Last 3 months salary slips, ITR, or business proofs)",
  ]
}

const faqs = [
  {
    q: "What expenses are covered under the education loan?",
    a: "Our education loans cover 100% of expenses, including tuition fees, hostel charges, books, equipment, laptops, air travel, and examination fees."
  },
  {
    q: "When does the actual loan repayment start?",
    a: "Repayment begins after the moratorium period, which typically spans the entire duration of your course plus an additional 6 months (or 6 months after securing employment, whichever is earlier)."
  },
  {
    q: "Do I need to provide collateral for studying abroad?",
    a: "We offer both unsecured loans (based on academic profile and co-applicant income) and secured loans (backed by property or fixed deposits) depending on the country and university."
  }
]

const stats = [
  { value: "₹1,200Cr+", label: "Education Loans Given" },
  { value: "15,000+", label: "Students Funded" },
  { value: "25+", label: "Countries Covered" },
  { value: "100%", label: "Expense Coverage" },
]

export default function EducationLoanPage() {
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
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white px-4 sm:px-6 lg:px-8">
          {/* Soft gradient blobs */}
          <div className="absolute blob bg-blue-200 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] -top-20 -left-20 pointer-events-none" />
          <div className="absolute blob bg-indigo-200 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] top-1/3 -right-20 pointer-events-none" style={{ animationDelay: '-3s' }} />
          <div className="absolute blob bg-cyan-200 w-[200px] sm:w-[350px] h-[200px] sm:h-[350px] bottom-0 left-1/3 pointer-events-none" style={{ animationDelay: '-6s' }} />
          
          {/* Dot pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_30%,transparent_100%)] opacity-40" />
          
          <div className="relative max-w-7xl mx-auto py-12 sm:py-20 w-full">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-6 sm:space-y-8 animate-fade-up text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider shadow-sm mx-auto lg:mx-0">
                  <Sparkles className="w-3.5 h-3.5 text-blue-500" /> 
                  Global Academic Funding
                </div>
                
                <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.15] text-slate-900">
                  Invest in Your{" "}
                  <span className="text-gradient-blue">Future</span>{" "}
                  With Smart Funding
                </h1>
                
                <p className="text-slate-500 text-base sm:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Chase your global university dreams with funding up to ₹1.5 Crores, competitive rates starting at 9.25% p.a., and flexible moratorium repayment options.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                  <Button size="lg" className="w-full sm:w-auto btn-magnetic bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold px-8 h-14 rounded-2xl shadow-xl shadow-blue-500/25 text-base" asChild>
                    <Link href="/contact" className="flex items-center justify-center gap-2">
                      <MousePointerClick className="w-5 h-5" />
                      Apply For Education Loan
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
                    <p className="text-sm text-slate-400 mt-0.5">Trusted by 15,000+ Students & Parents</p>
                  </div>
                </div>
              </div>

              {/* Right - Floating Glass Card */}
              <div className="lg:col-span-5 perspective-1000 mt-6 lg:mt-0">
                <div className="relative preserve-3d animate-float">
                  {/* Main Card */}
                  <div className="relative glass-white rounded-3xl p-6 sm:p-8 shadow-2xl shadow-slate-200/50 border border-white/60">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-3xl pointer-events-none" />
                    
                    <div className="relative">
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Student First Plan</span>
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">Moratorium Benefit</h3>
                      <p className="text-sm text-slate-500 mb-6">Focus entirely on your studies without immediate financial pressure during course years.</p>
                      
                      <div className="space-y-3 pt-4 border-t border-slate-100">
                        {[
                          "100% Tuition & Living Expense Coverage",
                          "Pre-Visa Sanction Support for Embassies",
                          "Tax Benefits under Section 80E"
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center gap-3 text-sm text-slate-600">
                            <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold shrink-0">✓</div>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 pt-4 border-t border-slate-100">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-slate-500 font-medium">Max Funding</span>
                          <span className="text-lg font-bold text-slate-900">₹1.5 Crores</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative depth cards */}
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
                  className="group bg-white border border-slate-100 rounded-2xl p-6 card-lift hover:border-blue-100 shadow-sm shadow-slate-100/30"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-blue-600" />
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
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Column */}
            <div className="lg:col-span-8 space-y-12 sm:space-y-16">
              
              {/* Loan Categories */}
              <div>
                <div className="mb-6 sm:mb-8 text-center sm:text-left">
                  <span className="text-blue-600 font-bold text-sm tracking-wider uppercase">Study Programs</span>
                  <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mt-2">Specialized Education Loan Categories</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {loanCategories.map((category, idx) => (
                    <div 
                      key={idx} 
                      className="group bg-white border border-slate-100 rounded-2xl p-6 hover:border-blue-200 transition-all duration-500 card-lift shadow-sm shadow-slate-100/30 overflow-hidden relative"
                    >
                      <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-50 rounded-full blur-2xl group-hover:bg-blue-100 transition-colors duration-500 pointer-events-none" />
                      
                      <div className="relative">
                        <div className="flex items-center justify-between mb-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300`}>
                            <BookOpen className="w-6 h-6" />
                          </div>
                          <span className={`text-xs font-bold px-3 py-1 rounded-full border ${category.bg}`}>
                            {category.badge}
                          </span>
                        </div>
                        <h3 className="font-bold text-slate-900 text-xl mb-3 group-hover:text-blue-700 transition-colors">{category.title}</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">{category.desc}</p>
                        
                        <div className="mt-4 flex items-center gap-2 text-blue-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                          Check Eligibility <ChevronRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process Steps */}
              <div className="relative">
                <div className="mb-6 sm:mb-8 text-center sm:text-left">
                  <span className="text-blue-600 font-bold text-sm tracking-wider uppercase">Application Process</span>
                  <h2 className="text-2xl sm:text-4xl font-black text-slate-900 mt-2">4 Easy Steps to Secure Funding</h2>
                </div>
                
                <div className="relative">
                  {/* Connection Line */}
                  <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-gradient-to-b from-blue-200 via-indigo-200 to-purple-200 hidden sm:block" />
                  
                  <div className="space-y-4 sm:space-y-6">
                    {steps.map((step, idx) => (
                      <div key={step.number} className="group relative flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
                        <div className="relative z-10 shrink-0">
                          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-black text-lg sm:text-xl flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border-2 border-white">
                            {step.number}
                          </div>
                        </div>
                        
                        <div className="flex-1 w-full bg-white border border-slate-100 rounded-2xl p-6 group-hover:border-blue-200 transition-all duration-500 card-lift shadow-sm shadow-slate-100/30">
                          <h4 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-blue-700 transition-colors">{step.title}</h4>
                          <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Eligibility & Documents */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-sm shadow-slate-100/30 hover:border-blue-100 transition-all duration-500">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-md shadow-blue-500/20 shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    Eligibility Criteria
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

                <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-sm shadow-slate-100/30 hover:border-blue-100 transition-all duration-500">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-md shadow-purple-500/20 shrink-0">
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
              <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-10 shadow-sm shadow-slate-100/30">
                <h2 className="text-xl sm:text-3xl font-black text-slate-900 mb-6 sm:mb-8 flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-md shadow-blue-500/20 shrink-0">
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
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-3 flex items-start sm:items-center gap-3 group-hover:text-blue-700 transition-colors">
                        <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center text-xs sm:text-sm font-black shrink-0 mt-0.5 sm:mt-0">
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
                <div className="relative bg-gradient-to-br from-slate-900 to-indigo-950 border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-slate-900/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10 pointer-events-none" />
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
                  
                  <div className="relative">
                    <h3 className="text-2xl font-black text-white mb-3">Secure Your Child's Future</h3>
                    <p className="text-slate-300 text-sm mb-8 leading-relaxed">
                      Get pre-approved education loan sanction letters for university admissions and visa processing.
                    </p>
                    
                    <div className="space-y-4 mb-8">
                      {[
                        { icon: Globe, text: "100% Expense Coverage" },
                        { icon: FileText, text: "Pre-Visa Sanction Letter" },
                        { icon: Award, text: "Tax Benefits u/s 80E" },
                        { icon: Shield, text: "Flexible Co-Applicant Options" },
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
                        Apply Now <ArrowRight className="w-5 h-5" />
                      </Link>
                    </Button>

                    <p className="text-center text-xs text-slate-500 mt-4">
                      No collateral required for loans under ₹7.5L
                    </p>
                  </div>
                </div>

                {/* Calculator Card */}
                <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 text-center shadow-sm shadow-slate-100/30 hover:border-blue-100 transition-all duration-500 group">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                    <Calculator className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-xl mb-3">Education EMI Calculator</h4>
                  <p className="text-sm text-slate-500 mb-6 leading-relaxed">Plan your repayment during and after the moratorium period.</p>
                  <Button variant="outline" className="w-full h-12 rounded-xl border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold btn-magnetic" asChild>
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