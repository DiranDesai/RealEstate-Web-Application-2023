import { LOGOUT, RESET } from "./types";

export const getToken = () => {
    const token = localStorage.getItem("token");
    
    if (!token) {
         return null;
    } else {
        return JSON.parse(localStorage.getItem("token"));
    }
}


