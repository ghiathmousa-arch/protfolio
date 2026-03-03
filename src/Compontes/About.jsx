import { motion } from "framer-motion"
import { img } from "../utils/getImageUrl";

const ProgressBar = ({ skill, percentage }) => {
  return (
    <div className="flex flex-col gap-2 mb-6">
      <span className="font-semibold text-lg text-primary dark:text-white">{skill}</span>
      <div className="relative w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
        <div
          className="h-full bg-[#0C96E1] rounded-full relative"
          style={{ width: `${percentage}%` }}
        >
          <div className="absolute -right-5 -top-9 flex flex-col items-center">
            <span className="text-xs bg-[#0C96E1] text-white px-2 py-0.5 rounded-sm">
              {percentage}%
            </span>
            <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#0C96E1]" />
          </div>
          <div
            className="absolute -right-3 -top-2 w-6 h-6 rounded-full bg-white border-[3px] border-[#0C96E1]"
            style={{ boxShadow: '0px 4px 7px 0px #00000033' }}
          />
        </div>
      </div>
    </div>
  )
}

const About = ({ theme }) => {
  return (
    <section id="aboutme" className="w-full px-8 py-16 overflow-hidden bg-white dark:bg-gray-900">
      <div className="max-w-6xl md:mx-auto flex flex-col md:flex-row items-center gap-12">

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="flex"
        >
          <img src={img("about.png")} alt="" />
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex flex-col gap-6"
        >
          <h2 className="text-3xl font-bold text-primary dark:text-white">About Me</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.
          </p>
          <ProgressBar skill="HTML5" percentage={90} />
          <ProgressBar skill="CSS3" percentage={85} />
          <ProgressBar skill="Javascript" percentage={95} />
          <ProgressBar skill="React" percentage={90} />
        </motion.div>

      </div>
    </section>
  )
}

export default About;