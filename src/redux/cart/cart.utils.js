export const addItemToCart = (cartItems, itemToAdded) => {
    const existingItem = cartItems.find(item => {
        return item.id === itemToAdded.id;
    });

    if (!existingItem) {
        return [...cartItems, { ...itemToAdded, quantity: 1 }];
    }

    return cartItems.map(item => (item.id === itemToAdded.id ? { ...item, quantity: item.quantity + 1 } : item));
};

export const removeItemFromCart = (cartItems, itemToClear) => {
    return cartItems.filter(item => item.id !== itemToClear.id);
};

export const deductItemFromCart = (cartItems, itemToRemove) => {
    const existingCartItem = cartItems.find(item => item.id === itemToRemove.id);

    if (existingCartItem.quantity === 1) {
        return removeItemFromCart(cartItems, existingCartItem);
    }

    return cartItems.map(cartItem =>
        cartItem.id === itemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
    );
};
