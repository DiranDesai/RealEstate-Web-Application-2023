import { USER_PROFILE_REQUEST, USER_PROFILE_SUCCESS, RESET, USER_PROFILE_UPDATE_REQUEST, USER_PROFILE_UPDATE_SUCCESS, USER_PROFILE_UPDATE_FAIL, LOADING, USER_PROPERTY_SUCCESS, PROPERTY_LIST_SUCCESS, ADD_FAVOURITES, LOAD_FAVOURITES, PROPERTY_LIST_REQUEST, PAGE_LOADING_REQUEST, PAGE_LOADING_SUCCESS, PAGES_LIST_SUCCESS } from "../types";

const userReducer = (state, action) => {
  switch (action.type) {
    case LOADING:
      return {...state, loading: action.payload};
      break;
    case PAGE_LOADING_REQUEST:
      return {...state, pageLoading: true};
      break;
    case PAGE_LOADING_SUCCESS:
      return {...state, pageLoading: false};
      break;
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
    case "handlePropertyForm":
      const target = action.payload;
      console.log(target.name);
      return { ...state, propertyFormData: {...state.propertyFormData, [target.name]: target.value}};
      break;
    case "uploadPropertyImages":
      return {...state, propertyFormData: {...state.propertyFormData, images: [...state.propertyFormData.images, action.payload]}}
      break;
    case "updateFormLocation":
      return {...state, propertyFormData: {...state.propertyFormData, location: action.payload}}
      break;
    case USER_PROPERTY_SUCCESS:
      return {...state, properties: [...state.properties, action.payload]};
      break;
    case PROPERTY_LIST_REQUEST:
      return {...state, propertyListLoading: true};
      break;
    case PROPERTY_LIST_SUCCESS:
      return {...state, propertyListLoading: false, properties: action.payload};
      break;
    case PAGES_LIST_SUCCESS:
      return {...state, pages: action.payload};
      break;
    case ADD_FAVOURITES:
      return {...state, favourites: [...state.favourites, action.payload]};
      break;
    case LOAD_FAVOURITES:
      return {...state, favourites: action.payload};
      break;
    case RESET:
      return { ...state, profileData: null };
      break;
    default:
      return state;
      break;
  }
};

export default userReducer;
