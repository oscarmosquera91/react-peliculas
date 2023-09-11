import PeliculaIndividual from "./PeliculaIndividual";
import { pelicula } from "./peliculas.model";
import css from "./ListadoPeliculas.module.css"

export default function ListadoPeliculas(props: listadoPeliculasProps){

  return(
    <div className={css.div}>
      {props.peliculas.map(pelicula =>
      <PeliculaIndividual pelicula={pelicula}
      key={pelicula.id}
      />)}
    </div>
  )

}

interface listadoPeliculasProps{
  peliculas: pelicula[];
}