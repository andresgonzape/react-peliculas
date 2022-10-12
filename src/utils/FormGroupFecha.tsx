import { useFormikContext } from "formik";
import MostrarErrorCampo from "./MostrarErrorCampo";

export default function FormGroupFecha(props: formGroupFechaProps) {
    
    //Contexto para acceder a valores de cualquier parte del formulario(default value). Y tambien extraemos la funcion de validate form del contexto
    const {values, validateForm, touched, errors} = useFormikContext<any>();
    
    return (
        <div className="form-group">
            <label htmlFor={props.campo}>{props.label}</label>

            <input type="date" className="form-control"
                id={props.campo}
                name={props.campo}
                defaultValue={values[props.campo]?.toLocaleDateString('en-CA')}
                onChange={e => {
                    const fecha = new Date(e.currentTarget.value + 'T00:00:00');
                    values[props.campo] = fecha;
                    validateForm();
                }}
            />
            {/* Si el campo ha sido tocado Y si hay errores para mostrar... */}
            {/* la exclamacion al final de "mensaje" es porque si no, te da error de que puede venir undefined!*/}
            {touched[props.campo] && errors[props.campo] ? <MostrarErrorCampo mensaje={errors[props.campo]?.toString()!}/> : null}
        </div>
    )
}

interface formGroupFechaProps {
    campo: string;
    label: string;
}