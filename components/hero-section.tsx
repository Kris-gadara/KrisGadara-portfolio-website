"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

export default function HeroSection() {
  const scrollToProjects = () => {
    if (typeof window !== "undefined") {
      const element = document.getElementById("projects")
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  const scrollToContact = () => {
    if (typeof window !== "undefined") {
      const element = document.getElementById("contact")
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="text-blue-600 font-semibold text-lg">Hello, I'm</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent leading-tight"
          >
            Kris Gadara
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl text-gray-600 mb-8 font-medium"
          >
            Full Stack Developer & IT Professional
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-600 text-lg mb-10 leading-relaxed max-w-xl"
          >
            Aspiring web developer skilled in HTML, CSS, JavaScript, and React.js, with a passion for creating
            responsive and user-friendly web applications. Eager to contribute to impactful projects while enhancing
            technical expertise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={scrollToProjects}
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
              onClick={scrollToContact}
            >
              Get In Touch
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex space-x-6"
          >
            <a
              href="https://github.com/Kris-gadara"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 group"
            >
              <Github className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/kris-gadara-1580b9343"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 group"
            >
              <Linkedin className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
            </a>
            <a
              href="mailto:krishgadara0701@gmail.com"
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl border border-gray-200 hover:border-blue-300 transition-all duration-300 group"
            >
              <Mail className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-3xl transform rotate-6 opacity-20"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-blue-100">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                  KG
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Full Stack Developer</h3>
                <p className="text-gray-600 mb-4">CHARUSAT University</p>
                <div className="flex justify-center space-x-4 text-sm text-gray-500">
                  <span>GPA: 8.65</span>
                  <span>•</span>
                  <span>B.Tech IT</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
