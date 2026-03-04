import { motion } from "framer-motion";
import { img } from "../utils/getImageUrl";
import Button from "./Button";

const Cta = () => {
  return (
    // حركة دخول من تحت لفوق
    <motion.div
      className="md:my-[40px] mx-auto md:px-6"
      initial={{ y: 60, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.7 }}
    >
      <div
        className="relative w-[90%] md:w-[75%] rounded-5xl md:px-16 md:py-20 overflow-hidden inset-1 mx-auto"
        style={{ backgroundColor: "#0C96E2", borderRadius: 32 }}
      >
        {/* صورة الخلفية */}
        <img
          src={img("CTA.png")}
          alt=""
          className="absolute -inset-1 left-2 bottom-5 w-[100%] h-full object-fill"
        />

        {/* المحتوى */}
        <div className="relative z-10 flex flex-col md:flex md:flex-row items-center md:justify-between pt-[20px] pb-[20px] md:pt-0 md:pb-0">

          <div className="flex flex-col gap-4 px-5 md:px-25 text-center">
            {/* حركة العنوان من اليسار */}
            <motion.h2
              className="text-2xl pt-3.75 md:text-4xl font-bold text-white"
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Let's Work Together!
            </motion.h2>

            {/* حركة الوصف من اليسار */}
            <motion.p
              className="text-white text-[13px] pt-1.25"
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Have a project in mind? I'd love to help you build it. Let's discuss your idea and bring it to life.
            </motion.p>
          </div>

          {/* حركة الزر من اليمين */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button text="Contact" href="#contact" icon={img("left.png")} />
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
};

export default Cta;