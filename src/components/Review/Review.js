import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import ReviewCart from '../ReviewCart/ReviewCart';


const Review = () => {
    let   cart1 = JSON.parse(localStorage.getItem('cart'));
    const [cart, setCart] = useState(cart1)
 
    return (
        <div className='shopContainer'>
          <div className="productContainer"> {
                cart.map(data=> <ReviewCart cartFunction={setCart} key={data.key} cart={data}> </ReviewCart> ) 
           } </div>
           <div className="cartContainer">
                    <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Review;