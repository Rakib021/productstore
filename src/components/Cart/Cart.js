import React from 'react';

const Cart = (props) => {
    return (
        <div>
            <h4>Order Summary</h4>
               <p>selected items : {props.cart.length}</p>
        </div>
    );
};

export default Cart;