import { authconstant } from "../constants/constants";

const initialstate = {
  token: null,
  user: {
    email: "",
    password: "",
  },
  loading: false,
  error: null,
  authenticated: false,
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case authconstant.USERSIGNUPREQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case authconstant.USERSIGNUPSUCCESS:
      state = {
        ...state,
        loading: false,
        user: action.payload.user,
        token: action.payload.token,
        authenticated: true,
      };
      break;
    case authconstant.USERSIGNUPFAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
        authenticated: false,
      };
      break;

    //////LOGIN/////
    case authconstant.USERLOGINREQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case authconstant.USERLOGINSUCCESS:
      state = {
        ...state,
        loading: false,
        error: null,
        user: action.payload.user,
        token: action.payload.token,
        authenticated: true,
      };
      break;
    case authconstant.USERLOGINFAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
        authenticated: false,
      };
      break;

    case authconstant.USERLOGOUTREQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case authconstant.USERLOGOUTSUCCESS:
      state = {
        ...initialstate,
        authenticated: false,
      };
      break;
    case authconstant.USERLOGOUTFAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
        authenticated: false,
      };
      break;
  }

  return state;
};
