    import { Metadata } from "next"
import Link from "next/link"
import { 
  Building2, Shield, Zap, FileText, Calculator, 
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
  { icon: Banknote, label: "Custom Coverage", value: "Tailor-Made", desc: "Designed for your specific industry risks", accent: "bg-emerald-50 text-emerald-600 border-emerald-100" },
  { icon: Building2, label: "Asset Protection", value: "Up to ₹50 Cr", desc: "Comprehensive property and liability limits", accent: "bg-blue-50 text-blue-600 border-blue-100" },
  { icon: Clock, label: "Claim Support", value: "Dedicated", desc: "Priority corporate claim assistance", accent: "bg-amber-50 text-amber-600 border-amber-100" },
  { icon: Award, label: "Cyber Security", value: "Included", desc: "Digital risk and data breach protection", accent: "bg-purple-50 text-purple-600 border-purple-100" },
]

const loanCategories = [
  {
    title: "Property & Asset Insurance",
    desc: "Safeguard your commercial buildings, offices, machinery, and inventory against fire, natural disasters, and burglary.",
    badge: "Core Protection",
  },
  {
    title: "Commercial Liability Cover",
    desc: "Protect your business from third-party legal claims, public liability, and product liability liabilities.",
    badge: "Legal Shield",
  },
  {
    title: "Employee Health & Group Cover",
    desc: "Enhance workforce retention and well-being with comprehensive group health and personal accident insurance.",
    badge: "Employee Benefit",
  },
  {
    title: "Cyber & Business Interruption",
    desc: "Mitigate financial losses arising from cyber attacks, data breaches, and unexpected operational shutdowns.",
    badge: "Digital Security",
  },
]

const steps = [
  { number: "01", title: "Risk Assessment", desc: "Share your business profile, industry type, and asset details to identify potential operational exposures." },
  { number: "02", title: "Customized Proposal", desc: "Our corporate insurance experts draft a tailored commercial package matching your exact requirements." },
  { number: "03", title: "Policy Finalization", desc: "Review premium quotes, policy wordings, and finalize the coverage structure with our advisors." },
  { number: "04", title: "Active Protection", desc: "Receive your commercial policy documents and dedicated account manager contact details instantly." },
]

const requirements = {
  eligibility: [
    "Business Entity: Startups, MSMEs, partnership firms, and large corporate enterprises",
    "Industry Sectors: Manufacturing, IT services, retail, hospitality, warehousing, and more",
    "Asset Verification: Clear documentation of owned or leased commercial premises",
    "Risk Evaluation: Satisfactory completion of standard commercial underwriting guidelines",
  ],
  documents: [
    "Business Registration Proof (GST certificate, Incorporation certificate, Trade license)",
    "Financial Statements (Last 2 years balance sheet and profit/loss statements)",
    "Property ownership or lease agreement papers",
    "Details of insured assets, machinery, and employee headcount",
  ]
}

const faqs = [
  {
    q: "Can a single commercial policy cover multiple business risks?",
    a: "Yes, comprehensive commercial package policies allow you to bundle property insurance, liability, and employee benefits into one unified plan."
  },
  {
    q: "What is business interruption insurance and why is it important?",
    a: "Business interruption insurance covers lost profits and fixed ongoing expenses (like salaries and rent) if your operations are halted due to a covered disaster."
  },
  {
    q: "How are corporate insurance premiums calculated?",
    a: "Premiums depend on factors such as industry risk level, total asset valuation, past claim history, geographical location, and selected coverage limits."
  }
]

export default function BusinessInsurancePage() {
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

  {/* Your Business Insurance Page */}
</>
      <div className="min-h-screen bg-slate-50/50 text-slate-900 pb-24 pt-20">
        
        

        {/* Hero Banner Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white py-20 lg:py-28 mx-4 sm:mx-6 lg:mx-8 rounded-3xl mb-12 shadow-xl">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" /> Commercial Risk Management
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                  Protect Your Enterprise with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Business Insurance</span>
                </h1>
                <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mb-8 leading-relaxed">
                  Protect your business from unforeseen risks with our comprehensive commercial insurance plans tailored to safeguard your assets, employees, and operations.
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
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Enterprise Security</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Custom Commercial Plans</h3>
                  <p className="text-sm text-slate-300 mb-6">Mitigate financial vulnerabilities across property, liability, cyber, and employee health sectors.</p>
                  
                  <div className="space-y-3 pt-4 border-t border-slate-700">
                    <div className="flex items-center gap-3 text-sm text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold">✓</div>
                      <span>Property & Asset Insurance Included</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold">✓</div>
                      <span>Dedicated Corporate Claim Support</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold">✓</div>
                      <span>Cyber & Business Interruption Cover</span>
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

        {/* Categories Section with Integrated Quote Button */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="mb-6">
            <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">Commercial Solutions</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">Specialized Business Insurance Coverages</h2>
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
              <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">Onboarding Process</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">4 Easy Steps to Protect Your Enterprise</h2>
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