import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import auth from "./../../firebase/firebase.config";

const initialState = {
  email: "",
  role: "",
  isLoading: "",
  isError: "",
  error: "",
};

// export const createUser = createAsyncThunk(
//   "auth/createUser",
//   async ({ email, password }, thunkAPI) => {
//     const data = await createUserWithEmailAndPassword(auth, email, password);
//     return data.user.email;
//   }
// );

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(createUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.email = payload;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
        state.email = "";
      });
  },
});

export default authSlice.reducer;
