import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface userState {
  user: IUser;
  loading: "success" | "loading" | "error";
  error: string;
}

const initialState: userState = {
  user: {
    access_token: "v3.r.137539487.83a741bcccd9ad0bc63f1c428139470f4dd5640b.bc6d09249d0f88093a1e532ec0fa5e709ba55276",
    refresh_token: "v3.r.137539487.fb6068449f39fd7050f662f01b55598f57e0ec44.bc1997a9dd10178fd08b5862a8c3c56806d6a72a",
  },
  loading: "success",
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

// export const {} = userSlice.actions;

export default userSlice.reducer;
