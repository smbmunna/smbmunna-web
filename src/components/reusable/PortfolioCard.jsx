import { Link } from "react-router-dom";

export default function PortfolioCard({ project }) {
  return (
    <div>
      <img className="rounded-2xl" src={project.thumb} alt="project img" />
      <div className="px-4">
        <h2 className="text-lg font-light my-2">{project.title}</h2>
        <p className="text-sm text-gray-300">{project.subtitle}</p>
      </div>
    </div>
  );
}
