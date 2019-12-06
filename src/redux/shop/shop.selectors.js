import { createSelector } from 'reselect';

const selectShop = state => state.shop;

const selectShopCollections = createSelector([selectShop], shop => shop.collections);

const selectSpecificCollection = collectionUrlParam =>
    createSelector([selectShopCollections], collections => collections[collectionUrlParam]);

const selectCollectionsForPreview = createSelector([selectShopCollections], collections =>
    Object.keys(collections).map(key => collections[key])
);

export const ShopSelectors = { selectShopCollections, selectSpecificCollection, selectCollectionsForPreview };
