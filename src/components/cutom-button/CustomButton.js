import React from 'react';
import './CustomButton.scss';

const CustomButton = ({ children, otherclass, ...otherProps }) => {
    return (
        <button className={`custom-button ${otherclass ? otherclass : ''}`} {...otherProps}>
            {children}
        </button>
    );
};

export default CustomButton;
