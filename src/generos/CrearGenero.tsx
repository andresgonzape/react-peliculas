import { Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import Button from "../utils/Button";

export default function CrearGenero(){

    //en el curso, se utiliza useHistory que es un poco diferente, pero muy similar, por ser la v5 en vez de la v6 el react router dom
    //const history = useNavigate();

    return (
        <>
            <h3>Crear Género</h3>

            <Formik initialValues={{
                nombre: 'Acción'

            }}
            onSubmit={ values => {
                console.log(values);
            }}
            >
                <Form>
                    <div className = "form-group">
                        <label htmlFor="nombre">Nombre</label>
                        <Field name="nombre" className="form-control"></Field> 
                    </div>
                    <Button type="submit">Guardar</Button>
                    <Link className="btn btn-secondary" to="/generos">Cancelar</Link>
                </Form>
            </Formik>
            
            {/* <Button onClick={() => history('/generos')}>Guardar</Button> */}

            
        </>
        
    )
}