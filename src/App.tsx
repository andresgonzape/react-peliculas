import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import rutas from './router-config';
import Menu from './utils/Menu';
//necesito ejecutar las funciones de validacion una sola vez al ejecutar la aplicacion, lo hacemos desde aqui
import configurarValidaciones from './validaciones';

//Para quitar los imports que no utilices -> alt + shift + o

configurarValidaciones();

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <div className='container'>
          {/* <Routes>
            <Route path='/' element={ <LandingPage/> }>

            </Route>
            <Route path='/generos' element={ <IndiceGeneros /> }>

            </Route>
          </Routes> */}
          
          <Routes>
            {rutas.map(ruta =>
              <Route key={ruta.path} path={ruta.path} element={<ruta.componente />}>
              </Route>)}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
