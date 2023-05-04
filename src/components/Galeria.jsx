import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import noimage from '../img/noimage.png';
import fav from '../img/fav.svg';
import nofav from '../img/nofav.svg';
import BotonTop from './BotonTop';

const Galeria = ({ url }) => {
  const [characters, setCharacters] = useState([]);
  const [showLoading, setShowLoading] = useState(false);
  const [visibleCount, setVisibleCount] = useState(21);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const favorites = localStorage.getItem('favoritos') ? JSON.parse(localStorage.getItem('favoritos')) : [];

  const eleccionFuncion = (e, personaje) => {
    if (personaje.favBool) {
      removeFromFavorites(e, personaje);
    } else {
      addToFavorites(e, personaje);
    }
  };

  const addToFavorites = (e, personaje) => {
    personaje.favBool = true;
    e.target.src = fav;
    favorites.push(personaje);
    actualizarFavoritos(favorites);
  };

  const removeFromFavorites = (e, personaje) => {
    personaje.favBool = false;
    e.target.src = nofav;
    const posicion = favorites.map((object) => {
      object.id;
    }).indexOf(personaje.id);
    favorites.splice(posicion, 1);
    actualizarFavoritos(favorites);
  };

  const actualizarFavoritos = (favorites) => {
    localStorage.setItem('favoritos', JSON.stringify(favorites));
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

  const charactersToDisplay = searchTerm ? searchResults : characters;

  return (
    <>
      <div className='search'>
        <input type='text' placeholder='Buscar personaje...' value={searchTerm} onChange={handleChange} />
      </div>
      {charactersToDisplay.slice(0, visibleCount).map((item) => {
        item.favorito = nofav;
        item.favBool = false;
        let favLocal = JSON.parse(localStorage.getItem('favoritos'));
        if (favLocal && favLocal.length > 0) {
          const favorite = favLocal.find((favorite) => favorite.id === item.id);
          if (favorite) {
            item.favorito = fav;
            item.favBool = true;
          }
        }
      

      let {id,name,image,favorito} = item
      if(image === ""){
        image = noimage
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
      {showLoading && <h1 className='titulo'>Cargando...</h1>}
      <BotonTop></BotonTop>
    </>
  )
}

export default Galeria
