"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"

interface ContactProps {
  theme: string
}

export default function Contact({ theme }: ContactProps) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [focused, setFocused] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleFocus = (field: string) => {
    setFocused(field)
  }

  const handleBlur = () => {
    setFocused(null)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simular envío
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Resetear después de un tiempo
      setTimeout(() => {
        setIsSubmitted(false)
        setFormState({
          name: "",
          email: "",
          message: "",
        })
      }, 3000)
    }, 1500)
  }

  const socialLinks = [
    {
      name: "GitHub",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      url: "https://github.com/mr-jmd",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      url: "https://www.linkedin.com/in/juan-manuel-amaya-cadavid-2b97601b1/",
    },    
    {
      name: "Instagram",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      url: "https://www.instagram.com/juanamaya_c/",
    },
  ]

  return (
    <section id="contacto" className={`py-12 sm:py-16 lg:py-20 relative ${theme === "light" ? "bg-gray-50" : ""}`}>
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
              Contacta
            </span>{" "}
            Conmigo
          </h2>
          <div
            className={`w-24 h-1 mx-auto ${
              theme === "dark"
                ? "bg-gradient-to-r from-slate-400 to-indigo-500"
                : "bg-gradient-to-r from-indigo-600 to-indigo-400"
            }`}
          ></div>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Imagen a la izquierda */}
            <motion.div
              className="flex justify-center lg:justify-start order-last lg:order-first"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="relative">
                {/* Efectos de fondo */}
                <div
                  className={`absolute inset-0 rounded-2xl blur-3xl scale-110 ${
                    theme === "dark"
                      ? "bg-gradient-to-br from-slate-400/20 to-indigo-500/20"
                      : "bg-gradient-to-br from-indigo-400/20 to-indigo-600/20"
                  }`}
                ></div>

                {/* Anillo decorativo */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl border-2 scale-105 ${
                    theme === "dark" ? "border-slate-400/30" : "border-indigo-500/30"
                  }`}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />

                {/* Imagen principal */}
                <motion.div
                  className={`relative w-64 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[28rem] rounded-2xl overflow-hidden shadow-2xl ${
                    theme === "dark" ? "border-4 border-slate-700/50" : "border-4 border-white"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/images/contacto.jpeg"
                    alt="Contacto"
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay con gradiente */}
                  <div
                    className={`absolute inset-0 ${
                      theme === "dark"
                        ? "bg-gradient-to-t from-black/30 via-transparent to-transparent"
                        : "bg-gradient-to-t from-indigo-500/10 via-transparent to-transparent"
                    }`}
                  ></div>

                  {/* Texto sobre la imagen */}
                  <div className="absolute bottom-6 left-6 text-white">
                    <motion.h3
                      className="text-2xl font-bold mb-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      ¡Hablemos!
                    </motion.h3>
                    <motion.p
                      className="text-lg opacity-90"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      Siempre abierto a nuevas oportunidades
                    </motion.p>
                  </div>
                </motion.div>

                {/* Elementos decorativos flotantes */}
                <motion.div
                  className={`absolute -top-4 -right-4 w-8 h-8 rounded-full ${
                    theme === "dark" ? "bg-slate-400" : "bg-indigo-500"
                  }`}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                />
                <motion.div
                  className={`absolute -bottom-4 -left-4 w-6 h-6 rounded-full ${
                    theme === "dark" ? "bg-indigo-500" : "bg-indigo-600"
                  }`}
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
                />
                <motion.div
                  className={`absolute top-1/2 -right-8 w-4 h-4 rounded-full ${
                    theme === "dark" ? "bg-slate-500" : "bg-indigo-400"
                  }`}
                  animate={{ x: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                />
              </div>
            </motion.div>

            {/* Formulario y redes sociales a la derecha */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-6 lg:space-y-8 order-first lg:order-last"
            >
              {/* Formulario de contacto */}
              <div>
                <h3
                  className={`text-xl sm:text-2xl font-bold mb-4 sm:mb-6 ${theme === "dark" ? "text-white" : "text-gray-800"}`}
                >
                  Envíame un mensaje
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div>
                    <motion.div
                      className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
                        theme === "dark" ? "bg-gray-900 border border-gray-800" : "bg-white border border-gray-200"
                      } ${focused === "name" ? (theme === "dark" ? "border-slate-400 shadow-glow" : "border-indigo-400 shadow-md") : ""}`}
                      animate={{
                        height: focused === "name" ? 60 : 50,
                      }}
                    >
                      <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        onFocus={() => handleFocus("name")}
                        onBlur={handleBlur}
                        placeholder="Tu nombre"
                        className={`w-full h-full px-4 bg-transparent outline-none ${
                          theme === "dark" ? "text-white" : "text-gray-800"
                        }`}
                        required
                      />
                    </motion.div>
                  </div>

                  <div>
                    <motion.div
                      className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
                        theme === "dark" ? "bg-gray-900 border border-gray-800" : "bg-white border border-gray-200"
                      } ${focused === "email" ? (theme === "dark" ? "border-slate-400 shadow-glow" : "border-indigo-400 shadow-md") : ""}`}
                      animate={{
                        height: focused === "email" ? 60 : 50,
                      }}
                    >
                      <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        onFocus={() => handleFocus("email")}
                        onBlur={handleBlur}
                        placeholder="Tu email"
                        className={`w-full h-full px-4 bg-transparent outline-none ${
                          theme === "dark" ? "text-white" : "text-gray-800"
                        }`}
                        required
                      />
                    </motion.div>
                  </div>

                  <div>
                    <motion.div
                      className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
                        theme === "dark" ? "bg-gray-900 border border-gray-800" : "bg-white border border-gray-200"
                      } ${focused === "message" ? (theme === "dark" ? "border-slate-400 shadow-glow" : "border-indigo-400 shadow-md") : ""}`}
                      animate={{
                        height: focused === "message" ? 150 : 120,
                      }}
                    >
                      <textarea
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        onFocus={() => handleFocus("message")}
                        onBlur={handleBlur}
                        placeholder="Tu mensaje"
                        className={`w-full h-full p-4 bg-transparent outline-none resize-none ${
                          theme === "dark" ? "text-white" : "text-gray-800"
                        }`}
                        required
                      />
                    </motion.div>
                  </div>

                  <motion.button
                    type="submit"
                    className={`relative w-full py-3 rounded-lg overflow-hidden font-medium transition-colors ${
                      theme === "dark"
                        ? "bg-indigo-600 text-white hover:bg-indigo-500"
                        : "bg-indigo-600 text-white hover:bg-indigo-500"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting || isSubmitted}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Enviando...
                      </span>
                    ) : isSubmitted ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="mr-2 h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        ¡Mensaje enviado!
                      </span>
                    ) : (
                      "Enviar Mensaje"
                    )}

                    {/* Efecto de progreso al enviar */}
                    {isSubmitting && (
                      <motion.div
                        className="absolute bottom-0 left-0 h-1 bg-white"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.5 }}
                      />
                    )}
                  </motion.button>
                </form>
              </div>

              {/* Redes sociales */}
              <div>
                <h3
                  className={`text-xl sm:text-2xl font-bold mb-4 sm:mb-6 ${theme === "dark" ? "text-white" : "text-gray-800"}`}
                >
                  Sígueme en redes
                </h3>

                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center p-3 sm:p-4 rounded-lg transition-all duration-300 group ${
                        theme === "dark"
                          ? "bg-gray-900 border border-gray-800 hover:border-slate-400/50"
                          : "bg-white border border-gray-200 hover:border-indigo-400/50"
                      }`}
                      whileHover={{ scale: 1.05, y: -5 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex flex-col items-center space-y-1 sm:space-y-2">
                        <div
                          className={`${theme === "dark" ? "text-slate-400 group-hover:text-indigo-400" : "text-indigo-600 group-hover:text-indigo-500"} transition-colors`}
                        >
                          {link.icon}
                        </div>
                        <span
                          className={`text-xs sm:text-sm font-medium ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
                        >
                          {link.name}
                        </span>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
