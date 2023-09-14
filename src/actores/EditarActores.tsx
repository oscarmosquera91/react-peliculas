import FormularioActores from "./FormularioActores";

export default function EditarActores()
{
  return (
    <>
    <h3>Editar Actores</h3>
      <FormularioActores
        model={{nombre: 'Oscar', fechaNacimiento: new Date('1996-06-01T00:00:00'),
        fotoURL: 'https://m.media-amazon.com/images/M/MV5BNzZiNTEyNTItYjNhMS00YjI2LWIwMWQtZmYwYTRlNjMyZTJjXkEyXkFqcGdeQXVyMTExNzQzMDE0._V1_QL75_UX280_CR0,3,280,414_.jpg'
      }}
        onSubmit={valores => console.log(valores)}/></>
  )
}