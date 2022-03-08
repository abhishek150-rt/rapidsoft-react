import React, { Component } from 'react'

export default class Store extends Component {
    render() {
        const { products, errorMsg } = this.props.props
        return (
            <div className="container">
                <h2>List Of product</h2>
                <div className="row"> {products.length > 0 ? products.map(product => {
                    return (
                        <div className="col" key={product.id}>
                            <div className="img-container">
                                <img src={product.image} alt="" width="50%" />
                            </div>
                            <div className="product-detail">
                                <p>{product.title}</p>
                                <h4>US ${product.price} only</h4>
                                <button>ADD TO CART</button>
                            </div>
                        </div>
                    )
                }) : null}
                    {errorMsg ? <h1>{errorMsg}</h1> : null}
                </div>

            </div>
        )
    }
}
