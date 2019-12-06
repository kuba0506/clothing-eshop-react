import { SHOP_DATA } from './shop.data';

const INITIAL_DATA = {
    collections: SHOP_DATA
};

const shopReducer = (state = INITIAL_DATA, action) => {
    const { type } = action;

    switch (type) {
        default:
            return state;
    }
};

export default shopReducer;
