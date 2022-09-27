export default function ContenidoDinamico(props: any) {
    // Ejemplo 1: Operador ternario
    // return (
        
    //     <div>
    //         {props.mostrarMensajeSecreto ? <span>Mensaje secreto: 42</span> : null}
    //     </div>
            
        
    // )


    //Ejemplo 2: If

    if (props.calificacion > 90 ){
        return(
            <div>
                <h3>{props.nombre}: Excelente calificación!</h3>
            </div>
        )
    } else if(props.calificacion >= 80 && props.calificacion <= 90){
        return(
            <div>
                <h3>{props.nombre}: Muy bien hecho chukodiman</h3>
            </div>
        )
    } else if (props.calificacion >= 0 && props.calificacion <= 80){
        return(
            <div>
                <h3>{props.nombre}: Estas un poco josemi</h3>
            </div>
        )
    } else {
        throw `ha habido un error con la calificacion de ${props.nombre}`;
    }
}

// interface contenidoDinamico{

// }