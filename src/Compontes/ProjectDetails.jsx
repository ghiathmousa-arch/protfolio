import { useParams } from "react-router-dom";
import projectsData from "./projectsData";
import Dot from "./Dot";
import Cards from "./Cards";

const ProjectDetails = ({ theme }) => {
  const { id } = useParams();
  const project = projectsData.find((item) => item.id === Number(id));

  if (!project) return <div className="text-white p-10">Project not found</div>;

  return (
    <section className="px-6 md:px-20 py-25 text-primary dark:text-white">

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
          {/* العنوان + التاريخ */}
          <div className="flex items-center justify-between">
            <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>
            <div>
              {/* أيقونة تفتح الريبو */}
              <a href={project.demo} target="_blank">
                <img
                  src={project.icon}
                  alt=""
                  className="w-7 h-7 cursor-pointer"
                />
              </a>
            </div>


          </div>

          <p className="text-gray-500 dark:text-gray-400 mt-2">{project.date}</p>

          {/* الوصف */}
          <p className="mt-6 leading-relaxed text-gray-700 dark:text-gray-300">
            {project.description}
          </p>

          {/* التقنيات */}
          <div className="mt-10 space-y-4">
            <p>
              <span className="font-semibold">Basic Languages:</span>{" "}
              {project.languages.join(" , ")}
            </p>

            <p>
              <span className="font-semibold">Framework:</span>{" "}
              {project.frameworks.length > 0 ? project.frameworks.join(" , ") : "None"}
            </p>

            <p>
              <span className="font-semibold">Libraries:</span>{" "}
              {project.libraries.length > 0 ? project.libraries.join(" , ") : "None"}
            </p>
          </div>

          {/* زر GitHub */}
          <a
            href={project.github}
            target="_blank"
            className="inline-block mt-10 px-6 py-3 bg-[#0C96E2] text-white rounded-lg font-medium shadow-md hover:bg-[#0b7ec0] transition" >
            Github Repo
          </a>
        </div>
      </div>
      <Dot theme={theme} />
      
    </section>
  );
};

export default ProjectDetails;
