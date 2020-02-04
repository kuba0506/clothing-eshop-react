import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { ShopSelectors } from '../../redux/shop/shop.selectors';
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview';
import CollectionPage from '../collection/CollectionPage';
import Spinner from '../../components/spinner/Spinner';

const CollectionsOverviewWithSpinner = Spinner(CollectionsOverview);
const CollectionPageWithSpinner = Spinner(CollectionPage);

const ShopPage = ({ match, isLoading, fetchCollectionsStartAsync }) => {
    useEffect(() => {
        fetchCollectionsStartAsync();
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

const mapStateToProps = createStructuredSelector({
    isLoading: ShopSelectors.selectIsCollectionFetching
});

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
