import ItemList from './ItemList';
import customFetch from '../utilities/customFetch';
import {DivProductos} from './styledComponents';
import {useEffect, useState} from 'react';
import {useParams} from "react-router";

const {data} = require('../utilities/data')

const ItemListContainer = ({}) =>{
  const [datos, setDatos] = useState([]);
  const {CategoriaId} = useParams();


  useEffect(()=>{
    customFetch(2000, data.filter(item =>{
      if (CategoriaId === undefined) return item;
      return item.CategoriaId === parseInt(CategoriaId)
    }) )
        .then(res => setDatos(res))
        .catch(err => console.log(err))

  },[datos]);

  
  return(
    <>
     <DivProductos>
      <ItemList items={datos}/>
    </DivProductos>
    
    </>
  );
}
export default ItemListContainer;

