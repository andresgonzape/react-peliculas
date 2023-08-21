import PeliculaIndividual from "./PeliculaIndividual";
import { peliculaDTO } from "./peliculas.model";
import css from "./ListadoPeliculas.module.css"
import Cargando from "../utils/Cargando";
import ListadoGenerico from "../utils/ListadoGenerico";

export default function ListadoPeliculas(props: listadoPeliculasProp) {

    return (
        <ListadoGenerico listado={props.peliculas}>
            <div className={css.div}>
                {props.peliculas?.map( pelicula => 
                    <PeliculaIndividual pelicula={pelicula}
                                        key={pelicula.id}
                    />)}
            </div>
        </ListadoGenerico>        
    )
}

interface listadoPeliculasProp{
    peliculas?: peliculaDTO[];
}