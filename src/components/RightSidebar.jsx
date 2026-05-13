import { FaWhatsapp, FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";



export default function RightSidebar() {

    return (
        <div className="my-auto flex flex-col gap-12 border">
            <div className="text-center">
                <p>3</p>
                <p>May</p>
                <p>2026</p>
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
                <IoIosArrowDropup size={40}/>
                <IoIosArrowDropdown size={40}/>
            </div>
        </div>
    )
}