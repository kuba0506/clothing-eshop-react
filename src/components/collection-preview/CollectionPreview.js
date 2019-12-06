import React from 'react';
import { withRouter } from 'react-router-dom';
import './CollectionPreview.scss';
import CollectionItem from '../collection-item/CollectionItem';

const CollectionPreview = ({ title, items, history, match }) => {
    return (
        <div className="collection-preview">
            <h1 className="title" onClick={() => history.push(`${match.path}/${title.toLowerCase()}`)}>
                {title.toUpperCase()}
            </h1>
            <div className="preview">
                {items.slice(0, 4).map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default withRouter(CollectionPreview);
