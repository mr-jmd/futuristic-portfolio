"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import ExperienceModal from "@/components/ExperienceModal"

interface ExperienceProps {
  theme: string
}

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

export default function Experience({ theme }: ExperienceProps) {
  const experienceRef = useRef(null)
  const isInView = useInView(experienceRef, { once: true, amount: 0.1 })
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null)

  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "Tech Innovators Inc.",
      period: "2021 - Presente",
      description:
        "Desarrollo de aplicaciones web con React y Next.js. Implementación de animaciones avanzadas y visualizaciones 3D. Liderazgo de equipo de 5 desarrolladores.",
      technologies: ["React", "Next.js", "Three.js", "TypeScript"],
      splineScene: "https://prod.spline.design/va4rGOFLNBK3nAkQ/scene.splinecode",
      detailedDescription:
        "En Tech Innovators Inc., lidero el desarrollo frontend de aplicaciones web de alta complejidad, enfocándome en crear experiencias de usuario excepcionales. Mi rol incluye la arquitectura de sistemas frontend escalables, la implementación de patrones de diseño avanzados y la mentoría de desarrolladores junior.",
      achievements: [
        "Incrementé la velocidad de carga de aplicaciones en un 40%",
        "Implementé un sistema de componentes reutilizables usado por 3 equipos",
        "Reduje el tiempo de desarrollo de nuevas features en un 30%",
        "Lideré la migración exitosa de 5 aplicaciones legacy a React",
      ],
      responsibilities: [
        "Arquitectura y desarrollo de aplicaciones React/Next.js",
        "Implementación de animaciones 3D con Three.js y WebGL",
        "Liderazgo técnico de un equipo de 5 desarrolladores",
        "Code review y establecimiento de estándares de código",
        "Colaboración con equipos de diseño y backend",
        "Optimización de rendimiento y SEO",
      ],
      companyInfo:
        "Tech Innovators Inc. es una empresa líder en soluciones tecnológicas innovadoras, especializada en el desarrollo de aplicaciones web y móviles para Fortune 500 companies.",
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Digital Solutions",
      period: "2018 - 2021",
      description:
        "Creación de interfaces de usuario para aplicaciones web y móviles. Optimización de rendimiento y experiencia de usuario. Colaboración con equipos de diseño y backend.",
      technologies: ["React", "Vue.js", "GSAP", "Tailwind CSS"],
      splineScene: "https://prod.spline.design/bqEyInsw11wXN5jh/scene.splinecode",
      detailedDescription:
        "En Digital Solutions, me especialicé en el desarrollo de interfaces de usuario modernas y responsivas. Trabajé estrechamente con diseñadores UX/UI para traducir mockups en aplicaciones funcionales, siempre priorizando la experiencia del usuario y el rendimiento.",
      achievements: [
        "Desarrollé más de 15 aplicaciones web responsivas",
        "Implementé un sistema de design tokens que mejoró la consistencia visual",
        "Optimicé aplicaciones existentes mejorando el Core Web Vitals en un 50%",
        "Contribuí al aumento del 25% en la satisfacción del usuario",
      ],
      responsibilities: [
        "Desarrollo de interfaces con React y Vue.js",
        "Implementación de animaciones con GSAP",
        "Optimización de rendimiento web",
        "Colaboración con equipos multidisciplinarios",
        "Testing y debugging de aplicaciones",
        "Mantenimiento de código legacy",
      ],
      companyInfo:
        "Digital Solutions es una agencia digital especializada en crear experiencias digitales memorables para marcas de diversos sectores, desde startups hasta empresas consolidadas.",
    },
    {
      id: 3,
      title: "Web Developer",
      company: "Creative Agency",
      period: "2016 - 2018",
      description:
        "Desarrollo de sitios web para clientes de diversos sectores. Implementación de diseños responsivos y animaciones. Mantenimiento y actualización de sitios existentes.",
      technologies: ["JavaScript", "HTML/CSS", "WordPress", "jQuery"],
      splineScene: "https://prod.spline.design/JOdX0ndmjIqLhJAt/scene.splinecode",
      detailedDescription:
        "En Creative Agency, desarrollé sitios web personalizados para una amplia gama de clientes. Mi enfoque se centró en crear sitios web visualmente atractivos y funcionalmente sólidos, adaptándome a las necesidades específicas de cada proyecto y cliente.",
      achievements: [
        "Completé más de 30 proyectos web exitosos",
        "Implementé un workflow de desarrollo que redujo los tiempos de entrega en 20%",
        "Mejoré la velocidad promedio de los sitios web en un 35%",
        "Mantuve una tasa de satisfacción del cliente del 95%",
      ],
      responsibilities: [
        "Desarrollo de sitios web con WordPress y tecnologías web estándar",
        "Implementación de diseños responsivos",
        "Creación de animaciones e interacciones",
        "Mantenimiento y actualización de sitios existentes",
        "Optimización SEO básica",
        "Comunicación directa con clientes",
      ],
      companyInfo:
        "Creative Agency es una agencia creativa boutique que se especializa en branding digital y desarrollo web para pequeñas y medianas empresas que buscan destacar en el mercado digital.",
    },
    {
      id: 4,
      title: "Desarrollador Junior",
      company: "StartUp Tech",
      period: "2015 - 2016",
      description:
        "Desarrollo de componentes frontend para aplicaciones web. Colaboración en la implementación de nuevas funcionalidades. Aprendizaje de metodologías ágiles.",
      technologies: ["JavaScript", "HTML/CSS", "Bootstrap", "PHP"],
      splineScene: "https://prod.spline.design/PBX9HIbJXoGU-nJZ/scene.splinecode",
      detailedDescription:
        "Mi primera experiencia profesional en StartUp Tech me permitió aprender los fundamentos del desarrollo web en un ambiente dinámico y colaborativo. Participé en el desarrollo de la plataforma principal de la empresa mientras adquiría experiencia en metodologías ágiles.",
      achievements: [
        "Desarrollé mi primer sistema de componentes reutilizables",
        "Contribuí al lanzamiento exitoso de 2 productos principales",
        "Reduje bugs en producción en un 15% mediante testing riguroso",
        "Completé certificaciones en JavaScript y metodologías ágiles",
      ],
      responsibilities: [
        "Desarrollo de componentes frontend con JavaScript vanilla",
        "Implementación de interfaces responsivas con Bootstrap",
        "Colaboración en el desarrollo de APIs con PHP",
        "Participación en ceremonias ágiles (standups, retrospectivas)",
        "Testing manual y debugging",
        "Documentación de código y procesos",
      ],
      companyInfo:
        "StartUp Tech era una startup innovadora enfocada en desarrollar herramientas SaaS para pequeñas empresas, donde tuve la oportunidad de aprender y crecer en un ambiente de rápido crecimiento.",
    },
  ]

  const openExperience = (id: number) => {
    setSelectedExperience(id)
  }

  const closeExperience = () => {
    setSelectedExperience(null)
  }

  return (
    <section
      id="experiencia"
      className={`py-12 sm:py-16 lg:py-20 relative ${theme === "light" ? "bg-gray-50" : ""}`}
      ref={experienceRef}
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
              Mi
            </span>{" "}
            Experiencia
          </h2>
          <div
            className={`w-24 h-1 mx-auto mb-4 ${
              theme === "dark"
                ? "bg-gradient-to-r from-slate-400 to-indigo-500"
                : "bg-gradient-to-r from-indigo-600 to-indigo-400"
            }`}
          ></div>
          <motion.p
            className={`text-base sm:text-lg ${theme === "dark" ? "text-gray-300" : "text-gray-600"} mb-2`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Haz clic en cualquier experiencia para ver detalles completos e interactuar con los elementos 3D.
          </motion.p>
          <motion.div
            className="flex items-center justify-center space-x-2"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 ${theme === "dark" ? "text-slate-400" : "text-indigo-500"}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.121 2.122"
              />
            </svg>
            <span className={`text-sm ${theme === "dark" ? "text-slate-400" : "text-indigo-500"}`}>
              Clickea para explorar
            </span>
          </motion.div>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Línea vertical central - Solo visible en desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1">
            <div className={`absolute inset-0 ${theme === "dark" ? "bg-gray-800" : "bg-gray-200"}`} />
            <motion.div
              className={`absolute top-0 w-full ${
                theme === "dark"
                  ? "bg-gradient-to-b from-slate-400 to-indigo-500"
                  : "bg-gradient-to-b from-indigo-600 to-indigo-400"
              }`}
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : { height: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          {/* Línea vertical móvil - Solo visible en mobile */}
          <div className="md:hidden absolute left-4 sm:left-6 top-0 bottom-0 w-1">
            <div className={`absolute inset-0 ${theme === "dark" ? "bg-gray-800" : "bg-gray-200"}`} />
            <motion.div
              className={`absolute top-0 w-full ${
                theme === "dark"
                  ? "bg-gradient-to-b from-slate-400 to-indigo-500"
                  : "bg-gradient-to-b from-indigo-600 to-indigo-400"
              }`}
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : { height: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          {/* Experiencias */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Layout para desktop */}
                <div className="hidden md:block">
                  <div className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                    {/* Contenido */}
                    <div className="w-5/12">
                      <motion.div
                        className={`relative p-6 rounded-xl shadow-lg cursor-pointer group ${
                          theme === "dark" ? "bg-gray-900/80 border border-gray-800" : "bg-white border border-gray-100"
                        } backdrop-blur-sm overflow-hidden`}
                        whileHover={{
                          boxShadow:
                            theme === "dark"
                              ? "0 0 25px 5px rgba(100, 116, 139, 0.3)"
                              : "0 0 25px 5px rgba(99, 102, 241, 0.2)",
                          scale: 1.03,
                        }}
                        onClick={() => openExperience(exp.id)}
                      >
                        {/* Indicador visual creativo */}
                        <motion.div
                          className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center ${
                            theme === "dark" ? "bg-gray-800" : "bg-indigo-50"
                          }`}
                          whileHover={{ scale: 1.2, rotate: 90 }}
                          transition={{ duration: 0.3 }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-4 w-4 ${theme === "dark" ? "text-slate-400" : "text-indigo-600"}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </motion.div>

                        {/* Efecto de brillo al hover */}
                        <motion.div
                          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                            theme === "dark"
                              ? "bg-gradient-to-r from-slate-400/5 to-indigo-500/5"
                              : "bg-gradient-to-r from-indigo-400/5 to-indigo-600/5"
                          }`}
                        />

                        {/* Pulso animado */}
                        <motion.div
                          className={`absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 ${
                            theme === "dark"
                              ? "bg-gradient-to-r from-slate-400/20 to-indigo-500/20"
                              : "bg-gradient-to-r from-indigo-400/20 to-indigo-600/20"
                          }`}
                          animate={{
                            scale: [1, 1.02, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }}
                        />

                        <div className="relative z-10">
                          <div className="flex justify-between items-start mb-2 pr-8">
                            <h3 className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                              {exp.title}
                            </h3>
                            <span
                              className={`text-sm px-3 py-1 rounded-full whitespace-nowrap ${
                                theme === "dark" ? "bg-gray-800 text-slate-400" : "bg-indigo-50 text-indigo-600"
                              }`}
                            >
                              {exp.period}
                            </span>
                          </div>

                          <h4 className={`text-lg mb-4 ${theme === "dark" ? "text-slate-400" : "text-indigo-600"}`}>
                            {exp.company}
                          </h4>

                          <p className={`mb-4 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                            {exp.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {exp.technologies.map((tech, i) => (
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

                          <motion.div
                            className="flex items-center text-sm font-medium"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <span
                              className={`${
                                theme === "dark" ? "text-slate-400" : "text-indigo-600"
                              } group-hover:text-indigo-400 transition-colors`}
                            >
                              Explorar experiencia completa
                            </span>
                            <motion.svg
                              xmlns="http://www.w3.org/2000/svg"
                              className={`h-4 w-4 ml-2 ${
                                theme === "dark" ? "text-slate-400" : "text-indigo-600"
                              } group-hover:text-indigo-400 transition-colors`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              animate={{ x: [0, 3, 0] }}
                              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </motion.svg>
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Espacio central con círculo */}
                    <div className="w-2/12 flex justify-center">
                      <div
                        className={`w-6 h-6 rounded-full ${
                          theme === "dark"
                            ? "bg-gray-900 border-2 border-slate-400"
                            : "bg-white border-2 border-indigo-500"
                        } z-10 relative`}
                      >
                        <motion.div
                          className={`absolute inset-1 rounded-full ${
                            theme === "dark"
                              ? "bg-gradient-to-r from-slate-400 to-indigo-500"
                              : "bg-gradient-to-r from-indigo-600 to-indigo-400"
                          }`}
                          initial={{ scale: 0 }}
                          animate={isInView ? { scale: 1 } : { scale: 0 }}
                          transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                        />
                      </div>
                    </div>

                    {/* Espacio vacío del otro lado */}
                    <div className="w-5/12"></div>
                  </div>
                </div>

                {/* Layout para móvil */}
                <div className="md:hidden pl-8 sm:pl-12">
                  {/* Punto en la línea de tiempo */}
                  <div
                    className={`absolute left-4 sm:left-6 top-0 transform -translate-x-1/2 w-4 h-4 sm:w-6 sm:h-6 rounded-full ${
                      theme === "dark" ? "bg-gray-900 border-2 border-slate-400" : "bg-white border-2 border-indigo-500"
                    } z-10`}
                  >
                    <motion.div
                      className={`absolute inset-1 rounded-full ${
                        theme === "dark"
                          ? "bg-gradient-to-r from-slate-400 to-indigo-500"
                          : "bg-gradient-to-r from-indigo-600 to-indigo-400"
                      }`}
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    />
                  </div>

                  {/* Contenido */}
                  <motion.div
                    className={`relative p-4 sm:p-6 rounded-xl shadow-lg cursor-pointer group ${
                      theme === "dark" ? "bg-gray-900/80 border border-gray-800" : "bg-white border border-gray-100"
                    } backdrop-blur-sm overflow-hidden`}
                    whileHover={{
                      boxShadow:
                        theme === "dark"
                          ? "0 0 20px 3px rgba(100, 116, 139, 0.2)"
                          : "0 0 20px 3px rgba(99, 102, 241, 0.1)",
                    }}
                    onClick={() => openExperience(exp.id)}
                  >
                    {/* Indicador visual móvil */}
                    <motion.div
                      className={`absolute top-4 right-4 w-6 h-6 rounded-full flex items-center justify-center ${
                        theme === "dark" ? "bg-gray-800" : "bg-indigo-50"
                      }`}
                      whileHover={{ scale: 1.2, rotate: 90 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-3 w-3 ${theme === "dark" ? "text-slate-400" : "text-indigo-600"}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>

                    <div className="relative z-10">
                      <div className="flex flex-col space-y-2 mb-2 pr-8">
                        <h3
                          className={`text-lg sm:text-xl font-bold ${
                            theme === "dark" ? "text-white" : "text-gray-800"
                          }`}
                        >
                          {exp.title}
                        </h3>
                        <span
                          className={`text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full self-start ${
                            theme === "dark" ? "bg-gray-800 text-slate-400" : "bg-indigo-50 text-indigo-600"
                          }`}
                        >
                          {exp.period}
                        </span>
                      </div>

                      <h4
                        className={`text-base sm:text-lg mb-3 sm:mb-4 ${theme === "dark" ? "text-slate-400" : "text-indigo-600"}`}
                      >
                        {exp.company}
                      </h4>

                      <p
                        className={`mb-3 sm:mb-4 text-sm sm:text-base ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}
                      >
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.technologies.map((tech, i) => (
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

                      <motion.div
                        className="flex items-center text-sm font-medium"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span
                          className={`${
                            theme === "dark" ? "text-slate-400" : "text-indigo-600"
                          } group-hover:text-indigo-400 transition-colors`}
                        >
                          Toca para ver más
                        </span>
                        <motion.svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-4 w-4 ml-2 ${
                            theme === "dark" ? "text-slate-400" : "text-indigo-600"
                          } group-hover:text-indigo-400 transition-colors`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </motion.svg>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedExperience !== null && (
          <ExperienceModal
            experience={experiences.find((exp) => exp.id === selectedExperience)!}
            onClose={closeExperience}
            theme={theme}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
