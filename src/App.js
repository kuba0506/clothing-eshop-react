import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import './App.css';
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import SignInSignUp from './pages/sing-in-sign-up/SignInSignUp';
import Checkout from './pages/checkout/Checkout';
import Header from './components/header/Header';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { UserActions } from './redux/user/user.actions';
import { UserSelectors } from './redux/user/user.selectors';

const App = ({ setCurrentUser, currentUser }) => {
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
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/shop" component={Shop} />
                    <Route exact path="/signin" render={isUserLogged} />
                    <Route exact path="/checkout" component={Checkout} />
                </Switch>
            </Router>
        </Fragment>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: UserSelectors.selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(UserActions.setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
