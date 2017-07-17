import React, { Component } from 'react';
import { View, Text, Image } from 'react-native'
import { Provider } from 'react-redux';
// applyMiddleWare is necessary for redux-thunk
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import {Header} from './components/common';

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
        <View>
          <Header></Header>
          {/* <Image
            style={{width: 450, height: 306}}
            source={{uri: 'https://thumb1.shutterstock.com/display_pic_with_logo/1523654/611429084/stock-photo-road-path-on-a-highland-mountain-plateau-with-orange-grass-at-the-background-of-the-wide-steppe-611429084.jpg'}}
          /> */}
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
