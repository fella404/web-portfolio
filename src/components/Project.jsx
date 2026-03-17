const projects = [
  {
    name: "Kalkulator Metode Numerik",
    year: "2026",
    description:
      "Kalkulator metode numerik interaktif (Bisection, Newton-Raphson, Secant) dibuat dengan Vue.js dan Tailwind CSS untuk memenuhi proyek akhir mata kuliah Metode Numerik",
    link: "https://numeric-methods.netlify.app",
    technologies: ["Vue.js", "Tailwind CSS"],
  },
  {
    name: "ER Calculator MIKY Management",
    year: "2025",
    description:
      "Aplikasi penghitung engagement rate sosial media untuk MIKY Management, dirancang untuk membantu tim dalam menganalisis data engagement TikTok dan Instagram dengan lebih akurat dan efisien.",
    link: "https://ercalculatorbymiky.online",
    technologies: ["Vue.js", "Tailwind CSS", "reCAPTCHA"],
  },
  {
    name: "WordFlow",
    year: "2025",
    description:
      "WordFlow adalah aplikasi web interaktif yang dirancang untuk membantu pengguna belajar bahasa Inggris melalui cerita pendek. Aplikasi ini tidak hanya berfokus pada kemampuan Reading (membaca) dan Vocabulary (kosakata), tetapi juga menekankan pada kemampuan Listening (mendengar) melalui fitur integrasi Text-To-Speech.",
    link: "https://github.com/fella404/WordFlow",
    technologies: ["MEVN Stack", "Tailwind CSS", "SpeechSynthesis - Web APIs"],
  },
];

const Project = () => {
  return (
    <section id="projects">
      <div className="max-w-6xl mx-auto py-24 px-6 flex flex-col gap-12">
        <h2 className="text-3xl text-center text-white font-bold tracking-tighter leading-15">
          Proyek Unggulan
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-9">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              className="group bg-[#1E293B] p-8 rounded-2xl border border-[#1E293B] hover:border-[#38BDF8]/50 transition-colors duration-200"
            >
              <li>
                <div className="flex justify-between gap-4 mb-4">
                  <h2 className="font-bold text-2xl text-white leading-8 group-hover:text-[#38BDF8] transition-colors duration-200">
                    {project.name}
                  </h2>
                  <span className="text-sm text-[#64748B]">{project.year}</span>
                </div>
                <p className="text-sm text-[#94A3B8] text-justify line-clamp-4 lg:line-clamp-5 mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology, index) => (
                    <span
                      key={index}
                      className="bg-[#38BDF8]/10 text-sm text-[#38BDF8] px-3 py-1 rounded-3xl"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </li>
            </a>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Project;
