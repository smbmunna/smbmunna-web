import project_1 from '../../src/assets/projects/project_1.jpg'

export default function Portfolio (){
    
    return (
        <div className="px-4 mt-16 border flex flex-col w-full h-full items-center">
            <h1 className="">PORTFOLIO</h1>
            <h3 className="">See My Awesome Work</h3>

            {/* tabs */}
            <div className="mt-8">
                <ul className="flex gap-8">
                    <li><a href="#">All</a></li>
                    <li><a href="#">Frontend Projects</a></li>
                    <li><a href="#">Fullstack Projects</a></li>
                </ul>
            </div>

            {/* Projects */}
            <div className="grid grid-cols-3 gap-4 mt-16 mx-auto">
                <div><img src={project_1} alt="project img" /></div>
                <div><img src={project_1} alt="project img" /></div>
                <div><img src={project_1} alt="project img" /></div>
                
            </div>
        </div>
    )
}