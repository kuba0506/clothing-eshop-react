import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { CartSelectors } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import StripeButton from '../../components/stripe-button/StripeButton';
import './CheckoutPage.scss';

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
            <div className="test-warning">
                *PLease use the following test credit card for payments*
                <br />
                4242 4242 4242 4242 - Exp: 01/20 - CVC 123
            </div>
            <StripeButton price={total} />
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: CartSelectors.selectCartItems,
    total: CartSelectors.selectTotalPrice
});

export default connect(mapStateToProps)(Checkout);
