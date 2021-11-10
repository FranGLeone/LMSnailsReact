import './App.css';
import Esmaltes from './components/tienda';
import {data} from './components/data';
import Navbar from './components/navbar';

const App = () => {
  return (
    <>
    <header>
      <Navbar></Navbar>
    </header>
    {
      data.map((video, index) =>
      <Esmaltes
        key={index}
        nombre={video.nombre}
        precio={video.precio}
        thumbnail={video.thumbnail}/>)
    }
    </>
  );
}

export default App;
