import axios from "axios";
import FormularioGeneros from "./FormularioGeneros";
import { generoCreacionDTO } from "./generos.model";
import { urlGeneros } from "../utils/endpoints";
import { useNavigate } from "react-router-dom";
import MostrarErrores from "../utils/MostrarErrores";
import { useState } from "react";

export default function CrearGenero() {

    //en el curso, se utiliza useHistory que es un poco diferente, pero muy similar, por ser la v5 en vez de la v6 el react router dom
    const history = useNavigate();
    const [errores, setErrores] = useState<string[]>([]);

    async function crear(genero: generoCreacionDTO){
        try{
            await axios.post(urlGeneros, genero);
            history('/generos');
        }
        catch (error) {
            console.error(error);
            setErrores(error.response.data);

        }
    }

    return (
        <>
            <h3>Crear Género</h3>
            <MostrarErrores errores={errores}></MostrarErrores>
            <FormularioGeneros modelo={{ nombre: '' }}
                onSubmit={async (valores) => {
                    await crear(valores);
                }}
            />
        </>
    )
} 