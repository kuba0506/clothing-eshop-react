import React from 'react';
import { connect } from 'react-redux';
import { CartActions } from '../../redux/cart/cart.actions';
import './CheckoutItem.scss';

const CheckoutItem = ({ cartItem, removeItem, addItem, deductItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;

    return (
        <div className="checkout-item">
            <div className="image-container">
                <img alt="item" src={imageUrl} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => deductItem(cartItem)}>
                    &#10094;
                </div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItem(cartItem)}>
                    &#10095;
                </div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => removeItem(cartItem)}>
                &#10005;
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(CartActions.removeItemFromCart(item)),
    addItem: item => dispatch(CartActions.addItemToCart(item)),
    deductItem: item => dispatch(CartActions.deductItemFromCart(item)),

});

export default connect(null, mapDispatchToProps)(CheckoutItem);
