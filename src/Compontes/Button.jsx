import { motion } from "framer-motion";

// ─── كومبوننت الزر العام ───────────────────────────────
// يستقبل:
// text      → النص اللي يظهر بالزر
// href      → الرابط اللي يفتح عند الضغط
// icon      → أيقونة اختيارية تظهر جنب النص
// target    → مثل "_blank" لفتح الرابط بتاب جديد
// className → كلاسات Tailwind إضافية لتخصيص الشكل
const Button = ({ text, href, icon, target, className = "" }) => {
  return (
    <motion.a
      href={href}
      target={target}
      // إضافة rel للأمان عند فتح روابط خارجية بتاب جديد
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`mt-3 px-4 md:px-6 py-2 md:py-3 rounded-lg cursor-pointer bg-[#0C96E2] text-white font-medium flex items-center gap-2 w-fit ${className}`}
      // تكبير الزر وترفيعه قليلاً عند hover
      whileHover={{ scale: 1.05, y: -2 }}
      // تصغير الزر عند الضغط عليه
      whileTap={{ scale: 0.97, y: 0 }}
      // نوع الأنيميشن: spring لحركة طبيعية ومرنة
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* نص الزر */}
      {text}

      {/* الأيقونة - تظهر فقط إذا تم تمريرها */}
      {icon && <img src={icon} alt="" className="w-4 h-4" />}
    </motion.a>
  );
};

export default Button;