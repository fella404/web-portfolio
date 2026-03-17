import { useState } from "react";
import { VscMenu } from "react-icons/vsc";

const navLinks = [
  { label: "about", name: "Tentang" },
  { label: "skills", name: "Skill" },
  { label: "projects", name: "Proyek" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 w-full bg-[#0F172A]/70 backdrop-blur-md border-b border-b-[#1E293B] py-4 md:py-6 z-50">
      <ul className="hidden md:flex gap-12 justify-center items-center font-semibold text-white">
        {navLinks.map((link) => (
          <li
            className="hover:text-[#38BDF8] transition-colors duration-200"
            key={link.label}
          >
            <a href={`#${link.label}`}>{link.name}</a>
          </li>
        ))}
      </ul>

      <div className="flex md:hidden justify-end">
        <button
          className="text-white mr-6"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <VscMenu />
        </button>
      </div>

      {isMenuOpen && (
        <ul className="absolute top-full left-0 flex flex-col md:hidden w-full bg-[#1E293B] z-50">
          {navLinks.map((link) => (
            <li key={link.label} className="w-full text-[#CBD5E1]">
              <a
                href={`#${link.label}`}
                onClick={() => setIsMenuOpen(false)}
                className="w-full flex justify-center px-3 py-2"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
