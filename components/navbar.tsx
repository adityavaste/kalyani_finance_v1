"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion"
import { 
  Menu, X, Phone, ChevronDown, ArrowRight, 
  Sparkles, Home, TrendingUp, Shield, Calculator,
  Users, BookOpen, Mail
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRef } from "react"

const navLinks = [
  { 
    name: "Home", 
    href: "/",
    icon: Home,
  },
  { 
    name: "Loans", 
    href: "/loans",
    icon: TrendingUp,
    submenu: [
      { name: "Home Loan", href: "/loans/home-loan", desc: "From 7.5% p.a.", icon: "🏠" },
      { name: "Car Loan", href: "/loans/car-loan", desc: "From 9.0% p.a.", icon: "🚗" },
      { name: "Personal Loan", href: "/loans/personal-loan", desc: "From 10.5% p.a.", icon: "💰" },
      { name: "Business Loan", href: "/loans/business-loan", desc: "From 11.0% p.a.", icon: "💼" },
      { name: "Education Loan", href: "/loans/education-loan", desc: "From 8.0% p.a.", icon: "🎓" },
      { name: "Gold Loan", href: "/loans/gold-loan", desc: "From 7.5% p.a.", icon: "🪙" },
      { name: "Loan Against Property", href: "/loans/loan-against-property", desc: "From 9.5% p.a.", icon: "🏢" },
    ]
  },
  { 
    name: "Insurance", 
    href: "/insurance",
    icon: Shield,
    submenu: [
      { name: "Health Insurance", href: "/insurance/health-insurance", desc: "From ₹499/mo", icon: "🏥" },
      { name: "Car Insurance", href: "/insurance/car-insurance", desc: "From ₹2,094/yr", icon: "🚗" },
      { name: "Life Insurance", href: "/insurance/life-insurance", desc: "From ₹490/mo", icon: "🛡️" },
      { name: "Travel Insurance", href: "/insurance/travel-insurance", desc: "From ₹45/day", icon: "✈️" },
    ]
  },
  { 
    name: "Tools", 
    href: "/emi-calculator",
    icon: Calculator,
    submenu: [
      { name: "EMI Calculator", href: "/emi-calculator", desc: "Plan your EMIs", icon: "🧮" },
      { name: "Loan Eligibility", href: "/loan-eligibility", desc: "Check eligibility", icon: "✅" },
      { name: "Compare Plans", href: "/compare", desc: "Find best rates", icon: "📊" },
    ]
  },
  { 
    name: "About", 
    href: "/about",
    icon: Users,
  },
  { 
    name: "Blog", 
    href: "/blog",
    icon: BookOpen,
  },
  { 
    name: "Contact", 
    href: "/contact",
    icon: Mail,
  },
]

