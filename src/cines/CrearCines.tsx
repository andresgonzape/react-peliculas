import FormularioCines from "./FormularioCines";

export default function CrearCines(){
    return (
        <>
            <h3>Crear Cine</h3>
            <FormularioCines 
                modelo={{nombre: ''}}
                onSumbit={valores => console.log(valores)}
            />
        </>
    )
}