import { useParams } from "react-router-dom"

export default function EditarGenero(){

  //Hook para obtener el valor que viene por parametro
  const {id}: any = useParams();


  return(
    <>
    <h3>Editar genero</h3>
    <h4>el id es {id}</h4>
    </>
  )
}