import { useEffect, useReducer } from "react";

import UserContext from "./userContext";
import UserReducer from "./userReducer";

import {RESET, USER_PROFILE_REQUEST, USER_PROFILE_SUCCESS} from "../types";

import { URL } from "../constants"
import { getToken } from "../utils"


const UserState = ({children}) => {
    const initialState = {
        profileData: null,
        loading: false
    }

    const [state, dispatch] = useReducer(UserReducer, initialState);

    const getCurrentUser = async () => {
        let token = getToken();
        try {
            dispatch({type: USER_PROFILE_REQUEST});
            const response = await fetch(`${URL}/getMe`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            });
            const data = await response.json();
            dispatch({type: USER_PROFILE_SUCCESS, payload: data._doc});
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <UserContext.Provider value={{
            ...state,
            getCurrentUser
        }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserState;