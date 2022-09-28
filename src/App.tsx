import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import IndiceGeneros from './generos/IndiceGeneros';
import LandingPage from './LandingPage';
import Menu from './utils/Menu';
//Para quitar los imports que no utilices -> alt + shift + o

function App() {
  return (
    <>
      {/*Esta aplicacion es un ejemplo del router de react-router-dom de la v6, ya que en el curso está en v5 porque usan react 17 y no 18*/}
      <BrowserRouter>
        <Menu />
        <div className='container'>
          {/* <Switch>
          <Route>
            
          </Route>
        </Switch> */}
          <Routes>
            <Route path='/' element={ <LandingPage/> }>

            </Route>
            <Route path='/generos' element={ <IndiceGeneros /> }>

            </Route>
          </Routes>


          {/* <Button>
          Mi Componente Botón
        </Button> */}

        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
