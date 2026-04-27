"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Mail, ArrowUp, Heart } from "lucide-react"

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/mohammedmusa1",
    label: "GitHub"
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/shaikh-mohammed-musa-759052268/",
    label: "LinkedIn"
  },
  {
    icon: Mail,
    href: "mailto:shaikhmusa991@gmail.com",
    label: "Email"
  }
]

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative overflow-hidden border-t border-border/50 bg-gradient-to-b from-background to-muted/30 px-6 py-16 lg:px-8">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="gradient-orb gradient-orb-1 absolute left-1/4 top-0 h-[300px] w-[300px] opacity-10" />
        <div className="gradient-orb gradient-orb-2 absolute bottom-0 right-1/4 h-[200px] w-[200px] opacity-10" />
      </div>

      {/* Gradient line at top */}
      <div className="absolute top-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Link href="/" className="group inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/20 transition-transform group-hover:scale-105">
                <span className="text-xl font-bold text-white">M</span>
              </div>
              <span className="text-2xl font-bold text-foreground">Musa</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Cloud & Security Engineer crafting secure, scalable digital solutions. 
              Transforming ideas into robust infrastructure from Udgir, India.
            </p>
            
            {/* Social links */}
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/50 bg-card/50 text-muted-foreground backdrop-blur-sm transition-all hover:border-primary hover:bg-primary/10 hover:text-primary hover:shadow-lg hover:shadow-primary/10"
                  aria-label={link.label}
                >
                  <link.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="mb-4 text-sm font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="mb-4 text-sm font-semibold text-foreground">Contact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="mailto:shaikhmusa991@gmail.com" className="transition-colors hover:text-primary">
                  shaikhmusa991@gmail.com
                </a>
              </li>
              <li>Udgir, Maharashtra, India</li>
              <li className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className="text-emerald-600 font-medium">Available for work</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 md:flex-row"
        >
          <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
            {currentYear} Made with <Heart className="h-3.5 w-3.5 text-red-500 animate-pulse" /> by Shaikh Mohammed Musa
          </p>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 rounded-xl border border-border/50 bg-card/50 px-5 py-2.5 text-sm font-medium text-muted-foreground backdrop-blur-sm transition-all hover:border-primary hover:bg-primary/5 hover:text-primary hover:shadow-lg"
          >
            Back to top
            <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
          </button>
        </motion.div>
      </div>
    </footer>
  )
}
