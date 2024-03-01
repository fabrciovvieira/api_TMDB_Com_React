// REACT
import { Outlet } from 'react-router-dom'
// COMPONENTES
import NavBar from './components/navBar/NavBar.jsx'
// ESTILOS
import './App.css'



function App() {

  return (
    <>
      <div className="general-warning-responsive">
      <h1 className='h1-responsive'>Infelizmente esse site não tem ajustes de tela com seu dispositivo</h1>
      <p className="p-responsive">Tente usar um dispositivo com uma tela maior</p>
      <p className="p-responsive-ideal">Ideal para uso em laptops</p>
        <NavBar />
        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App
