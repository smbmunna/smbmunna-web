import './App.css'
import { useRoutes } from 'react-router'
import { routesConfig } from './routes'





function App() {
  const element = useRoutes(routesConfig);

  return element;
}

export default App
