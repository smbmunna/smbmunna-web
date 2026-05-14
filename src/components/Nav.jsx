import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { MdContentPaste } from "react-icons/md";


export function Nav() {
  return (
    <div className="mt-12 w-3/4">
      <ul className="flex justify-between">
        <li><a href=""><IoHomeOutline size={30} /></a></li>
        <li><a href=""><FaRegUser size={30}  /></a></li>
        <li><a href=""><MdContentPaste size={30}  /></a></li>
      </ul>
    </div>
  )
}
