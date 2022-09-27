export default function FormularioTexto(props: formularioTextoProps){
    return  (
        <input type="text" 
        onKeyUp={(e) => props.manejarTextoHijoPadre(e.currentTarget.value)} />
        
    )
}

interface formularioTextoProps {
    manejarTextoHijoPadre(texto: string): void
}