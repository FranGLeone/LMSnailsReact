import './App.css';
import Contador from './components/ItemListContainer';
import {data} from './components/data';
import Navbar from './components/NavBar';

const App = () => {
  return (
    <>
    <header>
      <Navbar></Navbar>
    </header>
    <body>
    {
      data.map((prop, index) =>
      <Contador
        key={index}
        nombre={prop.nombre}
        precio={prop.precio}
        thumbnail={prop.thumbnail}/>)
    }
    </body>
    </>
  );
}

export default App;
