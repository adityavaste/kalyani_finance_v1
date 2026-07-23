import { Metadata } from "next"
import Link from "next/link"
import { 
  ShieldCheck, Shield, Zap, FileText, Calculator, 
  ArrowLeft, CheckCircle2, 
  Clock, Award, HeartPulse, Sparkles, HelpCircle 
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
export { metadata } from "./metadata";
import schemas from "./schema";

const highlights = [
  { icon: ShieldCheck, label: "Starting Premium", value: "₹499/month*", desc: "Affordable protection for every budget", accent: "bg-emerald-50 text-emerald-600 border-emerald-100" },
  { icon: HeartPulse, label: "Life Cover", value: "Up to ₹5 Crores", desc: "Robust financial safety net for dependents", accent: "bg-blue-50 text-blue-600 border-blue-100" },
  { icon: Clock, label: "Claim Settlement", value: "98.5%", desc: "Reliable and hassle-free claim processing", accent: "bg-amber-50 text-amber-600 border-amber-100" },
  { icon: Award, label: "Policy Tenure", value: "Up to 99 Years", desc: "Long-term coverage and whole life benefits", accent: "bg-purple-50 text-purple-600 border-purple-100" },
]

const loanCategories = [
  {
    title: "Term Life Insurance",
    desc: "Pure protection plans providing maximum financial payout to your family in case of unforeseen eventualities at minimal premium rates.",
    badge: "Most Popular",
  },
  {
    title: "Whole Life Insurance",
    desc: "Comprehensive coverage extending up to 99 years of age, ensuring lifelong security and wealth accumulation for successors.",
    badge: "Lifelong Cover",
  },
  {
    title: "Unit Linked Insurance Plans (ULIP)",
    desc: "A unique dual-benefit structure combining market-linked investment growth with dedicated life insurance protection.",
    badge: "Wealth & Cover",
  },
  {
    title: "Child Education Protection Plan",
    desc: "Secure your child's academic future and milestone expenses against any uncertainties with guaranteed payouts.",
    badge: "Family Secure",
  },
]

const steps = [
  { number: "01", title: "Select Coverage Amount", desc: "Use our online calculator to determine the ideal life cover based on your income, liabilities, and family size." },
  { number: "02", title: "Complete Medical Declaration", desc: "Fill out a straightforward health and lifestyle questionnaire digitally without tedious paperwork." },
  { number: "03", title: "Instant Quote & Underwriting", desc: "Review customized premium quotations and complete quick underwriting verifications online." },
  { number: "04", title: "Policy Issuance", desc: "Make a secure digital payment and receive your official insurance policy document instantly via email." },
]

const requirements = {
  eligibility: [
    "Age: 18 years to 65 years at the time of policy inception",
    "Employment: Salaried professionals, self-employed individuals, and homemakers",
    "Health Status: Satisfactory medical screening based on chosen sum assured",
    "Residency: Indian citizens and valid resident visa holders",
  ],
  documents: [
    "Identity Proof (PAN Card, [Aadhaar Redacted], Passport)",
    "Address Proof (Utility bills, Voter ID, Rental agreement)",
    "Income Proof (Last 3 months salary slips or latest ITR for high covers)",
    "Medical examination reports (if required based on age and sum assured)",
  ]
}

const faqs = [
  {
    q: "What is the ideal life insurance cover amount I should choose?",
    a: "As a general rule of thumb, your life cover should be at least 10 to 15 times your annual income, plus provisions for outstanding debts and future family goals."
  },
  {
    q: "Are life insurance payouts taxable?",
    a: "Yes, death benefit payouts received by nominees are completely tax-free under Section 10(10D) of the Income Tax Act, subject to prevailing rules."
  },
  {
    q: "Is a medical check-up mandatory for buying a life insurance policy?",
    a: "Medical check-ups depend on your age, lifestyle habits (such as smoking), and the total sum assured selected. Many plans offer hassle-free onboarding without physical tests."
  }
]

export default function LifeInsurancePage() {
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

  {/* Your page content */}
</>
      <div className="min-h-screen bg-slate-50/50 text-slate-900 pb-24 pt-20">
        
      

        {/* Hero Banner Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white py-20 lg:py-28 mx-4 sm:mx-6 lg:mx-8 rounded-3xl mb-12 shadow-xl">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" /> Complete Family Protection
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                  Secure Your Family's Financial Future with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Life Insurance</span>
                </h1>
                <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mb-8 leading-relaxed">
                  Safeguard your loved ones against life's uncertainties with comprehensive coverage up to ₹5 Crores, high claim settlement ratios, and affordable premiums starting at ₹499/month.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 h-12 rounded-xl shadow-lg shadow-blue-600/30 transition-all" asChild>
                    <Link href="/contact">Get Life Cover Quote</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-slate-700 bg-slate-800/50 hover:bg-slate-800 text-white h-12 px-7 rounded-xl backdrop-blur-md transition-all font-semibold" asChild>
                    <Link href="/emi-calculator" className="flex items-center gap-2">
                      <Calculator className="w-4 h-4 text-blue-400" /> Premium Calculator
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Side Summary Card */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-md bg-slate-800/80 border border-slate-700/80 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Trusted Protection</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">98.5% Claim Settlement</h3>
                  <p className="text-sm text-slate-300 mb-6">Uncompromised peace of mind backed by transparent guidelines and prompt processing.</p>
                  
                  <div className="space-y-3 pt-4 border-t border-slate-700">
                    <div className="flex items-center gap-3 text-sm text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold">✓</div>
                      <span>Tax Benefits under Section 80C & 10(10D)</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold">✓</div>
                      <span>Flexible Premium Payment Frequencies</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold">✓</div>
                      <span>Add-on Riders for Critical Illness & Accidents</span>
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
            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">Insurance Plans</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">Tailored Life Insurance Policies</h2>
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
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">4 Easy Steps to Get Insured</h2>
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