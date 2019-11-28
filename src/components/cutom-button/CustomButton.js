import React from 'react';
import './CustomButton.scss';

const CustomButton = ({ children, otherclass, inverted, ...otherProps }) => {
    return (
        <button className={`custom-button ${otherclass && otherclass} ${inverted && inverted}`} {...otherProps}>
            {children}
        </button>
    );
};

export default CustomButton;
