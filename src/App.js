import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import SignInSignUp from './pages/sing-in-sign-up/SignInSignUp';
import Header from './components/header/Header';
import { auth } from './firebase/firebase.utils';

const App = () => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <Fragment>
            <Router>
                <Header currentUser={currentUser} />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/shop" component={Shop} />
                    <Route exact path="/signin" component={SignInSignUp} />
                </Switch>
            </Router>
        </Fragment>
    );
};

export default App;
