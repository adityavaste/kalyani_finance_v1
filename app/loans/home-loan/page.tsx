import { Metadata } from "next"
export { metadata } from "./metadata";
import schemas from "./schema";
import { 
  Home, CheckCircle, ArrowLeft, ShieldCheck, Clock, 
  FileText, Calculator, Percent, Sparkles, Building2, 
  BadgePercent, ArrowRight, PhoneCall, HelpCircle 
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// 1. Import your Navbar and Footer components
import { Navbar } from "@/components/navbar" // Update path if your navbar is elsewhere (e.g. "@/components/Navbar")
import { Footer } from "@/components/footer" // Update path if your footer is elsewhere (e.g. "@/components/Footer")

const loanHighlights = [
  { label: "Interest Rate", value: "8.50% p.a.*", desc: "Lowest rates in the market" },
  { label: "Max Loan Amount", value: "Up to ₹5 Cr", desc: "For plots, flats & construction" },
  { label: "Max Tenure", value: "30 Years", desc: "Extended repayment plans" },
  { label: "Processing Fee", value: "Up to 0.5%", desc: "Transparent & minimal fees" },
]

const loanTypes = [
  { title: "Home Purchase Loan", desc: "For buying ready-to-move, under-construction, or resale properties." },
  { title: "Home Construction Loan", desc: "Financing specifically for building a house on your own plot of land." },
  { title: "Home Improvement Loan", desc: "Upgrade, renovate, or remodel your existing living space effortlessly." },
  { title: "Home Loan Balance Transfer", desc: "Switch your current expensive loan to us for lower rates and top-up cash." },
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

export default function HomeLoanPage() {
  return (
    <>
      
  <Navbar />

 {schemas.map((schema: Record<string, any>, index: number) => (
  <script
    key={index}
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(schema),
    }}
  />
))}


      <div className="min-h-screen bg-slate-50/50 text-slate-900 pb-24 pt-20">
        
      

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white py-20 lg:py-28 mx-4 sm:mx-6 lg:mx-8 rounded-3xl mb-12">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-md">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" /> Trusted Housing Finance Partner
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                  Build or Buy Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Dream Home</span> With Ease
                </h1>
                <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mb-8 leading-relaxed">
                  Unlock competitive interest rates, seamless digital documentation, and doorstep guidance tailored to make your property ownership journey completely stress-free.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 h-12 rounded-xl shadow-lg shadow-blue-600/30" asChild>
                    <Link href="/contact">Apply For Home Loan</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-slate-700 bg-slate-800/50 hover:bg-slate-800 text-white h-12 rounded-xl backdrop-blur-md" asChild>
                    <Link href="/emi-calculator" className="flex items-center gap-2">
                      <Calculator className="w-4 h-4" /> Calculate EMI
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Quick Summary Floating Card */}
              <div className="lg:col-span-5">
                <div className="bg-slate-800/80 border border-slate-700/80 backdrop-blur-xl rounded-3xl p-6 lg:p-8 shadow-2xl">
                  <h3 className="text-lg font-bold text-white mb-6 flex items-center justify-between">
                    <span>Home Loan Snapshot</span>
                    <Building2 className="w-5 h-5 text-blue-400" />
                  </h3>
                  <div className="space-y-5">
                    <div className="flex justify-between items-center pb-4 border-b border-slate-700">
                      <span className="text-sm text-slate-400">Interest Starting</span>
                      <span className="text-xl font-bold text-white">8.50% p.a.</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-slate-700">
                      <span className="text-sm text-slate-400">Maximum Funding</span>
                      <span className="text-xl font-bold text-white">Up to ₹5 Cr</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-slate-700">
                      <span className="text-sm text-slate-400">Max Tenure</span>
                      <span className="text-xl font-bold text-white">30 Years</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-400">Approval Time</span>
                      <span className="text-sm font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">48 Hours*</span>
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-white text-slate-900 hover:bg-slate-100 font-semibold h-11 rounded-xl" asChild>
                    <Link href="/contact">Check Eligibility Instantly</Link>
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Highlights Bar Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {loanHighlights.map((item, idx) => (
              <div key={idx} className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{item.label}</p>
                <p className="text-2xl sm:text-3xl font-extrabold text-blue-900 mt-1 mb-1">{item.value}</p>
                <p className="text-xs text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Main Content Layout */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Left Column Content */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Types of Home Loans */}
              <div>
                <div className="mb-6">
                  <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">Customized Options</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">Types of Home Loans We Offer</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {loanTypes.map((type, idx) => (
                    <div key={idx} className="bg-white border border-slate-200/80 rounded-2xl p-6 hover:border-blue-300 transition-all group">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        0{idx + 1}
                      </div>
                      <h3 className="font-bold text-slate-900 text-lg mb-2">{type.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{type.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step-by-Step Process */}
              <div className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-10 shadow-sm">
                <div className="mb-8">
                  <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">How It Works</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">Simple 4-Step Loan Process</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  {loanSteps.map((step) => (
                    <div key={step.step} className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                      <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 shadow-sm">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">{step.title}</h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Eligibility & Documents */}
              <div className="grid sm:grid-cols-2 gap-8">
                
                <div className="bg-white border border-slate-200/80 rounded-3xl p-8 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-600" /> Eligibility Criteria
                  </h3>
                  <div className="space-y-4">
                    {eligibilityCriteria.map((item, idx) => (
                      <div key={idx} className="pb-3 border-b border-slate-100 last:border-0 last:pb-0">
                        <p className="font-semibold text-sm text-slate-900">{item.title}</p>
                        <p className="text-xs text-slate-600 mt-0.5">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white border border-slate-200/80 rounded-3xl p-8 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-blue-600" /> Required Documents
                  </h3>
                  <ul className="space-y-3">
                    {documentsRequired.map((doc, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <span className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0" />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* FAQ Section */}
              <div className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-10 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <HelpCircle className="w-6 h-6 text-blue-600" /> Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                  {faqs.map((faq, idx) => (
                    <div key={idx} className="pb-6 border-b border-slate-100 last:border-0 last:pb-0">
                      <h4 className="font-semibold text-slate-900 text-base mb-2">{faq.q}</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Action Box */}
              <div className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white rounded-3xl p-8 shadow-xl sticky top-24">
                <h3 className="text-2xl font-bold mb-3">Ready to Move In?</h3>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  Connect with our certified mortgage specialists for a hassle-free loan experience and custom interest offers.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-sm text-slate-200">
                    <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0" />
                    <span>100% Secure & Paperless Processing</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-200">
                    <Clock className="w-5 h-5 text-blue-400 shrink-0" />
                    <span>Quick 48-Hour Sanctions</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-200">
                    <PhoneCall className="w-5 h-5 text-blue-400 shrink-0" />
                    <span>Dedicated Personal Loan Advisor</span>
                  </div>
                </div>

                <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold h-12 rounded-xl shadow-lg" asChild>
                  <Link href="/contact">Enquire Now</Link>
                </Button>
              </div>

              {/* Calculator Card */}
              <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm text-center">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4">
                  <Calculator className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-900 text-lg mb-2">Calculate Your Monthly EMI</h4>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">Plan your monthly budget with precision using our advanced EMI tool.</p>
                <Button variant="outline" className="w-full h-11 rounded-xl border-slate-200 hover:bg-slate-50" asChild>
                  <Link href="/emi-calculator" className="flex items-center justify-center gap-2">
                    Open Calculator <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>

            </div>

          </div>
        </section>

      </div>

      {/* 3. Place Footer at the very bottom */}
      <Footer />
    </>
  )
}