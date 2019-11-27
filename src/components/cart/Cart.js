import React from 'react';
import CustomButton from '../cutom-button/CustomButton';
import './Cart.scss';

const Cart = () => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items"></div>
            <CustomButton>GO TO CHEECKOUT</CustomButton>
        </div>
    );
};

export default Cart;
