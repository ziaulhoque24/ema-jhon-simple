import React, { } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';
const Cart = (props) => {
    const location = window.location.pathname === "/review" && true;
    const totalPrice = props.cart.reduce((previousValue, currentValue) => previousValue + (currentValue.price *currentValue.quantityCart ), 0);
    const totalShippingPrice = props.cart.reduce((previousValue, currentValue) => previousValue +( currentValue.shipping *currentValue.quantityCart ), 0);
    const numFormation = (num)=> Number(Number(num).toFixed(2));



    return (
        <div>
            <h3>Added Products: {props.cart.reduce((previousValue, currentValue) => previousValue + currentValue.quantityCart, 0)}</h3>
            <h4>Total Price: {numFormation(totalPrice)}</h4>
            <h4>Total Shipping Cost: {numFormation(totalShippingPrice)}</h4>
            <h3>Payable Amount: {numFormation(totalPrice +totalShippingPrice) }</h3>
            {
            props.cart.length !== 0 ?
                location ?<Link to="/proceed" className="processButton">Processed order</Link>  : 
                 <Link to="/review" className="processButton">Check Out order</Link> :
                    <Link to="/shop" className='processButton'>Add Products</Link>
                 
            }
        </div>
    );
};

export default Cart;