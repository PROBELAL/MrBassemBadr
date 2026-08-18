import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    isAdmin: false
};

const authSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        toggleIsLoggedIn: (state) => {
            state.isLoggedIn = !state.isLoggedIn; alert("you switched your role");
        },
        toggleIsAdmin: (state) => {
            state.isAdmin = !state.isAdmin; alert("you switched your role,you are");
        }
    }
});

export const { toggleIsLoggedIn, toggleIsAdmin } = authSlice.actions;
export default authSlice.reducer;