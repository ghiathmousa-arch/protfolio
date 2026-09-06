import { img } from "../utils/getImageUrl";

const projectsData = [

  // ملاحظة: الترتيب هون هو ترتيب العرض بالموقع.
  // الـ id مستقل عن الترتيب عشان روابط /projects/:id القديمة ما تنكسر.

  {
    id: 7,
    title: "Real Estate Platform",
    tag: "Team Project — Real Client",
    featured: true,
    subtitle: "React · Node.js · MongoDB",
    img: img("realestate.jpg"),
    icon: img("card.png"),
    demo: "https://real-state-six-chi.vercel.app",
    github: null,
    description: "A real estate platform that helps visitors find the right property easily, through advanced search and filtering and reliable information about each property.",
    tech: ["React", "Node.js", "MongoDB"],
  },

  {
    id: 8,
    title: "MediLink",
    subtitle: "Next.js · TypeScript · Tailwind CSS · PostgreSQL · Prisma",
    img: img("medilink.jpg"),
    icon: img("card.png"),
    demo: "https://medilink-omega-murex.vercel.app",
    github: "https://github.com/ghiathmousa-arch/MediLink",
    description: "A system that brings a patient's full health record together in one place, and automatically warns if there is a conflict between medications or an allergy the patient has.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma"],
  },

  {
    id: 9,
    title: "LearnWise",
    subtitle: "Next.js · TypeScript · React · Python · FastAPI",
    img: img("learnwise.jpg"),
    icon: img("card.png"),
    demo: "https://learnwise-six.vercel.app",
    github: "https://github.com/ghiathmousa-arch/learnwise",
    description: "A platform that intelligently suggests learning content matching the user's interests, and supports searching in Arabic and English together.",
    tech: ["Next.js", "TypeScript", "React", "Python", "FastAPI"],
  },

  {
    id: 10,
    title: "RxChef",
    subtitle: "Next.js · TypeScript · FastAPI · PostgreSQL · XGBoost",
    img: img("rxchef.jpg"),
    icon: img("card.png"),
    demo: "https://rx-chef.vercel.app",
    github: "https://github.com/ghiathmousa-arch/RxChef",
    description: "A system that checks whether two medications have a dangerous interaction before the user takes them together, and suggests safe alternatives instead.",
    tech: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "XGBoost"],
  },

  {
    id: 11,
    title: "Vehicle Platform",
    subtitle: "Next.js · TypeScript · PostgreSQL · Prisma",
    img: img("vehicle.jpg"),
    icon: img("card.png"),
    demo: "https://vehicle-platform-six.vercel.app",
    github: "https://github.com/ghiathmousa-arch/vehicle-platform",
    description: "A platform that lets anyone look up a vehicle's details by its plate number easily, with a full admin dashboard for managing the data.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
  },

  {
    id: 12,
    title: "PulmoScan",
    subtitle: "React · Vite · Tailwind CSS",
    img: img("pulmoscan.jpg"),
    icon: img("card.png"),
    demo: "https://pulmoscan-app.vercel.app",
    // الريبو فيه أكتر من فرع - الرابط بيوجّه لفرع الواجهة الأمامية تحديداً
    github: "https://github.com/ghiathmousa-arch/final_project/tree/frontend",
    description: "An app where the user uploads a chest X-ray image and is shown a preliminary likelihood for four common conditions, with a clear notice that it is a research tool at an experimental stage and not a substitute for diagnosis by a specialist doctor.",
    tech: ["React", "Vite", "Tailwind CSS"],
  },

];

export default projectsData;
