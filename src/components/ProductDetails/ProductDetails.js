import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = ({pd , handleAddProduct}) => {
    let { key2 } = useParams() 
    let pppp = {};
    if(pd.key === key2){
        pppp = pd

        const {name, img, seller, stock, price  } = pppp;
        return (
            <div className='productDetails'>
            <h1>{name}</h1>
            <h4>{stock}</h4>
            <img src={img} alt={name} />
            <h4>{seller}</h4>
            <h3>{price}</h3>
            <button onClick={()=>handleAddProduct(pppp) }>Add to cart</button>
            </div>
        );
        
    } else{
        return "";
    }
   
};

export default ProductDetails;