import { useParams } from "react-router-dom"
import FormularioGeneros from "./FormularioGeneros";

export default function EditarGenero(){

  //Hook para obtener el valor que viene por parametro
  // const {id}: any = useParams();


  return(
    <>
    <h3>Editar genero</h3>

    <FormularioGeneros modelo={{nombre: 'Accion'}}
        onSubmit={async (valores, acciones) => {
          await new Promise(r => setTimeout(r, 3000))
          console.log(valores);          
        }}
      />
    </>
  )
}