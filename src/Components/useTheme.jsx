import { useEffect } from 'react'

// ─── قراءة الثيم الابتدائي قبل أول رسم للصفحة ─────────
// بتنستدعى داخل useState initializer بـ App.jsx، فبتنفّذ
// قبل ما React يرسم أي شي → ما بيصير وميض أبيض (FOUC)
export const getInitialTheme = () => {
  // حماية إذا الكود اشتغل بمكان ما فيه window (SSR مثلاً)
  if (typeof window === 'undefined') return 'light'

  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark' || savedTheme === 'light') return savedTheme

  // ما في ثيم محفوظ → استخدم إعداد الجهاز
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

// ─── Custom Hook لإدارة الثيم (داكن / فاتح) ───────────
// مسؤول بس عن مزامنة الحالة مع الـ DOM والـ localStorage.
// القراءة الأولية صارت بـ getInitialTheme فوق.
const useTheme = (theme) => {

  // عند كل تغيير بقيمة theme: طبّقه على الـ HTML واحفظه
  useEffect(() => {
    if (theme === 'dark') {
      // إضافة class="dark" على الـ html لتفعيل dark mode بـ Tailwind
      document.documentElement.classList.add('dark')
    } else {
      // إزالة class="dark" لتفعيل الوضع الفاتح
      document.documentElement.classList.remove('dark')
    }
    // حفظ الاختيار بالـ localStorage عشان يبقى بعد ريفريش الصفحة
    localStorage.setItem('theme', theme)
  }, [theme])
}

export default useTheme
