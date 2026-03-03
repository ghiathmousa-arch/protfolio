import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import projectsData from "./projectsData";
import { img } from "../utils/getImageUrl";
import Button from "./Button";

const Cards = ({ theme }) => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="px-6 md:px-17.5 my-10 md:my-17.5 text-primary dark:text-white">

      <h3 className="text-[#0C96E2] text-sm md:text-base">Portfolio</h3>

      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mt-2 mb-10">
        <h1 className="md:w-90 text-2xl md:text-4xl font-semibold">
          My Creative Works Latest
          <span className="text-[#0C96E2]"> Projects</span>
        </h1>
        <Button
          text="View Github"
          target="_blank"
          href="https://github.com/ghiathmousa-arch"
          icon={img("topandleft.png")}
          onClick={(e) => e.stopPropagation()}
        />
      </div>

      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projectsData.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col gap-3 md:h-80 cursor-pointer"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate(`/projects/${item.id}`)}
          >
            <img src={item.img} alt={item.title} className="w-full rounded-lg object-cover cursor-pointer" />

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-primary dark:text-white">{item.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.subtitle}</p>
              </div>

              <a href={item.github} target="_blank" onClick={(e) => e.stopPropagation()}>
                <img src={img("card.png")} alt="" className="w-7 h-7" />
              </a>
            </div>

          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default Cards;
