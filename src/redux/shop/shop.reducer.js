import { ShopActionTypes } from './shop.types';

const INITIAL_DATA = {
    collections: null,
    isFetching: false,
    errorMessage: ''
};

const shopReducer = (state = INITIAL_DATA, action) => {
    const { type, payload } = action;

    switch (type) {
        case ShopActionTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true
            };
        case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                collections: payload,
                isFetching: false
            };
        case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: payload
            };
        default:
            return state;
    }
};

export default shopReducer;
