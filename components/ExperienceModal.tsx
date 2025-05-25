"use client"

import { motion } from "framer-motion"
import Spline from '@splinetool/react-spline'

interface ExperienceItem {
  id: number
  title: string
  company: string
  period: string
  description: string
  technologies: string[]
  splineScene: string
  detailedDescription: string
  achievements: string[]
  responsibilities: string[]
  companyInfo: string
}

interface ExperienceModalProps {
  experience: ExperienceItem
  onClose: () => void
  theme: string
}

export default function ExperienceModal({ experience, onClose, theme }: ExperienceModalProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      <motion.div
        className={`relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl ${
          theme === "dark" ? "bg-gray-900 border border-gray-800" : "bg-white border border-gray-200"
        }`}
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ type: "spring", damping: 25 }}
      >
        <button onClick={onClose} className="absolute top-4 right-4 z-10 text-white/80 hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header con Spline 3D */}
        <div className="relative aspect-video overflow-hidden rounded-t-xl">
          <div className="absolute inset-0 w-full h-full">
            <Spline 
              scene={experience.splineScene}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none"></div>
          <div className="absolute bottom-6 left-6 text-white pointer-events-none">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 drop-shadow-lg">{experience.title}</h2>
            <p className="text-xl opacity-90 drop-shadow-md">{experience.company}</p>
            <p className="text-lg opacity-75 drop-shadow-md">{experience.period}</p>
          </div>
        </div>

        <div className="p-6 md:p-8">
          {/* Descripción detallada */}
          <div className="mb-8">
            <h3 className={`text-2xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
              Descripción del Rol
            </h3>
            <p className={`text-lg leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
              {experience.detailedDescription}
            </p>
          </div>

          {/* Información de la empresa */}
          <div className="mb-8">
            <h3 className={`text-2xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
              Sobre la Empresa
            </h3>
            <p className={`leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
              {experience.companyInfo}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Responsabilidades */}
            <div>
              <h3 className={`text-xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                Responsabilidades Principales
              </h3>
              <ul className="space-y-2">
                {experience.responsibilities.map((responsibility, index) => (
                  <li
                    key={index}
                    className={`flex items-start ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
                  >
                    <span
                      className={`inline-block w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${
                        theme === "dark" ? "bg-slate-400" : "bg-indigo-500"
                      }`}
                    ></span>
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>

            {/* Logros */}
            <div>
              <h3 className={`text-xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                Logros Destacados
              </h3>
              <ul className="space-y-2">
                {experience.achievements.map((achievement, index) => (
                  <li
                    key={index}
                    className={`flex items-start ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
                  >
                    <span
                      className={`inline-block w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${
                        theme === "dark" ? "bg-indigo-400" : "bg-indigo-600"
                      }`}
                    ></span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tecnologías */}
          <div className="mt-8">
            <h3 className={`text-xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
              Tecnologías Utilizadas
            </h3>
            <div className="flex flex-wrap gap-3">
              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    theme === "dark" ? "bg-gray-800 text-slate-400" : "bg-indigo-50 text-indigo-600"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
