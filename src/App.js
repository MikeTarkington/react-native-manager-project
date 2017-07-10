import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
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
    return (
      <Provider store={createStore(reducers)}>
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
