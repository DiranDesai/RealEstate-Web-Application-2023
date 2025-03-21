import { useEffect, useReducer, useState } from "react";

import axios from "axios";

import UserContext from "./userContext";
import UserReducer from "./userReducer";

import {RESET, USER_PROFILE_REQUEST, USER_PROFILE_SUCCESS, USER_PROFILE_UPDATE_REQUEST, USER_PROFILE_UPDATE_SUCCESS, USER_PROPERTY_SUCCESS, PROPERTY_LIST_REQUEST, PROPERTY_LIST_SUCCESS, LOAD_FAVOURITES, PAGES_LIST_SUCCESS} from "../types";

import { URL } from "../constants"
import { getToken } from "../utils"
import useNotify from "../../hooks/useNotify";
import useAuthState from "../../hooks/useAuthState";


const UserState = ({children}) => {
    const {dispatch: d} = useNotify();

    let initialState = {
        profileData: null,
        notifications: [],
        propertyFormData: {images: []},
        loading: false,
        propertyListLoading: false,
        pageLoading: true,
        categories: [
            { name: "Apartment", listings: 4, icon: "apartment" },
            { name: "Houses", listings: 2, icon: "home" },
            { name: "Restaurant", listings: 3, icon: "restaurant" },
            { name: "Commercial", listings: 1, icon: "storefront" },
        ],
        properties: [],
        pages: null,
        favourites: [],
        filterStatus: "buy"
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

    const getUserNotifications = async () => {
        try {
            const response = await fetch(`${URL}/notifications`, {
                method: "GET",
                headers: headers
            });
            const data = await response.json();
            console.log(data)
            dispatch({type: "LOAD_NOTIFICATIONS", payload: data})
            return data;
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

    const createProperty = async (propertyData, position) => {
        console.log(123)
        let files = propertyData.images;
        const propertyFormData = new FormData();

        files.forEach((file, index) => {
            propertyFormData.append(`file${index}`, file)

        })

        for (const [key, value] of Object.entries(propertyData)) {
            propertyFormData.append(key, value);
            console.log(key, value)
        }

        console.log(position)

    
        
        try {
    
            let response = await axios.post(`${URL}/createProperty`, propertyFormData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    ...headers,
                    "position" :JSON.stringify(position)
                }
            });


            const {property} = await response.json();
            dispatch({type: true, payload: {success: true, message: "Property created successfully..."}});
            dispatch({type: USER_PROPERTY_SUCCESS, payload: property});
            //window.location = "/"
        } catch (error) {
            
        }
    }

    const getProperties = async (page) => {
        try {
            dispatch({type: PROPERTY_LIST_REQUEST});
            const response = await fetch(`${URL}/getProperties?page=${page}`, {
                method: "GET",
                headers: headers
            }); 
            const {properties, pages} = await response.json();
            dispatch({type: PROPERTY_LIST_SUCCESS, payload: properties});
            dispatch({type: PAGES_LIST_SUCCESS, payload: pages});
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

    const followUser = async (userId) => {
        try {
            const response = await fetch(`${URL}/follow/${userId}`, {
                method: "POST",
                headers: headers
            })
            const data = await response.json();
            return data
        } catch (error) {
            
        }
    }

    const unFollowUser = async (userId) => {
        try {
            const response = await fetch(`${URL}/unFollow/${userId}`, {
                method: "POST",
                headers: headers
            })
            const data = await response.json();
            return data
        } catch (error) {
            
        }
    }


    const checkUserFollowing = async (userId) => {
        try {
            const response = await fetch(`${URL}/checkFollowing/${userId}`, {
                method: "GET",
                headers: headers
            })
            const data = await response.json();
            return data
        } catch (error) {
            
        }
    }

    const searchProperties = async (searchParams) => {
        console.log(searchParams)
        try {
            dispatch({type: PROPERTY_LIST_REQUEST});
            const response = await fetch(`${URL}/search`, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(searchParams)
            });
    
            const {properties} = await response.json();
            dispatch({type: PROPERTY_LIST_SUCCESS, payload: properties});
        } catch (error) {
            
        }
    }

    const setFilterStatus = (filterStatus) => {
        dispatch({type: "UPDATE_FILTER", payload: filterStatus})
    }



    return (
        <UserContext.Provider value={{
            ...state,
            dispatch,
            getCurrentUser,
            getUser,
            followUser,
            unFollowUser,
            checkUserFollowing,
            updateUserProfile,
            changePassword,
            uploadProfilePic,
            createProperty,
            getProperties,
            getCurrentUserProperties,
            getProperty,
            createPropertyReview,
            getPropertyReviews,
            searchProperties,
            setFilterStatus,
            getUserNotifications,
        }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserState;