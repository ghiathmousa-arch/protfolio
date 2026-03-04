import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import projectsData from "./projectsData"; // بيانات المشاريع
import { img } from "../utils/getImageUrl"; // دالة تجلب الصور

const ProjectsSlider = ({ theme }) => {
  // الإندكس الحالي للمشروع اللي عم يتعرض
  const [current, setCurrent] = useState(0);

  // اتجاه الحركة: 1 = يمين، -1 = يسار
  const [direction, setDirection] = useState(1);

  // للتنقل بين الصفحات
  const navigate = useNavigate();

  // زر السابق - يرجع للمشروع قبله
  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
  };

  // زر التالي - يروح للمشروع الجاي
  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev === projectsData.length - 1 ? 0 : prev + 1));
  };

  // تعريف حركات الأنيميشن للسلايدر
  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }), // يدخل من اليمين أو اليسار
    center: { x: 0, opacity: 1 },                                // يثبت بالمنتصف
    exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),   // يخرج للجهة المعاكسة
  };

  return (
    <section className="px-6 md:px-17.5 my-10 md:my-17.5 text-primary dark:text-white">

      {/* العنوان + أزرار التنقل */}
      <motion.div
        className="mb-10 flex items-center justify-between"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
      >
        {/* نص العنوان */}
        <div>
          <h3 className="text-[#0C96E2] text-sm md:text-base">Portfolio</h3>
          <h1 className="text-2xl md:text-4xl font-semibold mt-1">
            The Best <span className="text-[#0C96E2]">Projects</span>
          </h1>
        </div>

        {/* أزرار السابق والتالي */}
        <div className="flex gap-3">
          {/* زر السابق */}
          <button
            onClick={prev}
            className="w-9 h-9 rounded-full border border-[#0C96E2] flex items-center justify-center hover:bg-[#0C96E2] transition-all group"
          >
            <img src={img("leftslider.png")} alt="" className="brightness-0 group-hover:invert" />
          </button>

          {/* زر التالي */}
          <button
            onClick={next}
            className="w-9 h-9 rounded-full border border-[#0C96E2] flex items-center justify-center hover:bg-[#0C96E2] transition-all group"
          >
            <img src={img("rightslider.png")} alt="" className="brightness-0 group-hover:invert" />
          </button>
        </div>
      </motion.div>

      {/* منطقة السلايدر - overflow-hidden عشان يخبي الكروت اللي برا الشاشة */}
      <div className="relative overflow-hidden">

        {/* AnimatePresence بتتعامل مع الدخول والخروج للعناصر */}
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current} // كل ما تغير current يعيد الأنيميشن
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {/* عرض 3 مشاريع بنفس الوقت */}
            {[0, 1, 2].map((offset) => {
              // % عشان يدور على المصفوفة ويرجع للأول لما يخلص
              const item = projectsData[(current + offset) % projectsData.length];
              return (
                // الكارت كله قابل للكليك - يروح لصفحة التفاصيل
                <div
                  key={item.id}
                  className="flex flex-col gap-3 cursor-pointer"
                  onClick={() => {
                    navigate(`/projects/${item.id}`); // روح لصفحة تفاصيل المشروع
                    window.scrollTo(0, 0);            // ارجع لأول الصفحة
                  }}
                >
                  {/* صورة المشروع */}
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full rounded-lg object-cover h-[200px]"
                  />

                  {/* الجزء السفلي - stopPropagation عشان الكليك هون ما يفتح صفحة التفاصيل */}
                  <div
                    className="flex items-center justify-between"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* اسم المشروع والتقنية */}
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{item.subtitle}</p>
                    </div>

                    {/* أيقونة GitHub - تفتح الريبو بتاب جديد */}
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()} // وقف الكليك عشان ما يفتح صفحة التفاصيل
                    >
                      <img src={img("card.png")} alt="" className="w-7 h-7" />
                    </a>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

    </section>
  );
};

export default ProjectsSlider;