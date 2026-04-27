"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Github, Linkedin } from "lucide-react"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-black/5" 
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/20 transition-transform group-hover:scale-105">
              <span className="text-lg font-bold text-white">M</span>
            </div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-background bg-emerald-400"
            />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">MUSA.</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-1 rounded-full border border-border/50 bg-card/50 px-2 py-1.5 backdrop-blur-sm md:flex">
          {navLinks.map((link, i) => (
            <motion.li 
              key={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={link.href}
                className="relative rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-muted"
              >
                {link.label}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Social Links & CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="https://github.com/mohammedmusa1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/50 bg-card/50 text-muted-foreground backdrop-blur-sm transition-all hover:border-primary hover:bg-primary/5 hover:text-primary"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/shaikh-mohammed-musa-759052268/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/50 bg-card/50 text-muted-foreground backdrop-blur-sm transition-all hover:border-primary hover:bg-primary/5 hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <Link
            href="#contact"
            className="btn-gradient rounded-xl px-6 py-2.5 text-sm font-semibold text-white"
          >
            <span className="relative z-10">Get in Touch</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-40 bg-background/80 backdrop-blur-md md:hidden"
                onClick={() => setIsOpen(false)}
              />
              
              {/* Menu */}
              <motion.div
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed inset-y-0 right-0 z-40 w-full max-w-sm border-l border-border/50 bg-card/95 backdrop-blur-xl md:hidden"
              >
                <ul className="flex flex-col items-start gap-4 p-8 pt-24">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="w-full"
                    >
                      <Link
                        href={link.href}
                        className="block rounded-xl px-4 py-3 text-2xl font-semibold text-foreground transition-colors hover:bg-primary/5 hover:text-primary"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                  <motion.li
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    className="w-full pt-4"
                  >
                    <Link
                      href="#contact"
                      className="btn-gradient block rounded-xl px-8 py-4 text-center text-lg font-semibold text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="relative z-10">Get in Touch</span>
                    </Link>
                  </motion.li>
                </ul>

                {/* Social links in mobile menu */}
                <div className="absolute bottom-8 left-8 right-8 flex justify-center gap-4">
                  <a
                    href="https://github.com/mohammedmusa1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shaikh-mohammed-musa-759052268/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
