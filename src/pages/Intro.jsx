import { PiDesktopTowerDuotone } from "react-icons/pi";

export default function Intro() {
  return (
    // <div className="mb-16 flex items-center gap-30 border h-screen mx-auto w-full px-8 rounded-2xl bg-[#343539]">
    <div className="max-w-5xl mx-auto px-4 md:px-10 pt-10  min-h-full rounded-2xl bg-[#343539]">
      <h1 className="text-xl md:text-3xl font-semibold mb-8">
        Hello, I'm <span className="text-amber-500">Mahmud Munna</span> <br />{" "}
        Welcome to my portfolio
      </h1>
      <div className="">
        <p className="mb-4 text-gray-300">
          I am a web developer passionate about building modern, responsive, and
          meaningful digital experiences. <br/> Feel free to explore my portfolio section to see the projects I’ve
          worked on.
        </p>
      </div>
      <div>
        <PiDesktopTowerDuotone className="mx-auto" opacity={0.2} size={220} />
      </div>
    </div>
  );
}
