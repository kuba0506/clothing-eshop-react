import React from 'react';
import { connect } from 'react-redux';
import { CartActions } from '../../redux/cart/cart.actions';
import CustomButton from '../cutom-button/CustomButton';
import './CollectionItem.scss';

const CollectionItem = ({ item, addItemToCart }) => {
    const { imageUrl, name, price } = item;

    return (
        <div className="collection-item">
            <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton inverted onClick={() => addItemToCart(item)}>
                Add to cart
            </CustomButton>
        </div>
    );
};

const mapDispatchToPorps = dispatch => ({
    addItemToCart: item => dispatch(CartActions.addItemToCart(item))
});

export default connect(null, mapDispatchToPorps)(CollectionItem);
