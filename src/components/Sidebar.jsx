import { Button } from "./ui/button";
import profileImg from '../assets/profile-img.jpg';
import { Nav } from "./Nav";

export default function () {

    return (
        <div className="w-1/4 border flex flex-col gap-4 items-center my-16 py-8">
            <img className="rounded-full w-40 " src={profileImg} alt="Profile Image" />
            <h1 className="text-2xl font-semibold ">Mahmud Munna</h1>
            <div><Button size="lg">Download Cv</Button></div>
            <Nav />
        </div>
    )
}