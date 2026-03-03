import { useEffect, useState } from "react";
import { img } from "../utils/getImageUrl";

const NavBar = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const NavItem = [
    { title: "Home", to: "#home" },
    { title: "About me", to: "#aboutme" },
    { title: "Education", to: "#education" },
    { title: "Projects", to: "#projects" },
    { title: "Contact", to: "#contact" },
  ];

  const [active, setActive] = useState("");

  useEffect(() => {
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

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full h-[100px] fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900">
      <div className="flex items-center justify-between px-[70px] pt-[40px] text-primary dark:text-white">

        <h1 className="text-2xl font-bold">Ghiath</h1>

        {/* روابط الشاشات الكبيرة */}
        <div className="hidden md:flex items-center gap-[24px]">
          {NavItem.map((item, index) => (
            <a
              key={index}
              href={item.to}
              className={`text-sm hover:text-accent ${item.to === `#${active}` ? "text-[#0C96E2]" : ""
                }`}
            >
              {item.title}
            </a>
          ))}
        </div>

        {/* زر تغيير الثيم */}
        <img
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          src={theme === "dark" ? img("Sun_fill.png") : img("moon.svg")}
          alt="theme"
          className="w-[24px] h-[30px] cursor-pointer"
        />

        {/* زر القائمة للشاشات الصغيرة */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
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
            alt="menu"
            className="w-6 h-6"
          />
        </button>
      </div>

      {/* منيو الموبايل */}
      {isOpen && (
        <div className="md:hidden fixed right-0 mt-6 w-[35%] bg-white dark:bg-gray-900 dark:text-white flex flex-col text-center gap-4 px-4 pb-4 shadow-lg">
          {NavItem.map((item, index) => (
            <a
              key={index}
              href={item.to}
              className={`text-sm hover:text-accent ${item.to === `#${active}` ? "text-[#0C96E2]" : ""
                }`}
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