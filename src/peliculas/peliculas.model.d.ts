export interface pelicula{
  id: number;
  titulo: string;
  poster: string;
}

export interface landingPageDTO{

  enCartelera?: pelicula[],
  proximosExtrenos?: pelicula[];
}