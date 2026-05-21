import { Link } from "react-router-dom";


export default function PortfolioCard({ img, title }) {

    return (
        <div className='rounded-2xl'>
            <img src={img} alt="project img" />
            <Link to="/" className="text-lg font-semibold my-2">{title}</Link>            
        </div>
    )
}