import { Form, Formik, FormikHelpers } from "formik"; //OJO!! cuando hice la importacion automatica, importe el FORM desde la libreria de react router dom. Eso causaba errores porque no era el form que yo queria, asi que tarde en darme cuenta de que este era el FORM que yo queria
import { Link } from "react-router-dom";
import Button from "../utils/Button";
import FormGroupText from "../utils/FormGroupText";
import * as Yup from 'yup';
import { generoCreacionDTO } from "./generos.model";

export default function FormularioGeneros(props: formularioGenerosProps) {
    return (
        <Formik initialValues={props.modelo}
            onSubmit={props.onSubmit}

            validationSchema={Yup.object({
                nombre: Yup.string().required('Este campo es obligatorio').primeraLetraMayuscula()
            })}
        >
            {(formikProps) => (
                <Form>
                    <FormGroupText campo="nombre" label="Nombre" placeholder="Nombre del género"></FormGroupText>

                    <Button disabled={formikProps.isSubmitting}
                        type="submit">Guardar</Button>
                    <Link className="btn btn-secondary" to="/generos">Cancelar</Link>
                </Form>
            )}
        </Formik>
    )
}

interface formularioGenerosProps {
    modelo: generoCreacionDTO;
    onSubmit(valores: generoCreacionDTO, accion: FormikHelpers<generoCreacionDTO>): void;
}