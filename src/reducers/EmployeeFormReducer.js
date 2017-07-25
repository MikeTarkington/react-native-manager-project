import {
  EMPLOYEE_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      // action.payload === { prop: 'name', value: 'jane' }
      // the square bracket below for [action.payload.prop] is not an array... it is a 'key interpolation' feature from es6
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
}
