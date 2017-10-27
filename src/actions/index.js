import firebase from 'firebase';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  RESET_EMAIL,
  RESET_PASSWORD,
  LOGIN_USER_SUCCESS,
} from './types';

export const emailChanged = (text) => (
  {
    type: EMAIL_CHANGED,
    payload: text
  }
);

export const passwordChanged = (text) => (
  {
    type: PASSWORD_CHANGED,
    payload: text
  }
);

export const resetEmail = (text) => (
  {
    type: RESET_EMAIL,
    payload: text
  }
);

export const resetPassword = (text) => (
  {
    type: RESET_PASSWORD,
    payload: text
  }
);

export const loginUser = ({ email, password }) => (
  (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
      });
  }
);
