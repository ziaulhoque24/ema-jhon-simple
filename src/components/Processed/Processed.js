import React from 'react';
// import { UserContext } from '../../App';

const Processed = () => {
    // const context = useContext(UserContext)
    localStorage.setItem('cart', JSON.stringify([])); 
    return (
        <div>
            <h1>Thank you for purchased</h1>
        </div>
    );
};

export default Processed;