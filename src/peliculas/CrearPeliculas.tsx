import { useEffect, useState } from "react";
import { cineDTO } from "../cines/cines.model";
import { generoDTO } from "../generos/generos.model";
import FormularioPeliculas from "./FormularioPeliculas";
import axios, { AxiosResponse } from "axios";
import { urlPeliculas } from "../utils/endpoints";
import { peliculaCreacionDTO, peliculasPostGetDTO } from "./peliculas.model";
import Cargando from "../utils/Cargando";
import { convertirPeliculaAFormData } from "../utils/formDataUtils";
import { useNavigate } from "react-router-dom";
import MostrarErrores from "../utils/MostrarErrores";

export default function CrearPeliculas() {

    const [generosNoSeleccionados, setGenerosNoSeleccionados] = useState<generoDTO[]>([]);
    const [cinesNoSeleccionados, setCinesNoSeleccionados] = useState<cineDTO[]>([]);
    const [cargado, setCargado] = useState(false);
    const history = useNavigate();
    const [errores, setErrores] = useState<string[]>([]);

    useEffect(() => {
        axios.get(`${urlPeliculas}/postget`)
        .then((respuesta: AxiosResponse<peliculasPostGetDTO>) => {
            setGenerosNoSeleccionados(respuesta.data.generos);
            setCinesNoSeleccionados(respuesta.data.cines);
            setCargado(true);
        })
    }, [])

    async function crear(pelicula: peliculaCreacionDTO){
        try {
            const formData = convertirPeliculaAFormData(pelicula);
            await axios({
                method: 'post',
                url: urlPeliculas,
                data: formData,
                headers: {'Content-Type': 'multipart/form-data'}
            }).then((respuesta: AxiosResponse<number>) => {
                history(`/pelicula/${respuesta.data}`)
            })
        } catch (error) {
            setErrores(error.response.data)
        }
    }

    return (
        <>
            <h3>Crear Película</h3>
            <MostrarErrores errores={errores}></MostrarErrores>
            {cargado ? <FormularioPeliculas
                cinesSeleccionados={[]}
                cinesNoSeleccionados={cinesNoSeleccionados}
                generosSeleccionados={[]}
                generosNoSeleccionados={generosNoSeleccionados}
                actoresSeleccionados={[]}
                modelo={{titulo: '', enCines: false, trailer: '' }}
                onSubmit={async valores => crear(valores)}
            /> : <Cargando></Cargando>}
        </>
    )
}