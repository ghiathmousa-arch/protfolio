import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// مدة العدّاد بالمللي ثانية
const COUNT_DURATION = 1900;

// أبعاد الحلقة (نظام إحداثيات الـ SVG - الحجم الفعلي بينضبط بالكلاسات)
const SIZE = 180;
const STROKE = 5;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

// تنعيم حركة العدّاد: يبلش هادي، يسرّع بالنص، ويهدا بالآخر
const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

// بيرجّع true إذا المستخدم مفعّل "تقليل الحركة" بجهازه
const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// حركة ستارة الخروج - نصّين بينفتحوا فوق وتحت ويكشفوا الموقع
const curtainTransition = { duration: 0.7, ease: [0.76, 0, 0.24, 1] };

// ─── شاشة التحميل الأولى ───────────────────────────────
// حلقة تقدّم دائرية مع عدّاد من 0% لـ100%، وبعدين الشاشة
// بتنفتح كستارة من النص لفوق وتحت وبيبان الموقع.
const Preloader = ({ onDone }) => {
  // إذا المستخدم طالب تقليل الحركة، بنبلش خلصانين → ما بتظهر أصلاً
  const [done, setDone] = useState(prefersReducedMotion);
  const [progress, setProgress] = useState(0);

  // العدّاد - بيشتغل على requestAnimationFrame عشان يكون سلس
  useEffect(() => {
    if (done) return;

    let frame;
    const start = performance.now();

    const tick = (now) => {
      const ratio = Math.min(1, (now - start) / COUNT_DURATION);
      setProgress(Math.round(easeInOutQuad(ratio) * 100));

      if (ratio < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        // وقفة قصيرة على 100% قبل ما تنفتح الستارة
        setTimeout(() => setDone(true), 220);
      }
    };

    frame = requestAnimationFrame(tick);

    // صمام أمان: الـ requestAnimationFrame بيتوقف إذا كان التاب بالخلفية،
    // فبدون هالسطر ممكن تعلق شاشة التحميل ويصير الموقع مش قابل للاستخدام.
    // الـ setTimeout بيشتغل بكل الحالات فبيضمن إنها تختفي.
    const failSafe = setTimeout(() => setDone(true), COUNT_DURATION + 900);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(failSafe);
    };
    // بتشتغل مرة وحدة عند أول تحميل بس
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // تبليغ الأب إنه خلص - عشان الهيرو يبلش حركته مع فتح الستارة
  // مش وهو مخفي وراها
  useEffect(() => {
    if (done) onDone?.();
  }, [done, onDone]);

  // منع تمرير الصفحة طول ما شاشة التحميل ظاهرة
  useEffect(() => {
    if (done) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [done]);

  // طول الجزء المرسوم من الحلقة حسب النسبة
  const dashOffset = CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE;

  return (
    <AnimatePresence>
      {!done && (
        // الحاوية ما إلها حركة خاصة - بس بتنسّق حركات أولادها
        <motion.div
          className="fixed inset-0 z-[100] overflow-hidden"
          initial="enter"
          animate="visible"
          exit="leave"
          variants={{ enter: {}, visible: {}, leave: {} }}
          role="status"
          aria-live="polite"
          aria-label="Loading"
        >

          {/* نصف الستارة العلوي - بينسحب لفوق عند الخروج */}
          <motion.div
            className="absolute inset-x-0 top-0 h-1/2 bg-white dark:bg-gray-900"
            variants={{ enter: { y: 0 }, visible: { y: 0 }, leave: { y: "-100%" } }}
            transition={curtainTransition}
          />

          {/* نصف الستارة السفلي - بينسحب لتحت عند الخروج */}
          <motion.div
            className="absolute inset-x-0 bottom-0 h-1/2 bg-white dark:bg-gray-900"
            variants={{ enter: { y: 0 }, visible: { y: 0 }, leave: { y: "100%" } }}
            transition={curtainTransition}
          />

          {/* المحتوى: الحلقة والنسبة والاسم - بيختفي قبل ما تنفتح الستارة */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center gap-7"
            variants={{
              enter: { opacity: 0, scale: 0.92 },
              visible: { opacity: 1, scale: 1 },
              leave: { opacity: 0, scale: 0.94 },
            }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >

            {/* الحلقة + النسبة بمركزها */}
            <div className="relative w-[150px] h-[150px] md:w-[180px] md:h-[180px]">
              <svg
                viewBox={`0 0 ${SIZE} ${SIZE}`}
                className="w-full h-full -rotate-90"
                aria-hidden="true"
              >
                {/* المسار الرمادي الخلفي */}
                <circle
                  cx={SIZE / 2}
                  cy={SIZE / 2}
                  r={RADIUS}
                  fill="none"
                  strokeWidth={STROKE}
                  className="stroke-gray-200 dark:stroke-gray-700"
                />

                {/* القوس الأزرق اللي بينرسم مع تقدّم العدّاد */}
                <circle
                  cx={SIZE / 2}
                  cy={SIZE / 2}
                  r={RADIUS}
                  fill="none"
                  stroke="#0C96E2"
                  strokeWidth={STROKE}
                  strokeLinecap="round"
                  strokeDasharray={CIRCUMFERENCE}
                  strokeDashoffset={dashOffset}
                />
              </svg>

              {/* النسبة بمنتصف الحلقة - tabular-nums عشان الرقم ما يرقص */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl md:text-5xl font-bold tabular-nums text-primary dark:text-white">
                  {progress}
                  <span className="text-[#0C96E2]">%</span>
                </span>
              </div>
            </div>

            {/* اسم الموقع */}
            <span className="text-sm font-medium tracking-[0.35em] uppercase text-[#43495B] dark:text-gray-400">
              Ghiath
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
