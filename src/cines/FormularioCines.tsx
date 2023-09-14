import { Form, Formik, FormikHelpers } from "formik";
import { cineCreacionDTO } from "./cines.mode";
import * as Yup from 'yup'
import FormGroupText from "../utils/FormGroupText";
import Button from "../utils/Button";
import { Link } from "react-router-dom";

export default function FormularioCines(props: formularioCinesProps){
  return (
    <Formik
      initialValues={props.modelo}
      onSubmit={props.onSubmit}
      validationSchema={Yup.object({
        nombre: Yup.string().required('Este campo es requeridp').primeraLetraMayuscula()
      })
      }
    >      
      {(FormikProps)=> (
          <Form>
            <FormGroupText label="Nombre" campo="nombre"/>
            <Button disabled={FormikProps.isSubmitting} type="submit" >Salvar</Button>
            <Link className="btn btn-secondary" to="/cines">Cancelar</Link>
          </Form>
      )}
    </Formik>
  )
}

interface formularioCinesProps{
  modelo:cineCreacionDTO;
  onSubmit(valores: cineCreacionDTO, acciones: FormikHelpers<cineCreacionDTO>): void
}

