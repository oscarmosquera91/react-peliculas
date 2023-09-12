import LandingPages from "./LandingPages";
import IndiceGeneros from "./generos/IndiceGeneros";

const rutas = [
  {path: '/', componente: LandingPages, exact: true},
  {path: '/generos', componente: IndiceGeneros}
];

export default rutas;