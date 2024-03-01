// REACT
import React from 'react'
import { FaInstagram, 
  FaLinkedin, 
  FaGithub, 
  FaSquareFacebook } from "react-icons/fa6";

// ESTILOS
import '../pages/Sugestao.css'


const Sugestao = () => {

  return (
    <div className="geral">
      <div className='container-social'>
      <h1>Me segue!</h1>
        <div className="content-social">
          <a className='link' href="https://www.instagram.com/fabrciovvieira?igsh=MXRldnN3dWRpemRpMA%3D%3D&utm_source=qr" target='_blank'>
            <FaInstagram className="icons"/>
          </a>
          <a className='link' href="https://www.facebook.com/fabricio.vieira.3192" target='_blank'>
            <FaSquareFacebook className="icons"/>
          </a>
          <a className='link' href="https://www.linkedin.com/in/fabricio-vieira-64a268145/?locale=en_US" target='_blank'>
            <FaLinkedin className="icons"/>
          </a>
          <a className='link' href="https://github.com/fabrciovvieira" target='_blank'>
            <FaGithub className="icons"/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Sugestao