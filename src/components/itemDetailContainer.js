import ItemDetail from './ItemDetail';
import customFetch from '../utilities/customFetch';
import {useEffect, useState} from 'react';
import { useParams } from 'react-router';

const {data} = require('../utilities/data')

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const {idItem} = useParams();

    useEffect(() => {
        customFetch(2000, data.find(item => item.id === parseInt(idItem)))
            .then(res => setDato(res))
            .catch(err => console.log(err))
    }, []);
    
    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;