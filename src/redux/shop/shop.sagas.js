// takeEvery: listens for every action of a specific type that we pass to it

import { takeEvery, call, put, all } from 'redux-saga/effects';
import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from './shop.actions';

import ShopActionTypes from './shop.types';

export function* fetchCollectionsAsync() {
  yield console.log('fetchCollectionsAsync was fired');
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();

    // All that call does is invoke a function; it's safer to use it in case the function takes long to execute
    // Adding more yields wherever we can makes it easier to test
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );

    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
