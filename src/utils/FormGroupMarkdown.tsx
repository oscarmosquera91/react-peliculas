import { Field, useFormikContext } from "formik";
import ReactMarkdown from 'react-markdown'
import './FormGroupMarkdown.css'


export default function FormGroupMarkdown(props: formGroupMarkdownProps){
  const {values} = useFormikContext<any>();
  return (
      <div className="form-group form-markdown">
        <div>
          <label>{props.label}</label>
          <div>
            <Field name={props.campo} as="textarea" className="fomr-textarea"/>
          </div>
        </div>
        <div>
          <label>{props.label} (previw)</label>
          <div className="markdown-container">
            <ReactMarkdown>{values[props.campo]}</ReactMarkdown>
          </div>
        </div>
         
      </div>
  )
}

interface formGroupMarkdownProps{
  campo: string;
  label: string;
}