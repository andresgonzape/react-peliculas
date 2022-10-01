import { useNavigate } from "react-router-dom";
import Button from "../utils/Button";

export default function CrearGenero(){

    //en el curso, se utiliza useHistory que es un poco diferente, pero muy similar, por ser la v5 en vez de la v6 el react router dom
    const history = useNavigate();

    return (
        <>
            <h3>Crear Género</h3>
            <Button onClick={() => history('/generos')}>Guardar</Button>
        </>
        
    )
}