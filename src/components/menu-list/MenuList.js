import React, { useState } from 'react';
import MenuItem from '../menu-item/MenuItem';
import './MenuList.scss';
import MENU_DATA from './menu-list.data';

const MenuList = () => {
    const [items] = useState(MENU_DATA);

    return (
        <div className="menu-list">
            {items.map(item => (
                <MenuItem key={item.id} item={item} />
            ))}
        </div>
    );
};

export default MenuList;
