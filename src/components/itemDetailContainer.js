import ItemDetail from './ItemDetail';
import customFetch from '../utilities/customFetch';
import {useEffect, useState} from 'react';

const {data} = require('../utilities/data')

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});

    useEffect(() => {
        customFetch(2000, data[0])
            .then(res => setDato(res))
            .catch(err => console.log(err))
    }, []);
    
    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;