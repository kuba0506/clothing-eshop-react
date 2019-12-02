import { createSelector } from 'reselect';

// input selector - return slice of state
const selectCart = state => state.cart;

// memoized selector
const selectCartItems = createSelector([selectCart], cart => cart.cartItems);

const selectCartItemsCount = createSelector([selectCartItems], cartItems =>
    cartItems.reduce((prev, curr) => prev + curr.quantity, 0)
);

const selectCartHidden = createSelector([selectCart], cart => cart.hidden);

export const CartSelectors = {
    selectCartItems,
    selectCartItemsCount,
    selectCartHidden
};
