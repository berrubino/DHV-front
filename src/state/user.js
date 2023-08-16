import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  lastname: null,
  password: null,
  email: null,
  phone_number: null,
  address: null,
  city: null,
  state: null,
  zip_code: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    serUser: (state, action) => {
      return action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
