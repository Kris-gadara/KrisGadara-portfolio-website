"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export default function ProjectsSection() {
  const projects = [
    {
      title: "Paper Trading Platform",
      description:
        "A comprehensive stock trading simulation platform with real-time market data, portfolio management, and advanced trading analytics for learning investment strategies.",
      technologies: ["React", "Node.js", "MongoDB", "WebSocket", "Chart.js", "Express"],
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=300&fit=crop&crop=center",
      github: "https://github.com/Kris-gadara",
      demo: "#",
    },
    {
      title: "Modern Expense Tracker",
      description:
        "A sleek expense tracking application with budget management, category-wise analysis, financial insights, and detailed reporting for personal finance management.",
      technologies: ["React", "Firebase", "Chart.js", "Material-UI", "PWA"],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop&crop=center",
      github: "https://github.com/Kris-gadara",
      demo: "#",
    },
    {
      title: "Socket Chat Project",
      description:
        "Real-time chat application with multiple rooms, file sharing, user authentication, message encryption, and responsive design using Socket.io technology.",
      technologies: ["Node.js", "Socket.io", "Express", "MongoDB", "React", "JWT"],
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=500&h=300&fit=crop&crop=center",
      github: "https://github.com/Kris-gadara",
      demo: "#",
    },
    {
      title: "Image Generation Tool",
      description:
        "AI-powered image generation tool using pre-trained models with custom prompts, style transfer capabilities, and advanced image processing features.",
      technologies: ["Python", "TensorFlow", "Flask", "React", "OpenAI API", "PIL"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop&crop=center",
      github: "https://github.com/Kris-gadara",
      demo: "#",
    },
    {
      title: "E-Commerce Website",
      description:
        "Full-featured e-commerce platform with product listings, shopping cart, payment gateway integration, admin panel, and comprehensive order management system.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop&crop=center",
      github: "https://github.com/Kris-gadara",
      demo: "#",
    },
    {
      title: "Unity 3D Racing Game",
      description:
        "Multiplayer car racing game with realistic physics, multiple tracks, competitive gameplay mechanics, and immersive 3D graphics using Unity engine.",
      technologies: ["Unity", "C#", "Photon", "3D Modeling", "Physics Engine"],
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&h=300&fit=crop&crop=center",
      github: "https://github.com/Kris-gadara",
      demo: "#",
    },
  ]

  return (
    <div className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills, creativity, and passion for development across
            various technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white border-gray-200 hover:border-blue-400 transition-all duration-300 h-full group shadow-lg hover:shadow-2xl">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          className="bg-white/90 text-gray-800 hover:bg-white shadow-lg"
                          onClick={() => window.open(project.github, "_blank")}
                        >
                          <Github className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          className="bg-blue-600 text-white hover:bg-blue-700 shadow-lg"
                          onClick={() => window.open(project.demo, "_blank")}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200 text-xs px-2 py-1"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-gray-300 text-gray-700 hover:bg-gray-50 flex-1"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white flex-1"
                        onClick={() => window.open(project.demo, "_blank")}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
