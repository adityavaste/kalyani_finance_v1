"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Home", href: "/" },
  { 
    name: "Loans", 
    href: "/loans",
    submenu: [
      { name: "Home Loan", href: "/loans/home-loan" },
      { name: "Car Loan", href: "/loans/car-loan" },
      { name: "Personal Loan", href: "/loans/personal-loan" },
      { name: "Business Loan", href: "/loans/business-loan" },
      { name: "Education Loan", href: "/loans/education-loan" },
      { name: "Gold Loan", href: "/loans/gold-loan" },
      { name: "Loan Against Property", href: "/loans/loan-against-property" },
    ]
  },
  { 
    name: "Insurance", 
    href: "/insurance",
    submenu: [
      { name: "Health Insurance", href: "/insurance/health-insurance" },
      { name: "Car Insurance", href: "/insurance/car-insurance" },
      { name: "Life Insurance", href: "/insurance/life-insurance" },
      { name: "Travel Insurance", href: "/insurance/travel-insurance" },
    ]
  },
  { name: "EMI Calculator", href: "/emi-calculator" },
  { name: "About Us", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-card/95 backdrop-blur-md shadow-lg border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">K</span>
              </div>
              <span className="font-bold text-xl text-foreground">
                Kalyani<span className="text-primary">Finance</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.submenu && setActiveSubmenu(link.name)}
                  onMouseLeave={() => setActiveSubmenu(null)}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-lg hover:bg-accent"
                  >
                    {link.name}
                    {link.submenu && <ChevronDown className="w-4 h-4" />}
                  </Link>
                  
                  {/* Submenu */}
                  <AnimatePresence>
                    {link.submenu && activeSubmenu === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 w-56 bg-card rounded-xl shadow-xl border border-border overflow-hidden"
                      >
                        {link.submenu.map((sublink) => (
                          <Link
                            key={sublink.name}
                            href={sublink.href}
                            className="block px-4 py-3 text-sm text-foreground/80 hover:bg-accent hover:text-primary transition-colors"
                          >
                            {sublink.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+917620838449"
                className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+91 7620838449</span>
              </a>
              <Button asChild>
                <Link href="/contact">Apply Now</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-foreground/20" onClick={() => setIsMobileMenuOpen(false)} />
            <div className="absolute right-0 top-0 bottom-0 w-80 max-w-full bg-card shadow-xl overflow-y-auto">
              <div className="pt-20 pb-6 px-6">
                <div className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <div key={link.name}>
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-4 py-3 text-base font-medium text-foreground hover:bg-accent hover:text-primary rounded-lg transition-colors"
                      >
                        {link.name}
                      </Link>
                      {link.submenu && (
                        <div className="ml-4 border-l-2 border-border pl-4">
                          {link.submenu.map((sublink) => (
                            <Link
                              key={sublink.name}
                              href={sublink.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block px-4 py-2 text-sm text-foreground/70 hover:text-primary transition-colors"
                            >
                              {sublink.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-border">
                  <a
                    href="tel:+917620838449"
                    className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-foreground/80"
                  >
                    <Phone className="w-4 h-4" />
                    <span>+91 7620838449</span>
                  </a>
                  <Button className="w-full mt-3" asChild>
                    <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                      Apply Now
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}