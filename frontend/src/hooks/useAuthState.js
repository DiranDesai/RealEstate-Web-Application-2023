import React, {useContext} from 'react'

import authContext from "../context/authContext/authContext";

function useAuthState() {
    const data = useContext(authContext);
    return data;
}

export default useAuthState