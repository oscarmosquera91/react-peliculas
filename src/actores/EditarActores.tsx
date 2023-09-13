import FormularioActores from "./FormularioActores";

export default function EditarActores()
{
  return (
    <>
    <h3>Editar Actores</h3>
      <FormularioActores
        model={{nombre: 'Oscar', fechaNacimiento: new Date('1996-06-01:00:00:00')}}
        onSubmit={valores => console.log(valores)}/></>
  )
}