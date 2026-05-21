import { Link } from "react-router-dom";


export default function PortfolioCard({ project }) {

    return (
        <div>
            <img className='rounded-2xl' src={project.thumb} alt="project img" />            
            <h2 className="text-lg font-light my-2">{project.title}</h2>
        </div>
    )
}