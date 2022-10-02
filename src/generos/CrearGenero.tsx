import FormularioGeneros from "./FormularioGeneros";

export default function CrearGenero() {

    //en el curso, se utiliza useHistory que es un poco diferente, pero muy similar, por ser la v5 en vez de la v6 el react router dom
    //const history = useNavigate();

    return (
        <>
            <h3>Crear Género</h3>
            <FormularioGeneros modelo={{ nombre: '' }}
                onSubmit={async (valores) => {
                    await new Promise(r => setTimeout(r, 3000))
                    console.log(valores);
                }}
            />
        </>
    )
} 