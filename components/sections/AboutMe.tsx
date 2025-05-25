"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface AboutMeProps {
  theme: string
}

export default function AboutMe({ theme }: AboutMeProps) {
  const aboutRef = useRef(null)
  const isInView = useInView(aboutRef, { once: true, amount: 0.2 })

  const personalInfo = [
    //{ label: "Nombre", value: "Nombre Apellido" },
    { label: "Edad", value: "23 años" },
    { label: "Ubicación", value: "Medellin, Colombia" },
    //{ label: "Email", value: "contacto@miportfolio.com" },
    { label: "Disponibilidad", value: "Freelance" },
  ]

  const interests = ["Desarrollo Web", "Diseño UI/UX", "Nuevas Tecnologías", "Inteligencia Artificial", "Fotografía"]

  const achievements = [
    { number: "50+", label: "Proyectos Completados" },
    { number: "7+", label: "Años de Experiencia" },
    { number: "15+", label: "Tecnologías Dominadas" },
    { number: "100%", label: "Satisfacción del Cliente" },
  ]

  return (
    <section
      id="sobre-mi"
      className={`py-12 sm:py-16 lg:py-20 relative ${theme === "light" ? "bg-gray-50" : ""}`}
      ref={aboutRef}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
            <span
              className={`text-transparent bg-clip-text ${
                theme === "dark"
                  ? "bg-gradient-to-r from-slate-400 to-indigo-500"
                  : "bg-gradient-to-r from-indigo-600 to-indigo-400"
              }`}
            >
              Sobre
            </span>{" "}
            Mí
          </h2>
          <div
            className={`w-24 h-1 mx-auto ${
              theme === "dark"
                ? "bg-gradient-to-r from-slate-400 to-indigo-500"
                : "bg-gradient-to-r from-indigo-600 to-indigo-400"
            }`}
          ></div>
        </motion.div>

        {/* Contenedor principal con diseño métrico */}
        <div className="max-w-6xl mx-auto">
          {/* Foto central y datos personales */}
          <div className="flex flex-col items-center mb-16">
            {/* Imagen con efectos */}
            <motion.div
              className="relative mb-8 lg:mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              <div
                className={`absolute inset-0 rounded-full blur-3xl scale-90 ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-slate-400/20 to-indigo-500/20"
                    : "bg-gradient-to-br from-indigo-400/20 to-indigo-600/20"
                }`}
              />
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 shadow-xl mx-auto bg-black">
  <img
    src="/placeholder.svg"
    alt="Desarrollador"
    className="w-full h-full object-cover"
  />
  {/* Anillo decorativo */}
  <motion.div
    className={`absolute inset-0 rounded-full border-2 ${
      theme === "dark" ? "border-slate-400/30" : "border-indigo-500/30"
    }`}
    animate={{ rotate: 360 }}
    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
  />
</div>
            </motion.div>

            {/* Nombre y título */}
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className={`text-3xl font-bold mb-2 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                Juan Manuel Amaya C
              </h3>
              <p className={`text-lg ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                Desarrollador Full Stack
              </p>
            </motion.div>                      
          </div>

          {/* Biografía e intereses en estructura de dos columnas */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12">
            {/* Biografía */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`p-6 sm:p-8 rounded-xl ${
                theme === "dark" ? "bg-gray-900/80 border border-gray-800" : "bg-white border border-gray-100 shadow-lg"
              }`}
            >
              <h3
                className={`text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center ${
                  theme === "dark" ? "text-white" : "text-gray-800"
                }`}
              >
                <span
                  className={`inline-block w-8 h-8 mr-3 rounded-full flex items-center justify-center ${
                    theme === "dark" ? "bg-gray-800" : "bg-indigo-100"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 ${theme === "dark" ? "text-slate-400" : "text-indigo-600"}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                ¿Quién soy?
              </h3>
              <div className={`space-y-4 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                <p>
                  Soy un desarrollador Full Stack con más de 7 años de experiencia creando aplicaciones web y móviles.
                  Me especializo en tecnologías frontend modernas como React, Three.js y Framer Motion, combinadas con
                  soluciones backend robustas.
                </p>
                <p>
                  Mi enfoque se centra en crear experiencias digitales que no solo sean visualmente atractivas, sino
                  también altamente funcionales y optimizadas para el rendimiento. Me apasiona la intersección entre el
                  diseño y la tecnología, buscando siempre la mejor manera de implementar interfaces innovadoras.
                </p>
                <p>
                  A lo largo de mi carrera, he trabajado con startups y empresas establecidas, ayudándoles a transformar
                  sus ideas en productos digitales exitosos. Disfruto especialmente los desafíos técnicos complejos y la
                  oportunidad de aprender constantemente nuevas tecnologías.
                </p>
              </div>
            </motion.div>

            {/* Intereses */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`p-6 sm:p-8 rounded-xl ${
                theme === "dark" ? "bg-gray-900/80 border border-gray-800" : "bg-white border border-gray-100 shadow-lg"
              }`}
            >
              <h3
                className={`text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center ${
                  theme === "dark" ? "text-white" : "text-gray-800"
                }`}
              >
                <span
                  className={`inline-block w-8 h-8 mr-3 rounded-full flex items-center justify-center ${
                    theme === "dark" ? "bg-gray-800" : "bg-indigo-100"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 ${theme === "dark" ? "text-slate-400" : "text-indigo-600"}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </span>
                Intereses y Pasiones
              </h3>
              <div className="space-y-4">
                <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                  Más allá del código, me apasiona explorar las últimas tendencias en tecnología y diseño. Disfruto
                  experimentando con nuevas herramientas y frameworks que puedan mejorar la experiencia del usuario.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {interests.map((interest, index) => (
                    <motion.div
                      key={index}
                      className={`p-2 sm:p-3 rounded-lg text-center text-sm sm:text-base ${
                        theme === "dark" ? "bg-gray-800 text-slate-400" : "bg-indigo-50 text-indigo-600"
                      }`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.4, delay: 0.5 + 0.1 * index }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {interest}
                    </motion.div>
                  ))}
                </div>
                <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                  En mi tiempo libre, me gusta fotografiar paisajes urbanos y experimentar con técnicas de composición
                  que luego aplico en mis diseños digitales.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
