import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import projectsData from "./projectsData";
import { img } from "../utils/getImageUrl";

const ProjectsSlider = ({ theme }) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const navigate = useNavigate();

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
  };

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev === projectsData.length - 1 ? 0 : prev + 1));
  };

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <section className="px-6 md:px-17.5 my-10 md:my-17.5 text-primary dark:text-white">

      {/* العنوان */}
      {/* العنوان + الأزرار */}
      <motion.div
        className="mb-10 flex items-center justify-between"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <h3 className="text-[#0C96E2] text-sm md:text-base">Portfolio</h3>
          <h1 className="text-2xl md:text-4xl font-semibold mt-1">
            The Best <span className="text-[#0C96E2]">Projects</span>
          </h1>
        </div>

        {/* أزرار التنقل */}
        <div className="flex gap-3">
          <button
            onClick={prev}
            className="w-9 h-9 rounded-full border border-[#0C96E2] flex items-center justify-center hover:bg-[#0C96E2] transition-all group"
          >
            <img src={img("leftslider.png")} alt="" className=" brightness-0 group-hover:invert" />
          </button>
          <button
            onClick={next}
            className="w-9 h-9 rounded-full border bg- border-[#0C96E2]  flex items-center justify-center  hover:bg-[#0C96E2] transition-all group"
          >
            <img src={img("rightslider.png")} alt="" className="brightness-0 group-hover:invert" />
          </button>
        </div>
      </motion.div>

      {/* السلايدر */}
      <div className="relative overflow-hidden">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {[0, 1, 2].map((offset) => {
              const item = projectsData[(current + offset) % projectsData.length];
              return (
                <div
                  key={item.id}
                  className="flex flex-col gap-3 cursor-pointer"
                  onClick={() => navigate(`/projects/${item.id}`)}
                >
                  <img src={item.img} alt={item.title} className="w-full rounded-lg object-cover h-[200px]" />
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{item.subtitle}</p>
                    </div>
                    <a href={item.github} target="_blank" onClick={(e) => e.stopPropagation()}>
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