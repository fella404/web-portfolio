import { SiExpress, SiMongodb, SiMysql } from "react-icons/si";
import { FaReact, FaVuejs, FaNodeJs } from "react-icons/fa";

const skills = [
  { name: "Express.js", element: <SiExpress className="w-27.5 h-27.5" /> },
  {
    name: "Node.js",
    element: <FaNodeJs className="w-27.5 h-27.5 text-green-500" />,
  },
  {
    name: "React",
    element: <FaReact className="w-27.5 h-27.5 text-cyan-400" />,
  },
  {
    name: "Vue.js",
    element: <FaVuejs className="w-27.5 h-27.5 text-green-600" />,
  },
  {
    name: "MySQL",
    element: <SiMysql className="w-27.5 h-27.5" />,
  },
  {
    name: "MongoDB",
    element: <SiMongodb className="w-27.5 h-27.5 text-green-500" />,
  },
];

const Skill = () => {
  return (
    <section id="skills" className="bg-slate-700/30">
      <div className="max-w-6xl w-full mx-auto flex flex-col items-center gap-16 px-6 py-24">
        <h2 className="text-3xl text-white font-bold tracking-tighter leading-15">
          Skill & Teknologi
        </h2>
        <ul className="flex gap-6 md:gap-8 lg:gap-10 w-full overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-[#1E293B] [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-500 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb:bg-slate-400">
          {skills.map((skill) => (
            <li
              key={skill.name}
              className="shrink-0 p-6 flex flex-col items-center gap-3 bg-[#1E293B] rounded-xl mb-2 cursor-pointer"
            >
              {skill.element}
              <p className="text-[#E5E7EB] font-medium">{skill.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skill;
