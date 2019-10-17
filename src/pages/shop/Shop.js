import React, { useState } from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/CollectionPreview';

const Shop = () => {
    const [collections] = useState(SHOP_DATA);

    return (
        <div className="shop-page">
            {collections.map(({ id, ...otherCollectionProps }) => {
                return <CollectionPreview key={id} {...otherCollectionProps} />;
            })}
        </div>
    );
};

export default Shop;
