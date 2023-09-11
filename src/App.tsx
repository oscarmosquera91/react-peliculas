import React from 'react';
import logo from './logo.svg';
import './App.css';
import { pelicula } from './peliculas/peliculas.model';
import PeliculaIndividual from './peliculas/PeliculaIndividual';

function App() {
  const peliculaPrueba: pelicula = 
    {
      id: 1, titulo: 'Spider-Man: Far from Home', 
      poster: 'https://m.media-amazon.com/images/M/MV5BZGVmMDJlOWYtODQxZS00YWFlLWFmYTYtZmExMWY5NWE5NjEwXkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_.jpg'
    }
  
  return (
    <>
    <PeliculaIndividual pelicula={peliculaPrueba}/>
    </>
  );
}

export default App;
