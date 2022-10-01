import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import IndiceGeneros from './generos/IndiceGeneros';
import LandingPage from './LandingPage';
import Menu from './utils/Menu';
import rutas from './router-config'
//Para quitar los imports que no utilices -> alt + shift + o

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
