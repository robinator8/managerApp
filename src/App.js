import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyABEXFTEbkE1jRb0hlE3PN_fKwF9WN4OlY',
      authDomain: 'manager-3f47e.firebaseapp.com',
      databaseURL: 'https://manager-3f47e.firebaseio.com',
      projectId: 'manager-3f47e',
      storageBucket: 'manager-3f47e.appspot.com',
      messagingSenderId: '1025842552823'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
