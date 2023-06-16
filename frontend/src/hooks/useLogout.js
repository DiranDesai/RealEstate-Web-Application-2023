import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuthState from './useAuthState';

function useLogout() {
    const {token} = useAuthState();
    const navigate = useNavigate();


    useEffect(() => {
        if (!token) {
            navigate("/login");
        }
    }, [token]);


    return token;

  
}

export default useLogout