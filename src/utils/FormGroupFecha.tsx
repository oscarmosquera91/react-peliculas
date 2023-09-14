import { useFormikContext } from "formik";
import MostrarErrorCampo from "./MostarErrorCampo";

export default function FormGroupFechas(props: formGroupFechasProps){
  //invocando el contesto podemos importar elementos del origen sin declararlos en el contexto
  const {values, validateForm, touched, errors} = useFormikContext<any>();
  return (
    <div className="form-group">
      <label htmlFor={props.campo}>{props.label}</label>

      <input type="date" className="form-control"
        id={props.campo}
        name={props.campo}
        defaultValue={values[props.campo]?.toLocaleDateString('en-CA')} 
        onChange={e=>{
           const fecha = new Date(e.currentTarget.value + 't00:00:00');
           console.log(values);
           values[props.campo] = fecha;
           validateForm();
        }}
      />
      {touched[props.campo] && errors[props.campo] ? 
      <MostrarErrorCampo mensaje={errors[props.campo]?.toString()!}/> : null}
    </div>
  )
}

interface formGroupFechasProps{
  campo: string;
  label: string;
}