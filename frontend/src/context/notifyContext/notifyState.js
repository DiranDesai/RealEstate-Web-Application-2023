import { useReducer } from "react";
import NotifyContext from "./notifyContext";
import NotifyReducer from "./notifyReducer";


const NotifyState = ({children}) => {

    const initialState = {error: false, payloadData: {}}
    const [state, dispatch] = useReducer(NotifyReducer, initialState);


    return (
        <NotifyContext.Provider value={{...state, dispatch}}>
            {children}
        </NotifyContext.Provider>
    );

}


export default NotifyState;