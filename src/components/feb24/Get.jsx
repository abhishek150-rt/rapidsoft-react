import React, { Component } from 'react'
import axios from "axios"
import Navigate from './Navigate'
import Store from './Store'
export default class Get extends Component {
    constructor(props) {
        super(props)
        // initializing state values for output and error
        this.state = {
            products: [],
            errorMsg: ""
        }
    }

    // Usign mouting lifecycle method to automatically update the state
    async componentDidMount() {
        let isMounted = true;
        const header = {
            "access-control-allow-origin": "*",
            "Content-type": "application/json; charset=UTF-8"
        }
        if (isMounted) {
            try {
                let response = await axios.get("https://fakestoreapi.com/products/", { header });
                if (response) {

                    this.setState({
                        products: response.data
                    })
                }
            }
            catch (err) {
                this.setState({
                    errorMsg: "Unable to fetch the data right now!!!!! Please retry later."
                })
                console.log(err)
            }
            return () => {
                isMounted = false;
            };
        }

    }

    // using event listeners to update the state.
    getProducts = async (url) => {
        let isMounted = true;
        const header = {
            "access-control-allow-origin": "*",
            "Content-type": "application/json; charset=UTF-8"
        }
        if (isMounted) {
            try {
                let response = await axios.get(`${url}`, { header });
                if (response) {
                    this.setState({
                        products: response.data
                    })
                }
            }
            catch (err) {
                this.setState({
                    errorMsg: "Unable to fetch the data right now!!!!! Please retry later."
                })
                console.log(err)
            }
            return () => {
                isMounted = false;
            };
        }


    }
    render() {
        return (
            <>
                <div className="button-group">
                    <>{this.props.children}</>
                    <Navigate innertext="All Products" func={() => this.getProducts("https://fakestoreapi.com/products")} />
                    <Navigate innertext="Men's Clothing" func={() => this.getProducts("https://fakestoreapi.com/products/category/men's clothing")} />
                    <Navigate innertext="Women's Clothing" func={() => this.getProducts("https://fakestoreapi.com/products/category/women's clothing")} />
                    <Navigate innertext="Electronics" func={() => this.getProducts("https://fakestoreapi.com/products/category/electronics")} />
                    <Navigate innertext="Jwellery" func={() => this.getProducts("https://fakestoreapi.com/products/category/jewelery")} />
                </div>
                <Store props={this.state} />
            </>
        )
    }
}
