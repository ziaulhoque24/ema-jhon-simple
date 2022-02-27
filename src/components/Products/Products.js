import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Products.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {name, img, seller, stock, price , key} = props.pd;
    return (
        <div className='product'>
            <div className="img">
                <img src={img} alt="" />
            </div>
            <div className="p-name">
                <h1><Link to={`${key}`}>{name}</Link></h1>
                <small>by {seller}</small>
                <br /><br />
                <h3>Price ${price} </h3>
                <small>only {stock} left in stock - order soon</small>
                <br />
                <br />
                <div onClick={()=>props.handleAddProduct(props.pd)}
                className='main-button'> <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</div>
            </div>
            
        </div>
    );
};

export default Product;