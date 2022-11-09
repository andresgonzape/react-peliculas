import { Typeahead } from "react-bootstrap-typeahead";
import { actorPeliculaDTO } from "./actores.model";

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
    
    return (
        <>
            <label>Actores:</label>
            <Typeahead
                id="typeahead"
                onChange={ actor => {
                    console.log(actor)
                }}
                options={ actores }
                labelKey={ actor => actor.nombre }
                filterBy={ ['nombre'] }
                placeholder="Escriba el nombre del actor..."
                minLength={1}
            />
        </>
    )
}

interface typeAheadActoresProps {
    actores: actorPeliculaDTO[];
}