import { cineDTO } from "../cines/cines.model";
import { generoDTO } from "../generos/generos.model";
import FormularioPeliculas from "./FormularioPeliculas";

export default function CrearPeliculas() {

    const generos: generoDTO[] = [
        {id: 1, nombre: 'Acción'},
        {id: 2, nombre: 'Drama'},
        {id: 3, nombre: 'Comedia'}
    ];

    const cines: cineDTO[] = [
        {id: 1, nombre: 'Madrid'},
        {id: 2, nombre: 'Alcorcón'},
        {id: 3, nombre: 'Móstoles'},
    ]

    return (
        <>
            <h3>Crear Película</h3>

            <FormularioPeliculas
                cinesSeleccionados={[]}
                cinesNoSeleccionados={cines}
                generosSeleccionados={[]}
                generosNoSeleccionados={generos}
                actoresSeleccionados={[]}
                modelo={{titulo: '', enCines: false, trailer: '' }}
                onSubmit={valores=>console.log(valores)}
            />
        </>
    )
}