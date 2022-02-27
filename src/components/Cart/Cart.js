import React, { } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';
const Cart = (props) => {
    
    const totalPrice = props.cart.reduce((previousValue, currentValue) => previousValue + (currentValue.price *currentValue.quantityCart ), 0);
    const totalShippingPrice = props.cart.reduce((previousValue, currentValue) => previousValue +( currentValue.shipping *currentValue.quantityCart ), 0);
    const numFormation = (num)=> Number(Number(num).toFixed(2));
    return (
        <div>
            <h3>Added Products: {props.cart.reduce((previousValue, currentValue) => previousValue + currentValue.quantityCart, 0)}</h3>
            <h4>Total Price: {numFormation(totalPrice)}</h4>
            <h4>Total Shipping Cost: {numFormation(totalShippingPrice)}</h4>
            <h3>Payable Amount: {numFormation(totalPrice +totalShippingPrice) }</h3>
            <Link to="/review" className="processButton">Check Out order</Link>
        </div>
    );
};

export default Cart;