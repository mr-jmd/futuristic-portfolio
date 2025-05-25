"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface EducationProps {
  theme: string
}

interface Education {
  id: number
  type: "degree" | "certification"
  title: string
  institution: string
  year: string
  description: string
  icon: string
}

export default function Education({ theme }: EducationProps) {
  const educationRef = useRef(null)
  const isInView = useInView(educationRef, { once: true, amount: 0.1 })

  const educationItems: Education[] = [
    {
      id: 1,
      type: "degree",
      title: "Máster en Desarrollo Web",
      institution: "Universidad Tecnológica",
      year: "2018",
      description: "Especialización en tecnologías frontend y desarrollo de aplicaciones web avanzadas.",
      icon: "academic-cap",
    },
    {
      id: 2,
      type: "degree",
      title: "Grado en Ingeniería Informática",
      institution: "Universidad Nacional",
      year: "2016",
      description: "Formación en fundamentos de programación, algoritmos y desarrollo de software.",
      icon: "academic-cap",
    },
    {
      id: 3,
      type: "certification",
      title: "Certificación en React Advanced",
      institution: "React Academy",
      year: "2020",
      description: "Especialización en patrones avanzados de React, hooks y optimización de rendimiento.",
      icon: "badge-check",
    },
    {
      id: 4,
      type: "certification",
      title: "Certificación en Three.js y WebGL",
      institution: "3D Web Institute",
      year: "2021",
      description: "Desarrollo de gráficos 3D para web y creación de experiencias inmersivas.",
      icon: "badge-check",
    },
    {
      id: 5,
      type: "certification",
      title: "Certificación en UI/UX Design",
      institution: "Design School",
      year: "2019",
      description: "Principios de diseño de interfaces, experiencia de usuario y prototipado.",
      icon: "badge-check",
    },
  ]

  // Separar títulos y certificaciones
  const degrees = educationItems.filter((item) => item.type === "degree")
  const certifications = educationItems.filter((item) => item.type === "certification")

  return (
    <section
      id="formación"
      className={`py-12 sm:py-16 lg:py-20 relative ${theme === "light" ? "bg-white" : ""}`}
      ref={educationRef}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
            <span
              className={`text-transparent bg-clip-text ${
                theme === "dark"
                  ? "bg-gradient-to-r from-slate-400 to-indigo-500"
                  : "bg-gradient-to-r from-indigo-600 to-indigo-400"
              }`}
            >
              Formación
            </span>{" "}
            y Certificaciones
          </h2>
          <div
            className={`w-24 h-1 mx-auto ${
              theme === "dark"
                ? "bg-gradient-to-r from-slate-400 to-indigo-500"
                : "bg-gradient-to-r from-indigo-600 to-indigo-400"
            }`}
          ></div>
        </motion.div>

        {/* Títulos Académicos */}
        <div className="mb-16">
          <motion.h3
            className={`text-2xl font-bold mb-8 text-center ${theme === "dark" ? "text-white" : "text-gray-800"}`}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Títulos Académicos
          </motion.h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {degrees.map((item, index) => (
              <EducationBadge key={item.id} item={item} index={index} theme={theme} isInView={isInView} />
            ))}
          </div>
        </div>

        {/* Certificaciones */}
        <div>
          <motion.h3
            className={`text-2xl font-bold mb-8 text-center ${theme === "dark" ? "text-white" : "text-gray-800"}`}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Certificaciones
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {certifications.map((item, index) => (
              <EducationBadge key={item.id} item={item} index={index} theme={theme} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface EducationBadgeProps {
  item: Education
  index: number
  theme: string
  isInView: boolean
}

function EducationBadge({ item, index, theme, isInView }: EducationBadgeProps) {
  return (
    <motion.div
      className={`relative rounded-xl p-4 sm:p-6 backdrop-blur-sm overflow-hidden shadow-lg ${
        theme === "dark" ? "bg-gray-900/80 border border-gray-800" : "bg-white border border-gray-100"
      }`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      whileHover={{
        scale: 1.03,
        boxShadow: theme === "dark" ? "0 0 15px 2px rgba(100, 116, 139, 0.2)" : "0 0 15px 2px rgba(99, 102, 241, 0.1)",
      }}
    >
      {/* Insignia */}
      <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-16 h-16 sm:w-24 sm:h-24">
        <div
          className={`absolute inset-0 rounded-full blur-xl ${
            item.type === "degree"
              ? theme === "dark"
                ? "bg-gradient-to-br from-slate-400/20 to-slate-600/20"
                : "bg-gradient-to-br from-indigo-400/20 to-indigo-600/20"
              : theme === "dark"
                ? "bg-gradient-to-br from-indigo-400/20 to-indigo-600/20"
                : "bg-gradient-to-br from-indigo-500/20 to-indigo-700/20"
          }`}
        />
        <motion.div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center backdrop-blur-md z-10 ${
            item.type === "degree"
              ? theme === "dark"
                ? "bg-slate-900/50 text-slate-400 border border-slate-400/50"
                : "bg-indigo-50 text-indigo-600 border border-indigo-200"
              : theme === "dark"
                ? "bg-indigo-900/50 text-indigo-400 border border-indigo-400/50"
                : "bg-indigo-50 text-indigo-600 border border-indigo-200"
          }`}
          initial={{ rotate: -30, scale: 0 }}
          animate={isInView ? { rotate: 0, scale: 1 } : { rotate: -30, scale: 0 }}
          transition={{ duration: 0.5, delay: 0.2 + 0.1 * index }}
        >
          {item.icon === "academic-cap" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          )}
        </motion.div>
      </div>

      {/* Contenido */}
      <div className="mt-2">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
          <h4
            className={`text-base sm:text-lg font-bold mb-2 sm:mb-0 ${
              item.type === "degree"
                ? theme === "dark"
                  ? "text-slate-400"
                  : "text-indigo-600"
                : theme === "dark"
                  ? "text-indigo-400"
                  : "text-indigo-600"
            }`}
          >
            {item.title}
          </h4>
          <span
            className={`text-xs sm:text-sm px-2 py-1 rounded-full self-start ${
              item.type === "degree"
                ? theme === "dark"
                  ? "bg-slate-900/30 text-slate-400"
                  : "bg-indigo-50 text-indigo-600"
                : theme === "dark"
                  ? "bg-indigo-900/30 text-indigo-400"
                  : "bg-indigo-50 text-indigo-600"
            }`}
          >
            {item.year}
          </span>
        </div>

        <h5 className={`text-sm sm:text-base mb-2 sm:mb-3 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
          {item.institution}
        </h5>

        <p className={`text-xs sm:text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
          {item.description}
        </p>
      </div>

      {/* Borde inferior decorativo */}
      <motion.div
        className={`absolute bottom-0 left-0 right-0 h-1 ${
          item.type === "degree"
            ? theme === "dark"
              ? "bg-gradient-to-r from-slate-400 to-slate-600"
              : "bg-gradient-to-r from-indigo-400 to-indigo-600"
            : theme === "dark"
              ? "bg-gradient-to-r from-indigo-400 to-indigo-600"
              : "bg-gradient-to-r from-indigo-500 to-indigo-700"
        }`}
        initial={{ width: 0 }}
        animate={isInView ? { width: "100%" } : { width: 0 }}
        transition={{ duration: 0.8, delay: 0.3 + 0.1 * index }}
      />
    </motion.div>
  )
}
