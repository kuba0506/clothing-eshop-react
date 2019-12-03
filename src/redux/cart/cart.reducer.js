import { CartActionTypes } from './cart.types';
import { addItemToCart, removeItemFromCart, deductItemFromCart } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case CartActionTypes.ADD_CART_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, payload)
            };
        case CartActionTypes.DEDUCT_CART_ITEM:
            return {
                ...state,
                cartItems: deductItemFromCart(state.cartItems, payload)
            };
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, payload)
            };
        default:
            return state;
    }
};

export default cartReducer;
