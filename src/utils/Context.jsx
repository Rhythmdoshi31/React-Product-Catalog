import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import instance from './axios';

export const ProductContext = createContext();

function Context(props) {
    const [products, setproducts] = useState([]);

    const getProducts = async () => {
        try {
            const data = await instance.get('/products');
            setproducts(data.data.products);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getProducts();
    }, [])
  return (
    <ProductContext.Provider value={[products, setproducts]}>
        {props.children}
    </ProductContext.Provider >
  )
}

export default Context