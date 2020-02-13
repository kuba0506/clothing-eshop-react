import { ShopActionTypes } from './shop.types';

const INITIAL_DATA = {
    collections: null,
    isLoading: false,
    errorMessage: ''
};

const shopReducer = (state = INITIAL_DATA, action) => {
    const { type, payload } = action;

    switch (type) {
        case ShopActionTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isLoading: true
            };
        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                collections: payload,
                isLoading: false
            };
        case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isLoading: false,
                errorMessage: payload
            };
        default:
            return state;
    }
};

export default shopReducer;
