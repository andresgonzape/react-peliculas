import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import Button from "../utils/Button";
import FormGroupText from "../utils/FormGroupText";

export default function CrearGenero(){

    //en el curso, se utiliza useHistory que es un poco diferente, pero muy similar, por ser la v5 en vez de la v6 el react router dom
    //const history = useNavigate();

    return (
        <>
            <h3>Crear Género</h3>

            <Formik initialValues={{
                nombre: ''

            }}
                onSubmit={ values => {
                    console.log(values);
                }}

                validationSchema={Yup.object({
                    nombre: Yup.string().required('Este campo es obligatorio').primeraLetraMayuscula()
                })}


            >
                <Form>
                    <FormGroupText campo="nombre" label="Nombre" placeholder="Nombre del género"></FormGroupText>
                    <Button type="submit">Guardar</Button>
                    <Link className="btn btn-secondary" to="/generos">Cancelar</Link>
                </Form>
            </Formik>
            
            {/* <Button onClick={() => history('/generos')}>Guardar</Button> */}

            
        </>
        
    )
}