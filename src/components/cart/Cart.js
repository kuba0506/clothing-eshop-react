import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'; // add access to history object
import { createStructuredSelector } from 'reselect';
import { CartSelectors } from '../../redux/cart/cart.selectors';
import {CartActions} from '../../redux/cart/cart.actions';
import CustomButton from '../cutom-button/CustomButton';
import CartItem from '../cart-item/CartItem';
import './Cart.scss';

const Cart = ({ cartItems, history, dispatch }) => {
    const renderItems = () => {
        return (
            cartItems && (
                <div className="cart-items">
                    {cartItems.length ? (
                        cartItems.map(item => {
                            return <CartItem key={item.id} item={item} />;
                        })
                    ) : (
                        <span className="empty-message">Your cart is empty!</span>
                    )}
                </div>
            )
        );
    };
    return (
        <div className="cart-dropdown">
            {renderItems()}
            <CustomButton onClick={() => {
                history.push('/checkout');
                dispatch(CartActions.toggleCartHidden());;
            }}>GO TO CHECKOUT</CustomButton>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: CartSelectors.selectCartItems
});

export default withRouter(connect(mapStateToProps)(Cart));
