// REACT
import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import { BiCameraMovie } from "react-icons/bi";


// ESTILOS
import '../navBar/NavBar.css'



const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

  return (
    <div className='div-container'>
        <nav className="navbar-containter">
            <div className="nav-content">
                <div className="logo-container">
                    <BiCameraMovie className='biCameraMovie'/>
                    <h2 className='logo'>Watch Out</h2>
                </div>
                <div className="hamburger-menu">
                    <div className={`menu-btn ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                        <div className="btn-line" />
                        <div className="btn-line" />
                        <div className="btn-line" />
                    </div>
                    <nav className={`menu ${isOpen ? 'open' : ''}`}>
                        <ul className='list-navbar-mobile'>
                            <li>
                                <BiCameraMovie className='biCameraMovie-mobile'/>
                            </li>
                            <li>
                                <Link className='menu-item-mobile' to="/api_TMDB_Com_React" onClick={toggleMenu}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link className='menu-item-mobile' to="/api_TMDB_Com_React/sugestao" onClick={toggleMenu}>
                                    Minhas redes sociais
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <ul className='list-navBar'>
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