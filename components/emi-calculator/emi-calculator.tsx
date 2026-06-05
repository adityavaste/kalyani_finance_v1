"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { Calculator, Download, Info } from "lucide-react"
import { Button } from "@/components/ui/button"

const loanTypes = [
  { id: "home", name: "Home Loan", defaultRate: 8.5, maxAmount: 100000000, maxTenure: 360 },
  { id: "car", name: "Car Loan", defaultRate: 9.0, maxAmount: 10000000, maxTenure: 84 },
  { id: "personal", name: "Personal Loan", defaultRate: 10.5, maxAmount: 4000000, maxTenure: 60 },
  { id: "business", name: "Business Loan", defaultRate: 11.0, maxAmount: 5000000, maxTenure: 60 },
  { id: "education", name: "Education Loan", defaultRate: 8.0, maxAmount: 15000000, maxTenure: 180 },
  { id: "gold", name: "Gold Loan", defaultRate: 7.5, maxAmount: 20000000, maxTenure: 36 },
]

export function EmiCalculator() {
  const [selectedLoan, setSelectedLoan] = useState(loanTypes[0])
  const [loanAmount, setLoanAmount] = useState(5000000)
  const [interestRate, setInterestRate] = useState(8.5)
  const [tenure, setTenure] = useState(240)
  const [tenureType, setTenureType] = useState<"months" | "years">("months")

  const tenureInMonths = tenureType === "years" ? tenure * 12 : tenure

  const calculations = useMemo(() => {
    const monthlyRate = interestRate / 12 / 100
    const emi = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenureInMonths) / (Math.pow(1 + monthlyRate, tenureInMonths) - 1)
    const totalAmount = emi * tenureInMonths
    const totalInterest = totalAmount - loanAmount
    const principalPercent = (loanAmount / totalAmount) * 100
    const interestPercent = (totalInterest / totalAmount) * 100

    return { emi, totalAmount, totalInterest, principalPercent, interestPercent }
  }, [loanAmount, interestRate, tenureInMonths])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const handleLoanTypeChange = (loan: typeof loanTypes[0]) => {
    setSelectedLoan(loan)
    setInterestRate(loan.defaultRate)
    if (loanAmount > loan.maxAmount) setLoanAmount(loan.maxAmount)
    if (tenureInMonths > loan.maxTenure) setTenure(loan.maxTenure)
  }

  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-primary/5 via-background to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Financial Tool
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-4">
            EMI Calculator
          </h1>
          <p className="text-lg text-muted-foreground">
            Calculate your monthly EMI, total interest, and plan your loan repayment with our easy-to-use calculator.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calculator */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="bg-card rounded-3xl border border-border p-8 shadow-lg">
              {/* Loan Type Selection */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-foreground mb-3">Loan Type</label>
                <div className="flex flex-wrap gap-2">
                  {loanTypes.map((loan) => (
                    <button
                      key={loan.id}
                      onClick={() => handleLoanTypeChange(loan)}
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                        selectedLoan.id === loan.id
                          ? "bg-primary text-primary-foreground"
                          : "bg-accent text-foreground hover:bg-accent/80"
                      }`}
                    >
                      {loan.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                {/* Loan Amount */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-medium text-foreground">Loan Amount</label>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-primary">{formatCurrency(loanAmount)}</span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="100000"
                    max={selectedLoan.maxAmount}
                    step="100000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full h-2 bg-accent rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>₹1 Lakh</span>
                    <span>{formatCurrency(selectedLoan.maxAmount)}</span>
                  </div>
                </div>

                {/* Interest Rate */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-medium text-foreground">Interest Rate (p.a.)</label>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        min="5"
                        max="25"
                        step="0.1"
                        value={interestRate}
                        onChange={(e) => setInterestRate(Number(e.target.value))}
                        className="w-20 px-3 py-1.5 text-right rounded-lg border border-border bg-background text-foreground font-bold focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                      <span className="text-sm text-muted-foreground">%</span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="25"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full h-2 bg-accent rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>5%</span>
                    <span>25%</span>
                  </div>
                </div>

                {/* Tenure */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-medium text-foreground">Loan Tenure</label>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        min="1"
                        max={tenureType === "years" ? Math.floor(selectedLoan.maxTenure / 12) : selectedLoan.maxTenure}
                        value={tenure}
                        onChange={(e) => setTenure(Number(e.target.value))}
                        className="w-20 px-3 py-1.5 text-right rounded-lg border border-border bg-background text-foreground font-bold focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                      <select
                        value={tenureType}
                        onChange={(e) => {
                          const newType = e.target.value as "months" | "years"
                          if (newType === "years" && tenureType === "months") {
                            setTenure(Math.floor(tenure / 12) || 1)
                          } else if (newType === "months" && tenureType === "years") {
                            setTenure(tenure * 12)
                          }
                          setTenureType(newType)
                        }}
                        className="px-3 py-1.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                      >
                        <option value="months">Months</option>
                        <option value="years">Years</option>
                      </select>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max={tenureType === "years" ? Math.floor(selectedLoan.maxTenure / 12) : selectedLoan.maxTenure}
                    value={tenure}
                    onChange={(e) => setTenure(Number(e.target.value))}
                    className="w-full h-2 bg-accent rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>1 {tenureType === "years" ? "Year" : "Month"}</span>
                    <span>{tenureType === "years" ? Math.floor(selectedLoan.maxTenure / 12) : selectedLoan.maxTenure} {tenureType === "years" ? "Years" : "Months"}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {/* EMI Card */}
            <div className="bg-primary rounded-3xl p-8 text-primary-foreground">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                  <Calculator className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-primary-foreground/70">Monthly EMI</p>
                  <p className="text-3xl font-bold">{formatCurrency(calculations.emi)}</p>
                </div>
              </div>

              {/* Visual Breakdown */}
              <div className="mb-6">
                <div className="h-4 rounded-full overflow-hidden bg-primary-foreground/10 flex">
                  <div 
                    className="bg-primary-foreground h-full transition-all duration-500" 
                    style={{ width: `${calculations.principalPercent}%` }}
                  />
                  <div 
                    className="bg-secondary h-full transition-all duration-500" 
                    style={{ width: `${calculations.interestPercent}%` }}
                  />
                </div>
                <div className="flex justify-between mt-2 text-xs">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                    <span>Principal ({calculations.principalPercent.toFixed(1)}%)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    <span>Interest ({calculations.interestPercent.toFixed(1)}%)</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-t border-primary-foreground/10">
                  <span className="text-primary-foreground/70">Principal Amount</span>
                  <span className="font-semibold">{formatCurrency(loanAmount)}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-t border-primary-foreground/10">
                  <span className="text-primary-foreground/70">Total Interest</span>
                  <span className="font-semibold text-secondary">{formatCurrency(calculations.totalInterest)}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-t border-primary-foreground/10">
                  <span className="text-primary-foreground/70">Total Amount</span>
                  <span className="font-bold text-lg">{formatCurrency(calculations.totalAmount)}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <Button className="w-full gap-2" variant="outline">
                <Download className="w-4 h-4" />
                Download Schedule
              </Button>
              <Button className="w-full" asChild>
                <a href="/contact">Apply for This Loan</a>
              </Button>
            </div>

            {/* Info */}
            <div className="bg-accent/50 rounded-2xl p-4">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-xs text-muted-foreground">
                  This is an indicative calculation. Actual EMI may vary based on processing fees, 
                  insurance, and other charges. Contact us for exact figures.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
