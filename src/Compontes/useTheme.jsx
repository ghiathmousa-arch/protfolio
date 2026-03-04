import { useEffect } from 'react'

// ─── Custom Hook لإدارة الثيم (داكن / فاتح) ───────────
// يستقبل: theme (القيمة الحالية) و setTheme (دالة التغيير)
const useTheme = (theme, setTheme) => {

  // عند أول تحميل للصفحة: اقرأ الثيم المحفوظ أو استخدم إعداد الجهاز
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || savedTheme === "light") {
      // إذا في ثيم محفوظ مسبقاً استخدمه
      setTheme(savedTheme)
    } else {
      // إذا ما في محفوظ، استخدم إعداد الجهاز تلقائياً
      setTheme(prefersDarkMode ? "dark" : "light")
    }
  }, [])

  // عند كل تغيير بقيمة theme: طبّقه على الـ HTML واحفظه
  useEffect(() => {
    if (theme === "dark") {
      // إضافة class="dark" على الـ html لتفعيل dark mode بـ Tailwind
      document.documentElement.classList.add("dark")
    } else {
      // إزالة class="dark" لتفعيل الوضع الفاتح
      document.documentElement.classList.remove("dark")
    }
    // حفظ الاختيار بالـ localStorage عشان يبقى بعد ريفريش الصفحة
    localStorage.setItem("theme", theme)
  }, [theme])
}

export default useTheme