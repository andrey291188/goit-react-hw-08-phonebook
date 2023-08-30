import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { clearAuthHeader, currentUser, logIn, logOut, setAuthHeader, signUp } from "service/createResponse";


export const registerThunk = createAsyncThunk(
    "auth/register",
    async (body, {rejectWithValue}) => {
        try {
            const data = await signUp(body)
            toast.success('Registration seccessful!')
            return data
        } catch (error) {
            toast.error(error.message)
            return rejectWithValue(error.message)
        }
    }
)

export const logInThunk = createAsyncThunk(
    "auth/login",
    async (body, {rejectWithValue}) => {
        try {
            const data = await logIn(body)
            toast.success('You have seccessfully logged in!')
            return data
        } catch (error) {
            toast.error(error.message)
            return rejectWithValue(error.message)
        }
    }
)

export const logOutThunk = createAsyncThunk(
    "auth/logout",
    async (body, {rejectWithValue}) => {
        try {
            await logOut()
            clearAuthHeader()
            toast.warn('You seccessfully logged out!') 
        } catch (error) {
            toast.error(error.message)
            return rejectWithValue(error.message)
        }
    }
)

export const currentUserThunk = createAsyncThunk(
    "auth/currentuser",
    async (body, {rejectWithValue, getState}) => {
        const { access_token } = getState().auth

        if (access_token === "") {
            return
        }
        setAuthHeader(access_token)
        try {
            const data = await currentUser()
            toast.success('You have seccessfully logged in!')
            return data
        } catch (error) {
            toast.error(error.message)
            return rejectWithValue(error.message)
        }
    }
)