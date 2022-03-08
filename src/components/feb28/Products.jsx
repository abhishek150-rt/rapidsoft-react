import React, { useContext } from 'react'
import { ProductContext, ErrorContext } from './Shop'

const Products = () => {
    const products = React.useContext(ProductContext);
    const message = React.useContext(ErrorContext);
   
    return (
        <>
            <div className="container">
                <h2>List Of product</h2>
                <div className="row"> {products.length > 0 ? products.map(product => {
                    return (
                        <div className="col w3-animate-zoom" key={product.id}>
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
                    {message ? <h5 className='text-danger mx-3'>{message}</h5> : null}
                </div>

            </div>
        </>
    )
}

export default Products