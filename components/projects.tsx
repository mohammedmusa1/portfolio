"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Github, Star, GitFork, ExternalLink, Folder } from "lucide-react"
import useSWR from "swr"

interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
  fork: boolean
  pushed_at: string
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const languageColors: Record<string, string> = {
  JavaScript: "#f7df1e",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Java: "#b07219",
  C: "#555555",
  "C++": "#f34b7d",
  PHP: "#4F5D95",
  Shell: "#89e051",
  Go: "#00ADD8",
  Rust: "#dea584",
}

export function Projects() {
  const { data: repos, error, isLoading } = useSWR<GitHubRepo[]>(
    "https://api.github.com/users/mohammedmusa1/repos?sort=pushed&per_page=30",
    fetcher,
    { revalidateOnFocus: false }
  )

  const filteredRepos = repos
    ?.filter((repo) => !repo.fork)
    .sort((a, b) => {
      if (b.stargazers_count !== a.stargazers_count) {
        return b.stargazers_count - a.stargazers_count
      }
      return new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
    })
    .slice(0, 6)

  return (
    <section id="projects" className="relative overflow-hidden px-6 py-24 lg:px-8 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background" />
      <div className="absolute inset-0">
        <div className="gradient-orb gradient-orb-1 absolute right-0 top-0 h-[600px] w-[600px] opacity-10" />
        <div className="gradient-orb gradient-orb-2 absolute -left-32 bottom-0 h-[400px] w-[400px] opacity-10" />
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
            <Folder className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">My Work</span>
          </motion.div>
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            A collection of my recent work fetched directly from GitHub. Each project 
            represents my commitment to clean code and innovative solutions.
          </p>
        </motion.div>

        {/* Projects grid */}
        {isLoading ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-72 animate-pulse rounded-2xl border border-border/50 bg-card/50" />
            ))}
          </div>
        ) : error || !filteredRepos?.length ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-20 text-center"
          >
            <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent shadow-xl shadow-primary/20">
              <Github className="h-10 w-10 text-white" />
            </div>
            <p className="text-muted-foreground">Unable to load projects</p>
            <a
              href="https://github.com/mohammedmusa1"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-sm font-medium text-primary hover:underline"
            >
              Visit GitHub Profile
            </a>
          </motion.div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredRepos.map((repo, i) => (
              <motion.article
                key={repo.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative flex flex-col rounded-2xl border border-border/50 bg-card/80 p-6 backdrop-blur-sm card-hover"
              >
                {/* Gradient glow on hover */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                <div className="relative">
                  {/* Header */}
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 transition-all duration-300 group-hover:from-primary group-hover:to-accent group-hover:shadow-lg group-hover:shadow-primary/20">
                      <Github className="h-6 w-6 text-primary transition-colors group-hover:text-white" />
                    </div>
                    <div className="flex items-center gap-3">
                      {repo.stargazers_count > 0 && (
                        <span className="flex items-center gap-1 rounded-full bg-amber-500/10 px-2 py-1 text-xs font-medium text-amber-600">
                          <Star className="h-3 w-3" />
                          {repo.stargazers_count}
                        </span>
                      )}
                      {repo.forks_count > 0 && (
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <GitFork className="h-3 w-3" />
                          {repo.forks_count}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="mb-2 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                    {repo.name}
                  </h3>

                  {/* Description */}
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                    {repo.description || "No description available"}
                  </p>

                  {/* Language badge */}
                  {repo.language && (
                    <div className="mb-5 flex items-center gap-2">
                      <span
                        className="h-3 w-3 rounded-full shadow-sm"
                        style={{ backgroundColor: languageColors[repo.language] || "#737373" }}
                      />
                      <span className="text-xs font-medium text-muted-foreground">{repo.language}</span>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex items-center gap-3 border-t border-border/50 pt-4">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gradient flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold text-white"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <Github className="h-3.5 w-3.5" />
                        View Code
                      </span>
                    </a>
                    {repo.homepage && (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-xl border border-border bg-background/50 px-4 py-2.5 text-xs font-medium text-muted-foreground transition-all hover:border-primary hover:text-primary"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex justify-center"
        >
          <a
            href="https://github.com/mohammedmusa1?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-2xl border border-border bg-card/80 px-8 py-4 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:border-primary hover:shadow-xl hover:shadow-primary/10"
          >
            <Github className="h-5 w-5" />
            View More on GitHub
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
