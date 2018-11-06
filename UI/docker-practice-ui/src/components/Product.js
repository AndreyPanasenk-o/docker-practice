import React, { Component } from 'react';
import './../css/Product.css';

class Product extends Component {
    render() {
        let product = this.props.product;
        return (
            <div className="link card" onClick={()=>this.props.onProductSelectCallback(product)} style={{ cursor: 'pointer' }}>
                <div className="image">
                    <img className="img" src={product.img} />
                </div>
                <div className="content">
                    <div className="header">{product.name}</div>
                    <div className="meta">{product.description}</div>
                    <div className="description">Price: ${product.price}</div>
                </div>
            </div>
        )
    }
}

export default Product;