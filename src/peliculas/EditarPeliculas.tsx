import FormularioPeliculas from "./FormularioPeliculas";

export default function EditarPeliculas() {
    return (
        <>
            <h3>Editar Película</h3>
            <FormularioPeliculas
                modelo={{titulo: 'SPIDER- chukodi -MAN', enCines: true, trailer: 'url', fechaLanzamiento: new Date('2022-02-22T00:00:00') }}
                onSubmit={valores=>console.log(valores)}
            />
        </>
    )
}