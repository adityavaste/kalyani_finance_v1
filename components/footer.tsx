"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { 
  Phone, Mail, MapPin, Facebook, Twitter, Instagram, 
  Linkedin, Youtube, ArrowRight, Shield, BadgeCheck, 
  Award, CreditCard, Clock, Heart, ExternalLink,
  ChevronRight, Sparkles
} from "lucide-react"
import { Button } from "@/components/ui/button"

const footerLinks = {
  loans: [
    { name: "Home Loan", href: "/loans#home-loan", badge: "7.5% ROI" },
    { name: "Car Loan", href: "/loans#car-loan", badge: null },
    { name: "Personal Loan", href: "/loans#personal-loan", badge: "Popular" },
    { name: "Business Loan", href: "/loans#business-loan", badge: null },
    { name: "Education Loan", href: "/loans#education-loan", badge: null },
    { name: "Gold Loan", href: "/loans#gold-loan", badge: "Quick" },
  ],
  insurance: [
    { name: "Health Insurance", href: "/insurance#health", badge: null },
    { name: "Car Insurance", href: "/insurance#car", badge: null },
    { name: "Life Insurance", href: "/insurance#life", badge: null },
    { name: "Travel Insurance", href: "/insurance#travel", badge: null },
    { name: "Family Insurance", href: "/insurance#family", badge: null },
    { name: "Business Insurance", href: "/insurance#business", badge: null },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Us", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms-and-conditions" },
  ],
  tools: [
    { name: "EMI Calculator", href: "/emi-calculator" },
    { name: "Loan Eligibility", href: "/loan-eligibility" },
    { name: "Insurance Quote", href: "/insurance-quote" },
    { name: "Compare Plans", href: "/compare" },
  ],
}

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com", color: "hover:bg-blue-600" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com", color: "hover:bg-sky-500" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com", color: "hover:bg-pink-600" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com", color: "hover:bg-blue-700" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com", color: "hover:bg-red-600" },
]


export function Footer() {
  return (
    <footer className="relative bg-foreground text-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />

      {/* Top CTA Banner */}
      <div className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center justify-between gap-6 p-8 rounded-3xl bg-gradient-to-r from-primary/20 to-secondary/20 border border-white/10 backdrop-blur-sm"
          >
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                Still Deciding? Let's Talk.
              </h3>
              <p className="text-white/60 max-w-md">
                Get a free, no-obligation consultation with our experts. 
                We'll help you find the perfect financial solution.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild variant="outline" className="gap-2 border-white/30 text-black hover:bg-white hover:text-foreground transition-all">
                <Link href="tel:+919999999999">
                  <Phone className="w-4 h-4" />
                  Call Now
                </Link>
              </Button>
              <Button asChild className="gap-2 bg-white text-foreground hover:bg-white/90 shadow-xl">
                <Link href="/contact">
                  <Sparkles className="w-4 h-4" />
                  Get Free Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4"
          >
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg group-hover:shadow-primary/50 transition-shadow">
                <span className="text-white font-bold text-2xl">K</span>
              </div>
              <div>
                <span className="font-bold text-2xl text-white">
                  Kalyani<span className="text-primary">Finance</span>
                </span>
                <div className="text-xs text-white/40 font-medium tracking-wider">SMART FINANCIAL SOLUTIONS</div>
              </div>
            </Link>
            
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-sm">
              Your trusted partner for loans and insurance across India. 
              With 25+ bank partnerships, we get you the best rates — guaranteed.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              <a href="tel:+919999999999" className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors text-sm group">
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-white/40">Call us</div>
                  <div className="font-semibold">+91 7620838449</div>
                </div>
              </a>
              <a href="mailto:info@kalyanifinance.com" className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors text-sm group">
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-white/40">Email us</div>
                  <div className="font-semibold">info@kalyanifinance.com</div>
                </div>
              </a>
              <div className="flex items-start gap-3 text-white/70 text-sm">
                <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-white/40">Visit us</div>
                  <div className="font-semibold">Handewadi Road, Pune 411001, India</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/60
                    ${social.color} hover:text-white transition-all duration-300
                  `}
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Loans */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Loans</h3>
            <ul className="space-y-3">
              {footerLinks.loans.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="group flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary" />
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-primary/20 text-primary">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Insurance */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-2"
          >
            <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Insurance</h3>
            <ul className="space-y-3">
              {footerLinks.insurance.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="group flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary" />
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-primary/20 text-primary">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="group flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Tools */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="lg:col-span-2"
          >
            <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Tools</h3>
            <ul className="space-y-3">
              {footerLinks.tools.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="group flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

      
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <p className="text-sm text-white/40">
                © {new Date().getFullYear()} KalyaniFinance. All rights reserved.
              </p>
              <span className="hidden md:inline text-white/20">|</span>
              <p className="text-sm text-white/40 hidden md:block">
                Made with <Heart className="w-3 h-3 inline text-red-400 fill-red-400" /> in India
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-xs text-white/40 hover:text-white/70 transition-colors">
                Privacy
              </Link>
              <Link href="/terms-and-conditions" className="text-xs text-white/40 hover:text-white/70 transition-colors">
                Terms
              </Link>
              <Link href="/sitemap" className="text-xs text-white/40 hover:text-white/70 transition-colors">
                Sitemap
              </Link>
              <a 
                href="#" 
                className="flex items-center gap-1 text-xs text-white/40 hover:text-white/70 transition-colors"
              >
                <ExternalLink className="w-3 h-3" />
                Back to Top
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}