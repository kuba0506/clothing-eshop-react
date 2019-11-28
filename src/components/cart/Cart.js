import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../cutom-button/CustomButton';
import CartItem from '../cart-item/CartItem';
import './Cart.scss';

const Cart = ({ cartItems }) => {
    // console.log(cartItems);
    const renderItems = () => {
        return (
            cartItems && (
                <div className="cart-items">
                    {cartItems.map(item => {
                        return <CartItem key={item.id} item={item} />;
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

const mapStateToProps = state => {
    console.log(state);
    return {
        cartItems: state.cart.cartItems
    };
};

export default connect(mapStateToProps)(Cart);
