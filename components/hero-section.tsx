"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (titleRef.current) {
      const letters = titleRef.current.innerText.split("")
      titleRef.current.innerHTML = ""

      letters.forEach((letter, i) => {
        const span = document.createElement("span")
        span.innerText = letter
        span.style.opacity = "0"
        span.style.display = letter === " " ? "inline" : "inline-block"
        titleRef.current?.appendChild(span)

        gsap.to(span, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.5 + i * 0.05,
          ease: "power2.out",
        })
      })
    }
  }, [])

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-primary font-medium mb-4"
        >
          Hello, I'm
        </motion.p>

        <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Kris Gadara
        </h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl md:text-3xl text-gray-300 mb-8"
        >
          Web Developer & IT Professional
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-gray-400 text-lg mb-10 max-w-2xl"
        >
          Aspiring web developer skilled in HTML, CSS, JavaScript, and React.js, with a passion for creating responsive
          and user-friendly web applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
            Download Resume
            <Download className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}

