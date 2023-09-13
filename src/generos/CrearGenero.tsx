import { Link } from "react-router-dom"
import Button from "../utils/Button";
import {  Form, Formik } from 'formik';
import * as Yup from 'yup';
import FormGroupText from "../utils/FormGroupText";

export default function CrearGenero(){
  // const history =useHistory();
  return (
    <>
    <h3>Crear Genero</h3>

    <Formik initialValues={{
      nombre: ''
    }} 
      onSubmit={values => {
        console.log(values)
    }}

    validationSchema={Yup.object({
      nombre: Yup.string().required('Este campo es requerido').primeraLetraMayuscula()
    })}

    >
      <Form>
        <FormGroupText campo="nombre" label="Nombre" />

        <Button type="submit" >Salvar</Button>
        <Link className="btn btn-secondary" to="/generos" >Cancelar</Link>
      </Form>

    </Formik>

    
    </>
    
  )
}