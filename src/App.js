import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import SignInSignUp from './pages/sing-in-sign-up/SignInSignUp';
import Header from './components/header/Header';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/actions';

const App = ({ setCurrentUser }) => {
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

    return (
        <Fragment>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/shop" component={Shop} />
                    <Route exact path="/signin" component={SignInSignUp} />
                </Switch>
            </Router>
        </Fragment>
    );
};

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
