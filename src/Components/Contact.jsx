import { useState } from "react";
import emailjs from "@emailjs/browser";
import { img } from "../utils/getImageUrl";
import Button from "./Button";

// ─── إعدادات EmailJS ───────────────────────────────────
// بتنقرأ من ملف .env بجذر المشروع (شوف .env.example).
// إذا ما كانت معرّفة، الفورم بيرجع تلقائياً لطريقة mailto.
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const isEmailJsConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

const CONTACT_EMAIL = "gieasmousa@gmail.com";

// ─── كلاس مشترك لحقول الإدخال ─────────────────────────
const inputClass =
  "w-full px-4 py-3 rounded-lg border border-[#BEC0BF]/30 dark:border-gray-600 bg-white dark:bg-gray-900 outline-none focus:border-[#0C96E2]";

// الحالة الابتدائية للفورم
const emptyForm = { name: "", email: "", phone: "", message: "" };

// بيانات كروت التواصل: الهاتف، الإيميل، والموقع
const contactCards = [
  {
    title: "Call me",
    dis: "0956795322",
    img: img("call.png"),
    href: "https://wa.me/963956795322",
  },
  {
    title: "Email me",
    dis: CONTACT_EMAIL,
    img: img("masseg.png"),
    href: `https://mail.google.com/mail/?view=cm&to=${CONTACT_EMAIL}`,
  },
  {
    title: "Address",
    dis: "Damascus, Syria",
    img: img("location.png"),
    href: "https://maps.google.com/?q=Damascus,Syria",
  },
];

// ─── كومبوننت قسم التواصل ──────────────────────────────
const Contact = () => {

  // قيم الحقول
  const [form, setForm] = useState(emptyForm);

  // حالة الإرسال: idle | sending | success | error
  const [status, setStatus] = useState("idle");

  // نص الرسالة اللي بتظهر تحت الفورم
  const [feedback, setFeedback] = useState("");

  // تحديث أي حقل حسب الـ name تبعه
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // تحقق بسيط قبل الإرسال
  const validate = () => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) return "Please enter a valid email address.";
    if (!form.message.trim()) return "Please write a message.";
    return null;
  };

  // فتح برنامج البريد بالرسالة جاهزة — الحل البديل إذا EmailJS مش مضبوط
  const sendWithMailto = () => {
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || "-"}\n\n${form.message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    setStatus("success");
    setFeedback("Your email app should open with the message ready to send.");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationError = validate();
    if (validationError) {
      setStatus("error");
      setFeedback(validationError);
      return;
    }

    // ما في مفاتيح EmailJS → استخدم mailto
    if (!isEmailJsConfigured) {
      sendWithMailto();
      return;
    }

    setStatus("sending");
    setFeedback("");

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          message: form.message,
          to_email: CONTACT_EMAIL,
        },
        { publicKey: PUBLIC_KEY }
      );

      setStatus("success");
      setFeedback("Thanks! Your message has been sent. I'll get back to you soon.");
      setForm(emptyForm);
    } catch (error) {
      console.error("EmailJS send failed:", error);
      setStatus("error");
      setFeedback("Something went wrong. Please email me directly at " + CONTACT_EMAIL + ".");
    }
  };

  const isSending = status === "sending";

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
        <h2 className="text-xl font-semibold md:text-4xl">
          Let's Discuss Your <span className="text-[#0C96E2]">Project</span>
        </h2>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">

        {/* كروت التواصل - هاتف / إيميل / موقع */}
        <div className="w-full md:w-[35%] flex flex-col">
          {contactCards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-5 mb-5 hover:opacity-80 transition-opacity"
            >
              {/* أيقونة الكارد */}
              <div className="w-[61px] h-[56px] rounded-lg bg-[#0C96E2] flex items-center justify-center flex-shrink-0">
                <img src={card.img} alt="" />
              </div>

              {/* نص الكارد */}
              <div>
                <h4 className="text-[#92929D]">{card.title}</h4>
                <p>{card.dis}</p>
              </div>
            </a>
          ))}
        </div>

        {/* فورم التواصل */}
        <form onSubmit={handleSubmit} noValidate className="w-full md:w-[60%] flex flex-col gap-4">

          {/* حقلا الاسم والإيميل جنب بعض */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full">
              <label htmlFor="contact-name" className="sr-only">Full name</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Full name"
                autoComplete="name"
                required
                className={inputClass}
              />
            </div>

            <div className="w-full">
              <label htmlFor="contact-email" className="sr-only">Your email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your email"
                autoComplete="email"
                required
                className={inputClass}
              />
            </div>
          </div>

          {/* حقل رقم الهاتف - اختياري */}
          <div>
            <label htmlFor="contact-phone" className="sr-only">Phone number</label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone number (optional)"
              autoComplete="tel"
              className={inputClass}
            />
          </div>

          {/* حقل الرسالة */}
          <div>
            <label htmlFor="contact-message" className="sr-only">Message</label>
            <textarea
              id="contact-message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              rows={6}
              required
              className={`${inputClass} resize-none`}
            />
          </div>

          {/* زر الإرسال */}
          <div className="w-fit">
            <Button
              type="submit"
              text={isSending ? "Sending..." : "Send Message"}
              disabled={isSending}
            />
          </div>

          {/* رسالة النتيجة - aria-live عشان قارئات الشاشة تعلن عنها */}
          {feedback && (
            <p
              role="status"
              aria-live="polite"
              className={`text-sm ${status === "error" ? "text-red-500" : "text-green-600 dark:text-green-400"}`}
            >
              {feedback}
            </p>
          )}
        </form>

      </div>
    </section>
  );
};

export default Contact;
