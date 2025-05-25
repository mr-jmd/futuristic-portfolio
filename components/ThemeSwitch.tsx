"use client"

import { motion } from "framer-motion"

interface ThemeSwitchProps {
  theme: string
  toggleTheme: () => void
}

export default function ThemeSwitch({ theme, toggleTheme }: ThemeSwitchProps) {
  return (
    <motion.div
      className="fixed right-6 top-24 z-40"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6 }}
    >
      <motion.button
        onClick={toggleTheme}
        className={`relative w-16 h-8 rounded-full flex items-center transition-colors duration-300 focus:outline-none ${
          theme === "dark" ? "bg-gray-800" : "bg-white border border-gray-200"
        }`}
        whileTap={{ scale: 0.95 }}
      >
        <motion.span
          className={`absolute left-1 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 ${
            theme === "light" ? "translate-x-8 bg-indigo-500" : "bg-white"
          }`}
        >
          {theme === "dark" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-800"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </motion.span>
      </motion.button>
    </motion.div>
  )
}
