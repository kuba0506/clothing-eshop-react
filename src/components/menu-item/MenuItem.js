import React from 'react';
import { withRouter } from 'react-router-dom';
import './MenuItem.scss';

const MenuItem = ({ history, match, item }) => {
    const { title, imageUrl, size = '', linkUrl } = item;
    
    return (
        <div className={`menu-item ${size}`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    );
};

export default withRouter(MenuItem);
