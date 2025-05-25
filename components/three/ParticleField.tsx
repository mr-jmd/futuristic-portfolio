"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

interface ParticleFieldProps {
  count: number
  theme: string
}

export default function ParticleField({ count, theme }: ParticleFieldProps) {
  const mesh = useRef<THREE.Points>(null)

  // Generar partículas
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 20
      const y = (Math.random() - 0.5) * 20
      const z = (Math.random() - 0.5) * 20

      temp.push(x, y, z)
    }
    return new Float32Array(temp)
  }, [count])

  // Colores de partículas según el tema
  const particleColors = useMemo(() => {
    const colors = new Float32Array(count * 3)
    const color1 = new THREE.Color(theme === "dark" ? "#64748b" : "#6366f1")
    const color2 = new THREE.Color(theme === "dark" ? "#6366f1" : "#818cf8")

    for (let i = 0; i < count; i++) {
      const mixedColor = color1.clone().lerp(color2, Math.random())

      colors[i * 3] = mixedColor.r
      colors[i * 3 + 1] = mixedColor.g
      colors[i * 3 + 2] = mixedColor.b
    }

    return colors
  }, [count, theme])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()

    if (mesh.current) {
      mesh.current.rotation.x = time * 0.05
      mesh.current.rotation.y = time * 0.075

      // Movimiento ondulatorio
      const positions = mesh.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i]
        const y = positions[i + 1]
        const z = positions[i + 2]

        // Aplicar movimiento ondulatorio
        positions[i + 1] = y + Math.sin(time + x) * 0.05
        positions[i] = x + Math.cos(time + y) * 0.05
      }

      mesh.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particles.length / 3} array={particles} itemSize={3} />
        <bufferAttribute
          attach="attributes-color"
          count={particleColors.length / 3}
          array={particleColors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} vertexColors transparent opacity={theme === "dark" ? 0.8 : 0.5} sizeAttenuation />
    </points>
  )
}
