// import { createSlice } from "@reduxjs/toolkit";
// import { bugList } from "./bugList";
// const bugSlice = createSlice({
//   name: "bug",
//   initialState: [],
//   reducers: {
//     getBug: (state) => bugList(),
//     createBug: (state, action) => {},
//   },
//   updateBug: (state, action) => {},
//   setToFixed: (state, action) => {},
// });

// export default bugSlice.reducer;
// export const { getBug, createBug, updateBug, setToFixed } = bugSlice.actions;
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../shared/baseUrl";

export const fetchBugs = createAsyncThunk("bugs/fetchBugs", async () => {
  const response = await fetch(baseUrl + "bugs");
  if (!response.ok) {
    console.log(response.status);
    return Promise.reject("unable to fetch bugs, status " + response.status);
  }
  const data = await response.json();
  return data;
});

const initialState = {
  bugsArray: [],
  isLoading: true,
  errMsg: "",
};

const bugSlice = createSlice({
  name: "bugs",
  initialState,
  reducers: {
    //  getBug: (state) => fetchBugs(),
    //createBug: (state, action) => {},
    // updateBug: (state, action) => {},
    //setToFixed: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBugs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBugs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errMsg = "";
        // state.bugsArray = action.payload;
        console.log(action.payload);
      })
      .addCase(fetchBugs.rejected, (state, action) => {
        state.isLoading = false;
        state.errMsg = action.error ? action.error.message : "Fetch failed";
      });
  },

  // extraReducers: (builder) => {
  //   builder
  //     .addCase(pending, (state) => {
  //       state.isLoading = false;
  //     })
  //     .addCase(fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       state.errMsg = "";
  //       state.bugsArray = action.payload;
  //     })
  //     .addCase(rejected, (state, action) => {
  //       state.isLoading = false;
  //       state.errMsg = action.error ? action.error.message : "Fetch failed";
  //     });
  // },
  // extraReducers: {
  //   [fetchBugs.pending]: (state) => {
  //     state.isLoading = true;
  //   },
  //   [fetchBugs.fulfilled]: (state, action) => {
  //     state.isLoading = false;
  //     state.errMsg = "";
  //     state.commentsArray = action.payload;
  //   },
  //   [fetchBugs.rejected]: (state, action) => {
  //     state.isLoading = false;
  //     state.errMsg = action.error ? action.error.message : "Fetch failed";
  //   },
  // },
});

export const bugReducer = bugSlice.reducer;

export const selectAllBugs = (state) => {
  return state.bugs.bugsArray;
};
