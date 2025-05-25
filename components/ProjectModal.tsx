"use client"

import { motion } from "framer-motion"

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  link: string
  github: string
}

interface ProjectModalProps {
  project: Project
  onClose: () => void
  theme: string
}

export default function ProjectModal({ project, onClose, theme }: ProjectModalProps) {
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
        className={`relative w-full max-w-4xl rounded-xl overflow-hidden shadow-2xl ${
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

        <div className="md:flex">
          <div className="md:w-1/2">
            <div className="relative h-64 md:h-full">
              <img
                src={project.image || "/placeholder.svg?height=400&width=600"}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent md:bg-gradient-to-r"></div>
            </div>
          </div>

          <div className="p-6 md:w-1/2">
            <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
              {project.title}
            </h2>

            <p className={`mb-6 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
              {project.description}
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed
              erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
            </p>

            <div className="mb-6">
              <h3 className={`text-lg font-medium mb-2 ${theme === "dark" ? "text-gray-200" : "text-gray-700"}`}>
                Tecnologías
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className={`text-sm px-3 py-1 rounded-full ${
                      theme === "dark" ? "bg-gray-800 text-slate-400" : "bg-indigo-50 text-indigo-600"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex space-x-4">
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  theme === "dark"
                    ? "bg-indigo-600 text-white hover:bg-indigo-500"
                    : "bg-indigo-600 text-white hover:bg-indigo-500"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Ver Demo
              </motion.a>

              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  theme === "dark"
                    ? "bg-gray-800 text-white hover:bg-gray-700"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Ver Código
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
