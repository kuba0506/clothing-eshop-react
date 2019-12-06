import React from 'react';
import SignIn from '../../components/sign-in/SignIn';
import SingUp from '../../components/sing-up/SingUp';
import './SignInSignUpPage.scss';

const SignInSignUp = props => {
    return (
        <div className="sign-in-sign-up">
            <SignIn {...props} />
            <SingUp {...props} />
        </div>
    );
};

export default SignInSignUp;
