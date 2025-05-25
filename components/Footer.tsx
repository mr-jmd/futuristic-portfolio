"use client"

import { motion } from "framer-motion"

interface FooterProps {
  theme: string
}

export default function Footer({ theme }: FooterProps) {
  return (
    <footer className={`py-6 sm:py-8 ${theme === "dark" ? "bg-gray-900" : "bg-white border-t border-gray-200"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <motion.div
            className={`text-lg sm:text-xl font-bold ${theme === "dark" ? "text-white" : "text-gray-800"}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
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

          <motion.div
            className={`text-sm sm:text-base ${theme === "dark" ? "text-gray-400" : "text-gray-600"} text-center sm:text-right`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            &copy; {new Date().getFullYear()} Todos los derechos reservados
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
