import { img } from "../utils/getImageUrl";

const icons = [
  {
    img: img("facebook.svg"),
    to: "#"
  },
  {
    img: img("twitter.svg"),
    to: "#"
  },
  {
    img: img("linkedin.svg"),
    to: "#"
  },
  {
    img: img("instagram.svg"),
    to: "#"
  },
];

const Footer = ({ theme }) => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between gap-2 mt-3 md:mt-0 px-6 md:px-17.5 py-6 text-primary dark:text-white bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">

      {/* يسار */}
      <p className="font-normal text-sm">© 2026. All Rights Reserved</p>

      {/* وسط */}
      <p className="font-normal text-sm">Development by Ghiath</p>

      {/* يمين - الأيقونات */}
      <div className="flex items-center gap-4">
        {icons.map((icon, index) => (
          <a key={index} href={icon.to}>
            <img src={icon.img} alt="" className="w-6 h-6" />
          </a>
        ))}
      </div>

    </div>
  );
}

export default Footer;
