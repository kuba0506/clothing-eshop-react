import React from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './Header.styles';
import Cart from '../cart/Cart';
import CartIcon from '../cart-icon/CartIcon';
import './Header.scss';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { CartSelectors } from '../../redux/cart/cart.selectors';
import { UserSelectors } from '../../redux/user/user.selectors';

const Header = ({ currentUser, hidden }) => {
    const renderSignInSingOut = () => {
        return currentUser ? (
            <OptionLink as="div" onClick={() => auth.signOut()}>
                SIGN OUT
            </OptionLink>
        ) : (
            <OptionLink to="/signin">SIGN IN</OptionLink>
        );
    };

    const renderCartDropdown = () => {
        return hidden ? '' : <Cart />;
    };

    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo className="logo" />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop">
                    SHOP
                </OptionLink>
                <OptionLink to="/shop">
                    CONTACT
                </OptionLink>
                {renderSignInSingOut()}
                <CartIcon />
            </OptionsContainer>
            {renderCartDropdown()}
        </HeaderContainer>
    );
};

// createStructuredSelector - pass 'state' automatically
const mapStateToProps = createStructuredSelector({
    currentUser: UserSelectors.selectCurrentUser,
    hidden: CartSelectors.selectCartHidden
});

export default connect(mapStateToProps)(Header);
