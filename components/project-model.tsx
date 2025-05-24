"use client"

import { useRef, useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import { Box, Sphere, Torus } from "@react-three/drei"
import { gsap } from "gsap"
import type * as THREE from "three"

interface ProjectModelProps {
  type: "car" | "store" | "weather"
  isActive: boolean
}

export default function ProjectModel({ type, isActive }: ProjectModelProps) {
  const groupRef = useRef<THREE.Group>(null)

  useEffect(() => {
    if (groupRef.current) {
      gsap.to(groupRef.current.rotation, {
        y: isActive ? Math.PI * 2 : 0,
        duration: 1.5,
        ease: "power3.inOut",
      })

      gsap.to(groupRef.current.position, {
        y: isActive ? 0.5 : 0,
        duration: 1,
        ease: "back.out(1.7)",
      })
    }
  }, [isActive])

  useFrame((state, delta) => {
    if (groupRef.current && !isActive) {
      groupRef.current.rotation.y += delta * 0.5
    }
  })

  const renderModel = () => {
    switch (type) {
      case "car":
        return (
          <>
            {/* Car body */}
            <Box args={[2, 0.5, 1]} position={[0, 0.25, 0]}>
              <meshStandardMaterial color="#ff4500" metalness={0.8} roughness={0.2} />
            </Box>

            {/* Car top */}
            <Box args={[1, 0.4, 0.8]} position={[0, 0.7, 0]}>
              <meshStandardMaterial color="#ff4500" metalness={0.8} roughness={0.2} />
            </Box>

            {/* Wheels */}
            <Torus args={[0.3, 0.1, 16, 32]} position={[-0.7, -0.1, 0.5]} rotation={[Math.PI / 2, 0, 0]}>
              <meshStandardMaterial color="#333" metalness={0.5} roughness={0.1} />
            </Torus>
            <Torus args={[0.3, 0.1, 16, 32]} position={[0.7, -0.1, 0.5]} rotation={[Math.PI / 2, 0, 0]}>
              <meshStandardMaterial color="#333" metalness={0.5} roughness={0.1} />
            </Torus>
            <Torus args={[0.3, 0.1, 16, 32]} position={[-0.7, -0.1, -0.5]} rotation={[Math.PI / 2, 0, 0]}>
              <meshStandardMaterial color="#333" metalness={0.5} roughness={0.1} />
            </Torus>
            <Torus args={[0.3, 0.1, 16, 32]} position={[0.7, -0.1, -0.5]} rotation={[Math.PI / 2, 0, 0]}>
              <meshStandardMaterial color="#333" metalness={0.5} roughness={0.1} />
            </Torus>
          </>
        )

      case "store":
        return (
          <>
            {/* Store building */}
            <Box args={[2, 1.5, 1.5]} position={[0, 0.75, 0]}>
              <meshStandardMaterial color="#6a5acd" metalness={0.2} roughness={0.8} />
            </Box>

            {/* Roof */}
            <Box args={[2.2, 0.2, 1.7]} position={[0, 1.6, 0]}>
              <meshStandardMaterial color="#4b0082" metalness={0.3} roughness={0.7} />
            </Box>

            {/* Door */}
            <Box args={[0.5, 0.8, 0.1]} position={[0, 0.4, 0.8]}>
              <meshStandardMaterial color="#daa520" metalness={0.5} roughness={0.5} />
            </Box>

            {/* Windows */}
            <Box args={[0.4, 0.4, 0.1]} position={[-0.7, 0.8, 0.8]}>
              <meshStandardMaterial color="#87ceeb" metalness={0.8} roughness={0.2} />
            </Box>
            <Box args={[0.4, 0.4, 0.1]} position={[0.7, 0.8, 0.8]}>
              <meshStandardMaterial color="#87ceeb" metalness={0.8} roughness={0.2} />
            </Box>
            <Box args={[0.4, 0.4, 0.1]} position={[0.7, 0.8, 0.8]}>
              <meshStandardMaterial color="#87ceeb" metalness={0.8} roughness={0.2} />
            </Box>
          </>
        )

      case "weather":
        return (
          <>
            {/* Sun */}
            <Sphere args={[0.6, 32, 32]} position={[0, 0.6, 0]}>
              <meshStandardMaterial color="#ffd700" emissive="#ff8c00" emissiveIntensity={0.5} />
            </Sphere>

            {/* Cloud 1 */}
            <Sphere args={[0.3, 32, 32]} position={[-0.5, 0.2, 0]}>
              <meshStandardMaterial color="white" roughness={0.7} />
            </Sphere>
            <Sphere args={[0.25, 32, 32]} position={[-0.8, 0.2, 0]}>
              <meshStandardMaterial color="white" roughness={0.7} />
            </Sphere>
            <Sphere args={[0.25, 32, 32]} position={[-0.2, 0.2, 0]}>
              <meshStandardMaterial color="white" roughness={0.7} />
            </Sphere>

            {/* Cloud 2 */}
            <Sphere args={[0.2, 32, 32]} position={[0.6, 0, 0]}>
              <meshStandardMaterial color="white" roughness={0.7} />
            </Sphere>
            <Sphere args={[0.15, 32, 32]} position={[0.8, 0, 0]}>
              <meshStandardMaterial color="white" roughness={0.7} />
            </Sphere>
            <Sphere args={[0.15, 32, 32]} position={[0.4, 0, 0]}>
              <meshStandardMaterial color="white" roughness={0.7} />
            </Sphere>
          </>
        )

      default:
        return null
    }
  }

  return <group ref={groupRef}>{renderModel()}</group>
}
