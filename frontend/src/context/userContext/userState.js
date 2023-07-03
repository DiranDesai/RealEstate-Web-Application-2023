import { useEffect, useReducer, useState } from "react";

import axios from "axios";

import UserContext from "./userContext";
import UserReducer from "./userReducer";

import {RESET, USER_PROFILE_REQUEST, USER_PROFILE_SUCCESS, USER_PROFILE_UPDATE_REQUEST, USER_PROFILE_UPDATE_SUCCESS, USER_PROPERTY_SUCCESS, PROPERTY_LIST_REQUEST, PROPERTY_LIST_SUCCESS, LOAD_FAVOURITES} from "../types";

import { URL } from "../constants"
import { getToken } from "../utils"
import useNotify from "../../hooks/useNotify";
import useAuthState from "../../hooks/useAuthState";


const UserState = ({children}) => {
    const {dispatch: d} = useNotify();

    let initialState = {
        profileData: null,
        propertyFormData: {},
        loading: false,
        propertyListLoading: false,
        pageLoading: true,
        categories: [
            { name: "office", listings: 4, link: "https://img.icons8.com/?size=512&id=bx3Fsc9twEvU&format=png" },
            { name: "lodges", listings: 2, link: "https://img.icons8.com/?size=512&id=lswPqFny6bQU&format=png" },
            { name: "houses", listings: 3, link: "https://img.icons8.com/?size=512&id=QAaCUYnGw7pk&format=png" },
            { name: "restaraunt", listings: 1, link: "https://img.icons8.com/?size=512&id=sfJwEBemSndz&format=png" },
        ],
        properties: [],
        favourites: []
    }

    let [state, dispatch] = useReducer(UserReducer, initialState);

    useEffect(() => {
        const localStorageFavourites = localStorage.getItem("favourites") ? JSON.parse(localStorage.getItem("favourites")) : [];
        dispatch({type: LOAD_FAVOURITES, payload: localStorageFavourites});
    }, []);

    useEffect(() => {
        localStorage.setItem("favourites", JSON.stringify(state.favourites));
    }, [state.favourites]);

    const {token} = useAuthState();

    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
    };



    const getCurrentUser = async () => {
        try {
            dispatch({type: USER_PROFILE_REQUEST});
            const response = await fetch(`${URL}/getMe`, {
                headers: headers
            });
            const data = await response.json();
            dispatch({type: USER_PROFILE_SUCCESS, payload: data._doc});
        } catch (error) {
            console.log(error);
        }
    }

    const getUser = async (id) => {
        try {
            const response = await fetch(`${URL}/getUser/${id}`, {
                method: "GET",
                headers: headers
            });
            const {user} = await response.json();
            return user;
        } catch (error) {
            
        }
    }

    const updateUserProfile = async (userData) => {
        try {
            dispatch({type: USER_PROFILE_UPDATE_REQUEST});
            const response = await fetch(`${URL}/updateMe`, {
                method: "PUT",
                headers: headers,
                body: JSON.stringify(userData)
            });
            const data = await response.json();
            dispatch({type: USER_PROFILE_UPDATE_SUCCESS});
            return data;
        } catch (error) {
            
        }
    }

    const uploadProfilePic = async (fileData) => {
        try {
            const response = await axios.post(`${URL}/uploadProfilePic`, fileData, {
                headers: headers,
            });
            const data = await response.json();
            return data;
        } catch (error) {
            
        }
    }

    const changePassword = async (passwordData) => {
        try {
            const response = await fetch(`${URL}/changePassword`, {
                method: "POST",
                headers: headers,
                body: JSON.stringify({
                    ...passwordData
                })
            });
            const data = await response.json();
            return data
        } catch (error) {
            
        }
    }

    const createProperty = async (propertyData) => {
        try {
            let response = await fetch(`${URL}/createProperty`, {
                method: "POST",
                headers: headers,
                body: JSON.stringify({
                    ...propertyData
                })
            });
            const {property} = await response.json();
            dispatch({type: USER_PROPERTY_SUCCESS, payload: property});
            d({type: true, payload: {success: true, message: "Property created successfully..."}});
        } catch (error) {
            
        }
    }

    const getProperties = async () => {
        try {
            dispatch({type: PROPERTY_LIST_REQUEST});
            const response = await fetch(`${URL}/getProperties`, {
                method: "GET",
                headers: headers
            }); 
            const {properties} = await response.json();
            dispatch({type: PROPERTY_LIST_SUCCESS, payload: properties});
        } catch (error) {
            
        }
    }

    const getCurrentUserProperties = async () => {
        try {
            const response = await fetch(`${URL}/currentProperties`, {
                method: "GET",
                headers: headers
            }); 
            const {properties} = await response.json();
            return properties
        } catch (error) {
            
        }
    }

    const getProperty = async (id) => {
        try {
            const response = await fetch(`${URL}/getProperty/${id}`, {
                method: "GET",
                headers: headers
            });
            const {property} = await response.json();
            return property;
        } catch (error) {
            
        }
    }

    const createPropertyReview = async (reviewData, propertyId) => {
        try {
            const response = await fetch(`${URL}/property/${propertyId}/review`, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(reviewData)
            });
            const {review} = await response.json();
            return review
        } catch (error) {
            console.log(error.message);
        }

    }

    const getPropertyReviews = async (propertyId) => {
        try {
            const response = await fetch(`${URL}/property/${propertyId}/review`, {
                method: "GET",
                headers: headers
            })
            const {reviews} = await response.json();
            return reviews
        } catch (error) {
            
        }
    }




    return (
        <UserContext.Provider value={{
            ...state,
            dispatch,
            getCurrentUser,
            getUser,
            updateUserProfile,
            changePassword,
            uploadProfilePic,
            createProperty,
            getProperties,
            getCurrentUserProperties,
            getProperty,
            createPropertyReview,
            getPropertyReviews
        }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserState;