import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyATMY-TCxjZZjYzq79u8rol5RcuQINz5N8',
    authDomain: 'clothing-shop-8c99c.firebaseapp.com',
    databaseURL: 'https://clothing-shop-8c99c.firebaseio.com',
    projectId: 'clothing-shop-8c99c',
    storageBucket: 'clothing-shop-8c99c.appspot.com',
    messagingSenderId: '1047700358297',
    appId: '1:1047700358297:web:b167ec2b66accb8f2de408'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`); // crud operation
    const snapShot = await userRef.get(); // represents data

    // create user in firestore
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.error('error createing user', error);
        }
    }

    return userRef;
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// google auth
export const auth = firebase.auth();
// google store
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const sigInWithGoogle = async cbk => {
    await auth.signInWithPopup(provider);
    cbk && cbk();
};

export const addCollectionAndDocuments = (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    console.log(collectionRef);
};

export default firebase;
