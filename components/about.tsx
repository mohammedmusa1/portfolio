"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Cloud, Shield, Code, Brain, Terminal, Search, Sparkles } from "lucide-react"

const services = [
  {
    number: "01",
    icon: Cloud,
    title: "Cloud DevOps",
    description: "AWS infrastructure, Lambda, DynamoDB, S3, EC2, and CI/CD pipelines with Docker & Kubernetes.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    number: "02",
    icon: Shield,
    title: "Security Engineering",
    description: "Penetration testing, vulnerability assessments, bug bounty hunting, and OWASP compliance.",
    gradient: "from-red-500 to-orange-500"
  },
  {
    number: "03",
    icon: Code,
    title: "Full Stack Development",
    description: "End-to-end applications with React, Next.js, Node.js, TypeScript, and modern tech stacks.",
    gradient: "from-primary to-accent"
  },
  {
    number: "04",
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Deep learning models with CNN, RNN, LSTM using TensorFlow and PyTorch for automation.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    number: "05",
    icon: Search,
    title: "Penetration Testing",
    description: "Ethical hacking, security audits, and identifying vulnerabilities before attackers do.",
    gradient: "from-amber-500 to-orange-500"
  },
  {
    number: "06",
    icon: Terminal,
    title: "DevOps Automation",
    description: "Infrastructure as code with Terraform, automated deployments, and monitoring solutions.",
    gradient: "from-emerald-500 to-teal-500"
  }
]

const stats = [
  { value: "20+", label: "Projects Built" },
  { value: "50+", label: "Technologies Explored" },
  { value: "30+", label: "Security Reports Submitted" },
  { value: "24/7", label: "Active Learner" },
]

function AnimatedCounter({ value, label }: { value: string; label: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, type: "spring" }}
      className="text-center"
    >
      <p className="text-4xl font-bold gradient-text md:text-5xl">{value}</p>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </motion.div>
  )
}

export function About() {
  return (
    <section id="about" className="relative overflow-hidden px-6 py-24 lg:px-8 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      <div className="absolute inset-0">
        <div className="gradient-orb gradient-orb-1 absolute -right-64 top-1/4 h-[500px] w-[500px] opacity-15" />
        <div className="gradient-orb gradient-orb-2 absolute -left-64 bottom-1/4 h-[400px] w-[400px] opacity-10" />
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
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">About Me</span>
          </motion.div>
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            What I <span className="gradient-text">Do</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            I&apos;m a multi-disciplinary engineer with expertise spanning cloud infrastructure, 
            cybersecurity, web development, and artificial intelligence. Based in Udgir, Maharashtra, 
            I build secure, scalable solutions that drive real-world impact.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-border/50 bg-card/80 p-6 backdrop-blur-sm card-hover"
            >
              {/* Subtle gradient on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-[0.03]`} />
              
              <div className="relative">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-5xl font-bold text-border/50 transition-colors group-hover:text-primary/20">
                    {service.number}
                  </span>
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} shadow-lg transition-transform group-hover:scale-110`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* About me details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 grid gap-12 lg:grid-cols-2 lg:items-center"
        >
          {/* Text content */}
          <div>
            <h3 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
              Combining <span className="gradient-text">Security</span> with Innovation
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                With a strong foundation in cybersecurity and cloud computing, I specialize in 
                building robust infrastructure that&apos;s both scalable and secure. My experience 
                spans from penetration testing and bug bounty hunting to deploying production-grade 
                applications on AWS.
              </p>
              <p className="leading-relaxed">
                I&apos;m passionate about the intersection of AI and security, exploring how machine 
                learning can enhance threat detection and automate security workflows. When I&apos;m 
                not coding, you&apos;ll find me researching the latest security vulnerabilities or 
                contributing to open-source projects.
              </p>
            </div>
          </div>

          {/* Stats card with premium styling */}
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-50 blur-2xl" />
            
            <div className="relative rounded-2xl border border-border/50 bg-card/90 p-8 backdrop-blur-sm shadow-xl">
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, i) => (
                  <AnimatedCounter key={i} value={stat.value} label={stat.label} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
