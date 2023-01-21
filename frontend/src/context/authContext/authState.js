import { useReducer } from "react";

import AuthContext from "./authContext";
import AuthReducer from "./authReducer";


const AuthState = (props) => {
    const initialState = {
        user: 1
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {props.children}
        </AuthContext.Provider>
    );
}


export default AuthState;