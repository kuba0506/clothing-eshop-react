import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { ShopSelectors } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collection-preview/CollectionPreview';
import './CollectionsOverview.scss';

const CollectionsOverview = ({ collections }) => {
    const renderCollections = () => {
        return collections.map(({ id, ...otherCollectionProps }) => {
            return <CollectionPreview key={id} {...otherCollectionProps} />;
        });
    };

    return (
        <div className="collection-overview">
            {renderCollections()}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    collections: ShopSelectors.selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
