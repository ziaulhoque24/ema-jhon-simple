import React, { useState } from 'react';
import ReviewCart from '../ReviewCart/ReviewCart';


const Review = () => {
    let   cart = JSON.parse(localStorage.getItem('cart'));
    const [cart1, setCart1] = useState(cart)
 
    return (
        <div>
           {
                cart1.map(data=> <ReviewCart cartFunction={setCart1} cart={data}> </ReviewCart> ) 
           }
        </div>
    );
};

export default Review;