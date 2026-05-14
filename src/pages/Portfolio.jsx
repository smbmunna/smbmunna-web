import project_1 from '../../src/assets/projects/project_1.jpg'

export default function Portfolio (){
    
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
                <div className='rounded-2xl'><img src={project_1} alt="project img" /></div>
                <div className='rounded-2xl'><img src={project_1} alt="project img" /></div>
                <div className='rounded-2xl'><img src={project_1} alt="project img" /></div>
                
            </div>
        </div>
    )
}