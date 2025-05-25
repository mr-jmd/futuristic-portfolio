"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import { Text } from "@react-three/drei"
import * as THREE from "three"

interface SkillsGraphProps {
  theme: string
}

export default function SkillsGraph({ theme }: SkillsGraphProps) {
  const pointsRef = useRef<THREE.Points>(null)
  const linesRef = useRef<THREE.LineSegments>(null)

  // Crear nodos para las habilidades
  const nodes = useMemo(() => {
    const skills = [
      "React",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "SQL",
      "GraphQL",
      "Three.js",
      "GSAP",
      "Framer Motion",
      "Git",
      "Docker",
    ]

    const temp = []
    const radius = 3

    for (let i = 0; i < skills.length; i++) {
      // Distribuir los puntos en una esfera
      const phi = Math.acos(-1 + (2 * i) / skills.length)
      const theta = Math.sqrt(skills.length * Math.PI) * phi

      const x = radius * Math.cos(theta) * Math.sin(phi)
      const y = radius * Math.sin(theta) * Math.sin(phi)
      const z = radius * Math.cos(phi)

      temp.push({
        position: new THREE.Vector3(x, y, z),
        name: skills[i],
        size: Math.random() * 0.5 + 0.5,
      })
    }

    return temp
  }, [])

  // Crear geometría para los puntos
  const { positions, sizes, colors } = useMemo(() => {
    const positions = new Float32Array(nodes.length * 3)
    const sizes = new Float32Array(nodes.length)
    const colors = new Float32Array(nodes.length * 3)

    const color1 = new THREE.Color(theme === "dark" ? "#64748b" : "#6366f1")
    const color2 = new THREE.Color(theme === "dark" ? "#6366f1" : "#818cf8")

    nodes.forEach((node, i) => {
      positions[i * 3] = node.position.x
      positions[i * 3 + 1] = node.position.y
      positions[i * 3 + 2] = node.position.z

      sizes[i] = node.size

      const mixedColor = color1.clone().lerp(color2, Math.random())
      colors[i * 3] = mixedColor.r
      colors[i * 3 + 1] = mixedColor.g
      colors[i * 3 + 2] = mixedColor.b
    })

    return { positions, sizes, colors }
  }, [nodes, theme])

  // Crear líneas entre nodos cercanos
  const { linePositions } = useMemo(() => {
    const lines = []
    const threshold = 2.5

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = nodes[i].position.distanceTo(nodes[j].position)

        if (distance < threshold) {
          lines.push(nodes[i].position.x, nodes[i].position.y, nodes[i].position.z)
          lines.push(nodes[j].position.x, nodes[j].position.y, nodes[j].position.z)
        }
      }
    }

    return { linePositions: new Float32Array(lines) }
  }, [nodes])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()

    if (pointsRef.current && linesRef.current) {
      // Rotar los puntos
      pointsRef.current.rotation.y = time * 0.1
      linesRef.current.rotation.y = time * 0.1
    }
  })

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />

      {/* Puntos (nodos) */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
          <bufferAttribute attach="attributes-size" count={sizes.length} array={sizes} itemSize={1} />
          <bufferAttribute attach="attributes-color" count={colors.length / 3} array={colors} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.15} vertexColors transparent opacity={theme === "dark" ? 0.8 : 0.6} sizeAttenuation />
      </points>

      {/* Líneas entre nodos */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color={theme === "dark" ? "#64748b" : "#6366f1"}
          transparent
          opacity={theme === "dark" ? 0.2 : 0.1}
          linewidth={1}
        />
      </lineSegments>

      {/* Textos de habilidades */}
      {nodes.map((node, i) => (
        <Text
          key={i}
          position={[node.position.x * 1.2, node.position.y * 1.2, node.position.z * 1.2]}
          fontSize={0.15}
          color={theme === "dark" ? "#ffffff" : "#1e293b"}
          anchorX="center"
          anchorY="middle"
          font="/fonts/Inter_Regular.json"
        >
          {node.name}
        </Text>
      ))}
    </>
  )
}
