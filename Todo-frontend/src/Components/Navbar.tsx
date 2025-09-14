import { useState } from "react";

interface NavbarProps {
  // You can define props here if needed
  dark: boolean;
  setDark: (dark: boolean) => void;
}

const Navbar = (props: NavbarProps) => {
  const [open, setOpen] = useState(false);

  return (
    // <nav className="bg-blue-700 broder rounded-lg text-white px-6 py-3 flex items-center justify-between">
    <nav className="bg-[#3BA99C] broder rounded-lg text-white px-6 py-3 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold font-mono">TodoApp</div>

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
        className={`${open ? "flex" : "hidden"
          } absolute md:static top-14 right-0 md:flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 bg-gray-800 md:bg-transparent w-48 md:w-auto p-4 md:p-0`}
      >
        <li>
          <a
            href="#tasks"
            className="font-mono hover:bg-gray-700 md:hover:bg-transparent md:hover:underline rounded px-3 py-2 block"
          >
            Tasks
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="font-mono hover:bg-gray-700 md:hover:bg-transparent md:hover:underline rounded px-3 py-2 block"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="font-mono hover:bg-gray-700 md:hover:bg-transparent md:hover:underline rounded px-3 py-2 block"
          >
            About
          </a>
        </li>
        <li>
          <div className="flex justify-end">
            <button
              className="p-2 rounded-sm bg-gray-200 dark:bg-gray-700 hover:opacity-80 cursor-pointer"
              onClick={() => props.setDark(!props.dark)}
            >
              {props.dark ? (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                <path d="M10 2a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 2ZM10 15a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 15ZM10 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM15.657 5.404a.75.75 0 1 0-1.06-1.06l-1.061 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM6.464 14.596a.75.75 0 1 0-1.06-1.06l-1.06 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM18 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 18 10ZM5 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 5 10ZM14.596 15.657a.75.75 0 0 0 1.06-1.06l-1.06-1.061a.75.75 0 1 0-1.06 1.06l1.06 1.06ZM5.404 6.464a.75.75 0 0 0 1.06-1.06l-1.06-1.06a.75.75 0 1 0-1.061 1.06l1.06 1.06Z" />
              </svg>
              ) : (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
                <path fill-rule="evenodd" d="M7.455 2.004a.75.75 0 0 1 .26.77 7 7 0 0 0 9.958 7.967.75.75 0 0 1 1.067.853A8.5 8.5 0 1 1 6.647 1.921a.75.75 0 0 1 .808.083Z" clip-rule="evenodd" />
              </svg>
              )}
            </button>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
