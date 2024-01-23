import { createSlice } from "@reduxjs/toolkit";

//this will be accessed globally
const authenticationSlice = createSlice({
  name: "authentication",
  initialState: {
    admin: false,
    LoggedIn: false,
  },
  reducers: {
    signIn: (state, action) => {
      const { name, password } = action.payload;
      state.LoggedIn = true;
      state.admin = true;
    },

    signOut: (state) => {
      state.LoggedIn = false;
      state.admin = false;
    },
    createUser: (state, action) => {},
  },
});

export default authenticationSlice.reducer;
export const { signIn, signOut, createUser } = authenticationSlice.actions;
