import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
const Shop = () => {
    const existCart = JSON.parse(localStorage.getItem('cart')) || [];
    let [products, setProducts] = useState([]);
    const [cart , setCart] = useState(existCart);
// handle add product
 const handleAddProduct = (product)=> {
    const sameProduct = cart.find(key => key.key === product.key);
    if(sameProduct){
        const remainingCart = cart.filter(user => user.key !== sameProduct.key);
        const count = sameProduct.quantityCart+ 1;
        sameProduct.quantityCart = count;
        const newCart = [...remainingCart, sameProduct];
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
    }else{
        product.quantityCart = 1;
        const newCart = [...cart , product];
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
     
    }
    
    }

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
        products = products.slice(0, 10);
    return (
        <div className='shopContainer'>
            <div className="productContainer">
                {
                    products.map(product => <Product pd={product} handleAddProduct={handleAddProduct}></Product>)
                }
            </div>
            <div className="cartContainer">
                    <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;
