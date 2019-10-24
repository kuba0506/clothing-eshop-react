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
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// google auth
export const auth = firebase.auth();
// google store
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// const provider = new firebase.auth.GoogleAuthProvider({prompt: 'select_account'});
export const sigInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

