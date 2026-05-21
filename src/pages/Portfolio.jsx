import PortfolioCard from '@/components/reusable/PortfolioCard'
import gamers_hub_1 from '../../src/assets/projects/gamers_hub_1.png'
import rise_at_seven_1 from '../../src/assets/projects/rise_at_seven_1.png'

import { projectData } from '@/data/projects';
import { Link } from 'react-router-dom';

export default function Portfolio() {

    return (
        <div className="mb-16 px-4 pt-16 border flex flex-col w-full items-center h-screen mx-auto rounded-2xl bg-[#343539]">
            <h1 className="text-3xl mb-4 font-semibold text-amber-500">PORTFOLIO</h1>
            <h3 className="text-xl font-semibold">See My Awesome Work</h3>

            {/* tabs */}
            <div className="mt-8">
                <ul className="flex gap-8">
                    <li className='text-amber-500'><a href="#">All</a></li>
                    <li><a href="#">Frontend Projects</a></li>
                    <li><a href="#">Fullstack Projects</a></li>
                </ul>
            </div>

            {/* Projects */}
            <div className="grid grid-cols-3 gap-4 mt-16 mx-auto">
                {
                    projectData.map(project => <Link to={`/portfolio/${project.id}`}><PortfolioCard key={project.id} project={project} /></Link>)
                }
            </div>
        </div>
    )
}