"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import SkillsGraph from "@/components/three/SkillsGraph"

interface SkillsProps {
  theme: string
}

export default function Skills({ theme }: SkillsProps) {
  const skillsRef = useRef(null)
  const isInView = useInView(skillsRef, { once: true, amount: 0.2 })

  const frontendSkills = [
    { name: "React", level: 80 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "HTML/CSS", level: 95 },
    { name: "Tailwind CSS", level: 90 },
  ]

  const backendSkills = [
    { name: "Node.js", level: 85 },
    { name: "Express", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "SQL", level: 70 },
    { name: "GraphQL", level: 65 },
  ]

  const otherSkills = [
    { name: "Three.js", level: 75, icon: "🎮" },
    { name: "GSAP", level: 80, icon: "✨" },
    { name: "Framer Motion", level: 85, icon: "🎬" },
    { name: "Git", level: 90, icon: "🔧" },
    { name: "Docker", level: 65, icon: "🐳" },
    { name: "Figma", level: 70, icon: "🎨" },
    { name: "Photoshop", level: 75, icon: "📸" },
    { name: "AWS", level: 60, icon: "☁️" },
  ]

  const SkillBar = ({ name, level, index, theme }: { name: string; level: number; index: number; theme: string }) => {
    return (
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.5, delay: 0.1 * index }}
      >
        <div className="flex justify-between mb-2">
          <span className={`font-medium ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>{name}</span>
          <span className={`font-semibold ${theme === "dark" ? "text-slate-400" : "text-indigo-600"}`}>{level}%</span>
        </div>
        <div className={`w-full h-3 rounded-full ${theme === "dark" ? "bg-gray-800" : "bg-gray-200"}`}>
          <motion.div
            className={`h-full rounded-full ${
              theme === "dark"
                ? "bg-gradient-to-r from-slate-400 to-indigo-500"
                : "bg-gradient-to-r from-indigo-600 to-indigo-400"
            }`}
            initial={{ width: 0 }}
            animate={isInView ? { width: `${level}%` } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.2 * index }}
          />
        </div>
      </motion.div>
    )
  }

  return (
    <section id="habilidades" className={`py-20 relative ${theme === "light" ? "bg-white" : ""}`} ref={skillsRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-8"
        >
          <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
            <span
              className={`text-transparent bg-clip-text ${
                theme === "dark"
                  ? "bg-gradient-to-r from-slate-400 to-indigo-500"
                  : "bg-gradient-to-r from-indigo-600 to-indigo-400"
              }`}
            >
              Mis
            </span>{" "}
            Habilidades
          </h2>
          <div
            className={`w-24 h-1 mx-auto ${
              theme === "dark"
                ? "bg-gradient-to-r from-slate-400 to-indigo-500"
                : "bg-gradient-to-r from-indigo-600 to-indigo-400"
            }`}
          ></div>
        </motion.div>
        {/* Contenedor principal centrado */}
        <div className="max-w-6xl mx-auto">        
          {/* Frontend y Backend centrados */}
          <div className="flex justify-center mb-12 lg:mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl w-full">
              {/* Frontend Skills */}
              <motion.div
                className={`p-4 sm:p-6 rounded-xl ${
                  theme === "dark"
                    ? "bg-gray-900/80 border border-gray-800"
                    : "bg-white border border-gray-100 shadow-lg"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                <h3
                  className={`text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-center ${theme === "dark" ? "text-white" : "text-gray-800"}`}
                >
                  Frontend
                </h3>
                {frontendSkills.map((skill, index) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} index={index} theme={theme} />
                ))}
              </motion.div>

              {/* Backend Skills */}
              <motion.div
                className={`p-4 sm:p-6 rounded-xl ${
                  theme === "dark"
                    ? "bg-gray-900/80 border border-gray-800"
                    : "bg-white border border-gray-100 shadow-lg"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3
                  className={`text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-center ${theme === "dark" ? "text-white" : "text-gray-800"}`}
                >
                  Backend
                </h3>
                {backendSkills.map((skill, index) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} index={index + 5} theme={theme} />
                ))}
              </motion.div>
            </div>
          </div>

          {/* Otras tecnologías con diseño de círculos/iconos */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className={`text-2xl font-bold mb-8 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
              Otras Tecnologías
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
              {otherSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className={`relative group cursor-pointer ${theme === "dark" ? "text-white" : "text-gray-800"}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: 0.3 + 0.1 * index }}
                  whileHover={{ scale: 1.1 }}
                >
                  {/* Círculo principal */}
                  <div
                    className={`relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-2 sm:mb-3 rounded-full flex items-center justify-center ${
                      theme === "dark"
                        ? "bg-gray-900 border-2 border-gray-800 group-hover:border-slate-400"
                        : "bg-white border-2 border-gray-200 group-hover:border-indigo-400 shadow-lg"
                    } transition-all duration-300`}
                  >
                    {/* Círculo de progreso */}
                    <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        stroke={theme === "dark" ? "#374151" : "#e5e7eb"}
                        strokeWidth="4"
                        fill="none"
                      />
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="45"
                        stroke={theme === "dark" ? "#6366f1" : "#4f46e5"}
                        strokeWidth="4"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 45}`}
                        initial={{ strokeDashoffset: 2 * Math.PI * 45 }}
                        animate={
                          isInView
                            ? { strokeDashoffset: 2 * Math.PI * 45 * (1 - skill.level / 100) }
                            : { strokeDashoffset: 2 * Math.PI * 45 }
                        }
                        transition={{ duration: 1, delay: 0.5 + 0.1 * index }}
                      />
                    </svg>

                    {/* Icono */}
                    <span className="text-lg sm:text-2xl z-10">{skill.icon}</span>

                    {/* Efecto de brillo */}
                    <motion.div
                      className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 ${
                        theme === "dark"
                          ? "bg-gradient-to-br from-slate-400/10 to-indigo-500/10"
                          : "bg-gradient-to-br from-indigo-400/10 to-indigo-600/10"
                      }`}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Nombre de la tecnología */}
                  <h4
                    className={`font-medium text-xs sm:text-sm mb-1 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
                  >
                    {skill.name}
                  </h4>

                  {/* Porcentaje */}
                  <motion.span
                    className={`text-xs font-semibold ${theme === "dark" ? "text-slate-400" : "text-indigo-600"}`}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + 0.1 * index }}
                  >
                    {skill.level}%
                  </motion.span>

                  {/* Tooltip con información adicional */}
                  <motion.div
                    className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 rounded-lg text-xs opacity-0 group-hover:opacity-100 pointer-events-none ${
                      theme === "dark" ? "bg-gray-800 text-white border border-gray-700" : "bg-gray-900 text-white"
                    }`}
                    initial={{ y: 10 }}
                    whileHover={{ y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    Nivel: {skill.level}%
                    <div
                      className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent ${
                        theme === "dark" ? "border-t-gray-800" : "border-t-gray-900"
                      }`}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
