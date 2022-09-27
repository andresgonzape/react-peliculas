import AppCSS from './App.module.css'

export default function EjemploCSS() {

    const subtitulo = "Este es un subtitulo";

    const duplicar = (valor: number) => valor * 2; //porque el archivo es tsx y hay que indicar el tipo de la variable cuando no la defines

    const cuadradoAzul = {
        backgroundColor: 'green',
        width: '50px',
        height: '50px',
        marginLeft: '1rem'
    }

    return (
        <>
            <div className='cuadradoRojo'></div>
            <div style={cuadradoAzul}></div>
            <div style={{ backgroundColor: 'blue', width: '50px', height: '50px', marginLeft: '1rem' }}></div>
            <h3 style={{ color: 'blue' }}>{subtitulo.toUpperCase()}</h3>
            <h4 className='color'> Index.css: El doble de 3 es {duplicar(3)}</h4>
            <h4 className={AppCSS.color}> App.module.css: El doble de 3 es {duplicar(3)}</h4>
        </>
    );
}