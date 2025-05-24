"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { Float } from "@react-three/drei"
import * as THREE from "three"

interface SceneProps {
  scrollY: number
}

export default function Scene({ scrollY }: SceneProps) {
  const particlesRef = useRef<THREE.Points>(null)
  const floatingObjectsRef = useRef<THREE.Group>(null)

  // Generate particles
  const particles = useMemo(() => {
    const temp = []
    const count = 500

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 20
      const y = (Math.random() - 0.5) * 20
      const z = (Math.random() - 0.5) * 20

      temp.push(x, y, z)
    }

    return new Float32Array(temp)
  }, [])

  // Generate floating objects
  const floatingObjects = useMemo(() => {
    const objects = []
    const count = 15

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 15
      const y = (Math.random() - 0.5) * 15
      const z = (Math.random() - 0.5) * 10 - 5

      const size = Math.random() * 0.5 + 0.1
      const type = Math.floor(Math.random() * 3) // 0: box, 1: sphere, 2: torus

      objects.push({ position: [x, y, z], size, type })
    }

    return objects
  }, [])

  useFrame((state, delta) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x = scrollY * 0.0002
      particlesRef.current.rotation.y += delta * 0.05
    }

    if (floatingObjectsRef.current) {
      floatingObjectsRef.current.rotation.y += delta * 0.1
      floatingObjectsRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5
    }
  })

  return (
    <>
      {/* Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={particles.length / 3} array={particles} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.05} color="#8a2be2" sizeAttenuation transparent opacity={0.8} />
      </points>

      {/* Floating Objects */}
      <group ref={floatingObjectsRef}>
        {floatingObjects.map((obj, i) => (
          <Float
            key={i}
            speed={1 + Math.random()}
            rotationIntensity={0.5 + Math.random()}
            floatIntensity={0.5 + Math.random()}
            position={obj.position as [number, number, number]}
          >
            {obj.type === 0 ? (
              <mesh>
                <boxGeometry args={[obj.size, obj.size, obj.size]} />
                <meshStandardMaterial
                  color={new THREE.Color().setHSL(Math.random(), 0.8, 0.5)}
                  roughness={0.2}
                  metalness={0.8}
                />
              </mesh>
            ) : obj.type === 1 ? (
              <mesh>
                <sphereGeometry args={[obj.size, 16, 16]} />
                <meshStandardMaterial
                  color={new THREE.Color().setHSL(Math.random(), 0.8, 0.5)}
                  roughness={0.2}
                  metalness={0.8}
                />
              </mesh>
            ) : (
              <mesh>
                <torusGeometry args={[obj.size, obj.size * 0.3, 16, 32]} />
                <meshStandardMaterial
                  color={new THREE.Color().setHSL(Math.random(), 0.8, 0.5)}
                  roughness={0.2}
                  metalness={0.8}
                />
              </mesh>
            )}
          </Float>
        ))}
      </group>
    </>
  )
}

