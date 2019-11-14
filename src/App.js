import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import SignInSignUp from './pages/sing-in-sign-up/SignInSignUp';
import Header from './components/header/Header';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

const App = () => {
    const [currentUser, setCurrentUser] = useState(null);

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
                setCurrentUser(currentUser => ({
                    ...currentUser,
                    id: snapShot.id,
                    ...snapShot.data()
                }));
            });
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
