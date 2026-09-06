import { useCallback, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar'
import useTheme, { getInitialTheme } from './Components/useTheme'
import Hero from './Components/Hero'
import Dot from './Components/Dot'
import About from './Components/About'
import Timeline from './Components/Timeline'
import Cta from './Components/Cta'
import Cards from './Components/Cards'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import ProjectDetails from './Components/ProjectDetails'
import NotFound from './Components/NotFound'
import Preloader from './Components/Preloader'

function App() {
  // القراءة الأولية بتصير قبل أول رسم → بلا وميض أبيض بالوضع الداكن
  const [theme, setTheme] = useState(getInitialTheme)
  useTheme(theme)

  // بيصير true لما تخلص شاشة التحميل → وقتها بيبلش أنيميشن الهيرو
  const [ready, setReady] = useState(false)
  const handleReady = useCallback(() => setReady(true), [])

  return (
    <>
      {/* شاشة التحميل الأولى - بتختفي لحالها بأقل من ثانية ونص */}
      <Preloader onDone={handleReady} />

      {/* الكلاس "dark" بينضاف على الـ <html> من داخل useTheme،
          فهون منكتفي بلون الخلفية بس بدون تكرار الكلاس */}
      <div className="bg-white dark:bg-gray-900">
        <NavBar theme={theme} setTheme={setTheme} />

        <Routes>
          <Route path="/" element={
            <>
              <Hero ready={ready} />
              <Dot theme={theme} />
              <About />
              <Timeline />
              <Cta />
              <Cards />
              <Contact />
              <Footer />
          </>
        } />

        <Route path="/projects/:id" element={<ProjectDetails theme={theme} />} />

        {/* أي مسار غير معروف */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    </>
  )
}

export default App
