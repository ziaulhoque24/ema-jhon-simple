import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from '../ProductDetails/ProductDetails';
import Products from '../Products/Products';

const Product = ({pd , handleAddProduct}) => {
    const key2 = pd.key;
    return (
        <div>
            <Routes>
                <Route path='/' element={<Products pd={pd} handleAddProduct={handleAddProduct}></Products> } />
                <Route path=':key2' element={ <ProductDetails kry2={key2} pd={pd} handleAddProduct={handleAddProduct}></ProductDetails>} />
            </Routes>
        </div>
    );
};

export default Product;