import { FaWhatsapp, FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import CurrentDate from "./reusable/CurrentDate";
import { Link } from "react-router-dom";

export default function RightSidebar({ pages, setActivePage, activePage }) {
  return (
    <div className="hidden md:flex h-full flex-col justify-between gap-12  p-2 rounded-2xl bg-[#343539]">
      <div className="text-center py-4">
        <CurrentDate />
      </div>

      <div>
        <p className="rotate-90">Follow Me</p>
      </div>

      <div className="w-px h-42 bg-gray-500 mx-auto"></div>

      <div className="mx-auto grid gap-6 mb-8">
        <a
          href="https://wa.me/8801739104635?text=Hello!%20I%20visited%20your%20portfolio%20and%20want%20to%20connect."
          target="_blank"
        >
          <FaWhatsapp size={30} />
        </a>

        <Link to="https://github.com/smbmunna" target="_blank">
          <FaGithub size={30} />
        </Link>
        <Link
          to="https://linkedin.com/in/mahmud-munna-75849772"
          target="_blank"
        >
          <CiLinkedin size={30} />
        </Link>
      </div>

      {/* <div className="mx-auto grid gap-4 ">
                <IoIosArrowDropup
                    //className={currentIndex === 0 ? 'opacity-20 cursor-not-allowed' : 'cursor-pointer hover:text-amber-500'}
                    //onClick={goUp}
                    size={40} />
                <IoIosArrowDropdown
                    //className={currentIndex === pages.length - 1 ? 'opacity-20 cursor-not-allowed' : 'cursor-pointer hover:text-amber-500'}
                    //onClick={goDown}
                    size={40} />
            </div> */}
    </div>
  );
}
