"use client"

import { useEffect, useState, Suspense } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Helmet } from "react-helmet"
import Navbar from "@/components/Navbar"
import ThemeSwitch from "@/components/ThemeSwitch"
import Hero from "@/components/sections/Hero"
import AboutMe from "@/components/sections/AboutMe"
import Projects from "@/components/sections/Projects"
import Skills from "@/components/sections/Skills"
import Experience from "@/components/sections/Experience"
import Education from "@/components/sections/Education"
import Contact from "@/components/sections/Contact"
import Footer from "@/components/Footer"
import LoadingScreen from "@/components/LoadingScreen"

export default function Portfolio() {
  const [loading, setLoading] = useState(true)
  const [theme, setTheme] = useState("dark") // "dark" or "light"

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  useEffect(() => {
    // Simular carga de recursos
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Helmet>
        <title>Portfolio Futurista | Desarrollador Full Stack</title>
        <meta
          name="description"
          content="Portfolio futurista de desarrollador full stack especializado en React y diseño frontend innovador"
        />
        <meta name="keywords" content="portfolio, desarrollador, react, frontend, diseño, futurista" />
      </Helmet>

      <div className={`min-h-screen ${theme === "dark" ? "bg-[#0a0a0a]" : "bg-gray-50"}`}>
        <AnimatePresence>
          {loading ? (
            <LoadingScreen />
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <Navbar theme={theme} />
              <ThemeSwitch theme={theme} toggleTheme={toggleTheme} />

              <main>
                <Suspense
                  fallback={<div className="h-screen flex items-center justify-center text-slate-400">Cargando...</div>}
                >
                  <Hero theme={theme} />
                </Suspense>

                <Suspense
                  fallback={
                    <div className="h-screen flex items-center justify-center text-slate-400">
                      Cargando información...
                    </div>
                  }
                >
                  <AboutMe theme={theme} />
                </Suspense>

                <Suspense
                  fallback={
                    <div className="h-screen flex items-center justify-center text-slate-400">
                      Cargando proyectos...
                    </div>
                  }
                >
                  <Projects theme={theme} />
                </Suspense>

                <Suspense
                  fallback={
                    <div className="h-screen flex items-center justify-center text-slate-400">
                      Cargando habilidades...
                    </div>
                  }
                >
                  <Skills theme={theme} />
                </Suspense>

                <Suspense
                  fallback={
                    <div className="h-screen flex items-center justify-center text-slate-400">
                      Cargando experiencia...
                    </div>
                  }
                >
                  <Experience theme={theme} />
                </Suspense>

                <Suspense
                  fallback={
                    <div className="h-screen flex items-center justify-center text-slate-400">
                      Cargando formación...
                    </div>
                  }
                >
                  <Education theme={theme} />
                </Suspense>

                <Suspense
                  fallback={
                    <div className="h-screen flex items-center justify-center text-slate-400">Cargando contacto...</div>
                  }
                >
                  <Contact theme={theme} />
                </Suspense>
              </main>

              <Footer theme={theme} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
