import { FaWhatsapp, FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import CurrentDate from "./reusable/CurrentDate";



export default function RightSidebar({ pages, setActivePage, activePage }) {
    // const currentIndex = pages.indexOf(activePage);
    // console.log(currentIndex);

    // const goUp = () => { if (currentIndex > 0) setActivePage(pages[currentIndex - 1]) }
    // const goDown = () => { if (currentIndex < pages.length - 1) setActivePage(pages[currentIndex + 1]) }


    return (
        <div className="flex flex-col justify-between gap-12  p-2 rounded-2xl bg-[#343539]">
            <div className="text-center">
                {/* <p>3</p>
                <p>May</p>
                <p>2026</p> */}
            </div>

            <div>
                <p className="rotate-90">Follow Me</p>
            </div>

            <div className="w-px h-16 bg-black mx-auto"></div>

            <div className="mx-auto grid gap-4">
                <FaWhatsapp size={24} />
                <FaGithub size={24} />
                <CiLinkedin size={24} />

            </div>

            <div className="mx-auto grid gap-4 ">
                <IoIosArrowDropup
                    //className={currentIndex === 0 ? 'opacity-20 cursor-not-allowed' : 'cursor-pointer hover:text-amber-500'}
                    //onClick={goUp}
                    size={40} />
                <IoIosArrowDropdown
                    //className={currentIndex === pages.length - 1 ? 'opacity-20 cursor-not-allowed' : 'cursor-pointer hover:text-amber-500'}
                    //onClick={goDown}
                    size={40} />
            </div>
        </div>
    )
}