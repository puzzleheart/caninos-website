import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import thunk from 'redux-thunk'; 

import rootReducer from './root-reducer';

// While redux-thunk middleware is enabled, any time you attemp to dispatch a function instead of an object, 
// the middleware will call that function with dispatch method itself as the first argument
const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistor };
