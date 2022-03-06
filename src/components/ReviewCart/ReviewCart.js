import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const ReviewCart = (props) => {
    const {name, img, seller, stock, price , key, quantityCart} = props.cart;
    // Remove product function from cart
    const handleRemoveFromCart = (data)=> {
            const cart = JSON.parse(localStorage.getItem('cart'));
            const sameProduct = cart.find(kk => {
            return    kk.key === data});
    if(sameProduct){
        const quantityCart = sameProduct.quantityCart;
        if(quantityCart > 1){
        const remainingCart = cart.filter(user => user.key !== sameProduct.key);
        const count = sameProduct.quantityCart - 1;
        sameProduct.quantityCart = count;
        const newCart = [sameProduct, ...remainingCart];
        localStorage.setItem('cart', JSON.stringify(newCart));
        props.cartFunction(newCart)
    }else{
        const remainingCart = cart.filter(user => user.key !== sameProduct.key);
        localStorage.setItem('cart', JSON.stringify(remainingCart));
        props.cartFunction(remainingCart);
    }

    }
    
    }
    return (
        <div className='product'>
            <div className="img">
                <img src={img} alt="" />
            </div>
            <div className="p-name">
               <h4>{name}</h4>
               <div>{key}</div>
                <small>by {seller}</small>
                <div>{quantityCart}</div>
                <br /><br />
                <h3>Price ${price} </h3>
                <small>only {stock} left in stock - order soon</small>
                <br />
                <br />
                <div onClick={()=> handleRemoveFromCart(key)}
                className='main-button'> <FontAwesomeIcon icon={faShoppingCart} /> Remove</div>
            </div>
            
        </div>
    );
};

export default ReviewCart;