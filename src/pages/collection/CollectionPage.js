import React from 'react';
import { connect } from 'react-redux';
import { ShopSelectors } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/CollectionItem';
import './CollectionPage.scss';

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    const renderItems = () => {
        return items.map(item => <CollectionItem key={item.id} item={item} />);
    };

    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">{renderItems()}</div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: ShopSelectors.selectSpecificCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
