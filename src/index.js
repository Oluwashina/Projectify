import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer';
import { Provider, useSelector } from 'react-redux';
import thunk from 'redux-thunk';
import {createFirestoreInstance, getFirestore, reduxFirestore } from 'redux-firestore';
import {ReactReduxFirebaseProvider, getFirebase, isLoaded} from 'react-redux-firebase';
import fbConfig from './config/fbConfig';
import firebase from 'firebase/app';


const rrfConfig = { 
  userProfile: 'users',
  useFirestoreForProfile: true
 } // react-redux-firebase config

const store = createStore(
  rootReducer,
  compose(
   applyMiddleware(thunk.withExtraArgument({getFirestore, getFirebase})),
   reduxFirestore(firebase,fbConfig),
  )
);

const rrfProps = {
     firebase: fbConfig,
     config: rrfConfig,
     dispatch: store.dispatch,
     createFirestoreInstance // <- needed if using firestore
 }

 function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div className="container center"><p>Loading...</p></div>;
  return children
}



ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </AuthIsLoaded>
  </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
