import axios from "axios";
import FormularioActores from "./FormularioActores";
import { actorCreacionDTO } from "./actores.model";
import { urlActores } from "../utils/endpoints";
import { useNavigate } from "react-router-dom";
import MostrarErrores from "../utils/MostrarErrores";
import { useState } from "react";
import { convertirActorAFormData } from "../utils/formDataUtils";

export default function CrearActores() {

    const [errores, setErrores] = useState<string[]>([]);
    const history = useNavigate();


    async function crear(actor: actorCreacionDTO) {
        try {
            const formData = convertirActorAFormData(actor);
            await axios({
                method: 'post',
                url: urlActores,
                data: formData,
                headers: {'Content-Type': 'multipart/form-data'}
            });
            history('/actores');
        } catch (error) {
            setErrores(error.response.data);
        }
    }

    return (
        <>
            <h3>Crear Actores</h3>
            <MostrarErrores errores={errores}></MostrarErrores>
            <FormularioActores
                modelo={{nombre: '', fechaNacimiento: undefined}}
                onSubmit={async valores => await crear(valores)}
            />
        </>
    )
}