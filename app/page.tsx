"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ExperienceSection from "@/components/experience-section"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import CertificationsSection from "@/components/CertificationsSection"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const sections = ["home", "about", "experience", "projects", "skills", "certifications", "contact"]
        const scrollPosition = window.scrollY + 100

        sections.forEach((section) => {
          const element = document.getElementById(section)
          if (element) {
            const offsetTop = element.offsetTop
            const offsetHeight = element.offsetHeight

            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section)
            }
          }
        })
      }

      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-gray-900">
      <Navbar activeSection={activeSection} />

      <section id="home">
        <HeroSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="experience">
        <ExperienceSection />
      </section>

      <section id="projects">
        <ProjectsSection />
      </section>

      <section id="skills">
        <SkillsSection />
      </section>

      <section id="certifications">
        <CertificationsSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>

      <Footer />
    </main>
  )
}