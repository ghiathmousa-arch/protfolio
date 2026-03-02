import { useEffect, useState } from "react";
{/* state mood */ }
const NavBar = ({ theme, setTheme }) => {
  {/* هي مشان ازا فتح الكبسة يلي تظهر بشاشات الصغيرة القائمة */ }
  const [isOpen, setIsOpen] = useState(false);
  {/*  شريط الناف*/ }
  const NavItem = [
    { title: "Home", to: '#home' },
    { title: "About me", to: "#aboutme" },
    { title: "Education", to: "#education" },
    { title: "Projects", to: "#projects" },
    { title: "Contact", to: "#contact" },
  ];

  {/* activr section */ }
  const [active, setActive] = useState()
  {/* view the scroll */ }
  useEffect(() => {
    {/*get all secton [id] */ }
    const section = document.querySelectorAll("section[id]")
    {/*مراقب للحالة ازا دخلنا 0.5 من القسم نفذ التابع */ }
    const observer = new IntersectionObserver((entries) => {
      // يراقب كل سكشن.
      // إذا دخل السكشن في الشاشة بنسبة 50% (threshold: 0.5)
      // يحدّث active بالـ id الخاص بالسكشن.
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id)
        }
      })
    }, { threshold: 0.5 })
    // ربط المراقب بكل سكشن
    section.forEach((section) => {
      observer.observe(section)
    })
  }, [])


  return (
    //  contuner nav
    <div className="w-full h-[100px] fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900">

      <div className="flex items-center justify-between px-[70px] pt-[40px] text-primary dark:text-white">
        {/* title */}
        <h1 className="text-2xl font-bold">Ghiath</h1>
        {/* disraption */}
        <div className="hidden md:flex items-center gap-[24px]">
          {/* nav item */}
          {NavItem.map((item, index) => (
            <a key={index} href={item.to} className={`text-sm hover:text-accent ${item.to === `#${active}` ? "text-[#0C96E2]" : ""}`}>
              {item.title}
            </a>
          ))}
        </div>
        {/* icon nav and check mood */}
        <img
          onClick={() => setTheme(theme === 'dark' ? "light" : "dark")}
          src={theme === "dark" ? "/Sun_fill.png" : "/moon.svg"}
          alt="image"
          className="w-[24px] h-[30px]"
        />
        {/* sm icon close and theme is the dark and lighti */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <img
            src={
              isOpen
                ? (theme === "dark" ? "/close-dark.svg" : "/Close.svg")
                : (theme === "dark" ? "/dark-mune.svg" : "/Menu_Alt_01.svg")
            }
            alt="menu"
            className="w-6 h-6"
          />
        </button>

      </div>
      {/* check isopen state show nav item in the small smart  */}
      {isOpen && (
        <div className="md:hidden fixed  right-0 z-40 w-[35%] h-auto flex flex-col text-center gap-4 mt-6 px-4 pb-4
        bg-white dark:bg-gray-900 dark:text-white">
          {/* nav iten small show */}
          {NavItem.map((item, index) => (
            <a
              key={index}
              href={item.to}
              className="text-sm hover:text-accent"
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </a>
          ))}
        </div>
      )}

    </div>
  );
};

export default NavBar;
