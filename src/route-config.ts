import LandingPages from "./LandingPages";
import CrearActores from "./actores/CrearActores";
import EditarActores from "./actores/EditarActores";
import IndiceActores from "./actores/IndiceActores";
import CrearCines from "./cines/CrearCines";
import EditarCines from "./cines/EditarCines";
import IndiceCines from "./cines/IndicesCines";
import CrearGenero from "./generos/CrearGenero";
import EditarGenero from "./generos/EditarGenero";
import IndiceGeneros from "./generos/IndiceGeneros";
import CrearPeliculas from "./peliculas/CrearPeliculas";
import EditarPeliculas from "./peliculas/EditarPeliculas";
import FiltroPeliculas from "./peliculas/FiltroPeliculas";

const rutas = [
  
  {path: '/generos', componente: IndiceGeneros, exact: true},
  {path: '/generos/crear', componente: CrearGenero},
  {path: '/generos/editar', componente: EditarGenero},

  {path: '/actores', componente: IndiceActores, exact: true},
  {path: '/actores/crear', componente: CrearActores},
  {path: '/actores/editar', componente: EditarActores},

  {path: '/cines', componente: IndiceCines, exact: true},
  {path: '/cines/crear', componente: CrearCines},
  {path: '/cines/editar', componente: EditarCines},

  {path: '/peliculas/crear', componente: CrearPeliculas},
  {path: '/peliculas/editar', componente: EditarPeliculas},
  {path: '/peliculas/filtrar', componente: FiltroPeliculas},

 

  {path: '/', componente: LandingPages, exact: true}

];

export default rutas;