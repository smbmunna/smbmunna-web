import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function NavButton() {
  return (
    <li className="bg-[#232324] px-3 py-3 rounded-lg text-12px flex flex-col items-center">
      <Link to="/">
        <IoHomeOutline size={30} />
      </Link>
      Home
    </li>
  );
}
