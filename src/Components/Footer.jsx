import { activeSocialLinks } from "./socialLinks";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col md:flex-row items-center justify-between gap-2 mt-3 md:mt-0 px-6 md:px-17.5 py-6 text-primary dark:text-white bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">

      {/* يسار */}
      <p className="font-normal text-sm">© 2026. All Rights Reserved</p>

      {/* وسط */}
      <p className="font-normal text-sm">Development by Ghiath</p>

      {/* يمين - الأيقونات (بتظهر فقط إذا في روابط معرّفة بـ socialLinks.js) */}
      {activeSocialLinks.length > 0 && (
        <div className="flex items-center gap-4">
          {activeSocialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="hover:opacity-70 transition-opacity"
            >
              <img src={link.icon} alt="" width={24} height={24} className="w-6 h-6" />
            </a>
          ))}
        </div>
      )}

    </footer>
  );
}

export default Footer;
