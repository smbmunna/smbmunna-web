import RootLayout from "./layouts/RootLayout";
import Contact from "./pages/Contact";
import Intro from "./pages/Intro";
import Portfolio from "./pages/Portfolio";
import PortfolioDetails from "./pages/PortfolioDetails";


export const routesConfig= [
    {
        path: '/',
        element: <RootLayout/>, 
        children: [
            {index: true, element: <Intro/>},
            {path: 'portfolio', element: <Portfolio/>},
            {path: 'contact', element: <Contact/>}, 
            {path: 'portfolio/:id', element: <PortfolioDetails/>}
        ]
    }
]