import { IoHomeOutline } from "react-icons/io5";
import { FaRegMessage } from "react-icons/fa6";

import { CiImageOn } from "react-icons/ci";

import { Link } from "react-router-dom";


export function Nav() {
  return (
    <div className="mt-12 ">
      <ul className="flex justify-between gap-4">
        <li  className="bg-[#232324] px-3 py-3 rounded-lg"><Link to='/'><IoHomeOutline size={30} /></Link></li>
        <li  className="bg-[#232324] px-3 py-3 rounded-lg"><Link to='/portfolio'><CiImageOn size={30} /></Link></li>
        <li  className="bg-[#232324] px-3 py-3 rounded-lg"><Link to='/about'><FaRegMessage size={30} /></Link></li>
      </ul>
    </div>
  )
}
