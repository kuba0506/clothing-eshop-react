import { CartActionTypes } from './cart.types';

const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});
const addItemToCart = item => ({
    type: CartActionTypes.ADD_CART_ITEM,
    payload: item
});

export const CartActions = {
    toggleCartHidden,
    addItemToCart
};
