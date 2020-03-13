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

// Receives user object returned by google oauth on login;
export const createUserProfileDocument = async (userAuth, additionalData) => {
  // user auth will be null when user is logged out
  if (!userAuth) return;

  // get the reference to get the snapshot which tells us if there exists a user at the query
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    // if using google sign in, displayName and email are available. if not, displayName and email are at additionalData
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
};

export const convertCollectionsSnapshotToMap = collections => {
  // .docs() holds an array of querySnapshot objects which have the data from each collection
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    // return the object which we actually want in our redux
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;
    return acc;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;

export const addCollectionAndItems = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  // We need to batch write so if one of the writings fail, all of them fail (no incomplete data in database)
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    // Instead of directly doing newDocRef.set(), save it in the batch
    batch.set(newDocRef, obj);
    console.log(obj);
  });

  return await batch.commit();

  // THIS FUNCTION SHOULD ONLY BE CALLED WHEN THE 'collectionKey' COLLECTION IN FIREBASE IS EMPTY
  // CALLING THIS FUNCTION AGAIN WOULD DUPLICATE ALL DATA (if the objectsToAdd are already stored in firebase)!

  // CALL IT LIKE THIS:
  // addCollectionAndItems(
  //   'collections',
  //   // We don't need to pass routeName or Id to firebase
  //   collectionsArray.map(({ title, items }) => ({ title, items }))
  // );
};
