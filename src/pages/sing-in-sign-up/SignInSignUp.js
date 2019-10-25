import React from 'react';
import SignIn from '../../components/sign-in/SignIn';
import SingUp from '../../components/sing-up/SingUp';
import './SignInSignUp.scss';

const SignInSignUp = () => {
    return (
        <div className="sign-in-sign-up">
            <SignIn />
            <SingUp />
        </div>
    );
};

export default SignInSignUp;
