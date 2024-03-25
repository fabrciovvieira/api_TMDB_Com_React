// REACT
import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// COMPONENTES
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Movie from './pages/Movie.jsx'
import Sugestao from './pages/Sugestao.jsx'
import Search from './pages/Search.jsx'

// ESTILOS
import './index.css'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route element={<App />}>
          <Route path='/api_TMDB_Com_React' element={<Home />}/>
          <Route path='/api_TMDB_Com_React/movies/:id' element={<Movie />}/>
          <Route path='/api_TMDB_Com_React/sugestao' element={<Sugestao />}/>
          <Route path="/api_TMDB_Com_React/search" element={<Search />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
