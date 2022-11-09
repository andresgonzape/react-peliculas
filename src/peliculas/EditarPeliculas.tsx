import { generoDTO } from "../generos/generos.model";
import FormularioPeliculas from "./FormularioPeliculas";

export default function EditarPeliculas() {

    const generosNoSeleccionados: generoDTO[] = [
        {id: 2, nombre: 'Drama'},
        {id: 3, nombre: 'Comedia'}
    ] 

    const generosSeleccionados: generoDTO[] = [
        {id: 1, nombre: 'Acción'}
    ] 

    return (
        <>
            <h3>Editar Película</h3>
            <FormularioPeliculas
                generosSeleccionados={generosSeleccionados}
                generosNoSeleccionados={generosNoSeleccionados}
                modelo={{titulo: 'SPIDER- chukodi -MAN', enCines: true, trailer: 'url', fechaLanzamiento: new Date('2022-02-22T00:00:00') }}
                onSubmit={valores=>console.log(valores)}
            />
        </>
    )
}