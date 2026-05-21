import { Link } from "react-router-dom";


export default function PortfolioCard({ project }) {

    return (
        <div>
            <img className='rounded-2xl' src={project.thumb} alt="project img" />
            <Link to="/" className="text-lg font-semibold my-2">{project.title}</Link>
        </div>
    )
}