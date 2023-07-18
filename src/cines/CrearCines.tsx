import axios from "axios";
import FormularioCines from "./FormularioCines";
import { cineCreacionDTO } from "./cines.model";
import { urlCines } from "../utils/endpoints";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MostrarErrores from "../utils/MostrarErrores";

export default function CrearCines(){

    const history = useNavigate();
    const [errores, setErrores] = useState<string[]>([]);

    async function crear(cine: cineCreacionDTO) {
        try{
            await axios.post(urlCines, cine);
            history('/cines');
        } catch(error) {
            setErrores(error.response.data);
        }
    }

    return (
        <>
            <h3>Crear Cine</h3>
            <MostrarErrores errores={errores}></MostrarErrores>
            <FormularioCines 
                modelo={{nombre: ''}}
                onSumbit={async valores => await crear(valores)}
            />
        </>
    )
}