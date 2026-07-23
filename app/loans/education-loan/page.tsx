import { Metadata } from "next"
import Link from "next/link"
import { 
  GraduationCap, Shield, Zap, FileText, Calculator, 
  ArrowLeft, CheckCircle2, 
  Clock, Award, Banknote, Sparkles, HelpCircle 
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { metadata } from "./metadata";
import schemas from "./schema";


const highlights = [
  { icon: Banknote, label: "Interest Rate", value: "9.25% p.a.*", desc: "Affordable rates with tax benefits", accent: "bg-emerald-50 text-emerald-600 border-emerald-100" },
  { icon: GraduationCap, label: "Loan Amount", value: "Up to ₹1.5 Crores", desc: "For domestic & international studies", accent: "bg-blue-50 text-blue-600 border-blue-100" },
  { icon: Clock, label: "Sanction Time", value: "24 Hours", desc: "Fast pre-visa loan approvals", accent: "bg-amber-50 text-amber-600 border-amber-100" },
  { icon: Award, label: "Moratorium Period", value: "Course + 6 Months", desc: "Repayment starts after graduation", accent: "bg-purple-50 text-purple-600 border-purple-100" },
]

const loanCategories = [
  {
    title: "Study Abroad Loans",
    desc: "Comprehensive funding covering tuition fees, living expenses, airfare, and visa costs for top universities worldwide.",
    badge: "Global Reach",
  },
  {
    title: "Domestic Higher Education",
    desc: "Specialized financial backing for premier institutions like IITs, IIMs, NITs, and medical colleges across India.",
    badge: "Top Institutions",
  },
  {
    title: "Vocational & Skill Courses",
    desc: "Short-term technical certificate courses and professional training programs designed for skill enhancement.",
    badge: "Skill Development",
  },
  {
    title: "Executive & Management Programs",
    desc: "Tailored funding options for working professionals pursuing executive MBAs and specialized postgraduate degrees.",
    badge: "Career Growth",
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

export default function EducationLoanPage() {
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

  
</>
      <div className="min-h-screen bg-slate-50/50 text-slate-900 pb-24 pt-20">
        
       

        {/* Hero Banner Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white py-20 lg:py-28 mx-4 sm:mx-6 lg:mx-8 rounded-3xl mb-12 shadow-xl">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" /> Global Academic Funding
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                  Invest in Your Future with an <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Education Loan</span>
                </h1>
                <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mb-8 leading-relaxed">
                  Chase your global university dreams with funding up to ₹1.5 Crores, competitive rates starting at 9.25% p.a., and flexible moratorium repayment options.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 h-12 rounded-xl shadow-lg shadow-blue-600/30 transition-all" asChild>
                    <Link href="/contact">Apply For Education Loan</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-slate-700 bg-slate-800/50 hover:bg-slate-800 text-white h-12 px-7 rounded-xl backdrop-blur-md transition-all font-semibold" asChild>
                    <Link href="/emi-calculator" className="flex items-center gap-2">
                      <Calculator className="w-4 h-4 text-blue-400" /> Calculate EMI
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Side Summary Card */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-md bg-slate-800/80 border border-slate-700/80 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Student First Plan</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Moratorium Benefit</h3>
                  <p className="text-sm text-slate-300 mb-6">Focus entirely on your studies without immediate financial pressure during course years.</p>
                  
                  <div className="space-y-3 pt-4 border-t border-slate-700">
                    <div className="flex items-center gap-3 text-sm text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold">✓</div>
                      <span>100% Tuition & Living Expense Coverage</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold">✓</div>
                      <span>Pre-Visa Sanction Support for Embassies</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold">✓</div>
                      <span>Tax Benefits under Section 80E</span>
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
            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">Study Programs</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">Specialized Education Loan Categories</h2>
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
              <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">Application Process</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">4 Easy Steps to Secure Funding</h2>
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
                <CheckCircle2 className="w-5 h-5 text-blue-600" /> Eligibility Criteria
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