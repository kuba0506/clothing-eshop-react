// import { SHOP_DATA } from './shop.data';
import { ShopActionTypes } from './shop.types';

const INITIAL_DATA = {
    collections: null
    // collections: SHOP_DATA
};

const shopReducer = (state = INITIAL_DATA, action) => {
    const { type, payload } = action;

    switch (type) {
        case ShopActionTypes.UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: payload
            };
        default:
            return state;
    }
};

export default shopReducer;
