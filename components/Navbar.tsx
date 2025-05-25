"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface NavbarProps {
  theme: string
}

export default function Navbar({ theme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Sobre Mí", href: "#sobre-mi" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Habilidades", href: "#habilidades" },
    { name: "Experiencia", href: "#experiencia" },
    { name: "Formación", href: "#formación" },
    { name: "Contacto", href: "#contacto" },
  ]

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 100,
        behavior: "smooth",
      })
    }
    setMobileMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? theme === "dark"
              ? "py-2 backdrop-blur-lg bg-black/50"
              : "py-2 backdrop-blur-lg bg-white/70 shadow-sm"
            : "py-6 bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <motion.div
            className={`text-xl md:text-2xl font-bold ${theme === "dark" ? "text-white" : "text-gray-800"}`}
            whileHover={{ scale: 1.05 }}
          >
            <span
              className={`text-transparent bg-clip-text ${
                theme === "dark"
                  ? "bg-gradient-to-r from-slate-400 to-indigo-500"
                  : "bg-gradient-to-r from-indigo-600 to-indigo-400"
              }`}
            >
              JMA
            </span>            
          </motion.div>

          <ul className="hidden md:flex space-x-6">
            {navItems.map((item, index) => (
              <motion.li key={index} whileHover={{ scale: 1.1, y: -2 }}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                  className={`relative font-medium ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  } hover:text-indigo-500 transition-colors`}
                >
                  {item.name}
                  <motion.span
                    className={`absolute bottom-0 left-0 w-0 h-0.5 ${
                      theme === "dark"
                        ? "bg-gradient-to-r from-slate-400 to-indigo-500"
                        : "bg-gradient-to-r from-indigo-600 to-indigo-400"
                    }`}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
              </motion.li>
            ))}
          </ul>

          <motion.button
            className={`md:hidden p-2 ${theme === "dark" ? "text-slate-400" : "text-indigo-600"}`}
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>
      </motion.nav>

      {/* Menú móvil */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className={`fixed inset-0 z-50 md:hidden ${theme === "dark" ? "bg-black/95" : "bg-white/95"} backdrop-blur-sm`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-6">
                <motion.div className={`text-xl font-bold ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
                  <span
                    className={`text-transparent bg-clip-text ${
                      theme === "dark"
                        ? "bg-gradient-to-r from-slate-400 to-indigo-500"
                        : "bg-gradient-to-r from-indigo-600 to-indigo-400"
                    }`}
                  >
                    JMA
                  </span>                  
                </motion.div>
                <motion.button
                  className={theme === "dark" ? "text-white" : "text-gray-800"}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>
              <div className="flex-1 flex flex-col justify-center px-6">
                <ul className="space-y-8">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-center"
                    >
                      <a
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault()
                          handleNavClick(item.href)
                        }}
                        className={`text-2xl font-medium ${
                          theme === "dark" ? "text-white" : "text-gray-800"
                        } hover:text-indigo-500 transition-colors block py-4`}
                      >
                        {item.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
