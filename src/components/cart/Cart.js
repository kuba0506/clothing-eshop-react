import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../cutom-button/CustomButton';
import './Cart.scss';

const Cart = ({ cartItems }) => {
    const renderItems = () => {
        return (
            cartItems && (
                <div className="cart-items">
                    {cartItems.map(item => {
                        return <span key="item.id">{item.name}</span>;
                    })}
                </div>
            )
        );
    };
    return (
        <div className="cart-dropdown">
            {renderItems()}
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
});

export default connect(mapStateToProps)(Cart);
