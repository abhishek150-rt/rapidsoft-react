import React from 'react'
import { Wave } from "react-animated-text"
import { Text, Row, Col,Button } from '../../StyledComp'
const Product = (props) => {
    console.log(props)
    const { loading, products, error } = props.products;

    return (
        <>
            <div className="container">
                <Text primary>List of products</Text>
                {loading ? <h3><Wave text="Loading" /></h3> : null}
                <Row> {products.length > 0 ? products.map(product => {
                    return (
                        <Col key={product.id}>
                            <div className="img-container">
                                <img src={product.image} alt="" width="50%" />
                            </div>
                            <div className="product-detail">
                                <p>{product.title}</p>
                                <h4>US ${product.price} only</h4>
                                <Button>ADD TO CART</Button>
                            </div>
                        </Col>
                    )
                }) : null}
                    {error ? <Text primary>{error}</Text> : null}
                </Row>

            </div>
        </>

    )
}

export default React.memo(Product);