import React, { useEffect, useState } from 'react';
import './App.css';
import { landingPageDTO, pelicula } from './peliculas/peliculas.model';
import ListadoPeliculas from './peliculas/ListadoPeliculas';

function App() {

  const [peliculas, setPeliculas] = useState<landingPageDTO>({})

  useEffect(() => {
    const timerId = setTimeout(()=> {
      setPeliculas({enCartelera: [
        {
          id: 1, titulo: 'Spider-Man: Far from Home', 
          poster: 'https://m.media-amazon.com/images/M/MV5BZGVmMDJlOWYtODQxZS00YWFlLWFmYTYtZmExMWY5NWE5NjEwXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_.jpg'
        },
        {
          id: 2, titulo: 'Moana', 
          poster: 'https://m.media-amazon.com/images/M/MV5BNTNhYTI0OGQtYmZiZC00NTI4LTgzMDUtYmQwMzJkZmUwNzYzXkEyXkFqcGdeQXVyNjg2NjgzMjM@._V1_FMjpg_UY800_.jpg'
        }
      ],
    proximosExtrenos: [
      {
        id: 1, titulo: 'Spider-Man: Far from Home', 
        poster: 'https://m.media-amazon.com/images/M/MV5BNDIyNjc1MjgtY2ViNS00N2EwLThmNWQtZDJlYjBiYmI5MTg0XkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_QL75_UX380_CR0,0,380,562_.jpg'
      }
    ]})

    }, 1000);
    return () => clearTimeout(timerId)
  })

 

  return (
    <>
    <h3>En Cartelera</h3>
    <ListadoPeliculas peliculas={peliculas.enCartelera}/>

    <h3>Proximos Estrenos</h3>
    <ListadoPeliculas peliculas={peliculas.proximosExtrenos}/>
    </>
    
    
  );
}

export default App;
