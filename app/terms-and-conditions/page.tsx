"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  FileText, ShieldCheck, AlertTriangle, Scale, 
  Lock, CheckCircle2, Building2, HelpCircle, ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TermsAndConditionsPage() {
  const [activeTab, setActiveTab] = useState<"terms" | "disclaimer">("terms")

  return (
    <div className="min-h-screen bg-background py-16 sm:py-24 lg:py-32">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
            <Scale className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            Legal & Compliance
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Terms, Conditions &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Disclaimer
            </span>
          </h1>
          
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            Please read our terms and conditions carefully before using Kalyani Finance services.
          </p>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-3 mb-10"
        >
          <button
            onClick={() => setActiveTab("terms")}
            className={`
              flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm
              ${activeTab === "terms"
                ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25"
                : "bg-card border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/30"
              }
            `}
          >
            <FileText className="w-4 h-4" />
            Terms & Conditions
          </button>
          
          <button
            onClick={() => setActiveTab("disclaimer")}
            className={`
              flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm
              ${activeTab === "disclaimer"
                ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25"
                : "bg-card border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/30"
              }
            `}
          >
            <AlertTriangle className="w-4 h-4" />
            Disclaimer
          </button>
        </motion.div>

        {/* Content Box */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-card rounded-2xl sm:rounded-3xl border border-border/50 p-6 sm:p-10 shadow-xl shadow-primary/5 space-y-8"
        >
          {activeTab === "terms" ? (
            <div className="space-y-8">
              <div className="border-b border-border/50 pb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <FileText className="w-5 h-5" />
                  </div>
                  Terms & Conditions
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">Last Updated: August 2026</p>
              </div>

              <div className="space-y-6 text-foreground/90">
                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-bold text-foreground flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">1</span>
                    Nature of Service
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-muted-foreground pl-2">
                    <li><strong className="text-foreground">Kalyani Finance</strong> is not a direct lending bank or Non-Banking Financial Company (NBFC).</li>
                    <li>We operate solely as an authorized channel partner for various banks and registered corporate DSAs (Direct Selling Agents).</li>
                    <li>Our core service is to assist and consult clients in securing loans from appropriate banks according to their individual financial eligibility.</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-bold text-foreground flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">2</span>
                    Accuracy of Information
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-muted-foreground pl-2">
                    <li>Clients are obligated to provide complete, truthful, and accurate information (e.g., name, income, PAN card, [Aadhaar Redacted] details, etc.) when filling out website forms or during the loan application process.</li>
                    <li>The client holds sole personal liability for any legal consequences arising from the submission of incorrect or fraudulent documentation.</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-bold text-foreground flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">3</span>
                    Data Privacy & Usage
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-muted-foreground pl-2">
                    <li>The personal and financial data submitted for loan applications will be forwarded to respective partner banks and financial institutions strictly for loan processing purposes.</li>
                    <li>While we make every effort to maintain robust data security standards, Kalyani Finance cannot be held directly liable for data breaches resulting from unforeseen internet technical vulnerabilities or cyber incidents.</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-bold text-foreground flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs flex items-center justify-center font-bold">4</span>
                    Processing Timeline
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-muted-foreground pl-2">
                    <li>The timeline for loan approval and final disbursement into a bank account depends entirely on the internal guidelines, policies, and verification protocols of the respective lending bank.</li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="border-b border-border/50 pb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  Disclaimer
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">Legal and Financial Disclosures</p>
              </div>

              <div className="space-y-6 text-foreground/90">
                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-bold text-foreground flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-amber-500/10 text-amber-600 text-xs flex items-center justify-center font-bold">1</span>
                    Right to Approve Loan
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-muted-foreground pl-2">
                    <li>The ultimate authority to approve or reject a loan application, determine interest rates, and fix processing fees rests exclusively with the respective bank or financial institution.</li>
                    <li><strong className="text-foreground">Kalyani Finance</strong> does not provide a 100% guarantee of loan approval. Applications may be rejected if they fail to meet lender-specific criteria.</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-bold text-foreground flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-amber-500/10 text-amber-600 text-xs flex items-center justify-center font-bold">2</span>
                    Financial Transactions & No Advance Fees
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-muted-foreground pl-2">
                    <li>Kalyani Finance never demands or accepts advance cash, bribe payments, or upfront fees from clients for processing or approving loans.</li>
                    <li>Official bank processing fees must be paid directly to the bank via official channels, bank accounts, or designated cheques. Do not transfer funds to any private personal accounts; Kalyani Finance will not take responsibility for such transactions.</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-bold text-foreground flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-amber-500/10 text-amber-600 text-xs flex items-center justify-center font-bold">3</span>
                    Website Content & Information
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-muted-foreground pl-2">
                    <li>Information displayed on this website (such as estimated interest rates or eligibility guidelines) is for general guidance purposes only. Bank policies and guidelines are subject to change. Clients are advised to thoroughly review final agreements and bank terms before signing.</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-bold text-foreground flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-amber-500/10 text-amber-600 text-xs flex items-center justify-center font-bold">4</span>
                    Jurisdiction
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-muted-foreground pl-2">
                    <li>Any legal disputes arising between Kalyani Finance and clients shall be subject exclusively to the jurisdiction of the local courts in Pune.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Footer CTA inside card */}
          <div className="pt-6 border-t border-border/55 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground text-center sm:text-left">
              Have questions or concerns? Feel free to reach out to us.
            </p>
            <Button asChild className="gap-2 shadow-lg shadow-primary/20">
              <Link href="/contact">
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </motion.div>

      </div>
    </div>
  )
}