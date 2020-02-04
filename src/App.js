import React, { Fragment, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import './App.css';
import Home from './pages/home/HomePage';
import ShopPage from './pages/shop/ShopPage';
import SignInSignUp from './pages/sing-in-sign-up/SignInSignUpPage';
import Checkout from './pages/checkout/CheckoutPage';
import Header from './components/header/Header';
import { auth, createUserProfileDocument, addCollectionAndDocuments } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { UserActions } from './redux/user/user.actions';
import { UserSelectors } from './redux/user/user.selectors';
import { ShopSelectors } from './redux/shop/shop.selectors';

const App = ({ setCurrentUser, currentUser, collectionArray }) => {
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async userAuth => {
            if (!userAuth) {
                setCurrentUser(null);
                return;
            }

            // store in firestore
            const userRef = await createUserProfileDocument(userAuth);

            // store in redux
            userRef.onSnapshot(snapShot => {
                setCurrentUser({
                    id: snapShot.id,
                    ...snapShot.data()
                });
            });

            setCurrentUser(userAuth);
            // addCollectionAndDocuments(
            //     'collections',
            //     collectionArray.map(({ title, items }) => ({ title, items }))
            // );
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const isUserLogged = () => {
        return currentUser ? <Redirect to="/" /> : <SignInSignUp />;
    };

    return (
        <Fragment>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/shop" component={ShopPage} />
                <Route exact path="/signin" render={isUserLogged} />
                <Route exact path="/checkout" component={Checkout} />
                <Route render={() => <h1>404 Not found!</h1>} />
            </Switch>
        </Fragment>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: UserSelectors.selectCurrentUser,
    collectionArray: ShopSelectors.selectCollectionsForPreview
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(UserActions.setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
