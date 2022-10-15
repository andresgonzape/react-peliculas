import { Form, Formik, FormikHelpers } from "formik";
import { cineCreacionDTO } from "./cines.model"
import * as Yup from 'yup'
import FormGroupText from "../utils/FormGroupText";
import Button from "../utils/Button";
import { Link } from "react-router-dom";

export default function FormularioCines(props: formularioCinesProps) {
    return(
        <Formik
            initialValues={props.modelo}
            onSubmit={props.onSumbit}
            validationSchema={Yup.object({
                nombre: Yup.string().required('Este campo es obligatorio').primeraLetraMayuscula()
            })}
        >
            {(formikProps) => (
                <Form>
                    <FormGroupText label="Nombre" campo="nombre"></FormGroupText>
                    <Button disabled={formikProps.isSubmitting} type="submit">Guardar</Button>
                    <Link className="btn btn-secondary" to="/cines">Cancelar</Link>
                </Form>
            )}
        </Formik>
    )
}

interface formularioCinesProps {
    modelo: cineCreacionDTO;
    onSumbit(valores: cineCreacionDTO, acciones: FormikHelpers<cineCreacionDTO>): void;
}