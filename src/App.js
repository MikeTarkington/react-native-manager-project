import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers'
import firebase from 'firebase'

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
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
