import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import AppCSS from './App.module.css'
import MostrarTexto from './MostrarTexto';
import ProyectarContenido from './ProyectarContenido';
import ProyectarContenido2 from './ProyectarContenido2';
import EjemploReloj from './EjemploReloj';
import ContenidoDinamico from './ContenidoDinamico';
import FormularioTexto from './FormularioTexto';
import EjemploUseEffect from './EjemploUseEffect';
import ValorContext from './ValorContext';
import Abuelo from './Abuelo';
import ErrorBoundary from './ErrorBoundary';

function App() {

  const [texto, setTexto] = useState('valor por defecto');
  const [checked, setChecked] = useState(true);
  
  const imagenUrl = "https://ensocore.com/media/61/reactjs-logo-sticker%20%281%29.jpg";
  const manejarClick = () => console.log("click!")

  const manejarKeyUp = (textoInput: string) => {
    console.log(textoInput);
    setTexto(textoInput);
  }

  const parteIntermedia = <EjemploReloj/>

  const estilo = {
    backgroundColor: 'red', width: '50px', height: '50px', marginLeft: '1rem'
  }

  const parteInferior = <div style={estilo}></div>

  const calificaciones = [
    { nombre: 'Andres', calificacion: 82},
    { nombre: 'Camila', calificacion: 99},
    { nombre: 'Evelyn GrandeGlande', calificacion: -1},
  ]

  return (
    <div>
      <h1 className='rojo'>Hola Mundo!</h1>

      {/* <ProyectarContenido>
        <>
        <span>hola, proyectando contenido</span>
        
        </>
      </ProyectarContenido> */}

      {/* <ProyectarContenido2 
        parteSuperior={<h3>Este es un mensaje del componente padre</h3>}
        parteIntermedia={parteIntermedia}
        parteInferior={parteInferior}
      /> */}

      {/* <ContenidoDinamico calificacion = {9} /> */}

      {/* {calificaciones.map(cal => <ContenidoDinamico key={cal.nombre} {...cal} />)} */}

      {/* <ValorContext.Provider value={texto}>
        <Abuelo></Abuelo>
      </ValorContext.Provider>

      <div>
        <input type="checkbox" 
        onChange={(e) => setChecked(e.currentTarget.checked)}
        checked={checked} /> Mostrar componente useEffect
      </div>

      {checked ? <EjemploUseEffect></EjemploUseEffect> : null} */}
      
      {/* //errorUI={<h3>Error mostrando la calificación</h3>} */}

      {calificaciones.map(cal => 
        <ErrorBoundary key={cal.nombre} >
          <ContenidoDinamico  {...cal} />
        </ErrorBoundary>
        
      )}

      <button
        onMouseEnter={() => console.log("entrando")}
        onClick={manejarClick}>Clickeame!</button>
      <br></br>

      <button onClick={() => console.log("has clickeado en la version 2 del verano")}>Clickeame Version 2!!!!</button>
      <br></br>

      <FormularioTexto manejarTextoHijoPadre={(e:string) => manejarKeyUp(e)}/>
      <br></br>

      <MostrarTexto texto = {texto} />

      
      <div>
        <input type="checkbox" 
        onChange={(e) => setChecked(e.currentTarget.checked)}
        checked={checked} /> Esto es un checkbox
      </div>
    </div>
  );
}

export default App;
