import { CartActionTypes } from './cart.types';

const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});
const addItemToCart = item => ({
    type: CartActionTypes.ADD_CART_ITEM,
    payload: item
});

const deductItemFromCart = item => ({
    type: CartActionTypes.DEDUCT_CART_ITEM,
    payload: item
});

const removeItemFromCart = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
});


export const CartActions = {
    toggleCartHidden,
    addItemToCart,
    removeItemFromCart,
    deductItemFromCart
};
