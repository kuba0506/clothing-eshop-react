import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { CartSelectors } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import './Checkout.scss';

const Checkout = ({ cartItems, total }) => {
    const renderItems = () => {
        return cartItems.map(cartItem => {
            return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
        });
    };

    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="checkout-block">
                    <span>Product</span>
                </div>
                <div className="checkout-block">
                    <span>Description</span>
                </div>
                <div className="checkout-block">
                    <span>Quantity</span>
                </div>
                <div className="checkout-block">
                    <span>Price</span>
                </div>
                <div className="checkout-block">
                    <span>Remove</span>
                </div>
            </div>
            {renderItems()}
            <div className="total">
                <span>TOTAL: ${total}</span>
            </div>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: CartSelectors.selectCartItems,
    total: CartSelectors.selectTotalPrice
});

export default connect(mapStateToProps)(Checkout);
