import profileImg from '../assets/profile-img.jpg';
import { Nav } from "./Nav";
import Button from './reusable/Button';

export default function () {
    return (
        <div className="flex flex-col items-center p-8 rounded-2xl bg-[#343539] w-70">
            <img className="rounded-full w-40 " src={profileImg} alt="Profile Image" />
            <h1 className="text-2xl font-semibold my-8">Mahmud <span className="text-amber-500">Munna</span></h1>
            <div><Button /></div>
            <Nav />
        </div>
    )
}