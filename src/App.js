import './App.css';
import ItemDetailContainer from './components/itemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/NavBar';

const App = () => {
  return (
    <>
    <header>
      <Navbar></Navbar>
    </header>
    <body>
      <ItemDetailContainer />
    </body>
    </>
  );
}

export default App;
