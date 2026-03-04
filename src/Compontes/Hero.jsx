import { motion } from "framer-motion"
import { img } from "../utils/getImageUrl"

// ─── كومبوننت قسم الهيرو (الصفحة الرئيسية) ───────────
const Hero = ({ theme }) => {
  return (
    <section
      id="home"
      className="w-full h-auto md:h-[550px] px-6 md:px-[70px] py-[50px] my-[70px] flex flex-col md:flex-row items-center justify-between text-primary dark:text-white bg-white dark:bg-gray-900 relative overflow-hidden"
      // خلفية الـ SVG الزخرفية من الأسفل
      style={{
        backgroundImage: `url('${img('Vector 3.svg')}'), url('${img('Vector 1.svg')}')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom'
      }}
    >

      {/* الجانب الأيسر: النص وزر التحميل - يدخل من اليسار */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1.8 }}
        className="w-full md:w-1/2 flex flex-col gap-4 py-10 order-2 md:order-1 items-center md:items-start text-center md:text-left"
        // خلفية التدرج خلف النص
        style={{
          backgroundImage: `url('${img('Blur Gradient.png')}')`,
          backgroundRepeat: 'no-repeat'
        }}
      >

        {/* العنوان الرئيسي */}
        <h1 className="text-3xl lg:text-5xl font-bold leading-snug">
          <span className="font-normal">HEY!</span> I'm Ghiath,<br /> Frontend Developer
        </h1>

        {/* وصف مختصر */}
        <p className="w-full max-w-[360px] font-['Poppins'] font-normal text-[16px] md:text-[18px] leading-[150%] tracking-normal text-[#43495B] dark:text-gray-300">
          Frontend Developer focused on building clean and responsive web experiences.
        </p>

        {/* زر تحميل الـ CV - يجيب الملف من مجلد public */}
        <a
          href="/protfolio/Ghiath_Mousa_CV.pdf"
          download="Ghiath_Mousa_CV.pdf"
          className="bg-white/60 mt-6 md:mt-[30px] px-6 py-3 rounded-lg w-fit text-primary dark:text-white hover:bg-primary hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300"
        >
          Download CV
        </a>
      </motion.div>

      {/* الجانب الأيمن: الصورة والعناصر البصرية - يدخل من اليمين */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1.8 }}
        className="w-full md:w-1/2 relative flex items-center justify-center min-h-[300px] md:min-h-[500px] order-1 md:order-2"
      >

        {/* الشكل الخلفي خلف الصورة */}
        <img src={img('squers.svg')} alt="" className="w-[280px] sm:w-[350px] md:w-[320px]" />

        {/* صورة الشخص فوق الشكل الخلفي */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative flex items-center justify-center w-[45%] lg:w-[45%] md:w-[90%]">

            {/* الدائرة الزرقاء خلف الصورة */}
            <img src={img('Circle.png')} alt="" className="w-[80%]" />

            {/* صورة غياث مع أنيميشن نبض للأعلى والأسفل */}
            <motion.img
              src={img('me.png')}
              alt="Ghiath"
              className="absolute bottom-0 -left-5 w-[90%] object-contain"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;