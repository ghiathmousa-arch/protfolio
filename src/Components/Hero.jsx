import { motion } from "framer-motion"
import { img } from "../utils/getImageUrl"
import socialLinks from "./socialLinks"

// التقنيات اللي بتظهر كشارات تحت الوصف
const techStack = ["React", "Next.js", "TypeScript"];

// ─── نجمة زخرفية صغيرة (sparkle) ──────────────────────
// بتلمع بحركة خفيفة متكررة، وكل وحدة إلها تأخير مختلف
const Sparkle = ({ className, size = 18, color = "#0C96E2", delay = 0 }) => (
  <motion.svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    aria-hidden="true"
    className={`absolute pointer-events-none ${className}`}
    animate={{ opacity: [0.4, 1, 0.4], scale: [0.85, 1, 0.85] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay }}
  >
    <path
      d="M12 0c.6 6.3 5.7 11.4 12 12-6.3.6-11.4 5.7-12 12-.6-6.3-5.7-11.4-12-12C6.3 11.4 11.4 6.3 12 0z"
      fill={color}
    />
  </motion.svg>
);

// دخول متدرّج لعناصر النص: كل عنصر بيطلع بعد اللي قبله
const textGroup = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.11, delayChildren: 0.12 },
  },
};

const textItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// ─── كومبوننت قسم الهيرو (الصفحة الرئيسية) ───────────
// ready: بتيجي من App وبتصير true بعد ما تخلص شاشة التحميل
const Hero = ({ ready = true }) => {
  return (
    <section
      id="home"
      className="w-full px-6 md:px-[70px] lg:pr-[120px] py-[50px] my-[70px] md:min-h-[560px] flex flex-col md:flex-row items-center justify-between gap-12 md:gap-6 text-primary dark:text-white bg-white dark:bg-gray-900 relative"
    >

      {/* ── هالة ضوئية ناعمة بالخلفية ────────────────────
          تدرّجات شعاعية بتكسر بياض الخلفية وبتعطي عمق.
          استخدمنا radial-gradient مش دوائر مموّهة لأنها بتتلاشى
          لحالها فما بيبين خط قصّ على حواف القسم */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(520px 380px at 8% 12%, rgba(12,150,226,0.13), transparent 65%), " +
            "radial-gradient(560px 420px at 92% 92%, rgba(124,92,255,0.11), transparent 65%)",
        }}
      />

      {/* ── الجانب الأيسر: النص وزر التحميل ─────────────── */}
      <motion.div
        variants={textGroup}
        initial="hidden"
        animate={ready ? "show" : "hidden"}
        className="relative z-10 w-full md:w-1/2 flex flex-col gap-4 py-10 order-2 md:order-1 items-center md:items-start text-center md:text-left"
      >

        {/* الكلمة الصغيرة فوق العنوان (eyebrow) مع نقطة نابضة */}
        <motion.span
          variants={textItem}
          className="inline-flex items-center gap-2 text-[#0C96E2] text-sm md:text-base font-medium"
        >
          <span className="relative flex w-2 h-2">
            {/* الحلقة اللي بتتوسّع وتختفي - نبضة خفيفة */}
            <span className="absolute inline-flex w-full h-full rounded-full bg-[#0C96E2] opacity-70 animate-ping" />
            <span className="relative inline-flex w-2 h-2 rounded-full bg-[#0C96E2]" />
          </span>
          Welcome
        </motion.span>

        {/* العنوان الرئيسي */}
        <motion.h1 variants={textItem} className="text-3xl lg:text-5xl font-bold leading-tight">
          <span className="font-normal">HEY!</span> I'm Ghiath,<br /> Full-stack Developer
        </motion.h1>

        {/* وصف مختصر */}
        <motion.p
          variants={textItem}
          className="w-full max-w-[400px] font-['Poppins'] font-normal text-[15px] md:text-[16px] leading-[170%] text-[#43495B] dark:text-gray-300"
        >
          Full-stack Developer building clean, responsive interfaces and the APIs that power them.
        </motion.p>

        {/* شارات التقنيات - بتملا الفراغ بمعلومة مفيدة بدل ما تكون زخرفة */}
        <motion.div
          variants={textItem}
          className="flex flex-wrap gap-2 justify-center md:justify-start"
        >
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-xs font-medium text-[#0C96E2] border border-[#0C96E2]/25 bg-[#0C96E2]/5 dark:bg-[#0C96E2]/10"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* زر تحميل الـ CV - يجيب الملف من مجلد public */}
        <motion.a
          variants={textItem}
          href={img('Ghiath_Mousa_CV.pdf')}
          download="Ghiath_Mousa_CV.pdf"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="group mt-6 md:mt-[30px] px-7 py-3 rounded-lg w-fit flex items-center gap-2 bg-[#0C96E2] text-white font-medium shadow-[0_10px_24px_-8px_rgba(12,150,226,0.6)] hover:shadow-[0_16px_30px_-10px_rgba(12,150,226,0.7)] transition-shadow duration-300"
        >
          Download CV
          {/* السهم بينزل شوي عند الـ hover - إشارة إنه تحميل */}
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-y-0.5"
          >
            <path d="M12 4v12m0 0l-5-5m5 5l5-5M4 20h16" />
          </svg>
        </motion.a>
      </motion.div>

      {/* ── الجانب الأيمن: الصورة الشخصية والنجمات ──────── */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={ready ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 w-full md:w-1/2 flex items-center justify-center order-1 md:order-2"
      >

        {/* مجموعة الصورة - بتطفو كلها سوا */}
        <motion.div
          className="relative w-full max-w-[380px] sm:max-w-[440px] lg:max-w-[520px]"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >

          {/* النجمات - مجموعات زي التصميم */}
          <Sparkle className="top-[8%] left-[2%]" size={19} color="#3FC1C9" delay={0} />
          <Sparkle className="top-[13%] left-[9%]" size={12} color="#3FC1C9" delay={0.4} />
          <Sparkle className="top-[3%] left-[8%]" size={10} color="#3FC1C9" delay={0.8} />
          <Sparkle className="top-[5%] right-[3%]" size={16} color="#7C5CFF" delay={1.1} />
          <Sparkle className="top-[52%] -left-[4%]" size={14} color="#7C5CFF" delay={1.5} />
          <Sparkle className="bottom-[4%] left-[3%]" size={17} color="#3FC1C9" delay={1.9} />
          <Sparkle className="bottom-[9%] left-[10%]" size={11} color="#3FC1C9" delay={2.2} />
          <Sparkle className="bottom-[10%] right-[2%]" size={18} color="#3FC1C9" delay={2.5} />
          <Sparkle className="bottom-[1%] right-[14%]" size={14} color="#7C5CFF" delay={2.8} />

          {/* مساحة فوق اللوح عشان راس الشخص يطلع فيها */}
          <div className="pt-[26%]">

            {/* اللوح - تدرّج خفيف وظل ملوّن بدل اللون المسطّح */}
            <div className="relative aspect-[3/2] rounded-[32px] bg-gradient-to-br from-[#0C96E2]/22 via-[#0C96E2]/12 to-[#7C5CFF]/10 dark:from-[#0C96E2]/30 dark:via-[#0C96E2]/18 dark:to-[#7C5CFF]/16 shadow-[0_28px_60px_-28px_rgba(12,150,226,0.55)] ring-1 ring-[#0C96E2]/10 dark:ring-white/5">

              {/* الشخص المقصوص - قاعدته على قاعدة اللوح وراسه طالع فوق حدّه */}
              <img
                src={img('me.webp')}
                alt="Ghiath Mousa"
                width={560}
                height={932}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[138%] w-auto max-w-none drop-shadow-[0_18px_28px_rgba(0,0,0,0.16)]"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* ── شريط "Follow me on:" العمودي على حافة الهيرو ──
          بيقرأ من نفس socialLinks.js تبع الفوتر (ما في تكرار بيانات).
          الأيقونة بتصير رابط فعلي أول ما ينضاف الـ url، وقبلها
          بتنعرض كعنصر غير قابل للضغط بدل ما نحط رابط مكسور */}
      <div className="hidden lg:flex absolute right-[45px] top-1/2 -translate-y-1/2 z-10 flex-col items-center gap-4">
        <span className="[writing-mode:vertical-rl] text-[11px] tracking-[0.2em] text-[#43495B] dark:text-gray-400">
          Follow me on:
        </span>

        <span className="w-px h-14 bg-[#0C96E2]/40" aria-hidden="true" />

        <div className="flex flex-col items-center gap-3">
          {socialLinks.map((link) =>
            link.url ? (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                whileHover={{ scale: 1.18 }}
                whileTap={{ scale: 0.94 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="block"
              >
                <img src={link.icon} alt="" width={22} height={22} className="w-[22px] h-[22px]" />
              </motion.a>
            ) : (
              <span key={link.name} title={`${link.name} link not set yet`}>
                <img src={link.icon} alt="" width={22} height={22} className="w-[22px] h-[22px]" />
              </span>
            )
          )}
        </div>
      </div>

    </section>
  );
};

export default Hero;
