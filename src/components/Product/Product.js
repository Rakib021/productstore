import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {name,seller,price,stock,img,ratings} =props.product;
    const {handleAddToClick}= props;
    
    return (
        <div className="product">
                <img src={img} alt=""/>
                <div className="product-info">
                <h6 className="product-name">{name}</h6>
                <h6>price :${price}</h6>
                <p><small>seller :{seller}</small></p>
                <p><small>Ratings : {ratings}stars</small></p>
            </div>

            <button onClick={()=>handleAddToClick(props.product)} className="btn-cart">
             <p className="btn-text">Add to Cart</p><FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;