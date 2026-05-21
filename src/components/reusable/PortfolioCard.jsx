import { Link } from "react-router-dom";


export default function PortfolioCard({ project }) {

    return (
        <div className='rounded-2xl'>
            <img src={project.img} alt="project img" />
            <Link to="/" className="text-lg font-semibold my-2">{project.title}</Link>
        </div>
    )
}