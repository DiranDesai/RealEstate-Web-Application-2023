import { USER_PROFILE_REQUEST, USER_PROFILE_SUCCESS, RESET, USER_PROFILE_UPDATE_REQUEST, USER_PROFILE_UPDATE_SUCCESS, USER_PROFILE_UPDATE_FAIL } from "../types";

const userReducer = (state, action) => {
  switch (action.type) {
    case USER_PROFILE_REQUEST:
      return { ...state, loading: true };
      break;
    case USER_PROFILE_SUCCESS:
      return { ...state, loading: false, profileData: action.payload };
      break;
    case USER_PROFILE_UPDATE_REQUEST:
      return { ...state, loading: true};
      break;
    case USER_PROFILE_UPDATE_SUCCESS:
      return { ...state, loading: false};
      break;
    case RESET:
      return { profileData: null };
      break;
    default:
      return state;
      break;
  }
};

export default userReducer;
