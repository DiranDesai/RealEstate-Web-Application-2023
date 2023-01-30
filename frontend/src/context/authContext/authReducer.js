import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  LOGOUT,
} from "../types";

const authReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TOKEN":
      return { ...state, token: action.payload };
      break;
    case USER_REGISTER_REQUEST:
      return { ...state, loading: true };
      break;
    case USER_REGISTER_SUCCESS:
      return { ...state, loading: false, token: action.payload };
      break;
    case USER_REGISTER_FAIL:
      return { ...state, error: action.payload };
      break;
    case USER_LOGIN_REQUEST:
      return { ...state, loading: true };
      break;
    case USER_LOGIN_SUCCESS:
      return { ...state, loading: false, token: action.payload };
      break;
    case USER_LOGIN_FAIL:
      return { ...state, error: action.payload };
      break;
    case LOGOUT:
      return { token: null };
      break;
    default:
      break;
  }
};

export default authReducer;
