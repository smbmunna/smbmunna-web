import RootLayout from "./layouts/RootLayout";
import About from "./pages/About";
import Intro from "./pages/Intro";
import Portfolio from "./pages/Portfolio";


export const routesConfig= [
    {
        path: '/',
        element: <RootLayout/>, 
        children: [
            {index: true, element: <Intro/>},
            {path: 'portfolio', element: <Portfolio/>},
            {path: 'about', element: <About/>}
        ]
    }
]