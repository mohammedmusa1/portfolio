import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <a
  href="/resume-musa.pdf"
  download
  style={{
    padding: "10px 20px",
    background: "blue",
    color: "white",
    borderRadius: "5px",
    display: "inline-block",
    marginTop: "20px"
  }}
>
  Download Resume
</a>
      </main>
      <Footer />
    </>
  )
}
