import { actorPeliculaDTO } from "../actores/actores.model";
import { cineDTO } from "../cines/cines.model";
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

    const cinesSeleccionados: cineDTO[] = [
        {id: 3, nombre: 'Móstoles'},
    ]

    const cinesNoSeleccionados: cineDTO[] = [
        {id: 1, nombre: 'Madrid'},
        {id: 2, nombre: 'Alcorcón'},
    ]

    const actoresSeleccionados: actorPeliculaDTO[] = [
        {
            id: 1, 
            nombre: 'Chukodiman', 
            personaje: '', 
            foto: 'https://m.media-amazon.com/images/M/MV5BZWIyNmZmNWItZmExNS00MzA5LTk1ZTgtY2EyOTVlNWMzN2UwL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_.jpg'
        },
    ]

    return (
        <>
            <h3>Editar Película</h3>
            <FormularioPeliculas
                cinesSeleccionados={cinesSeleccionados}
                cinesNoSeleccionados={cinesNoSeleccionados}
                generosSeleccionados={generosSeleccionados}
                generosNoSeleccionados={generosNoSeleccionados}
                actoresSeleccionados={actoresSeleccionados}
                modelo={{titulo: 'SPIDER- chukodi -MAN', enCines: true, trailer: 'url', fechaLanzamiento: new Date('2022-02-22T00:00:00') }}
                onSubmit={valores=>console.log(valores)}
            />
        </>
    )
}