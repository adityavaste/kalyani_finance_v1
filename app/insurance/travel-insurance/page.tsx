import { Metadata } from "next"
import Link from "next/link"
import { 
  Plane, Shield, Zap, FileText, Calculator, 
  ArrowLeft, CheckCircle2, 
  Clock, Award, Banknote, Sparkles, HelpCircle,
  ArrowRight, PhoneCall, BadgeCheck, Star,
  MousePointerClick, TrendingUp, Users, Landmark
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { metadata } from "./metadata";
import schemas from "./schema";

export { metadata };

const highlights = [
  { icon: Banknote, label: "Starting Premium", value: "₹399/trip*", desc: "Affordable protection worldwide" },
  { icon: Plane, label: "Medical Coverage", value: "$500K", desc: "Cashless hospitalization globally" },
  { icon: Clock, label: "Claim Settlement", value: "Fast Track", desc: "Hassle-free digital claim processing" },
  { icon: Award, label: "Assistance", value: "24/7 Support", desc: "Global emergency helpline anywhere" },
]

const loanCategories = [
  {
    title: "Single Trip International",
    desc: "Comprehensive coverage tailored for individual or family holidays abroad, covering medical emergencies, lost baggage, and flight delays.",
    badge: "Global Cover",
    color: "from-sky-600 to-cyan-600",
    bg: "bg-sky-50 text-sky-700 border-sky-100"
  },
  {
    title: "Multi-Trip Annual Plan",
    desc: "Ideal for frequent flyers and business travelers. Cover unlimited trips throughout the year under a single annual policy.",
    badge: "Frequent Flyer",
    color: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50 text-emerald-700 border-emerald-100"
  },
  {
    title: "Senior Citizen Travel Cover",
    desc: "Specialized medical protection plans designed for older travelers, covering pre-existing conditions and emergency evacuation.",
    badge: "Specialized Care",
    color: "from-purple-600 to-pink-600",
    bg: "bg-purple-50 text-purple-700 border-purple-100"
  },
  {
    title: "Student Travel Insurance",
    desc: "Affordable, long-term plans built for students pursuing education overseas, covering tuition fee loss and sponsor protection.",
    badge: "Study Abroad",
    color: "from-amber-500 to-orange-600",
    bg: "bg-amber-50 text-amber-700 border-amber-100"
  },
]

const steps = [
  { number: "01", title: "Enter Trip Details", desc: "Provide your destination, travel dates, and ages of travelers to view customized insurance quotes." },
  { number: "02", title: "Select Plan & Add-ons", desc: "Choose coverage limits and optional add-ons like adventure sports or baggage protection." },
  { number: "03", title: "Instant Policy Issuance", desc: "Complete online payment securely and receive your official policy document directly via email." },
  { number: "04", title: "Travel with Peace", desc: "Access 24/7 global emergency assistance and cashless medical networks anywhere in the world." },
]

const requirements = {
  eligibility: [
    "Age: Individuals and families from 3 months up to 99 years of age",
    "Destination: Worldwide coverage including USA, Canada, Europe, and Schengen countries",
    "Trip Duration: Single trip coverage from 1 day up to 365 continuous days",
    "Medical Screening: Simple online health declaration for senior travelers",
  ],
  documents: [
    "Passport details for all traveling members",
    "Exact departure and return travel dates",
    "Contact information and email address for policy delivery",
    "Nominee details for emergency declarations",
  ]
}

const faqs = [
  {
    q: "Does travel insurance cover emergency medical expenses abroad?",
    a: "Yes, our plans cover hospitalization, outpatient treatment, ambulance charges, and emergency medical evacuation worldwide."
  },
  {
    q: "Are baggage loss and flight delays covered under the policy?",
    a: "Yes, you are compensated for checked-in baggage loss, passport loss, and expenses incurred due to significant flight delays or trip cancellations."
  },
  {
    q: "How do I make a cashless claim while traveling internationally?",
    a: "You can instantly contact our 24/7 global helpline or use our mobile portal to locate network hospitals and coordinate direct cashless settlements."
  }
]

const stats = [
  { value: "$500K", label: "Medical Cover" },
  { value: "195+", label: "Countries Covered" },
  { value: "24/7", label: "Global Support" },
  { value: "₹399", label: "Starting Premium" },
]

export default function TravelInsurancePage() {
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
          <div className="absolute w-[500px] h-[500px] -top-20 -left-20 bg-sky-200 rounded-full blur-3xl opacity-50 pointer-events-none" />
          <div className="absolute w-[400px] h-[400px] top-1/3 -right-20 bg-cyan-200 rounded-full blur-3xl opacity-50 pointer-events-none" />
          <div className="absolute w-[350px] h-[350px] bottom-0 left-1/3 bg-teal-200 rounded-full blur-3xl opacity-50 pointer-events-none" />
          
          <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_30%,transparent_100%)] opacity-40" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-xs font-bold uppercase tracking-wider shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-sky-500" /> 
                  Global Protection Shield
                </div>
                
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-slate-900">
                  Travel the World Worry-Free with{" "}
                  <span className="text-blue-600 bg-clip-text">Travel Insurance</span>
                </h1>
                
                <p className="text-slate-500 text-base sm:text-xl max-w-2xl leading-relaxed">
                  Protect your journeys against medical emergencies, trip cancellations, lost baggage, and flight disruptions with reliable plans starting at just ₹399.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-500 hover:to-cyan-500 text-white font-bold px-8 h-14 rounded-2xl shadow-xl shadow-sky-500/25 text-base" asChild>
                    <Link href="/contact" className="flex items-center gap-2">
                      <MousePointerClick className="w-5 h-5" />
                      Get Travel Cover
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
                      <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-100 to-cyan-100 border-2 border-white flex items-center justify-center text-xs font-bold text-sky-700 shadow-sm">
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
                    <p className="text-sm text-slate-400 mt-0.5">Trusted by 75,000+ Travelers</p>
                  </div>
                </div>
              </div>

              {/* Right - Floating Glass Card */}
              <div className="lg:col-span-5">
                <div className="relative">
                  <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl shadow-slate-200/50 border border-white/60">
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-50/50 to-cyan-50/50 rounded-3xl -z-10" />
                    
                    <div className="relative">
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-xs font-bold uppercase tracking-widest text-sky-600">Trip Security</span>
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">Cashless Hospitalization</h3>
                      <p className="text-sm text-slate-500 mb-6">Immediate access to international healthcare networks without paying out of pocket.</p>
                      
                      <div className="space-y-3 pt-4 border-t border-slate-100">
                        {[
                          "Schengen Visa Compliant Policies",
                          "24/7 Global Emergency Helpline",
                          "Instant Digital Policy Issuance"
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-center gap-3 text-sm text-slate-600">
                            <div className="w-5 h-5 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center text-xs font-bold">✓</div>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 pt-4 border-t border-slate-100">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-slate-500 font-medium">Medical Cover Up To</span>
                          <span className="text-lg font-bold text-slate-900">$500,000</span>
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
                  className="group bg-white border border-slate-100 rounded-2xl p-6 text-center shadow-lg shadow-slate-100/50 hover:border-sky-100 transition-all duration-300"
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
                  className="group bg-white border border-slate-100 rounded-2xl p-6 hover:border-sky-100 transition-all duration-300 shadow-sm shadow-slate-100/30"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-50 to-cyan-50 border border-sky-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-sky-600" />
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
                  <span className="text-sky-600 font-bold text-sm tracking-wider uppercase">Plan Options</span>
                  <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2">Specialized Travel Insurance Categories</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  {loanCategories.map((category, idx) => (
                    <div 
                      key={idx} 
                      className="group bg-white border border-slate-100 rounded-2xl p-6 hover:border-sky-200 transition-all duration-500 shadow-sm shadow-slate-100/30 overflow-hidden relative"
                    >
                      <div className="absolute -top-10 -right-10 w-32 h-32 bg-sky-50 rounded-full blur-2xl group-hover:bg-sky-100 transition-colors duration-500" />
                      
                      <div className="relative">
                        <div className="flex items-center justify-between mb-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white font-bold shadow-lg shadow-sky-500/20 group-hover:scale-110 transition-transform duration-300`}>
                            <Plane className="w-6 h-6" />
                          </div>
                          <span className={`text-xs font-bold px-3 py-1 rounded-full border ${category.bg}`}>
                            {category.badge}
                          </span>
                        </div>
                        <h3 className="font-bold text-slate-900 text-xl mb-3 group-hover:text-sky-700 transition-colors">{category.title}</h3>
                        <p className="text-sm text-slate-500 leading-relaxed mb-5">{category.desc}</p>
                        
                        <Button className="w-full bg-slate-900 hover:bg-gradient-to-r hover:from-sky-600 hover:to-cyan-600 text-white transition-all duration-300 font-bold h-11 rounded-xl" asChild>
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
                  <span className="text-sky-600 font-bold text-sm tracking-wider uppercase">Purchase Process</span>
                  <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2">4 Easy Steps to Secure Your Trip</h2>
                </div>
                
                <div className="relative">
                  <div className="absolute left-8 top-12 bottom-12 w-0.5 bg-gradient-to-b from-sky-200 via-cyan-200 to-teal-200 hidden sm:block" />
                  
                  <div className="space-y-6">
                    {steps.map((step, idx) => (
                      <div key={step.number} className="group relative flex gap-6 items-start">
                        <div className="relative z-10 shrink-0">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-600 to-cyan-600 text-white font-black text-xl flex items-center justify-center shadow-lg shadow-sky-500/25 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border-2 border-white">
                            {step.number}
                          </div>
                        </div>
                        
                        <div className="flex-1 bg-white border border-slate-100 rounded-2xl p-6 group-hover:border-sky-200 transition-all duration-500 shadow-sm shadow-slate-100/30">
                          <h4 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-sky-700 transition-colors">{step.title}</h4>
                          <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Eligibility & Documents */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm shadow-slate-100/30 hover:border-sky-100 transition-all duration-500">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-600 to-cyan-600 flex items-center justify-center shadow-md shadow-sky-500/20">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    Policy Coverage Scope
                  </h3>
                  <ul className="space-y-4">
                    {requirements.eligibility.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 pb-4 border-b border-slate-50 last:border-0 last:pb-0 group">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 mt-2 shrink-0 group-hover:scale-150 transition-transform" />
                        <span className="group-hover:text-slate-900 transition-colors font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm shadow-slate-100/30 hover:border-sky-100 transition-all duration-500">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-md shadow-purple-500/20">
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    Required Details
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
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-600 to-cyan-600 flex items-center justify-center shadow-md shadow-sky-500/20">
                    <HelpCircle className="w-6 h-6 text-white" />
                  </div>
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq, idx) => (
                    <div 
                      key={idx} 
                      className="group bg-slate-50 border border-slate-100 rounded-2xl p-6 hover:bg-white hover:border-sky-200 transition-all duration-500 cursor-pointer shadow-sm shadow-transparent hover:shadow-slate-100/50"
                    >
                      <h4 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-3 group-hover:text-sky-700 transition-colors">
                        <span className="w-8 h-8 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center text-sm font-black shrink-0">
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
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-600/10 via-transparent to-cyan-600/10" />
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />
                  
                  <div className="relative">
                    <h3 className="text-2xl font-black text-white mb-3">Secure Your Trip Today</h3>
                    <p className="text-slate-300 text-sm mb-8 leading-relaxed">
                      Get instant travel insurance with Schengen compliance, cashless hospitalization, and 24/7 global emergency support.
                    </p>
                    
                    <div className="space-y-4 mb-8">
                      {[
                        { icon: Plane, text: "Single & Multi-Trip Plans" },
                        { icon: Zap, text: "Adventure Sports Cover" },
                        { icon: PhoneCall, text: "24/7 Global Helpline" },
                        { icon: Award, text: "Schengen Visa Compliant" },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-sm text-slate-300">
                          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                            <item.icon className="w-4 h-4 text-sky-400" />
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
                <div className="mt-6 bg-white border border-slate-100 rounded-3xl p-8 text-center shadow-sm shadow-slate-100/30 hover:border-sky-100 transition-all duration-500 group">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-600 to-cyan-600 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-sky-500/20 group-hover:scale-110 transition-transform">
                    <Calculator className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-xl mb-3">Premium Calculator</h4>
                  <p className="text-sm text-slate-500 mb-6 leading-relaxed">Estimate your travel insurance premium based on destination, trip duration, and travelers.</p>
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