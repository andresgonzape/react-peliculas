import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { ReactElement } from "react-markdown/lib/react-markdown";
import { useNavigate, useParams } from "react-router-dom";
import Cargando from "./Cargando";
import MostrarErrores from "./MostrarErrores";

export default function EditarEntidad<TCreacion, TLectura>(props: editarEntidadProps<TCreacion, TLectura>){
    const { id }: any = useParams();
    const [entidad, setEntidad] = useState<TCreacion>();
    const [errores, setErrores] = useState<string[]>([]);

    //en el curso, se utiliza useHistory que es un poco diferente, pero muy similar, por ser la v5 en vez de la v6 el react router dom
    const history = useNavigate();

    useEffect(() => {
        axios.get(`${props.url}/${id}`)
        .then((respuesta: AxiosResponse<TLectura>) => {
            setEntidad(props.transformar(respuesta.data));
        });
    }, []);

    async function editar(entidadEditar: TCreacion) {
        try {
            if (props.transformarFormData) {
                const formData = props.transformarFormData(entidadEditar);
                await axios({
                    method: 'put',
                    url: `${props.url}/${id}`,
                    data: formData,
                    headers: {'Content-Type': 'multipart/form-data'}
                });
            }else {
                await axios.put(`${props.url}/${id}`, entidadEditar);    
            }
            history(props.urlIndice);
        } catch (error) {
            setErrores(error.response.data);
        }
    }
    
    return (
        <>
            <h3>Editar {props.nombreEntidad}</h3>
            <MostrarErrores errores={errores}></MostrarErrores>
            {entidad ? props.children(entidad, editar) : <Cargando></Cargando>}
        </>
    )
}

interface editarEntidadProps<TCreacion, TLectura>{
    url: string;
    urlIndice: string;
    nombreEntidad: string;
    children(entidad: TCreacion, editar: (entidad: TCreacion) => void) : ReactElement;
    transformar(entidad: TLectura): TCreacion;
    transformarFormData?(modelo: TCreacion): FormData;
}

EditarEntidad.defaultProps = {
    transformar: (entidad: any) => entidad
}