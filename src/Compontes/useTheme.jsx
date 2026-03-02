import { useEffect } from 'react'

const useTheme = (theme, setTheme) => {

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || savedTheme === "light") {
      setTheme(savedTheme)
    } else {
      setTheme(prefersDarkMode ? "dark" : "light")
    }
  }, [])

  useEffect(() => {
    // هاد السطر المهم - يحط class على الـ html
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    localStorage.setItem("theme", theme)
  }, [theme])
}

export default useTheme