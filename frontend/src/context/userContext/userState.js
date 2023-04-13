import { useEffect, useReducer } from "react";

import UserContext from "./userContext";
import UserReducer from "./userReducer";

import {RESET, USER_PROFILE_REQUEST, USER_PROFILE_SUCCESS} from "../types";

import { URL } from "../constants"
import { getToken } from "../utils"


const UserState = ({children}) => {
    const initialState = {
        profileData: null,
        loading: false,
        categories: [
            { name: "apartments", listings: 4, icon: "bi bi-building-fill" },
            { name: "commercial", listings: 2, icon: "bi bi-bag-fill" },
            { name: "office", listings: 3, icon: "bi bi-buildings" },
            { name: "restaraunt", listings: 1, icon: "bi bi-amd" },
        ],
        properties: [
            {title: "Countryside Modern Lake View", location: "New London", price: 25000, author: "Tom Steven", pic: "user1.jpg", category: "office", task: "sale", features: [{name: "bed", count: 2, icon: "bed"}, {name: "garage", count: 1, icon: "garage"}, {name: "baths", count: 1, icon: "bed"}]},

            {title: "Computer Office", location: "Chicago", price: 6000, author: "Diran Sai", pic: "user2.jpg", category: "office", task: "Rent", features: [{name: "bed", count: 2, icon: "bed"}, {name: "garage", count: 1, icon: "garage"}, {name: "baths", count: 1, icon: "bed"}]},

            {title: "Computer Office", location: "Livingstone", price: 7000, author: "Shepy", pic: "user3.jpg", category: "office", task: "Rent", features: [{name: "bed", count: 2, icon: "bed"}, {name: "garage", count: 1, icon: "garage"}, {name: "baths", count: 1, icon: "bed"}]},

            {title: "Car Wash", location: "Braga", price: 6500, author: "Jane Smith", pic: "user4.jpg", category: "office", task: "Rent", features: [{name: "bed", count: 2, icon: "bed"}, {name: "garage", count: 1, icon: "garage"}, {name: "baths", count: 1, icon: "bed"}]},

            {title: "Restaurent", location: "Francisco", price: 2500, author: "Kunje", pic: "user5.jpg", category: "office", task: "Rent", features: [{name: "bed", count: 2, icon: "bed"}, {name: "garage", count: 1, icon: "garage"}, {name: "baths", count: 1, icon: "bed"}]},

            {title: "Medicine Compass", location: "Lusaka", price: 12000, author: "Corder", pic: "user6.jpg", category: "office", task: "Rent", features: [{name: "bed", count: 2, icon: "bed"}, {name: "garage", count: 1, icon: "garage"}, {name: "baths", count: 1, icon: "bed"}]},

            {title: "Medicine Compass", location: "Lusaka", price: 12000, author: "Peter", pic: "user6.jpg", category: "office", task: "Rent", features: [{name: "bed", count: 2, icon: "bed"}, {name: "garage", count: 1, icon: "garage"}, {name: "baths", count: 1, icon: "bed"}]},

            {title: "Medicine Compass", location: "Lusaka", price: 12000, author: "John", pic: "user6.jpg", category: "office", task: "Rent", features: [{name: "bed", count: 2, icon: "bed"}, {name: "garage", count: 1, icon: "garage"}, {name: "baths", count: 1, icon: "bed"}]}
        ]
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