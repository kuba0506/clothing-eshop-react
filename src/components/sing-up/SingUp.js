import React, { useState } from 'react';
import './SingUp.scss';
import FormInput from '../form-input/FormInput';
import CustomButton from '../cutom-button/CustomButton';

import { auth, createUserProfileDocument } from './../../firebase/firebase.utils';

const SingUp = () => {
    const defaultState = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    };
    const [singUpObject, setSingUpObject] = useState(defaultState);

    const onSubmit = async e => {
        e.preventDefault();
        const { displayName, email, password, confirmPassword } = singUpObject;
        console.log({ displayName, email, password, confirmPassword });

        if (password !== confirmPassword) {
            alert('Password do not match');
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            setSingUpObject(singUpObject);
        } catch (error) {
            console.error('Error during singUp', error);
        }
    };

    const onChange = e => {
        // e.persist();
        e.preventDefault();
        const {
            target: { name, value }
        } = e;

        setSingUpObject(singUpObject => ({ ...singUpObject, [name]: value }));
    };

    const renderForm = () => {
        const { displayName, email, password, confirmPassword } = singUpObject;

        return (
            <form className="sing-up-form" onSubmit={onSubmit}>
                <FormInput
                    onChange={onChange}
                    type="text"
                    name="displayName"
                    value={displayName}
                    label="Display Name"
                    required
                />
                <FormInput onChange={onChange} type="email" name="email" value={email} label="Email" required />
                <FormInput
                    onChange={onChange}
                    type="password"
                    name="password"
                    value={password}
                    label="Password"
                    required
                />
                <FormInput
                    onChange={onChange}
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    label="Confirm password"
                    required
                />
                <CustomButton type="submit">SING UP</CustomButton>
            </form>
        );
    };

    return (
        <div className="sign-up">
            <h2 className="title">I do not have an account</h2>
            <span>Sing up with your email and password</span>
            {renderForm()}
        </div>
    );
};

export default SingUp;
