import React from 'react';
import './CustomButton.scss';

import { CustomButtonContainer } from './CustomButton.styles';

const CustomButton = props => {
    return <CustomButtonContainer {...props}>{props.children}</CustomButtonContainer>;
};
// old without styled components
// const CustomButton = ({ children, googleClass, inverted, ...otherProps }) => {
//     return (
//         <button
//             className={`custom-button ${googleClass && 'google-sign-in'} ${inverted && 'inverted'}`}
//             {...otherProps}
//         >
//             {children}
//         </button>
//     );
// };

export default CustomButton;
