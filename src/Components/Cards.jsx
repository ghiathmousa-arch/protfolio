import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import projectsData from "./projectsData";
import { img } from "../utils/getImageUrl";
import Button from "./Button";

// ─── كومبوننت قسم المشاريع ─────────────────────────────
const Cards = () => {
  // للتنقل إلى صفحة تفاصيل المشروع عند الضغط على الكارد
  const navigate = useNavigate();

  return (
    <section id="projects" className="px-6 md:px-17.5 my-10 md:my-17.5 text-primary dark:text-white">

      {/* عنوان القسم الصغير */}
      <h3 className="text-[#0C96E2] text-sm md:text-base">Portfolio</h3>

      {/* السطر العلوي: العنوان الكبير + زر GitHub */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mt-2 mb-10">
        <h2 className="md:w-90 text-2xl md:text-4xl font-semibold">
          My Creative Works Latest
          <span className="text-[#0C96E2]"> Projects</span>
        </h2>

        {/* زر الانتقال لصفحة GitHub */}
        <Button
          text="View Github"
          target="_blank"
          href="https://github.com/ghiathmousa-arch"
          icon={img("topandleft.png")}
        />
      </div>

      {/* شبكة الكاردات - تتكيف من عمود واحد للموبايل إلى 3 أعمدة للديسكتوب */}
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projectsData.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col gap-3 md:h-80 cursor-pointer"
            // أنيميشن الدخول: كل كارد يدخل من الأسفل بتأخير متدرج
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            // تكبير الكارد عند hover وتصغيره عند الضغط
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            // الانتقال لصفحة تفاصيل المشروع عند الضغط على الكارد
            onClick={() => navigate(`/projects/${item.id}`)}
          >
            {/* صورة المشروع + الشارة فوقها.
                الشارة موضوعة فوق الصورة عشان ما تزيد ارتفاع البطاقة
                وتضل كل البطاقات بنفس الشكل */}
            <div className="relative">
              <img
                src={item.img}
                alt={`Screenshot of the ${item.title} project`}
                loading="lazy"
                className={`w-full rounded-lg object-cover cursor-pointer ${item.featured ? "ring-2 ring-[#0C96E2]" : ""}`}
              />

              {item.tag && (
                <span
                  className={`absolute top-2 left-2 px-2.5 py-1 rounded-md text-[11px] font-medium backdrop-blur-sm ${item.featured
                    ? "bg-[#0C96E2] text-white"
                    : "bg-white/85 text-primary dark:bg-gray-900/85 dark:text-white"
                    }`}
                >
                  {item.tag}
                </span>
              )}
            </div>

            {/* معلومات المشروع + أيقونة GitHub */}
            <div className="flex items-center justify-between">
              <div>
                {/* اسم المشروع */}
                <h3 className="font-semibold text-primary dark:text-white">{item.title}</h3>
                {/* وصف مختصر */}
                <p title={item.subtitle} className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">{item.subtitle}</p>
              </div>

              {/* رابط GitHub - بيظهر فقط إذا المشروع إله ريبو عام.
                  stopPropagation عشان ما ينتقل للصفحة التفصيلية */}
              {item.github && (
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${item.title} on GitHub`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <img src={img("card.png")} alt="" className="w-7 h-7" />
                </a>
              )}
            </div>

          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default Cards;