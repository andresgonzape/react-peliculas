import { ReactElement, useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { actorCreacionDTO, actorPeliculaDTO } from "./actores.model";

export default function TypeAheadActores(props: typeAheadActoresProps){
    
    const actores: actorPeliculaDTO[] = [
        {
            id: 1, 
            nombre: 'Chukodiman', 
            personaje: '', 
            foto: 'https://m.media-amazon.com/images/M/MV5BZWIyNmZmNWItZmExNS00MzA5LTk1ZTgtY2EyOTVlNWMzN2UwL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_.jpg'
        },
        {
            id: 2, 
            nombre: 'Dimanchuko', 
            personaje: '', 
            foto: 'https://m.media-amazon.com/images/M/MV5BNzM0NDQ4NDEwOV5BMl5BanBnXkFtZTgwOTY1NDQ3NDM@._V1_.jpg'
        },
        {
            id: 3, 
            nombre: 'Kekwense', 
            personaje: '', 
            foto: 'https://m.media-amazon.com/images/M/MV5BNjQ1MWM5OTItZTdiMi00ZTE0LTgzNmItZmY4Y2Q3MWY2YTQ5XkEyXkFqcGdeQXVyMTQzMjU1NjE@._V1_.jpg'
        },
    ]

    const seleccion: actorPeliculaDTO[] = [];

    const [elementoArrastrado, setElementoArrastrado] = useState<actorPeliculaDTO | undefined>(undefined);

    function manejarDragStart(actor: actorPeliculaDTO)
    {
        setElementoArrastrado(actor);
    }

    function manejarDragOver(actor: actorPeliculaDTO)
    {
        if (!elementoArrastrado) {
            return;
        }

        if (actor.id !== elementoArrastrado.id) {
            const elementoArrastradoIndice = props.actores.findIndex(x => x.id === elementoArrastrado.id);
            const actorIndice = props.actores.findIndex(x => x.id === actor.id);
            const actores = [...props.actores];
            actores[actorIndice] = elementoArrastrado;
            actores[elementoArrastradoIndice] = actor;
            props.onAdd(actores);
        }
    }
    
    return (
        <>
            <label>Actores:</label>
            <Typeahead
                id="typeahead"
                onChange={ actores => {
                    if (props.actores.findIndex(x => x.id === actores[0].id) === -1) {
                        props.onAdd([...props.actores, actores[0]])
                    }
                }}
                options={ actores }
                labelKey={ actor => actor.nombre }
                filterBy={ ['nombre'] }
                placeholder="Escriba el nombre del actor..."
                minLength={1}
                flip={true}
                selected={seleccion}
                renderMenuItemChildren={actor => (
                    <>
                        <img src={actor.foto} alt="imagen actor" 
                            style={{
                                height: '64px',
                                marginRight: '10px',
                                width: '64px'
                            }}
                        />
                        <span>{actor.nombre}</span>
                    </>
                )}
            />

            <ul className="list-group">
                {props.actores.map(actor => <li 
                    draggable={true}
                    onDragStart={() => manejarDragStart(actor) }
                    onDragOver={() => manejarDragOver(actor)}
                    className="list-group-item list-group-item-action"
                    key={actor.id}>
                        {props.listadoUI(actor)}
                        <span className="badge badge-primary badge-pill pointer"
                            style={{marginLeft: '0.5rem'}}
                            onClick={() => props.onRemove(actor)}
                        >
                            X
                        </span>
                    </li>
                )}
            </ul>
        </>
    )
}

interface typeAheadActoresProps {
    actores: actorPeliculaDTO[];
    onAdd(actores: actorPeliculaDTO[]): void;
    onRemove(actor: actorPeliculaDTO): void;
    listadoUI(actor: actorPeliculaDTO): ReactElement;
}