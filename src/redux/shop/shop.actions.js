import { ShopActionTypes } from './shop.types';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export const updateCollections = collectionMap => ({
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionMap
});

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionMap
});

export const fetchCollectionsFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());

        collectionRef
            .get()
            .then(snapShot => {
                const collectionMap = convertCollectionsSnapshotToMap(snapShot);
                dispatch(fetchCollectionsSuccess(collectionMap));
            })
            .catch(error => dispatch(fetchCollectionsFailure(error.message)));
    };
};
