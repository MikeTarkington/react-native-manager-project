import React, { Component } from 'react';
import { Provider } from 'react-redux';
// applyMiddleWare is necessary for redux-thunk
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import { Header } from './components/common';
import Router from './Router';

class App extends Component {
    componentWillMount() {
      const config = {
      apiKey: "AIzaSyCaz9dAuqJRIs6j5AYbUd9pGaAcrYBKAqQ",
      authDomain: "react-native-mngr-app-tutorial.firebaseapp.com",
      databaseURL: "https://react-native-mngr-app-tutorial.firebaseio.com",
      projectId: "react-native-mngr-app-tutorial",
      storageBucket: "",
      messagingSenderId: "805428263721"
    };
    firebase.initializeApp(config);
  }

  render() {
    // adds redux thunk to the store
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
