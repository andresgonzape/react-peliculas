import { useEffect, useState } from 'react';
import './App.css';
import ListadoPeliculas from './peliculas/ListadoPeliculas';
import PeliculaIndividual from './peliculas/PeliculaIndividual';
import { landingPageDTO, pelicula } from './peliculas/peliculas.model';
import Button from './utils/Button';
import Menu from './utils/Menu';

function App() {

  const[peliculas, setPeliculas] = useState<landingPageDTO>({});

  useEffect(() => {
    const timerId = setTimeout(()=>{
      setPeliculas({enCartelera: [
        {
          id: 1, titulo: 'Spider-Man: No Way Home', poster: 'https://m.media-amazon.com/images/M/MV5BN2MyZjc3ODAtODhmYy00YzI5LTgyZTQtMWM1NzQ0MGVjMzFhXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg'
        },
        {
          id: 2, titulo: 'Moana', poster: 'https://m.media-amazon.com/images/M/MV5BNTNhYTI0OGQtYmZiZC00NTI4LTgzMDUtYmQwMzJkZmUwNzYzXkEyXkFqcGdeQXVyNjg2NjgzMjM@._V1_.jpg'
        },
        {
          id: 3, titulo: 'Minions: El origen de Gru', poster: 'https://m.media-amazon.com/images/M/MV5BMjYxNDg3ZWItMjY2My00NzkyLTkxN2UtODU2ZWY5NjhlZGM5XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg'
        }
      ],
      proximosEstrenos: [
        {
          id: 4, titulo: 'Retratos del feminismo', poster: 'https://m.media-amazon.com/images/M/MV5BODljMzYzOTQtZGQyYi00ZjhkLTk5NDktY2RlNTdjOTljYjgwXkEyXkFqcGdeQXVyNjcyMzE1MA@@._V1_.jpg'
        },
        {
          id: 5, titulo: 'Hasta que la boda nos separe', poster: 'https://m.media-amazon.com/images/M/MV5BZTAxODZkN2YtMjc2NS00NGZlLThmOWItZmNlM2I5MDYzZmM2XkEyXkFqcGdeQXVyMTM2Mzg4MA@@._V1_.jpg'
        },
        {
          id: 6, titulo: 'Amelie', poster: 'https://m.media-amazon.com/images/M/MV5BMGM2ZmYyMTUtYzkxMC00MTc1LWI0NTUtNTIzZjc2YTM0YTdhXkEyXkFqcGdeQXVyMTMxODYzNjg@._V1_.jpg'
        }
      ]
    })
    }, 500)

    return () => clearTimeout(timerId);

  });

  return (
    <>
      <Menu/>
      <div className='container'>
        <Button>
          Mi Componente Botón
        </Button>
        <h3>En Cartelera</h3>
        <ListadoPeliculas peliculas={peliculas.enCartelera}/>

        <h3>Próximos Estrenos</h3>
        <ListadoPeliculas peliculas={peliculas.proximosEstrenos}/>
      </div>
    </>    
  );
}

export default App;
