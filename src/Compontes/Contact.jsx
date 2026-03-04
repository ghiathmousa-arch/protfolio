import { img } from "../utils/getImageUrl";
import Button from "./Button";

// ─── كلاس مشترك لحقول الإدخال ─────────────────────────
const inputClass =
  "w-full px-4 py-3 rounded-lg border border-[#BEC0BF]/30 dark:border-gray-600 bg-white dark:bg-gray-900 outline-none focus:border-[#0C96E2]";

// ─── كومبوننت قسم التواصل ──────────────────────────────
const Contact = () => {

  // بيانات كروت التواصل: الهاتف، الإيميل، والموقع
  const images = [
    {
      title: "Call me",
      dis: "0956795322",
      img: img("call.png"),
      href: "https://wa.me/963956795322",
    },
    {
      title: "Email me",
      dis: "gieasmousa@gmail.com",
      img: img("masseg.png"),
      href: "https://mail.google.com/mail/?view=cm&to=gieasmousa@gmail.com",
    },
    {
      title: "Address",
      dis: "Damascus, Syria",
      img: img("location.png"),
      href: "https://maps.google.com/?q=Damascus,Syria",
    },
  ];

  return (
    <section
      id="contact"
      className="w-full max-w-full overflow-hidden py-16 px-6 md:px-16 text-primary dark:text-white bg-white dark:bg-gray-900"
    >
      {/* عنوان القسم */}
      <div className="text-center md:text-left mb-10">
        <h3 className="text-sm text-[#0C96E2] font-medium md:text-xl mb-2">
          Contact
        </h3>
        <h1 className="text-xl font-semibold md:text-4xl">
          Let's Discuss Your <span className="text-[#0C96E2]">Project</span>
        </h1>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">

        {/* كروت التواصل - هاتف / إيميل / موقع */}
        <div className="w-full md:w-[35%] flex flex-col">
          {images.map((imag, index) => (
            <a
              key={index}
              href={imag.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-5 mb-5 hover:opacity-80 transition-opacity"
            >
              {/* أيقونة الكارد */}
              <div className="w-[61px] h-[56px] rounded-lg bg-[#0C96E2] flex items-center justify-center flex-shrink-0">
                <img src={imag.img} alt={imag.title} />
              </div>

              {/* نص الكارد */}
              <div>
                <h4 className="text-[#92929D]">{imag.title}</h4>
                <p>{imag.dis}</p>
              </div>
            </a>
          ))}
        </div>

        {/* فورم التواصل */}
        <div className="w-full md:w-[60%] flex flex-col gap-4">

          {/* حقلا الاسم والإيميل جنب بعض */}
          <div className="flex flex-col sm:flex-row gap-4">
            <input type="text" placeholder="Full name" className={inputClass} />
            <input type="email" placeholder="Your email" className={inputClass} />
          </div>

          {/* حقل رقم الهاتف */}
          <input type="tel" placeholder="Phone number" className={inputClass} />

          {/* حقل الرسالة */}
          <textarea
            placeholder="Message"
            rows={6}
            className={`${inputClass} resize-none`}
          />

          {/* زر الإرسال */}
          <div className="w-fit">
            <Button text="Send Message" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;