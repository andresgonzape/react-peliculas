import { NavLink } from "react-router-dom";

export default function Menu(){
    const claseActiva = "active";
    return (
        //Navlink de la version de react-router-dom v6, ya que en el curso está en v5 porque usan react 17 y no 18 asi que toca actualizarlo. 
        //Parece ser que el atributo "activeClassName" de la version 5 ya no es necesario porque te lo hace automatico. Era para indicar la clase activa del menu de navegacion.
        //Esta version, con usar el componente Navlink de react-router-dom ya te lo hace automatico eso de la clase activa. Asi que dpm
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to={"/"}>React Películas</NavLink>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/generos"} >Géneros</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}