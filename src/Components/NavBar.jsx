import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { img } from "../utils/getImageUrl";

// قائمة روابط التنقل — الـ id لازم يطابق id القسم بالصفحة الرئيسية
const NavItem = [
  { title: "Home", id: "home" },
  { title: "About me", id: "aboutme" },
  { title: "Education", id: "education" },
  { title: "Projects", id: "projects" },
  { title: "Contact", id: "contact" },
];

// ─── كومبوننت شريط التنقل ──────────────────────────────
const NavBar = ({ theme, setTheme }) => {

  // حالة فتح/إغلاق منيو الموبايل
  const [isOpen, setIsOpen] = useState(false);

  // حالة القسم النشط حالياً
  const [active, setActive] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  // القسم اللي بدنا ننزل عليه بعد ما نرجع للصفحة الرئيسية
  const pendingHash = useRef(null);

  // خارج الصفحة الرئيسية ما في قسم نشط
  const activeId = isHome ? active : "";

  // ── التعامل مع ضغطة رابط التنقل ─────────────────────
  // إذا كنا بالصفحة الرئيسية: نزول سلس للقسم مباشرة.
  // إذا كنا بصفحة تفاصيل مشروع: رجوع للرئيسية أولاً ثم النزول للقسم.
  const handleNavClick = (event, id) => {
    event.preventDefault();
    setIsOpen(false);

    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      pendingHash.current = id;
      navigate("/");
    }
  };

  // بعد ما يوصل للصفحة الرئيسية، انزل على القسم المطلوب
  useEffect(() => {
    if (!isHome || !pendingHash.current) return;

    const id = pendingHash.current;
    pendingHash.current = null;
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, [isHome]);

  // مراقبة الأقسام لتحديد أيها ظاهر بالشاشة
  // بتنعاد عند تغيير الصفحة لأن الأقسام بتتغير
  useEffect(() => {
    if (!isHome) return;

    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    // تنظيف المراقب عند إزالة الكومبوننت أو تغيير الصفحة
    return () => observer.disconnect();
  }, [isHome]);

  return (
    <header className="w-full h-[100px] fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900">
      <nav className="flex items-center justify-between px-[70px] pt-[40px] text-primary dark:text-white">

        {/* اسم الموقع / اللوغو */}
        <h1 className="text-2xl font-bold">Ghiath</h1>

        {/* روابط التنقل - تظهر فقط على الشاشات الكبيرة */}
        <div className="hidden md:flex items-center gap-[24px]">
          {NavItem.map((item) => (
            <a
              key={item.id}
              href={`/#${item.id}`}
              onClick={(event) => handleNavClick(event, item.id)}
              aria-current={item.id === activeId ? "true" : undefined}
              className={`text-sm hover:text-accent ${item.id === activeId ? "text-[#0C96E2]" : ""}`}
            >
              {item.title}
            </a>
          ))}
        </div>

        {/* زر تغيير الثيم بين الوضع الليلي والنهاري */}
        <button
          type="button"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          className="cursor-pointer"
        >
          <img
            src={theme === "dark" ? img("Sun_fill.png") : img("moon.svg")}
            alt=""
            width={24}
            height={30}
            className="w-[24px] h-[30px]"
          />
        </button>

        {/* زر فتح/إغلاق القائمة - يظهر فقط على الموبايل */}
        <button
          type="button"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <img
            src={
              isOpen
                ? theme === "dark"
                  ? img("close-dark.svg")
                  : img("Close.svg")
                : theme === "dark"
                  ? img("dark-mune.svg")
                  : img("Menu_Alt_01.svg")
            }
            alt=""
            width={24}
            height={24}
            className="w-6 h-6"
          />
        </button>
      </nav>

      {/* منيو الموبايل - يظهر فقط لما isOpen تكون true */}
      {isOpen && (
        <div className="md:hidden fixed right-0 mt-6 w-[35%] bg-white dark:bg-gray-900 dark:text-white flex flex-col text-center gap-4 px-4 pb-4 shadow-lg">
          {NavItem.map((item) => (
            <a
              key={item.id}
              href={`/#${item.id}`}
              onClick={(event) => handleNavClick(event, item.id)}
              className={`text-sm hover:text-accent ${item.id === activeId ? "text-[#0C96E2]" : ""}`}
            >
              {item.title}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default NavBar;
