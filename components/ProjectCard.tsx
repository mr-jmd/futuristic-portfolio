"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  link: string
  github: string
}

interface ProjectCardProps {
  project: Project
  index: number
  theme: string
  onClick: () => void
}

export default function ProjectCard({ project, index, theme, onClick }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  // Valores para la rotación 3D
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Aplicar spring para suavizar el movimiento
  const springX = useSpring(x, { stiffness: 300, damping: 30 })
  const springY = useSpring(y, { stiffness: 300, damping: 30 })

  // Transformar los valores para la rotación
  const rotateX = useTransform(springY, [-100, 100], [30, -30])
  const rotateY = useTransform(springX, [-100, 100], [-30, 30])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const mouseX = e.clientX - centerX
    const mouseY = e.clientY - centerY

    x.set(mouseX)
    y.set(mouseY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      className="h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
      style={{
        perspective: 2000,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className={`h-full rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-shadow ${
          theme === "dark" ? "bg-gray-900 border border-gray-800" : "bg-white border border-gray-100"
        }`}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
      >
        <div className="relative h-40 sm:h-48 md:h-52 overflow-hidden">
          <img
            src={project.image || "/placeholder.svg?height=200&width=400"}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        </div>

        <div className="p-4 sm:p-6">
          <h3 className={`text-lg sm:text-xl font-bold mb-2 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
            {project.title}
          </h3>

          <p className={`mb-4 text-sm sm:text-base ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className={`text-xs px-2 py-1 rounded-full ${
                  theme === "dark" ? "bg-gray-800 text-slate-400" : "bg-indigo-50 text-indigo-600"
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div
          className={`absolute bottom-0 left-0 right-0 h-1 ${
            theme === "dark" ? "bg-slate-400/30" : "bg-indigo-500/30"
          }`}
        >
          <motion.div
            className={`h-full ${
              theme === "dark"
                ? "bg-gradient-to-r from-slate-400 to-indigo-500"
                : "bg-gradient-to-r from-indigo-600 to-indigo-400"
            }`}
            initial={{ width: "0%" }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}
