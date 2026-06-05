import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

const footerLinks = {
  loans: [
    { name: "Home Loan", href: "/loans#home-loan" },
    { name: "Car Loan", href: "/loans#car-loan" },
    { name: "Personal Loan", href: "/loans#personal-loan" },
    { name: "Business Loan", href: "/loans#business-loan" },
    { name: "Education Loan", href: "/loans#education-loan" },
    { name: "Gold Loan", href: "/loans#gold-loan" },
  ],
  insurance: [
    { name: "Health Insurance", href: "/insurance#health" },
    { name: "Car Insurance", href: "/insurance#car" },
    { name: "Life Insurance", href: "/insurance#life" },
    { name: "Travel Insurance", href: "/insurance#travel" },
    { name: "Family Insurance", href: "/insurance#family" },
    { name: "Business Insurance", href: "/insurance#business" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Us", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
  ],
  tools: [
    { name: "EMI Calculator", href: "/emi-calculator" },
    { name: "Loan Eligibility", href: "/loan-eligibility" },
    { name: "Insurance Quote", href: "/insurance-quote" },
    { name: "Compare Plans", href: "/compare" },
  ],
}

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">K</span>
              </div>
              <span className="font-bold text-xl text-background">
                Kalyani<span className="text-primary">Finance</span>
              </span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Your trusted partner for smart financial solutions. We help you achieve your dreams with the best loan and insurance products tailored to your needs.
            </p>
            <div className="space-y-3">
              <a href="tel:+919999999999" className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors text-sm">
                <Phone className="w-4 h-4" />
                <span>+91 7620838449</span>
              </a>
              <a href="mailto:info@kalyanifinance.com" className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors text-sm">
                <Mail className="w-4 h-4" />
                <span>info@kalyanifinance.com</span>
              </a>
              <div className="flex items-start gap-3 text-background/70 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Handewadi Road, Pune 411001, India</span>
              </div>
            </div>
          </div>

          {/* Loans */}
          <div>
            <h3 className="font-semibold text-background mb-4">Loans</h3>
            <ul className="space-y-2">
              {footerLinks.loans.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-background/70 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Insurance */}
          <div>
            <h3 className="font-semibold text-background mb-4">Insurance</h3>
            <ul className="space-y-2">
              {footerLinks.insurance.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-background/70 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-background mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-background/70 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="font-semibold text-background mb-4">Tools</h3>
            <ul className="space-y-2">
              {footerLinks.tools.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-background/70 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-background/60">
              © {new Date().getFullYear()} KalyaniFinance. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center text-background/70 hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
