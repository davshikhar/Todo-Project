import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-700 broder rounded-lg text-white px-6 py-3 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold">TodoApp</div>

      {/* Hamburger Button (Mobile) */}
      <button
        className="md:hidden flex flex-col gap-1"
        onClick={() => setOpen(!open)}
      >
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
      </button>

      {/* Links */}
      <ul
        className={`${
          open ? "flex" : "hidden"
        } absolute md:static top-14 right-0 md:flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 bg-gray-800 md:bg-transparent w-48 md:w-auto p-4 md:p-0`}
      >
        <li>
          <a
            href="#tasks"
            className="hover:bg-gray-700 md:hover:bg-transparent md:hover:underline rounded px-3 py-2 block"
          >
            Tasks
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="hover:bg-gray-700 md:hover:bg-transparent md:hover:underline rounded px-3 py-2 block"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="hover:bg-gray-700 md:hover:bg-transparent md:hover:underline rounded px-3 py-2 block"
          >
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
