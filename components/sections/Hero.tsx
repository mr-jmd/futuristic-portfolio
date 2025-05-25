"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import ParticleField from "@/components/three/ParticleField"
import Spline from "@splinetool/react-spline"


interface HeroProps {
  theme: string
}

export default function Hero({ theme }: HeroProps) {
  const nameRef = useRef(null)
  const titleRef = useRef(null)

  useEffect(() => {
    // Efecto parallax con GSAP
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const xPos = (clientX / window.innerWidth - 0.5) * 20
      const yPos = (clientY / window.innerHeight - 0.5) * 20

      gsap.to(nameRef.current, {
        x: xPos,
        y: yPos,
        duration: 1,
        ease: "power2.out",
      })

      gsap.to(titleRef.current, {
        x: -xPos * 0.5,
        y: -yPos * 0.5,
        duration: 1.2,
        ease: "power2.out",
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleScrollToAbout = () => {
    const aboutSection = document.querySelector("#sobre-mi")
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.getBoundingClientRect().top + window.scrollY - 100,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Fondo de partículas con Three.js - z-index más bajo */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Suspense fallback={null}>
            <ParticleField count={1500} theme={theme} />
          </Suspense>
        </Canvas>
      </div>

      {/* Spline 3D Model - z-index intermedio, por encima de partículas pero debajo del texto */}
      <div className={`absolute inset-0 w-full h-full z-10`}>
        <Spline 
          scene="https://prod.spline.design/KUSeJsuGPGKxQ3TX/scene.splinecode"
          style={{
            width: '100%',
            height: '100%'
          }}
        />
      </div>

      {/* <div className={`absolute bottom-4 right-4 w-40 h-10 z-20 ${
        theme === "dark"
      }`}
        style={{
          backgroundColor: theme === "dark" ? "#0A0A0A" : "#F9FAFB"
        }}
      ></div> */}

      {/* Contenido del hero superpuesto - z-index más alto para estar por encima de todo */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-30 relative pointer-events-none">
        <div className="flex flex-col items-center justify-center min-h-screen py-12 sm:py-16 lg:py-20">
          {/* Contenido de texto centrado */}
          <div className="text-center max-w-4xl px-4">
            <motion.h1
              ref={nameRef}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span
                className={`text-transparent bg-clip-text ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-white to-indigo-300"
                    : "bg-gradient-to-r from-gray-900 to-indigo-600"
                }`}
                style={{
                  textShadow: theme === "dark" 
                    ? "0 0 20px rgba(255, 255, 255, 0.5)" 
                    : "0 0 20px rgba(0, 0, 0, 0.3)"
                }}
              >
                JMA
              </span>
            </motion.h1>

            <motion.h2
              ref={titleRef}
              className={`text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-6 sm:mb-8 lg:mb-10 font-medium ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
              style={{
                textShadow: theme === "dark" 
                  ? "0 0 10px rgba(255, 255, 255, 0.3)" 
                  : "0 0 10px rgba(0, 0, 0, 0.4)"
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Desarrollador Full Stack
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
            >
              <motion.button
                className={`relative px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-lg overflow-hidden group backdrop-blur-md pointer-events-auto border ${
                  theme === "dark" 
                    ? "bg-gray-900/90 border-gray-600/50 text-white" 
                    : "bg-white/95 border-gray-400/60 text-gray-900"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleScrollToAbout}
              >
                <span
                  className={`absolute w-0 h-0 transition-all duration-300 ease-out rounded-full group-hover:w-56 group-hover:h-56 opacity-10 ${
                    theme === "dark"
                      ? "bg-gradient-to-r from-slate-400 to-indigo-500"
                      : "bg-gradient-to-r from-indigo-600 to-indigo-400"
                  }`}
                ></span>
                <span className={`relative font-medium ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}>
                  Sobre Mí
                </span>

                {/* Efecto de brillo al hover */}
                <motion.span
                  className="absolute inset-0 w-full h-full"
                  whileHover={{
                    boxShadow:
                      theme === "dark"
                        ? "0 0 15px 2px rgba(100, 116, 139, 0.5)"
                        : "0 0 20px 5px rgba(99, 102, 241, 0.2)",
                  }}
                />
              </motion.button>

              <motion.a
                href="#proyectos"
                onClick={(e) => {
                  e.preventDefault()
                  const projectsSection = document.querySelector("#proyectos")
                  if (projectsSection) {
                    window.scrollTo({
                      top: projectsSection.getBoundingClientRect().top + window.scrollY - 100,
                      behavior: "smooth",
                    })
                  }
                }}
                className={`relative px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-lg overflow-hidden backdrop-blur-md pointer-events-auto ${
                  theme === "dark"
                    ? "bg-indigo-600/90 text-white hover:bg-indigo-500/90"
                    : "bg-indigo-600/90 text-white hover:bg-indigo-500/90"
                } font-medium transition-colors`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Ver Proyectos
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Indicador de scroll */}
        <motion.div
          className="absolute bottom-6 lg:bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer z-40 pointer-events-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 1.5, delay: 1, repeat: Number.POSITIVE_INFINITY }}
          onClick={handleScrollToAbout}
        >
          <div className={`p-2 rounded-full backdrop-blur-md border ${
            theme === "dark" 
              ? "bg-gray-900/70 border-gray-600/50" 
              : "bg-white/80 border-gray-300/50"
          }`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 sm:h-8 sm:w-8 ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  )
}