import { PiDesktopTowerDuotone } from "react-icons/pi";


export default function Intro() {
    return (
        // <div className="mb-16 flex items-center gap-30 border h-screen mx-auto w-full px-8 rounded-2xl bg-[#343539]">
        <div className="max-w-5xl mx-auto mb-16 px-4 pt-16 flex justify-between items-center min-h-full rounded-2xl bg-[#343539]">

            <div >
                <h2 className="text-md mb-8">WEB DEVELOPER</h2>
                <h1 className="text-3xl font-semibold">Hello, I'm <span className="text-amber-500">Mahmud Munna</span> <br /> Welcome to my portfolio</h1>
            </div>
            <div>
                <PiDesktopTowerDuotone opacity={.2} size={220} />
            </div>
        </div>
    )
}