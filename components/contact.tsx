"use client"

import { useState, useRef, FormEvent } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import { Send, Loader2, CheckCircle, AlertCircle, Mail, MapPin, Phone, ArrowUpRight, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const EMAILJS_SERVICE_ID = "service_3ws2sg8"
const EMAILJS_TEMPLATE_ID = "template_78a51yk"
const EMAILJS_PUBLIC_KEY = "kt7gOhal177zxFwT7"

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY)

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "shaikhmusa991@gmail.com",
    href: "mailto:shaikhmusa991@gmail.com",
    gradient: "from-primary to-accent"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Udgir, Maharashtra, India",
    href: "#",
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 XXXXX XXXXX",
    href: "#",
    gradient: "from-amber-500 to-orange-500"
  }
]

const socialLinks = [
  {
    label: "LinkedIn",
    value: "Shaikh Mohammed Musa",
    href: "https://www.linkedin.com/in/shaikh-mohammed-musa-759052268/"
  },
  {
    label: "GitHub",
    value: "@mohammedmusa1",
    href: "https://github.com/mohammedmusa1"
  }
]

type FormStatus = "idle" | "loading" | "success" | "error"

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<FormStatus>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return

    setStatus("loading")
    setErrorMessage("")

    try {
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      
      if (result.status === 200) {
        setStatus("success")
        formRef.current.reset()
        setTimeout(() => setStatus("idle"), 5000)
      } else {
        throw new Error("Failed to send email")
      }
    } catch (error) {
      setStatus("error")
      const errorMsg = error instanceof Error ? error.message : "Unknown error"
      setErrorMessage(`Failed to send: ${errorMsg}. Please try again or email directly.`)
      setTimeout(() => setStatus("idle"), 5000)
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-24 lg:px-8 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="gradient-orb gradient-orb-1 absolute left-1/4 top-0 h-[500px] w-[500px] opacity-15" />
        <div className="gradient-orb gradient-orb-2 absolute bottom-0 right-1/4 h-[400px] w-[400px] opacity-10" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5"
          >
            <MessageSquare className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Get In Touch</span>
          </motion.div>
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Let&apos;s Work <span className="gradient-text">Together</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Have a project in mind or want to discuss opportunities? 
            I&apos;m always open to new challenges and collaborations.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact info side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Contact cards */}
            {contactInfo.map((info, i) => (
              <motion.a
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                href={info.href}
                className="group flex items-center gap-4 rounded-2xl border border-border/50 bg-card/80 p-5 backdrop-blur-sm transition-all card-hover"
              >
                <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${info.gradient} shadow-lg transition-transform group-hover:scale-110`}>
                  <info.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">{info.label}</p>
                  <p className="font-semibold text-foreground">{info.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Social links */}
            <div className="pt-6">
              <h3 className="mb-4 text-lg font-semibold text-foreground">Connect with me</h3>
              <div className="space-y-3">
                {socialLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-xl border border-border/50 bg-card/80 p-4 backdrop-blur-sm transition-all card-hover"
                  >
                    <div>
                      <p className="text-xs font-medium text-muted-foreground">{link.label}</p>
                      <p className="font-semibold text-foreground">{link.value}</p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Decorative glow */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-50 blur-2xl" />
            
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="relative rounded-2xl border border-border/50 bg-card/90 p-8 backdrop-blur-sm shadow-xl"
            >
              <h3 className="mb-6 text-xl font-semibold text-foreground">Send a message</h3>
              
              <div className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="from_name" className="text-sm font-medium text-foreground">
                      Your Name
                    </label>
                    <Input
                      id="from_name"
                      name="from_name"
                      type="text"
                      placeholder="John Doe"
                      required
                      disabled={status === "loading"}
                      className="h-12 rounded-xl border-border/50 bg-muted/30 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="from_email" className="text-sm font-medium text-foreground">
                      Your Email
                    </label>
                    <Input
                      id="from_email"
                      name="from_email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      disabled={status === "loading"}
                      className="h-12 rounded-xl border-border/50 bg-muted/30 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Project Inquiry"
                    disabled={status === "loading"}
                    className="h-12 rounded-xl border-border/50 bg-muted/30 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                    disabled={status === "loading"}
                    className="resize-none rounded-xl border-border/50 bg-muted/30 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-4 text-sm text-emerald-600"
                  >
                    <CheckCircle className="h-5 w-5" />
                    Message sent successfully! I&apos;ll get back to you soon.
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 rounded-xl bg-red-500/10 border border-red-500/20 p-4 text-sm text-red-600"
                  >
                    <AlertCircle className="h-5 w-5" />
                    {errorMessage}
                  </motion.div>
                )}

                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-gradient h-12 w-full gap-2 rounded-xl text-sm font-semibold text-white transition-all"
                  size="lg"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {status === "loading" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </span>
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
