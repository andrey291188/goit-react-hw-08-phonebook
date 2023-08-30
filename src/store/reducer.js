import { combineReducers } from "@reduxjs/toolkit";
import filterReducer from "./phonebook/FilterReducer";
import phoneBookReducer from "./phonebook/phoneBookReducer";
import { authReducer } from "./authorization/authSlice";



export const reducer = combineReducers({
    phoneBook: phoneBookReducer,
    filter: filterReducer,
    auth: authReducer,
})