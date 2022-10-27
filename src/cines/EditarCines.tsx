import FormularioCines from "./FormularioCines";

export default function EditarCines(){
    return (
        <>
            <h3>Editar Cine</h3>
            <FormularioCines 
                modelo={{nombre: 'Madrid', latitud: 40.345002, longitud: -3.829979}}
                onSumbit={valores => console.log(valores)}
            />
        </>
    )
}