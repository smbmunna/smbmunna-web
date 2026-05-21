import PortfolioCard from '@/components/reusable/PortfolioCard'

import { projectData } from '@/data/projects';
import { Link } from 'react-router-dom';

export default function Portfolio() {

    return (
        <div className="mb-16 px-4 pt-16 flex flex-col w-full items-center min-h-full mx-auto rounded-2xl bg-[#343539]">
            <h1 className="text-3xl mb-2 font-semibold text-amber-500">PORTFOLIO</h1>
            <h3 className="text-xl font-semibold">See My Awesome Work</h3>

            {/* tabs */}
            <div className="mt-4">
                <ul className="flex gap-8">
                    <li className='text-amber-500'><a href="#">All</a></li>
                    <li><a href="#">Frontend Projects</a></li>
                    <li><a href="#">Fullstack Projects</a></li>
                </ul>
            </div>

            {/* Projects */}
            <div className="grid grid-cols-3 gap-4 mt-8 mx-auto  bg-[#343539] rounded-2xl">
                {
                    projectData.map(project => <Link key={project.id} to={`/portfolio/${project.id}`}><PortfolioCard project={project} /></Link>)
                }
            </div>
        </div>
    )
}