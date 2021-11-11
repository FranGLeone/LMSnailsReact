import './App.css';
import ItemListContainer from './components/ItemListContainer';
import {data} from './data';
import Navbar from './components/NavBar';

const App = () => {
  return (
    <>
    <header>
      <Navbar></Navbar>
    </header>
    <body>
      <ItemListContainer ItemListContainer={data}/>
    </body>
    </>
  );
}

export default App;
