import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import noimage from '../img/noimage.png';
import fav from '../img/fav.svg';
import nofav from '../img/nofav.svg';
import BotonTop from './BotonTop';
import UserContext, { useUserContext } from "../context/UserContext"

const Galeria = ({ url }) => {
  const { user, setUser } = useUserContext()
  const navigate = useNavigate()

  const [characters, setCharacters] = useState([])
  const [showLoading, setShowLoading] = useState(false)
  const [visibleCount, setVisibleCount] = useState(21)
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  //const favorites = localStorage.getItem('favoritos') ? JSON.parse(localStorage.getItem('favoritos')) : []
  const [houseFilter, setHouseFilter] = useState('')
  const [ancestryFilter, setAncestryFilter] = useState('')
  const [resetFilters, setResetFilters] = useState(false)


  let favoritesKey = ''
  if(user){
    const logedUser = JSON.parse(localStorage.getItem('logedUser'))
    const email = logedUser[0].email
    favoritesKey = `favoritos_${email}`
  }
  
  
  
  
  const userFavorites = localStorage.getItem(favoritesKey) ? JSON.parse(localStorage.getItem(favoritesKey)) : []
  

  const handleHouseFilterChange = (event) => {
    setHouseFilter(event.target.value);
  }
  
  const handleAncestryFilterChange = (event) => {
    setAncestryFilter(event.target.value);
  }

  const eleccionFuncion = (e, personaje) => {
    if(!user){
      navigate("/register")
    }else{
      if (personaje.favBool) {
        removeFromFavorites(e, personaje);
      } else {
        addToFavorites(e, personaje);
      }
    };
    }
    

  const addToFavorites = (e, personaje) => {
    personaje.favBool = true;
    e.target.src = fav;
    userFavorites.push(personaje);
    actualizarFavoritos();
  };

  const removeFromFavorites = (e, personaje) => {
    personaje.favBool = false;
    e.target.src = nofav;
    const index = userFavorites.findIndex((fav) => fav.id === personaje.id);
    if (index !== -1) {
      userFavorites.splice(index, 1);
      actualizarFavoritos();
    }
  };

  const actualizarFavoritos = () => {
    localStorage.setItem(favoritesKey, JSON.stringify(userFavorites));
  };

  useEffect(() => {
    const llamarApi = async () => {
      const respuesta = await fetch(url);
      const charData = await respuesta.json();
      if (charData != 'undefined') {
        setCharacters(charData);
      }
    };
    llamarApi();
  }, []);

  

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 5 && !loading) {
      setShowLoading(true);
      setLoading(true);
      setTimeout(() => {
        setVisibleCount(visibleCount + 21);
        setLoading(false);
        setShowLoading(false);
      }, 800);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleCount]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const results = characters.filter((char) => char.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setSearchResults(results);
  }, [searchTerm, characters]);

  const charactersToDisplay = searchTerm ? searchResults.filter((char) => {
    return (char.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
            (char.house.toLowerCase().includes(houseFilter.toLowerCase()) || houseFilter === '') &&
            (char.ancestry.toLowerCase().includes(ancestryFilter.toLowerCase()) || ancestryFilter === ''))
  }) : characters.filter((char) => {
    return (char.house.toLowerCase().includes(houseFilter.toLowerCase()) || houseFilter === '') &&
           (char.ancestry.toLowerCase().includes(ancestryFilter.toLowerCase()) || ancestryFilter === '')
  })

  const handleResetFilters = () => {
    setHouseFilter('');
    setAncestryFilter('');
    setSearchTerm('');
    setResetFilters(true);
  };

  const shouldShowTopButton = charactersToDisplay.length > 21

  return (
    <>
    <div className='contenedor_busqueda'>
        <div className='search'>
          <input type='text' placeholder='Buscar personaje...' value={searchTerm} onChange={handleChange} />
        </div>
        <div className='filters'>
          <label htmlFor='houseFilter'>Casa:</label>
          <select id='houseFilter' value={houseFilter} onChange={handleHouseFilterChange}>
            <option value=''>Todas</option>
            <option value='Gryffindor'>Gryffindor</option>
            <option value='Hufflepuff'>Hufflepuff</option>
            <option value='Ravenclaw'>Ravenclaw</option>
            <option value='Slytherin'>Slytherin</option>
          </select>
          <label htmlFor='ancestryFilter'>Ancestro:</label>
          <select id='ancestryFilter' value={ancestryFilter} onChange={handleAncestryFilterChange}>
            <option value=''>Todos</option>
            <option value='pure-blood'>Nacido de magos</option>
            <option value='half-blood'>Mestizo</option>
            <option value='muggleborn'>Nacido de muggles</option>
          </select>
        </div>
        <button onClick={handleResetFilters}>Restablecer filtros</button>
      </div>  
      <div className='cards'>
      {charactersToDisplay.slice(0, visibleCount).map((item) => {
          item.favBool = userFavorites.some((fav) => fav.id === item.id);
          if(item.favBool){
            item.favorito = fav
          }else{
            item.favorito = nofav
          }
          let { id, name, image, favorito } = item;
          if (image === "") {
            image = noimage;
          }
        return (
          <article className='elemento' key={id}>
            <div className='div_imagen'>
              <img src={image} className="foto" alt={name}></img>
            </div>
            <div className='titulos'>
              <h2 className='titulo_elemento'>{name}</h2>
            </div>
            <div className="icono_fav"
              >
              <img src={favorito} width="30 px" className='iconoFav' onClick={(e) => eleccionFuncion(e,item)}/>
            </div>
            <NavLink to="/personaje" state={{ item:item}} className="button">Ver más</NavLink>
          </article>
        )
      })}
      </div>  
      {showLoading && <h1 className='titulo'>Cargando...</h1>}
      {shouldShowTopButton && <BotonTop />}
      
    </>
  )
}

export default Galeria
