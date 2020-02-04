import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import CollectionPage from '../collection/CollectionPage';
import Spinner from '../../components/spinner/Spinner';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

const CollectionsOverviewWithSpinner = Spinner(CollectionsOverview);
const CollectionPageWithSpinner = Spinner(CollectionPage);

const ShopPage = ({ match, updateCollections }) => {
    const [isLoading, setLoading] = useState(true);
    
    useEffect(() => {
        const collectionRef = firestore.collection('collections');

        const unsubscribe = collectionRef.onSnapshot(async snapShot => {
            const collectionMap = convertCollectionsSnapshotToMap(snapShot);
            updateCollections(collectionMap);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <div className="shop-page">
            <Route
                exact
                path={`${match.path}`}
                render={props => <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />}
            />
            <Route
                path={`${match.path}/:collectionId`}
                render={props => <CollectionPageWithSpinner isLoading={isLoading} {...props} />}
            />
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
