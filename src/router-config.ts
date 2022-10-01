import CrearActores from "./actores/CrearActores";
import EditarActores from "./actores/EditarActores";
import IndiceActores from "./actores/IndiceActores";
import CrearCines from "./cines/CrearCines";
import EditarCines from "./cines/EditarCines";
import IndiceCines from "./cines/IndiceCines";
import CrearGenero from "./generos/CrearGenero";
import EditarGenero from "./generos/EditarGenero";
import IndiceGeneros from "./generos/IndiceGeneros";
import LandingPage from "./LandingPage";
import CrearPeliculas from "./peliculas/CrearPeliculas";
import EditarPeliculas from "./peliculas/EditarPeliculas";
import FiltroPeliculas from "./peliculas/FiltroPeliculas";
import RedireccionarALanding from "./utils/RedireccionarALanding";

    //Estas rutas se recorren como un if, primero las que mas arriba se coloquen y así. Por eso la de los errores 404 se pone la ultima
    const rutas = [
    //generos
    { path: '/generos/crear', componente: CrearGenero },
    { path: '/generos/editar/:id', componente: EditarGenero },

    { path: '/generos', componente: IndiceGeneros },

    //actores
    { path: '/actores/crear', componente: CrearActores },
    { path: '/actores/editar/:id', componente: EditarActores },

    { path: '/actores', componente: IndiceActores },

    //cines
    { path: '/cines/crear', componente: CrearCines },
    { path: '/cines/editar/:id', componente: EditarCines },

    { path: '/cines', componente: IndiceCines },

    //peliculas
    { path: '/peliculas/crear', componente: CrearPeliculas },
    { path: '/peliculas/editar/:id', componente: EditarPeliculas },
    { path: '/peliculas/filtrar', componente: FiltroPeliculas },

    //pagina principal
    { path: '/' , componente: LandingPage, exact: true},

    //para errores 404
    { path: '*', componente: RedireccionarALanding }
]

export default rutas;