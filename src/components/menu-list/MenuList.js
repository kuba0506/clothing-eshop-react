import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { MenuListSelectors } from '../../redux/menu-list/menu-list.selectors';
import MenuItem from '../menu-item/MenuItem';
import './MenuList.scss';

const MenuList = ({ items }) => {
    return (
        <div className="menu-list">
            {items.map(item => {
                return <MenuItem key={item.id} item={item} />;
            })}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    items: MenuListSelectors.selectMenuListItems
});

export default connect(mapStateToProps)(MenuList);
