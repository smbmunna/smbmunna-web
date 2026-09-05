import { Link, useParams } from "react-router-dom";
import { projectData } from "@/data/projects";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiPrisma } from "react-icons/si";

import rise_at_seven_cover from "@/assets/projects/rise_at_seven_cover.png";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function PortfolioDetails() {
  useScrollReveal();
  const { id } = useParams();
  const projectArr = projectData.filter((pr) => pr.id == id);
  const project = projectArr[0];
  return (
    <div className="p-4 md:pb-6 flex flex-col justify-between bg-[#343539] pb-36 rounded-2xl">
      <div>
        <img
          className="w-11/12 mx-auto mt-4 md:mt-14 rounded-2xl"
          src={project.cover}
          alt="Project img"
        />
      </div>

      <div className=" flex gap-8 mt-4 justify-between w-5/6 mx-auto">
        <div>
          <div>
            <h2 className="text-2xl font-semibold my-4">
              Project Description:
            </h2>
            <p className="text-gray-300">{project.description}</p>
          </div>

          <hr className="text-gray-600 mt-4" />
          <h2 className="text-xl font-semibold my-4">Features/Technical Approach:</h2>

          {project.features.map((feature) => (
            <li className="text-gray-300 reveal" key={feature.id}>{feature.desc}</li>
          ))}
          <hr className="text-gray-600 mt-4" />

          <div className="flex flex-col md:flex-row gap-2 md:gap-6 justify-between items-center">
            <div>
              <div className="flex gap-2 md:gap-8 mt-2 items-center reveal">
                <h2 className="font-semibold">Tech Stacks: </h2>
                <SiNextdotjs size={30} />
                <RiTailwindCssFill size={30} />
                <FaNode size={30} />
                <BiLogoPostgresql size={30} />
                <SiPrisma size={30} />
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <Link target="_blank" className="underline" to={project.live}>
                Live Link
              </Link>
              <Link target="_blank" className="underline" to={project.github}>
                Github Link
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
