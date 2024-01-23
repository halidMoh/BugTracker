import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: [{}],
  reducers: {
    getUser: (state) => {
      state.push({ name: "Khalid Mohammed" });
      state.push({ name: "Ikram Mohammed" });
    },
  },
});

export default userSlice.reducer;

export const { getUser } = userSlice.actions;
