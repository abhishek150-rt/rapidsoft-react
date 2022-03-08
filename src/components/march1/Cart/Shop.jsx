import React from "react";
import { useReducer, useEffect } from "react";
import Product from "./Product";
import axios from "axios"
import { useState } from "react";
import {Button} from "../../StyledComp"
const initialState = {
    loading: true,
    error: "",
    products: {},
};
const reducer = (state, action) => {
    switch (action.type) {
        case "success":
            return {
                loading: false,
                error: "",
                products: action.payload,
            };
        case "error":
            return {
                loading: false,
                error: "some error occurs",
                products: {},
            };
        default:
            return state;
    }
};
const Shop = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [url, seTurl] = useState("https://fakestoreapi.com/products/")

    const handleMensProduct = () => {
        seTurl("https://fakestoreapi.com/products/category/men's clothing")
    }

    const handleWomenProduct = () => {
        seTurl("https://fakestoreapi.com/products/category/women's clothing")
    }
    const handleElectronics = () => {
        seTurl("https://fakestoreapi.com/products/category/electronics")
    }
    const handleJewelery = () => {
        seTurl("https://fakestoreapi.com/products/category/jewelery")
    }

    // Main 
    useEffect(() => {
        axios.get(url)
            .then((response) => {
                dispatch({ type: "success", payload: response.data });
                console.log("rendered")
            })
            .catch((error) => {
                dispatch({ type: "error", payload: error });
                console.log("error");
            });
    }, [url]);

    return (
        <div>
            <Button onClick={handleMensProduct}>Men's Product</Button>
            <Button onClick={handleWomenProduct}>Women's Product</Button>
            <Button onClick={handleElectronics}>Electronics</Button>
            <Button onClick={handleJewelery}>Jewellery</Button>
            <Product products={state} />

        </div>
    );
};

export default React.memo(Shop);
