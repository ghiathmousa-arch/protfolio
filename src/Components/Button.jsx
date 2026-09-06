import { motion } from "framer-motion";

// ─── كومبوننت الزر العام ───────────────────────────────
// يستقبل:
// text      → النص اللي يظهر بالزر
// href      → الرابط اللي يفتح عند الضغط (إذا موجود بينرسم كـ <a>)
// icon      → أيقونة اختيارية تظهر جنب النص
// target    → مثل "_blank" لفتح الرابط بتاب جديد
// type      → نوع الزر لما ينرسم كـ <button> (افتراضياً "button")
// onClick   → دالة تنفّذ عند الضغط
// disabled  → تعطيل الزر (يشتغل فقط بحالة <button>)
// className → كلاسات Tailwind إضافية لتخصيص الشكل
const Button = ({
  text,
  href,
  icon,
  target,
  type = "button",
  onClick,
  disabled = false,
  className = "",
}) => {

  const baseClass =
    `mt-3 px-4 md:px-6 py-2 md:py-3 rounded-lg cursor-pointer bg-[#0C96E2] text-white font-medium flex items-center gap-2 w-fit disabled:opacity-60 disabled:cursor-not-allowed ${className}`;

  // خصائص الحركة المشتركة بين <a> و <button>
  const motionProps = {
    // تكبير الزر وترفيعه قليلاً عند hover
    whileHover: disabled ? undefined : { scale: 1.05, y: -2 },
    // تصغير الزر عند الضغط عليه
    whileTap: disabled ? undefined : { scale: 0.97, y: 0 },
    // نوع الأنيميشن: spring لحركة طبيعية ومرنة
    transition: { type: "spring", stiffness: 300, damping: 20 },
  };

  // محتوى الزر: النص + أيقونة اختيارية
  const content = (
    <>
      {text}
      {icon && <img src={icon} alt="" width={16} height={16} className="w-4 h-4" />}
    </>
  );

  // إذا ما في href → نرسمه كزر حقيقي عشان يشتغل بلوحة المفاتيح ويقدر يرسل فورم
  if (!href) {
    return (
      <motion.button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={baseClass}
        {...motionProps}
      >
        {content}
      </motion.button>
    );
  }

  return (
    <motion.a
      href={href}
      target={target}
      onClick={onClick}
      // إضافة rel للأمان عند فتح روابط خارجية بتاب جديد
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={baseClass}
      {...motionProps}
    >
      {content}
    </motion.a>
  );
};

export default Button;
