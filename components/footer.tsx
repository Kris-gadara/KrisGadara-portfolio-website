"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-4">Kris Gadara</h3>
            <p className="text-blue-100 max-w-md mx-auto text-lg">
              Full Stack Developer passionate about creating innovative solutions and building amazing user experiences.
            </p>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/Kris-gadara"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              <Github className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/kris-gadara-1580b9343"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </a>
            <a
              href="mailto:krishgadara0701@gmail.com"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              <Mail className="w-6 h-6 text-white" />
            </a>
          </div>

          <div className="border-t border-white/20 pt-8">
            <p className="text-blue-100 text-sm flex items-center justify-center">
              Made with <Heart className="w-4 h-4 text-red-400 mx-1" /> by Kris Gadara © 2025
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
