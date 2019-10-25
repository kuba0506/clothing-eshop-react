import React, { useState } from 'react';
import FormInput from './../form-input/FormInput';
import CustomButton from './../cutom-button/CustomButton';
import { sigInWithGoogle, auth } from '../../firebase/firebase.utils';
import './SignIn.scss';

const SignIn = () => {
    const defaultState = { email: '', password: '' };
    const [signIn, setSignIn] = useState(defaultState);

    const onSubmit = async e => {
        e.preventDefault();
        const { email, password } = signIn;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            setSignIn(defaultState);
        } catch (error) {
            console.error('error while logging in', error);
        }
    };

    const onChange = e => {
        e.preventDefault();
        const {
            target: { name, value }
        } = e;

        setSignIn(signIn => ({ ...signIn, [name]: value }));
    };

    const renderForm = () => {
        const { email, password } = signIn;

        return (
            <form onSubmit={onSubmit}>
                <FormInput onChange={onChange} label="Email" type="email" name="email" value={email} required />
                <FormInput
                    onChange={onChange}
                    label="Password"
                    type="password"
                    name="password"
                    value={password}
                    required
                />
                <div className="buttons">
                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton otherclass="google-sign-in" onClick={sigInWithGoogle}>
                        Sign in with Google
                    </CustomButton>
                </div>
            </form>
        );
    };

    return (
        <div className="sign-in">
            <div className="title">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
            </div>
            {renderForm()}
        </div>
    );
};

export default SignIn;
