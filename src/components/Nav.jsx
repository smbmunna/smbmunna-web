import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { MdContentPaste } from "react-icons/md";
import { Link } from "react-router-dom";


export function Nav() {
  return (
    <div className="mt-12 w-3/4">
      <ul className="flex justify-between">
        <li><Link to='/'><IoHomeOutline size={30} /></Link></li>
        <li><Link to='portfolio'><FaRegUser size={30} /></Link></li>
        <li><Link to='about'><MdContentPaste size={30} /></Link></li>
      </ul>
    </div>
  )
}
