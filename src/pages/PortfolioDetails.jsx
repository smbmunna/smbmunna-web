import { Link, useParams } from "react-router-dom"
import { projectData } from "@/data/projects";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiChakraui } from "react-icons/si";



export default function PortfolioDetails() {

    const { id } = useParams();
    const projectArr = projectData.filter(pr => pr.id == id);
    const project = projectArr[0];
    return (
        <div className="min-h-full flex flex-col justify-between bg-[#343539] pb-4 rounded-2xl">
            <div>
                <img className="w-1/2 mx-auto mt-14" src={project.img} alt="Project img" />
            </div>

            <div className="flex gap-8 mt-4 justify-between w-5/6 mx-auto">
                <div>
                    <div>
                        <h2 className="text-2xl font-semibold my-4">Project Description:</h2>
                        {project.description}
                    </div>

                    <hr className="text-gray-600 mt-4" />

                    <div className="flex gap-6 justify-between items-center">
                        <div>                            
                            <div className="flex gap-8 mt-2 items-center">
                                <h2 className="font-semibold">Tech Stacks: </h2>
                                <FaReact size={40} />
                                <RiTailwindCssFill size={40} />
                                <SiChakraui size={40} />
                            </div>
                        </div>
                        <div className="flex flex-row gap-2">
                            <Link className="underline" to={project.live}>Live Link</Link>
                            <Link className="underline" to={project.github}>Github Link</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}