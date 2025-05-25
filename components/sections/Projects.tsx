"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ProjectModal from "@/components/ProjectModal"

interface ProjectsProps {
  theme: string
}

export default function Projects({ theme }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: "Proyecto Alfa",
      description: "Aplicación web con React y Three.js para visualización de datos en 3D",
      image: "/images/project1.jpg",
      technologies: ["React", "Three.js", "GSAP", "Node.js"],
      link: "#",
      github: "#",
      featured: true,
      category: "Web App",
      year: "2024",
    },
    {
      id: 2,
      title: "Proyecto Beta",
      description: "E-commerce con Next.js y Stripe para pagos online",
      image: "/images/project2.jpg",
      technologies: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB"],
      link: "#",
      github: "#",
      featured: false,
      category: "E-commerce",
      year: "2023",
    },
    {
      id: 3,
      title: "Proyecto Gamma",
      description: "Dashboard interactivo con visualizaciones de datos avanzadas",
      image: "/images/project3.jpg",
      technologies: ["React", "D3.js", "Firebase", "Framer Motion"],
      link: "#",
      github: "#",
      featured: false,
      category: "Dashboard",
      year: "2023",
    },
  ]

  const featuredProject = projects.find((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  const openProject = (id: number) => {
    setSelectedProject(id)
  }

  const closeProject = () => {
    setSelectedProject(null)
  }

  return (
    <section
      id="proyectos"
      className={`py-12 sm:py-16 lg:py-20 relative overflow-hidden ${theme === "light" ? "bg-gray-50" : ""}`}
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className={`absolute top-20 -right-20 w-96 h-96 rounded-full blur-3xl opacity-10 ${
            theme === "dark" ? "bg-indigo-500" : "bg-indigo-400"
          }`}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className={`absolute bottom-20 -left-20 w-80 h-80 rounded-full blur-3xl opacity-10 ${
            theme === "dark" ? "bg-slate-500" : "bg-indigo-300"
          }`}
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <motion.div className="inline-block" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
              <span
                className={`text-transparent bg-clip-text ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-slate-400 to-indigo-500"
                    : "bg-gradient-to-r from-indigo-600 to-indigo-400"
                }`}
              >
                Proyectos
              </span>{" "}
              Destacados
            </h2>
            <motion.div
              className={`w-24 h-1 mx-auto ${
                theme === "dark"
                  ? "bg-gradient-to-r from-slate-400 to-indigo-500"
                  : "bg-gradient-to-r from-indigo-600 to-indigo-400"
              }`}
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <motion.p
            className={`mt-6 text-lg ${theme === "dark" ? "text-gray-300" : "text-gray-600"} max-w-2xl mx-auto`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Una selección de mis trabajos más innovadores y desafiantes
          </motion.p>
        </motion.div>

        {/* Layout tipo magazine */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Proyecto destacado - Ocupa más espacio */}
            {featuredProject && (
              <motion.div
                className="lg:col-span-8 relative group"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, amount: 0.2 }}
                onHoverStart={() => setHoveredProject(featuredProject.id)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <motion.div
                  className={`relative h-96 lg:h-[500px] rounded-2xl overflow-hidden cursor-pointer shadow-2xl ${
                    theme === "dark" ? "bg-gray-900 border border-gray-800" : "bg-white border border-gray-100"
                  }`}
                  onClick={() => openProject(featuredProject.id)}
                  whileHover={{
                    scale: 1.02,
                    rotateY: 5,
                    rotateX: 2,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: 1000,
                  }}
                >
                  {/* Imagen de fondo */}
                  <div className="absolute inset-0">
                    <motion.img
                      src={featuredProject.image || "/placeholder.svg?height=500&width=800"}
                      alt={featuredProject.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  </div>

                  {/* Badge de destacado */}
                  <motion.div
                    className="absolute top-6 left-6 z-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <div
                      className={`px-4 py-2 rounded-full text-sm font-bold backdrop-blur-md ${
                        theme === "dark"
                          ? "bg-indigo-600/80 text-white border border-indigo-500/50"
                          : "bg-indigo-600/90 text-white border border-indigo-500/50"
                      }`}
                    >
                      ⭐ DESTACADO
                    </div>
                  </motion.div>

                  {/* Año */}
                  <motion.div
                    className="absolute top-6 right-6 z-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                    whileHover={{ scale: 1.1, rotate: -5 }}
                  >
                    <div
                      className={`px-3 py-1 rounded-full text-sm font-medium backdrop-blur-md ${
                        theme === "dark"
                          ? "bg-gray-900/50 text-slate-400 border border-gray-700/50"
                          : "bg-white/50 text-gray-600 border border-gray-200/50"
                      }`}
                    >
                      {featuredProject.year}
                    </div>
                  </motion.div>

                  {/* Contenido principal */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 text-white">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="text-sm font-medium text-indigo-300 uppercase tracking-wider">
                          {featuredProject.category}
                        </span>
                        <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                        <span className="text-sm text-gray-300">Proyecto Principal</span>
                      </div>

                      <h3 className="text-2xl lg:text-4xl font-bold mb-4 leading-tight">{featuredProject.title}</h3>

                      <p className="text-lg text-gray-200 mb-6 leading-relaxed">{featuredProject.description}</p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {featuredProject.technologies.map((tech, i) => (
                          <motion.span
                            key={i}
                            className="text-xs px-3 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm border border-white/30"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 + i * 0.1 }}
                            whileHover={{
                              scale: 1.15,
                              backgroundColor: "rgba(255,255,255,0.4)",
                              y: -2,
                            }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>

                      <motion.div
                        className="flex items-center space-x-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        <div className="flex items-center space-x-2 text-sm text-gray-300">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>Ver Demo</span>
                        </div>
                        <div className="w-px h-4 bg-gray-500"></div>
                        <div className="flex items-center space-x-2 text-sm text-gray-300">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>Código</span>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Efecto de brillo en hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-indigo-400/20 via-transparent to-purple-500/20 opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Partículas flotantes en hover */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="w-20 h-20 border-2 border-white/30 rounded-full"
                      animate={
                        hoveredProject === featuredProject.id
                          ? {
                              scale: [1, 1.2, 1],
                              rotate: [0, 180, 360],
                            }
                          : {}
                      }
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="w-full h-full flex items-center justify-center">
                        <motion.svg
                          className="w-8 h-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          whileHover={{ scale: 1.2 }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </motion.svg>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}

            {/* Proyectos secundarios - Alineados con el proyecto principal */}
            <div className="lg:col-span-4 flex flex-col justify-between">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="relative group cursor-pointer mb-6 last:mb-0"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true, amount: 0.2 }}
                  onClick={() => openProject(project.id)}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                >
                  <motion.div
                    className={`relative h-60 rounded-xl overflow-hidden shadow-lg ${
                      theme === "dark" ? "bg-gray-900 border border-gray-800" : "bg-white border border-gray-100"
                    }`}
                    whileHover={{
                      scale: 1.03,
                      rotateY: -3,
                      rotateX: 1,
                      z: 50,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 25,
                    }}
                    style={{
                      transformStyle: "preserve-3d",
                      perspective: 1000,
                    }}
                  >
                    {/* Imagen */}
                    <div className="absolute inset-0">
                      <motion.img
                        src={project.image || "/placeholder.svg?height=300&width=400"}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.15 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    </div>

                    {/* Año y categoría */}
                    <div className="absolute top-3 left-3 right-3 flex justify-between items-start z-10">
                      <motion.span
                        className={`text-xs px-2 py-1 rounded-full font-medium backdrop-blur-md ${
                          theme === "dark"
                            ? "bg-gray-900/50 text-slate-400 border border-gray-700/50"
                            : "bg-white/50 text-gray-600 border border-gray-200/50"
                        }`}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {project.category}
                      </motion.span>
                      <motion.span
                        className={`text-xs px-2 py-1 rounded-full font-medium backdrop-blur-md ${
                          theme === "dark"
                            ? "bg-gray-900/50 text-slate-400 border border-gray-700/50"
                            : "bg-white/50 text-gray-600 border border-gray-200/50"
                        }`}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {project.year}
                      </motion.span>
                    </div>

                    {/* Contenido */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 p-4 text-white"
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h4 className="text-lg font-bold mb-2 leading-tight">{project.title}</h4>
                      <p className="text-sm text-gray-200 mb-3 line-clamp-2">{project.description}</p>

                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech, i) => (
                          <motion.span
                            key={i}
                            className="text-xs px-2 py-1 rounded bg-white/20 text-white backdrop-blur-sm"
                            whileHover={{
                              scale: 1.1,
                              backgroundColor: "rgba(255,255,255,0.3)",
                              y: -1,
                            }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                        {project.technologies.length > 3 && (
                          <motion.span
                            className="text-xs px-2 py-1 rounded bg-white/20 text-white backdrop-blur-sm"
                            whileHover={{
                              scale: 1.1,
                              backgroundColor: "rgba(255,255,255,0.3)",
                              y: -1,
                            }}
                          >
                            +{project.technologies.length - 3}
                          </motion.span>
                        )}
                      </div>
                    </motion.div>

                    {/* Efecto de brillo en hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-indigo-400/20 via-transparent to-purple-500/20 opacity-0"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                    />

                    {/* Indicador de expansión mejorado */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className="w-12 h-12 border-2 border-white/40 rounded-full flex items-center justify-center backdrop-blur-sm"
                        animate={
                          hoveredProject === project.id
                            ? {
                                scale: [1, 1.2, 1],
                                rotate: [0, 90, 180, 270, 360],
                              }
                            : {}
                        }
                        transition={{
                          duration: 1.5,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                      >
                        <motion.svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          whileHover={{ scale: 1.2 }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                          />
                        </motion.svg>
                      </motion.div>
                    </motion.div>

                    {/* Partículas decorativas */}
                    <motion.div
                      className="absolute top-4 right-4 w-2 h-2 bg-white/60 rounded-full opacity-0"
                      whileHover={{
                        opacity: [0, 1, 0],
                        scale: [1, 1.5, 1],
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: 0.5,
                      }}
                    />
                    <motion.div
                      className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-indigo-400/60 rounded-full opacity-0"
                      whileHover={{
                        opacity: [0, 1, 0],
                        scale: [1, 1.3, 1],
                        x: [0, 8, 0],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: 1,
                      }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject !== null && (
          <ProjectModal
            project={projects.find((p) => p.id === selectedProject)!}
            onClose={closeProject}
            theme={theme}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
