import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './Spinner.styles';

const Spinner = WrappedComponet => ({ isLoading, ...otherProps }) => {
    return isLoading ? renderSpinner() : <WrappedComponet {...otherProps} />;
};

const renderSpinner = () => {
    return (
        <SpinnerOverlay>
            <SpinnerContainer></SpinnerContainer>
        </SpinnerOverlay>
    );
};

export default Spinner;
