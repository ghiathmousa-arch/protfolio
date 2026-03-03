import { motion } from "framer-motion";
const Button = ({ text, href, icon, target, className = "" }) => {
  return (
    <motion.a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`mt-3 px-4 md:px-6 py-2 md:py-3 rounded-lg cursor-pointer bg-[#0C96E2] text-white font-medium flex items-center gap-2 w-fit ${className}`}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.97, y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {text}
      {icon && <img src={icon} alt="" className="w-4 h-4" />}
    </motion.a>
  );
};

export default Button;