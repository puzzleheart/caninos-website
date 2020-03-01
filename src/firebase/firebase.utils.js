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

// Receives user object returned by google oauth on login;
export const createUserProfileDocument = async (userAuth, additionalData) => {
  // user auth will be null when user is logged out
  if (!userAuth) return;

  // reference will tell us if there is a user in the db
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

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
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;