import { click } from "@testing-library/user-event/dist/click";
import { useEffect, useState } from "react";

export default function EjemploUseEffect() {

    const [clicks, setClicks] = useState(0);
    const [fecha, setFecha] = useState(new Date());

    useEffect(() => {
        console.log('useEffect del click')
        document.title = `${clicks} veces`

        
        return () => {
            //Esto se ejecuta al destruir el componente
            console.log('el componente se va a destruir')
        }
    }, [clicks]); //este "[clicks]" quiere decir que este useEffect se ejecuta si y solo si la variable "clicks" cambia. Se puede borrar y se ejecutaria siempre que se vuelve a renderizar el componente
                  //se llama dependencia

    useEffect(() => {
        console.log('useEffect del interval')
        const intervalId = setInterval(() =>{
            setFecha(new Date())
        }, 1000)

        return () => clearInterval(intervalId);
    });

    useEffect( () => {
        console.log("voy a ejecutarme una sola vez")
    }, []) //Dependencia vacia. Sirve para ejecutar este useEffect una sola vez al inicio del componente en su primer renderizado
    
    return (
        <>
            <button onClick={() => setClicks(clicks + 1)}>
                Me has clickeado {clicks} veces
            </button>

            <div>
                {fecha.toString()}
            </div>
        </>
        
    );
}