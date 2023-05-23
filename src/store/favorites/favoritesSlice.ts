import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const favoritesDataLocal = localStorage.getItem("favoritesData");

export interface FavoritesState {
  favoritesData: number[];
}

const initialState: FavoritesState = {
  favoritesData: favoritesDataLocal
    ? favoritesDataLocal.split(",").map(Number)
    : [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    setFavorite: (state, action: PayloadAction<number>) => {
      if (state.favoritesData.includes(action.payload)) {
        state.favoritesData = state.favoritesData.filter(
          (item) => item !== action.payload
        );
        localStorage.setItem("favoritesData", state.favoritesData.toString());
      } else {
        state.favoritesData.push(action.payload);
        localStorage.setItem("favoritesData", state.favoritesData.toString());
      }
    },
  },
});

export const { setFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
