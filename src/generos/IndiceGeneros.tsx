import { useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { Link } from "react-router-dom";
import { generoDTO } from "./generos.model";
import { urlGeneros } from "../utils/endpoints";

export default function IndiceGeneros() {
    useEffect(()=>{
        axios.get(urlGeneros)
        .then((respuesta: AxiosResponse<generoDTO[]>) => {
            console.log(respuesta.data);
        })
    }, [])
    return (
        <>
            <h3>Índice Géneros</h3>
            <Link to="/generos/crear">Crear Género</Link>
        </>
    )
}