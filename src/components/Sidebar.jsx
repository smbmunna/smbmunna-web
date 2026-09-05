import { useState } from "react";
import profileImg from "../assets/profile-img.jpg";

import { MdDownload } from "react-icons/md";
import { Nav } from "./Nav";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <aside className="w-full md:w-65 lg:w-72 bg-[#343539] p-4 md:p-8 rounded-2xl flex flex-col justify-between shrink-0 md:h-full overflow-y-auto mb-8">
      {/* Mobile Top Header Row */}
      <div className="flex items-center justify-between md:block">
        <div className="flex items-center gap-3 md:flex-col md:gap-0">
          <img
            className="rounded-full w-12 h-12 md:w-36 md:h-36 object-cover transition-all"
            src={profileImg}
            alt="Mahmud Munna"
          />
          <h1 className="text-lg lg:text-2xl font-semibold md:my-2">
            Mahmud <span className="text-amber-500">Munna</span>
          </h1>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          className="md:hidden p-2 rounded-lg bg-[#232324] text-white focus:outline-none hover:bg-amber-500 transition-colors"
        >
          {isOpen ? (
            /* Close Icon (X) */
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            /* Hamburger Icon */
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Collapsible Content Area */}
      <div
        className={`${isOpen ? "flex" : "hidden"} md:flex flex-col flex-1 justify-between mt-4 md:mt-0 md:gap-6 transition-all`}
      >
        

        {/* Navigation Items (Pass toggleMenu to close menu on link click) */}
        <div onClick={() => setIsOpen(false)}>
          <Nav />
        </div>

        <div className="flex flex-col text-center justify-center">
            <MdDownload className="mx-auto text-amber-500 hover:text-slate-100" size={30} />
            <a href="/mahmud_munna_web_2026.pdf" download="mahmud_munna_web_2026.pdf" className="text-sm hover:text-amber-500">Download CV</a>
        </div>

        {/* Footer */}
        <footer>
          <p className="text-center text-xs text-gray-400">
            © 2026 All rights reserved by <br/>
            <span className="text-amber-500"> Mahmud Munna</span>
          </p>
        </footer>
      </div>
    </aside>
  );
}
