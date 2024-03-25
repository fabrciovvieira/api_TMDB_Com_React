//REACT
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

//ESTILOS
import '../searchBar/SearchBar.css'

const SearchBar = () => {

// Configurando a pesquisa
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleText = (e) => {
    e.preventDefault();

    const { value } = e.target;
    setSearch(value)

  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!search) return
    navigate(`/api_TMDB_Com_React/search?q=${search}`)

  }

  return (
    <div>
        <div className="search-container">
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder='Pesquisar filme'
                value={search}
                onChange={handleText} />

                <button type="submit" >
                    <FaSearch />
                </button>
            </form>
      </div>
    </div>
  )
}

export default SearchBar