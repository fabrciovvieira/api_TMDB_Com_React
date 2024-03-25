// REACT
import React from 'react'
import { Link } from 'react-router-dom'
import { BiCameraMovie } from "react-icons/bi";


// ESTILOS
import '../navBar/NavBar.css'



const NavBar = () => {
  return (
    <div className='div-container'>
        <nav className="navbar-containter">
            <div className="nav-content">
                <div className="logo-container">
                    <BiCameraMovie size={"3rem"}/>
                    <h2 className='logo'>Watch Out</h2>
                </div>
                <ul>
                    <li>
                        <Link className='menu-item' to="/api_TMDB_Com_React">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className='menu-item' to="/api_TMDB_Com_React/sugestao">
                            Minhas redes sociais
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default NavBar