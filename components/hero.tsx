"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowDown, Download, Sparkles } from "lucide-react"

const roles = [
  "Cloud DevOps",
  "Security",
  "Full Stack",
  "AI/ML",
  "Pentesting"
]

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-background">
      {/* Premium background with gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main gradient orb */}
        <div className="gradient-orb gradient-orb-1 absolute -right-32 -top-32 h-[600px] w-[600px] opacity-30" />
        <div className="gradient-orb gradient-orb-2 absolute -left-32 top-1/2 h-[400px] w-[400px] opacity-20" />
        <div className="gradient-orb gradient-orb-1 absolute bottom-0 right-1/4 h-[300px] w-[300px] opacity-20" />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(var(--color-foreground) 1px, transparent 1px),
                              linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-20 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
        {/* Left content */}
        <div className="flex-1 lg:pr-8">
          {/* Name badge with glow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/5 px-4 py-2"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Shaikh Mohammed Musa</span>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
          </motion.div>

          {/* Main heading with gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6 text-5xl font-bold leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl"
          >
            <span className="block">Hello, my</span>
            <span className="block">name&apos;s Musa.</span>
            <span className="block mt-2">
              <span className="gradient-text text-glow">I&apos;m a Multi-Stack</span>
            </span>
            <span className="gradient-text text-glow">Engineer.</span>
          </motion.h1>

          {/* Role badges with stagger animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-8 flex flex-wrap gap-2"
          >
            {roles.map((role, i) => (
              <motion.span
                key={role}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="rounded-full border border-primary/20 bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm transition-shadow hover:shadow-lg hover:shadow-primary/10"
              >
                {role}
              </motion.span>
            ))}
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            Building secure, scalable cloud infrastructure with expertise in AWS, DevOps automation, 
            penetration testing, and modern web development. Passionate about combining AI with security.
          </motion.p>

          {/* CTA buttons with premium styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href="#projects"
              className="group btn-gradient relative rounded-2xl px-8 py-4 text-sm font-semibold text-white transition-all"
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  &rarr;
                </motion.span>
              </span>
            </Link>
            <Link
              href="#contact"
              className="group flex items-center gap-2 rounded-2xl border border-border bg-card/80 px-8 py-4 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:border-primary hover:bg-primary/5 hover:shadow-lg"
            >
              <Download className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
              Download CV
            </Link>
          </motion.div>
        </div>

        {/* Right content - Premium code card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 flex-1 lg:mt-0"
        >
          <div className="relative mx-auto max-w-md lg:max-w-lg">
            {/* Floating geometric shapes */}
            <motion.div
              animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-8 top-8 h-20 w-20 rounded-2xl bg-gradient-to-br from-primary/80 to-accent/80 shadow-xl shadow-primary/20"
            />
            <motion.div
              animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -right-4 top-1/4 h-16 w-16 rounded-xl bg-gradient-to-br from-pink-400 to-rose-500 shadow-xl shadow-pink-500/20"
            />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -left-4 bottom-1/4 h-12 w-12 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 shadow-xl shadow-amber-500/20"
            />
            <motion.div
              animate={{ y: [0, 12, 0], x: [0, 5, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              className="absolute -bottom-4 right-1/4 h-10 w-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 shadow-xl shadow-emerald-500/20"
            />

            {/* Main card with glassmorphism */}
            <div className="relative rounded-3xl border border-white/20 bg-white/80 p-1 shadow-2xl shadow-primary/10 backdrop-blur-xl">
              <div className="rounded-[22px] bg-gradient-to-br from-white to-slate-50 p-6">
                {/* Code preview */}
                <div className="rounded-2xl bg-slate-900 p-6 font-mono text-sm shadow-inner">
                  <div className="mb-4 flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                    <span className="ml-2 text-xs text-slate-500">engineer.ts</span>
                  </div>
                  <div className="space-y-1.5 text-slate-300">
                    <p><span className="text-purple-400">const</span> <span className="text-blue-400">engineer</span> = {"{"}</p>
                    <p className="pl-4"><span className="text-slate-500">name:</span> <span className="text-emerald-400">&quot;Musa Shaikh&quot;</span>,</p>
                    <p className="pl-4"><span className="text-slate-500">expertise:</span> [</p>
                    <p className="pl-8"><span className="text-emerald-400">&quot;Cloud DevOps&quot;</span>,</p>
                    <p className="pl-8"><span className="text-emerald-400">&quot;Security&quot;</span>,</p>
                    <p className="pl-8"><span className="text-emerald-400">&quot;Full Stack&quot;</span></p>
                    <p className="pl-4">],</p>
                    <p className="pl-4"><span className="text-slate-500">passion:</span> <span className="text-emerald-400">&quot;AI + Security&quot;</span>,</p>
                    <p className="pl-4"><span className="text-slate-500">available:</span> <span className="text-amber-400">true</span></p>
                    <p>{"}"}</p>
                  </div>
                </div>

                {/* Status badge */}
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                    </span>
                    <span className="text-sm font-medium text-foreground">Available for work</span>
                  </div>
                  <span className="text-sm text-muted-foreground">Udgir, India</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-muted-foreground/30 p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="h-2 w-1 rounded-full bg-primary"
            />
          </div>
          <span className="text-xs font-medium text-muted-foreground">Scroll down</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
