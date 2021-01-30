import { takeEvery, call, put, takeLatest } from 'redux-saga/effects';
import { ShopActionTypes } from './shop.types';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export function* fetchCollectionsAsync() {
    yield console.log('fetchCollectionsAsync fired');
    
    try {
        const collectionRef = firestore.collection('collections');
        const snapShot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapShot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message));
    }

    // thunk way
    // const collectionRef = firestore.collection('collections');
    // collectionRef
    //     .get()
    //     .then(snapShot => {
    //         const collectionMap = convertCollectionsSnapshotToMap(snapShot);
    //         dispatch(fetchCollectionsSuccess(collectionMap));
    //     })
    //     .catch(error => dispatch(fetchCollectionsFailure(error.message)));
}

export function* fetchCollectionsStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}
