import { useHistory } from "react-router-dom"
import Button from "../utils/Button";

export default function CrearGenero(){
  const history =useHistory();
  return (
    <>
    <h3>Crear Genero</h3>
    <Button onClick={() => history.push('/generos')}>Salvar</Button>
    </>
    
  )
}