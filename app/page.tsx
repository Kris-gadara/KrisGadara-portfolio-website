"use client"

import { useEffect, useState, useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import ContactSection from "@/components/contact-section"
import Scene from "@/components/scene"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const mainRef = useRef<HTMLDivElement>(null)
  const [activeSection, setActiveSection] = useState("home")
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger)

      const sections = ["home", "about", "projects", "skills", "contact"]

      sections.forEach((section) => {
        ScrollTrigger.create({
          trigger: `#${section}`,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveSection(section),
          onEnterBack: () => setActiveSection(section),
        })
      })

      const handleScroll = () => {
        setScrollY(window.scrollY)
      }

      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <main ref={mainRef} className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* 3D Background */}
      <div className="fixed inset-0 z-0">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <Scene scrollY={scrollY} />
          <Environment preset="night" />
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar activeSection={activeSection} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

        <div className="container mx-auto px-4">
          <section id="home" className="min-h-screen flex items-center">
            <HeroSection />
          </section>

          <section id="about" className="min-h-screen flex items-center py-20">
            <AboutSection />
          </section>

          <section id="projects" className="min-h-screen flex items-center py-20">
            <ProjectsSection />
          </section>

          <section id="skills" className="min-h-screen flex items-center py-20">
            <SkillsSection />
          </section>

          <section id="contact" className="min-h-screen flex items-center py-20">
            <ContactSection />
          </section>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="bg-black/50 backdrop-blur-md border-primary/20"
        >
          <Menu className="h-6 w-6 text-primary" />
        </Button>
      </div>
    </main>
  )
}

