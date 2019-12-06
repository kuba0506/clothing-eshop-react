import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session'; // = use sessionStorage
// import storage from 'redux-persist/lib/storage'; //  = use localStorage
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import menuListReducer from './menu-list/menu-list.reducer';
import shopReducer from './shop/shop.reducer';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart', 'menuList', 'shop'] // reducers data to persist
    // blacklist: ['shop'] // reducers data to persist
};

const rootReducers = combineReducers({
    user: userReducer,
    cart: cartReducer,
    menuList: menuListReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducers);
