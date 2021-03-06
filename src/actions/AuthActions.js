import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });


    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      // console logging errors in .catch is wise because if bad code causes firebase login to fail, no errors occur so it doesn't always make it clear that the .then promise has failed as it simply sends the process to the .catch
      .catch((error) => {
        console.log(error);

        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then (user => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFail(dispatch));
      });
  };
};

const loginUserFail = (dispatch) => {
  dispatch ({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch,user) => {
  dispatch ({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.main();
}
