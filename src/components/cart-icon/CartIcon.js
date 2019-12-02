import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { CartActions } from '../../redux/cart/cart.actions';
import { CartSelectors } from '../../redux/cart/cart.selectors';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './CartIcon.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{itemCount}</span>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(CartActions.toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount: CartSelectors.selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
