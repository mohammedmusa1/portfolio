"use client"

import { motion } from "framer-motion"
import { Cloud, Shield, Code, Brain, Database, Wrench } from "lucide-react"

const skillCategories = [
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    color: "from-blue-500 to-cyan-500",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "CloudWatch", "Lambda", "S3", "EC2"]
  },
  {
    icon: Shield,
    title: "Security & Pentesting",
    color: "from-red-500 to-orange-500",
    skills: ["Penetration Testing", "Bug Bounty", "OWASP Top 10", "Vulnerability Assessment", "Network Security", "Burp Suite"]
  },
  {
    icon: Code,
    title: "Full Stack Development",
    color: "from-primary to-accent",
    skills: ["React", "Next.js", "Node.js", "TypeScript", "Python", "REST APIs", "GraphQL", "PostgreSQL"]
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    color: "from-purple-500 to-pink-500",
    skills: ["CNN", "RNN", "LSTM", "TensorFlow", "PyTorch", "Scikit-learn", "Data Processing", "NLP"]
  },
  {
    icon: Database,
    title: "Databases",
    color: "from-emerald-500 to-teal-500",
    skills: ["MongoDB", "PostgreSQL", "DynamoDB", "MySQL", "Redis", "Supabase"]
  },
  {
    icon: Wrench,
    title: "Tools & Platforms",
    color: "from-slate-600 to-slate-800",
    skills: ["Git", "Linux", "VS Code", "Postman", "Figma", "Jira", "GitHub Actions"]
  }
]

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden px-6 py-24 lg:px-8 lg:py-32">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="gradient-orb gradient-orb-2 absolute -left-64 top-1/4 h-[500px] w-[500px] opacity-20" />
        <div className="gradient-orb gradient-orb-1 absolute -right-64 bottom-1/4 h-[400px] w-[400px] opacity-15" />
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
            <span className="text-sm font-medium text-primary">My Skills</span>
          </motion.div>
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Technologies & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            A comprehensive toolkit built through hands-on experience in cloud computing, 
            security, and modern software development.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-border/50 bg-card/80 p-6 backdrop-blur-sm card-hover"
            >
              {/* Gradient accent on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 transition-opacity duration-500 group-hover:opacity-[0.03]`} />
              
              {/* Icon with gradient background */}
              <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${category.color} shadow-lg`}>
                <category.icon className="h-6 w-6 text-white" />
              </div>

              <h3 className="mb-4 text-lg font-semibold text-foreground">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.1 + j * 0.03 }}
                    whileHover={{ scale: 1.05, y: -1 }}
                    className="rounded-full border border-border/50 bg-muted/50 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-all hover:border-primary/50 hover:bg-primary/5 hover:text-primary"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
