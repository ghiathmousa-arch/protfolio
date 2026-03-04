import { useParams } from "react-router-dom";
import projectsData from "./projectsData";
import Dot from "./Dot";
import Button from "./Button";
import Footer from './Footer';
import ProjectsSlider from "./ProjectsSlider";
import { useEffect } from "react";

// ─── كومبوننت صفحة تفاصيل المشروع ────────────────────
const ProjectDetails = ({ theme }) => {

  // جيب الـ id من الـ URL مثلاً: /projects/1
  const { id } = useParams();

  // عند تغيير المشروع ارجع لأعلى الصفحة
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // ابحث عن المشروع في البيانات بناءً على الـ id
  const project = projectsData.find((item) => item.id === Number(id));

  // إذا ما لقى المشروع اعرض رسالة خطأ
  if (!project) return <div className="text-white p-10">Project not found</div>;

  return (
    <section className="px-6 md:px-20 py-25 text-primary dark:text-white">

      {/* شبكة من عمودين: صورة + تفاصيل */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">

        {/* صورة المشروع */}
        <div className="w-full">
          <img
            src={project.img}
            alt={project.title}
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>

        {/* تفاصيل المشروع */}
        <div>

          {/* العنوان + أيقونة الرابط */}
          <div className="flex items-center justify-between">
            <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>

            {/* أيقونة تفتح Demo أو Repo بتاب جديد */}
            <div>
              <a href={project.demo} target="_blank">
                <img
                  src={project.icon}
                  alt=""
                  className="w-7 h-7 cursor-pointer"
                />
              </a>
            </div>
          </div>

          {/* تاريخ المشروع */}
          <p className="text-gray-500 dark:text-gray-400 mt-2">{project.date}</p>

          {/* وصف المشروع */}
          <p className="mt-6 leading-relaxed text-gray-700 dark:text-gray-300">
            {project.description}
          </p>

          {/* التقنيات المستخدمة */}
          <div className="mt-10 space-y-4">

            {/* اللغات الأساسية */}
            <p>
              <span className="font-semibold">Basic Languages:</span>{" "}
              {project.languages.join(" , ")}
            </p>

            {/* الفريموورك - يعرض None إذا ما في */}
            <p>
              <span className="font-semibold">Framework:</span>{" "}
              {project.frameworks.length > 0 ? project.frameworks.join(" , ") : "None"}
            </p>

            {/* المكتبات - يعرض None إذا ما في */}
            <p>
              <span className="font-semibold">Libraries:</span>{" "}
              {project.libraries.length > 0 ? project.libraries.join(" , ") : "None"}
            </p>
          </div>

          {/* زر الانتقال لصفحة GitHub */}
          <Button text="Github Repo" href={project.github} target="_blank" className="mt-5" />
        </div>
      </div>

      {/* الفاصل النقطي */}
      <Dot theme={theme} />

      {/* سلايدر المشاريع الأخرى */}
      <ProjectsSlider theme={theme} />

      {/* الفوتر */}
      <Footer />
    </section>
  );
};

export default ProjectDetails;