import './App.css'
import { useRoutes } from 'react-router'
import { routesConfig } from './routes'
import { useVisitorLogger } from './hooks/useVisitorLogger';

function App() {
  useVisitorLogger(); 
  const element = useRoutes(routesConfig);
  return element;
}

export default App
