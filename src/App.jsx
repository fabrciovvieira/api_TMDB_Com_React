// REACT
import { Outlet } from 'react-router-dom'
// COMPONENTES
import NavBar from './components/navBar/NavBar.jsx'
// ESTILOS
import './App.css'



function App() {

  return (
    <>
        <NavBar />
        <div className="container">
          <Outlet />
        </div>
    </>
  )
}

export default App
