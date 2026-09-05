import { IoHomeOutline } from "react-icons/io5";
import { FaRegMessage } from "react-icons/fa6";

import { CiImageOn } from "react-icons/ci";

import { Link } from "react-router-dom";

export function Nav() {
  return (
    <div className="mt-4 mb-4 md:mb-0">
      <ul className="flex justify-between gap-4">
        <li className=" hover:bg-amber-500 px-3 py-3 rounded-lg text-[12px] flex flex-col items-center">
          <Link to="/">
            <IoHomeOutline size={30} />
          </Link>
          Home
        </li>
        <li className=" hover:bg-amber-500 px-3 py-3 rounded-lg text-[12px] flex flex-col items-center">
          <Link to="/portfolio">
            <CiImageOn size={30} />
          </Link>
          Portfolio
        </li>
        <li className=" hover:bg-amber-500 px-3 py-3 rounded-lg text-[12px] flex flex-col items-center">
          <Link to="/contact">
            <FaRegMessage size={30} />
          </Link>
          Contact
        </li>
      </ul>
    </div>
  );
}
