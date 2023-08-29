import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  error: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};
//typically used to async requests
export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    console.log(user);
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default authSlice.reducer;

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const initialState = {
//   user: null,
//   error: false,
//   isSuccess: false,
//   isLoading: false,
//   message: "",
// };

// export const services = createAsyncThunk("auth/register", async (user,thunkAPI) => {
//     console.log(user)
// });

// //this function organises redux codebase by grouping related functionalities
// export const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {},
// });
// export default authSlice.reducer;
