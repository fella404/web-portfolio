import About from "./components/About";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skill from "./components/Skill";

const App = () => {
  return (
    <div className="bg-[#0F172A]">
      <Navbar />
      <About />
      <Skill />
      <Project />
    </div>
  );
};

export default App;
