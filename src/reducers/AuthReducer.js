import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  RESET_EMAIL,
  RESET_PASSWORD,
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  resettingEmail: false,
  resettingPassword: false,
};

export default (state = INITIAL_STATE, action) => {
console.log(action);

  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload, resettingEmail: false };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload, resettingPassword: false };
    case RESET_EMAIL:
      return { ...state, email: action.payload, resettingEmail: true };
      case RESET_PASSWORD:
        return { ...state, password: action.payload, resettingPassword: true };
    default:
      return state;
  }
};
