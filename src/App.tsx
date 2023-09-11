import React from 'react';
import './App.css';
import { pelicula } from './peliculas/peliculas.model';
import ListadoPeliculas from './peliculas/ListadoPeliculas';

function App() {


  const peliculasEnCartelera: pelicula[] = [
    {
      id: 1, titulo: 'Spider-Man: Far from Home', 
      poster: 'https://m.media-amazon.com/images/M/MV5BZGVmMDJlOWYtODQxZS00YWFlLWFmYTYtZmExMWY5NWE5NjEwXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_.jpg'
    },
    {
      id: 2, titulo: 'Moana', 
      poster: 'https://m.media-amazon.com/images/M/MV5BNTNhYTI0OGQtYmZiZC00NTI4LTgzMDUtYmQwMzJkZmUwNzYzXkEyXkFqcGdeQXVyNjg2NjgzMjM@._V1_FMjpg_UY800_.jpg'
    }
  ]

  const peliculasProximosEstrenos: pelicula[]= [
    {
      id: 1, titulo: 'Spider-Man: Far from Home', 
      poster: 'https://m.media-amazon.com/images/M/MV5BNDIyNjc1MjgtY2ViNS00N2EwLThmNWQtZDJlYjBiYmI5MTg0XkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_QL75_UX380_CR0,0,380,562_.jpg'
    }
  ]

  return (
    <>
    <h3>En Cartelera</h3>
    <ListadoPeliculas peliculas={peliculasEnCartelera}/>

    <h3>Proximos Estrenos</h3>
    <ListadoPeliculas peliculas={peliculasProximosEstrenos}/>
    </>
    
    
  );
}

export default App;
