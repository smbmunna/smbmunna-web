import { PiDesktopTowerDuotone } from "react-icons/pi";


export default function Intro() {
    return (
        // <div className="mb-16 flex items-center gap-30 border h-screen mx-auto w-full px-8 rounded-2xl bg-[#343539]">
        <div className="max-w-5xl mx-auto mb-16 px-4 pt-16 flex justify-between items-center min-h-full rounded-2xl bg-[#343539]">

            <div >                
                <h1 className="text-3xl font-semibold mb-8">Hello, I'm <span className="text-amber-500">Mahmud Munna</span> <br /> Welcome to my portfolio</h1>
                <p className="mb-4">I am a web developer passionate about building modern, responsive, and meaningful digital experiences. I enjoy transforming ideas into real-world applications and continuously expanding my skills across both frontend and backend development.</p>
                <p className="mb-4">Feel free to explore my portfolio section to see the projects I’ve worked on, the technologies I use, and how I approach building clean and user-focused web applications.</p>
                <p className="mb-4">Previously, I worked in the ERP software sector, where I was involved in software implementation and customer support. That experience helped me develop strong problem-solving, communication, and real-world software understanding, which now influences how I think about building better applications.</p>
                <p>I’m always open to networking, collaboration, and learning from other developers and creators. Let’s connect and build something impactful together.</p>
            </div>
            <div>
                <PiDesktopTowerDuotone opacity={.2} size={220} />
            </div>
        </div>
    )
}