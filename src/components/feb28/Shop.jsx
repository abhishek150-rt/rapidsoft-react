import React, { createContext, useState, useEffect } from 'react'
import Products from './Products'
import axios from 'axios'
// Create products context
const ProductContext = React.createContext();
const ErrorContext = React.createContext()

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [errorMsg, setErrormsg] = useState("");



    // Axios Token for cleanup function
    const source = axios.CancelToken.source();
    useEffect(() => {
        getAllProducts();
        return (() => {
            source.cancel();
        })
    }, []);

    const getAllProducts = () => {
        const url = `https://fakestoreapi.com/products/`;
        axios.get(url, {
            cancelToken: source.token
        }).then(response => setProducts(response.data))
            .catch(error => setErrormsg("Unable to fetch the data error" + error));
    }

    const getProducts = (url) => {
        axios.get(url, {
            cancelToken: source.token
        }).then(response => setProducts(response.data))
            .catch(error => setErrormsg("Unable to fetch the data error" + error));
    }

    return (
        <>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" onClick={() => getProducts("https://fakestoreapi.com/products/")}>All Products</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" onClick={() => getProducts("https://fakestoreapi.com/products/category/men's clothing")}>Men's Products</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" onClick={() => getProducts("https://fakestoreapi.com/products/category/women's clothing")}>Women's Products</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" onClick={() => getProducts("https://fakestoreapi.com/products/category/electronics")}>Electronics</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" onClick={() => getProducts("https://fakestoreapi.com/products/category/jewelery")}>Jwellery</a>
                </li>
            </ul>
            <ProductContext.Provider value={products}>
                <ErrorContext.Provider value={errorMsg}>
                    <Products />
                </ErrorContext.Provider>
            </ProductContext.Provider>
        </>
    )
}

export default Shop
export { ProductContext,ErrorContext }