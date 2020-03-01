import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAAAXqUCThe76L2ouzPzvNyJvO7WrYPNPM',
  authDomain: 'caniinos-db.firebaseapp.com',
  databaseURL: 'https://caniinos-db.firebaseio.com',
  projectId: 'caniinos-db',
  storageBucket: 'caniinos-db.appspot.com',
  messagingSenderId: '940908367086',
  appId: '1:940908367086:web:9da3254dc7e7802098b7ff',
  measurementId: 'G-2YRNDL843L'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;