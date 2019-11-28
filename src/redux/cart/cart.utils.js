export const addItemToCart = (cartItems, cartItem) => {
    let indexAt;
    const existingItem = cartItems.find((item, i) => {
        indexAt = i;
        return item.id === cartItem.id;
    });

    if (!existingItem) {
        return [...cartItems, { ...cartItem, quantity: 1 }];
    }

    cartItems[indexAt].quantity = cartItems[indexAt].quantity + 1;

    return [...cartItems];
};
