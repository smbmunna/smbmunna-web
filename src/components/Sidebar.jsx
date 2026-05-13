import profileImg from '../assets/profile-img.jpg';
import { Nav } from "./Nav";
import Button from './reusable/Button';

export default function () {

    return (
        <div className="border flex flex-col gap-4 items-center my-16 p-8 rounded-2xl bg-gray-900">
            <img className="rounded-full w-40 " src={profileImg} alt="Profile Image" />
            <h1 className="text-4xl font-semibold ">Mahmud Munna</h1>
            <div><Button/></div>
            <Nav />
        </div>
    )
}