// 3D Tilt for dropdown
function useTilt() {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)
  
  const rotateX = useSpring(useTransform(y, [0, 1], [5, -5]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(x, [0, 1], [-5, 5]), { stiffness: 300, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width)
    y.set((e.clientY - rect.top) / rect.height)
  }

  const handleMouseLeave = () => {
    x.set(0.5)
    y.set(0.5)
  }

  return { ref, rotateX, rotateY, handleMouseMove, handleMouseLeave }
}

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const { ref, rotateX, rotateY, handleMouseMove, handleMouseLeave } = useTilt()

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => { document.body.style.overflow = "unset" }
  }, [isMobileMenuOpen])

  return (
    <>
      {/* Main Steady Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-card/90 backdrop-blur-xl shadow-md shadow-primary/5 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div 
                whileHover={{ rotate: 5, scale: 1.05 }}
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20"
              >
                <span className="text-white font-bold text-xl">K</span>
              </motion.div>
              <div className="hidden sm:block">
                <span className="font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                  Kalyani<span className="text-primary">Finance</span>
                </span>
                <div className="text-[10px] font-semibold tracking-widest uppercase text-muted-foreground">
                  Smart Financial Solutions
                </div>
              </div>
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
                    className={`
                      flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-300
                      ${activeSubmenu === link.name 
                        ? 'bg-primary/10 text-primary' 
                        : 'text-foreground/70 hover:text-foreground hover:bg-accent'
                      }
                    `}
                  >
                    <link.icon className="w-4 h-4" />
                    {link.name}
                    {link.submenu && (
                      <motion.div
                        animate={{ rotate: activeSubmenu === link.name ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown className="w-3.5 h-3.5" />
                      </motion.div>
                    )}
                  </Link>
                  
                  {/* Mega Dropdown */}
                  <AnimatePresence>
                    {link.submenu && activeSubmenu === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        style={{ perspective: 1000 }}
                        className="absolute top-full left-0 mt-2"
                      >
                        <motion.div
                          ref={ref}
                          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                          onMouseMove={handleMouseMove}
                          onMouseLeave={handleMouseLeave}
                          className="w-72 bg-card/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-primary/10 border border-border/50 overflow-hidden"
                        >
                          <div className="p-2">
                            {link.submenu.map((sublink, index) => (
                              <motion.div
                                key={sublink.name}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                              >
                                <Link
                                  href={sublink.href}
                                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm hover:bg-primary/5 hover:text-primary transition-all group"
                                >
                                  <span className="text-xl">{sublink.icon}</span>
                                  <div className="flex-1">
                                    <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                                      {sublink.name}
                                    </div>
                                    <div className="text-xs text-muted-foreground">
                                      {sublink.desc}
                                    </div>
                                  </div>
                                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-primary" />
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                          
                          {/* Dropdown Footer */}
                          <div className="px-4 py-3 bg-gradient-to-r from-primary/5 to-secondary/5 border-t border-border/50">
                            <Link 
                              href={link.href} 
                              className="flex items-center justify-between text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
                            >
                              <span>View All {link.name}</span>
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <motion.a
                href="tel:+917620838449"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-foreground/70 hover:text-primary hover:bg-accent transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-green-500" />
                </div>
                <span>+91 7620838449</span>
              </motion.a>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild className="gap-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-lg shadow-primary/25">
                  <Link href="/contact">
                    <Sparkles className="w-4 h-4" />
                    Apply Now
                  </Link>
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="lg:hidden p-2.5 rounded-xl hover:bg-accent transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <X className="w-6 h-6 text-foreground" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Menu className="w-6 h-6 text-foreground" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-foreground/60 backdrop-blur-sm" 
              onClick={() => setIsMobileMenuOpen(false)} 
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-card shadow-2xl overflow-y-auto"
            >
              {/* Header */}
              <div className="sticky top-0 z-10 bg-card/95 backdrop-blur-xl border-b border-border/50 p-6 pt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <span className="text-white font-bold text-xl">K</span>
                  </div>
                  <div>
                    <div className="font-bold text-lg text-foreground">KalyaniFinance</div>
                    <div className="text-xs text-muted-foreground">Smart Financial Solutions</div>
                  </div>
                </div>
                <a 
                  href="tel:+917620838449" 
                  className="flex items-center gap-2 text-sm font-medium text-primary"
                >
                  <Phone className="w-4 h-4" />
                  +91 7620838449
                </a>
              </div>

              {/* Links */}
              <div className="p-6 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => !link.submenu && setIsMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-4 py-3.5 text-base font-medium text-foreground hover:bg-accent hover:text-primary rounded-xl transition-all"
                    >
                      <link.icon className="w-5 h-5 text-muted-foreground" />
                      {link.name}
                      {link.submenu && <ChevronDown className="w-4 h-4 ml-auto text-muted-foreground" />}
                    </Link>
                    
                    {link.submenu && (
                      <div className="ml-4 space-y-1 pb-2">
                        {link.submenu.map((sublink) => (
                          <Link
                            key={sublink.name}
                            href={sublink.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-muted-foreground hover:text-primary rounded-xl transition-colors"
                          >
                            <span>{sublink.icon}</span>
                            <span>{sublink.name}</span>
                            <span className="ml-auto text-xs text-muted-foreground/60">{sublink.desc}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="sticky bottom-0 p-6 bg-card/95 backdrop-blur-xl border-t border-border/50">
                <Button 
                  size="lg" 
                  asChild 
                  className="w-full gap-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-lg"
                >
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <Sparkles className="w-5 h-5" />
                    Apply Now — It's Free
                  </Link>
                </Button>
                <p className="text-center text-xs text-muted-foreground mt-3">
                  No impact on CIBIL score
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}