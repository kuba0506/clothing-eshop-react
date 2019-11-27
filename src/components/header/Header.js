import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import Cart from '../cart/Cart';
import CartIcon from '../cart-icon/CartIcon';
import './Header.scss';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

const Header = ({ currentUser, hidden }) => {
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

    const renderCartDropdown = () => {
        return hidden ? '' : <Cart />;
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
                <CartIcon />
            </div>
            {renderCartDropdown()}
        </div>
    );
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden
});

export default connect(mapStateToProps)(Header);
