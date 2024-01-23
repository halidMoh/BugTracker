import { createSlice } from "@reduxjs/toolkit";

const bugSlice = createSlice({
  name: "bug",
  initialState: [],
  reducers: {
    getBug: (state) => {},
    createBug: (state, action) => {},
  },
  updateBug: (state, action) => {},
  setToFixed: (state, action) => {},
});
