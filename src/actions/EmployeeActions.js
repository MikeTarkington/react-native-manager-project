import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEE_SAVE_SUCCESS
} from './types'

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  // console.log(name, phone, shift);
  const { currentUser } = firebase.auth();

  return (dispatch) => {
  //the string below is a path the the json datastore for firebase
  //backticks with ${} is used for es6 string interpolation
  firebase.database().ref(`/users/${currentUser.uid}/employees`)
    // .push sends the values to the firebase db at the above stored path
    .push({ name, phone, shift })
    .then(() => {
      dispatch({ type: EMPLOYEE_CREATE });
      Actions.employeeList({ type: 'reset' })
    });
  };
};

export const employeesFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    // because of this setup with firebase and redux, at any point in the applicaiton this will automatically detact that employees have been added for other parts of the app
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      // snapshot gives you a handle on the data stored but it's not an array object it merely describes the data
      .on('value', snapshot => {
        // snapshot.val is actually the data point
        dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const employeeSave = ({ name, phone, shift, uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
    .set({ name, phone, shift })
    .then(() => {
      dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
      Actions.employeeList({ type: 'reset' });
    });
  }
}

export const employeeDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => {
        Actions.employeeList({ type: 'reset' });
      });
  }
};
