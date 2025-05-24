"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { Text, Float, Environment, OrbitControls } from "@react-three/drei"
import { gsap } from "gsap"
import type * as THREE from "three" // Import THREE

interface Skill {
  name: string
  category: "frontend" | "backend" | "language" | "design" | "database" | "other"
  level: number // 1-10
}

export default function SkillsSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  const skills: Skill[] = [
    // Frontend
    { name: "HTML", category: "frontend", level: 9 },
    { name: "CSS", category: "frontend", level: 8 },
    { name: "JavaScript", category: "frontend", level: 8 },
    { name: "React", category: "frontend", level: 7 },

    // Backend
    { name: "Node.js", category: "backend", level: 6 },

    // Languages
    { name: "C", category: "language", level: 7 },
    { name: "C++", category: "language", level: 7 },
    { name: "Java", category: "language", level: 6 },
    { name: "Python", category: "language", level: 6 },

    // Design
    { name: "Responsive Design", category: "design", level: 8 },
    { name: "Data Visualization", category: "design", level: 7 },

    // Database
    { name: "SQL", category: "database", level: 7 },

    // Other
    { name: "Flutter", category: "other", level: 6 },
    { name: "Unity", category: "other", level: 7 },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "frontend":
        return "#ff4500"
      case "backend":
        return "#4169e1"
      case "language":
        return "#9932cc"
      case "design":
        return "#32cd32"
      case "database":
        return "#ffa500"
      case "other":
        return "#1e90ff"
      default:
        return "#ffffff"
    }
  }

  const SkillsCloud = () => {
    const groupRef = useRef<THREE.Group>(null)

    useEffect(() => {
      if (groupRef.current) {
        gsap.to(groupRef.current.rotation, {
          y: Math.PI * 2,
          duration: 40,
          repeat: -1,
          ease: "none",
        })
      }
    }, [])

    return (
      <group ref={groupRef}>
        {skills.map((skill, index) => {
          const phi = Math.acos(-1 + (2 * index) / skills.length)
          const theta = Math.sqrt(skills.length * Math.PI) * phi

          const x = 3 * Math.cos(theta) * Math.sin(phi)
          const y = 3 * Math.sin(theta) * Math.sin(phi)
          const z = 3 * Math.cos(phi)

          return (
            <Float key={skill.name} speed={2} rotationIntensity={0.5} floatIntensity={0.5} position={[x, y, z]}>
              <Text
                color={getCategoryColor(skill.category)}
                fontSize={0.3 + skill.level * 0.03}
                font="/fonts/Inter_Bold.json"
                anchorX="center"
                anchorY="middle"
              >
                {skill.name}
              </Text>
            </Float>
          )
        })}
      </group>
    )
  }

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
          Skills
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
          Here are the technologies and skills I've worked with. Hover over the 3D cloud to explore.
        </motion.p>

        <motion.div
          ref={containerRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="h-[500px] w-full"
        >
          <Canvas>
            <SkillsCloud />
            <Environment preset="sunset" />
            <OrbitControls
              enableZoom={false}
              autoRotate={false}
              enablePan={false}
              minPolarAngle={Math.PI / 3}
              maxPolarAngle={Math.PI / 1.5}
            />
          </Canvas>
        </motion.div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-6 gap-4">
          {["frontend", "backend", "language", "design", "database", "other"].map((category) => (
            <div key={category} className="flex items-center">
              <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: getCategoryColor(category) }} />
              <span className="text-sm text-gray-300 capitalize">{category}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

