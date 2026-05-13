import { PiDesktopTowerDuotone } from "react-icons/pi";


export default function Intro() {
    return (
        <div className="my-auto flex items-center gap-40 border h-full">
            <div >
                <h2 className="text-md mb-8">WEB DEVELOPER</h2>
                <h1 className="text-2xl font-semibold">Hello, I'm a <span className="text-green-600">Mahmud Munna</span> <br /> Welcome to my portfolio</h1>
            </div>
            <div>
                <PiDesktopTowerDuotone opacity={.2}  size={240}/>
            </div>
        </div>
    )
}