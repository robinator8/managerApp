import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  setEmail: false,
  setPassword: false,
  user: null,
  error: '',
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload, setEmail: false };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload, setPassword: false };
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        user: action.payload,
        setEmail: true,
        setPassword: true,
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        error: 'Authentication Failed.',
        setPassword: true,
        password: '',
        loading: false
      };
    default:
      return state;
  }
};
