import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
 } from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: ''
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case EMAIL_CHANGED:
    // make a new object, take all existing properties of state and include them in that object, and then define the property email (which is empty by default) and then overwrite it with a value of the action payload... then the state will be updated if the comparison of this new object is true against the old state... use mapStateToProps in LoginForm to transer this new state to props elsewhere
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case LOGIN_USER_SUCCESS:
      return { ...state, user: action.payload };

    default:
      return state;
  }
}
