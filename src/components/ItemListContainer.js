import ItemList from './ItemList';
import customFetch from '../utilities/customFetch';
import {Wrapper, DivProductos} from './styledComponents';
import {useEffect, useState} from 'react';

const {data} = require('../utilities/data')

const ItemListContainer = ({greeting}) =>{
  const [datos, setDatos] = useState([]);
  useEffect(()=>{
    customFetch(2000, data )
        .then(res => setDatos(res))
        .catch(err => console.log(err))

  },[]);

  
  return(
    <>
     <DivProductos>
      <ItemList items={datos}/>
    </DivProductos>
    
    </>
  );
}
export default ItemListContainer;

