import React, { useState } from 'react';
import FormInput from './../form-input/FormInput';
import CustomButton from './../cutom-button/CustomButton';
import { sigInWithGoogle, auth } from '../../firebase/firebase.utils';
import './SignIn.scss';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async e => {
        e.preventDefault();
        try {
            await auth.signInWithEmailAndPassword(email, password);
            setPassword('');
            setEmail('');
        } catch (error) {
            console.error('error while logging in', error);
        }
    };

    return (
        <div className="sign-in">
            <div className="title">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
            </div>

            <form onSubmit={onSubmit}>
                <FormInput onChange={e => setEmail(e.target.value)} label="Email" type="email" value={email} />
                <FormInput
                    onChange={e => setPassword(e.target.value)}
                    label="Password"
                    type="password"
                    value={password}
                />
                <div className="buttons">
                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton otherclass="google-sign-in" onClick={sigInWithGoogle}>
                        Sign in with Google
                    </CustomButton>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
