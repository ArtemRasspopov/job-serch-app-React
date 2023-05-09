import { createSlice } from "@reduxjs/toolkit";
import { IVacancy } from "../../models/models";
// import { IVacancy } from "../../models/IVacancy";
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface vacanciesState {
  vacancies : IVacancy[]
}

const initialState: vacanciesState = {
  vacancies : []
};

export const vacanciesSlice = createSlice({
  name: "vacancies",
  initialState,
  reducers: {},
});

// export const {} = userSlice.actions;

export default vacanciesSlice.reducer;
