"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei"
import ProjectModel from "@/components/project-model"

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  modelType: "car" | "store" | "weather"
}

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<number | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: "Unity 3D Game",
      description: "A 3D multiplayer car racing game made in Unity, using C#.",
      technologies: ["Unity", "C#", "3D Modeling", "Multiplayer"],
      modelType: "car",
    },
    {
      id: 2,
      title: "E-Commerce Website",
      description:
        "Built a fully functional e-commerce platform with product listings, a shopping cart, and payment gateway integration.",
      technologies: ["HTML", "CSS", "JavaScript", "Database"],
      modelType: "store",
    },
    {
      id: 3,
      title: "Weather App",
      description: "Developed a real-time weather forecast app using OpenWeather API.",
      technologies: ["HTML", "CSS", "JavaScript", "API Integration"],
      modelType: "weather",
    },
  ]

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-2"
        >
          Projects
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: "100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="h-1 bg-primary mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-gray-300 text-lg mb-10"
        >
          Here are some of the projects I've worked on. Click on a project to see more details.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className={`bg-black/50 backdrop-blur-sm transition-all duration-300 overflow-hidden cursor-pointer ${
                  activeProject === project.id ? "border-primary" : "border-primary/20 hover:border-primary/50"
                }`}
                onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
              >
                <CardContent className="p-0">
                  <div className="h-48 relative">
                    <Canvas>
                      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                      <ProjectModel type={project.modelType} isActive={activeProject === project.id} />
                      <Environment preset="sunset" />
                      <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        autoRotate={activeProject === project.id}
                        autoRotateSpeed={4}
                      />
                    </Canvas>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="border-primary/20 text-primary">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                      <Button size="sm" variant="outline" className="border-primary/20 text-primary">
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
      </motion.div>
    </div>
  )
}

