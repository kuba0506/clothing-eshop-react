import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './Header.scss';
import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => {
    console.log(currentUser);
    const renderSignInSingOut = () => {
        return currentUser ? (
            <div className="option" onClick={() => auth.signOut()}>
                SIGN OUT
            </div>
        ) : (
            <Link className="option" to="/signin">
                SIGN IN
            </Link>
        );
    };
    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link to="/shop" className="option">
                    SHOP
                </Link>
                <Link to="/shop" className="option">
                    CONTACT
                </Link>
                {renderSignInSingOut()}
            </div>
        </div>
    );
};

export default Header;
