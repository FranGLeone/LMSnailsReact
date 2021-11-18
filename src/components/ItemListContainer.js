import ItemList from './ItemList';
import customFetch from '../utilities/customFetch';
import {useEffect, useState} from 'react';

const {data} = require('../utilities/data')

const ItemListContainer = ({}) =>{
  const [datos, setDatos] = useState([]);
  useEffect(()=>{
    customFetch(2000, data )
        .then(res => setDatos(res))
        .catch(err => console.log(err))

  },[]);

  const onAdd = (cant) => {
    alert("Seleccionaste" + cant + "items.");
  }
  return(
    <>
      <ItemList items={datos}/>
    
    </>
  );
}
export default ItemListContainer;

