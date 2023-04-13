import { useEffect, useReducer } from "react";

import AuthContext from "./authContext";
import AuthReducer from "./authReducer";

import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  UPDATE_TOKEN,
  LOGOUT,
  RESET,
} from "../types";

import { URL } from "../constants";
import { getToken } from "../utils";

//console.log(getToken());

const AuthState = (props) => {
  useEffect(() => {
    if (getToken() !== null || getToken() !== undefined) {
      dispatch({ type: UPDATE_TOKEN, payload: getToken() });
    }
  }, []);

  const initialState = {
    user: null,
    token: null,
    error: null
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const registerUser = (formData) => {
    const sendRequest = async () => {
      try {
        dispatch({ type: USER_REGISTER_REQUEST });
        const response = await fetch(`${URL}/account`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const { token } = await response.json();

        dispatch({ type: USER_REGISTER_SUCCESS, payload: token });
        localStorage.setItem("token", JSON.stringify(token));
      } catch (error) {
        dispatch({ type: USER_REGISTER_FAIL });
      }
    };

    sendRequest();
  };

  const loginUser = async (formData) => {
    try {
      dispatch({ type: USER_LOGIN_REQUEST });
      const response = await fetch(`${URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (data.message) {
        dispatch({ type: USER_LOGIN_FAIL, payload: data.message });
        return
      }

      dispatch({ type: USER_LOGIN_SUCCESS, payload: data.token });
      localStorage.setItem("token", JSON.stringify(data.token));
    } catch (error) {
      console.log(error);
      dispatch({ type: USER_LOGIN_FAIL, payload: error.message });
    }
  };

  const logout = () => {
    dispatch({ type: LOGOUT });
    dispatch({ type: RESET });
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{ ...state, registerUser, loginUser, logout, dispatch }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
