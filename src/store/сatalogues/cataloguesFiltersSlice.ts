import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  search: string;
  catalogues: number;
  payment_from: number;
  payment_to: number;
  page: number
  favoritesPage: number
}

const initialState: CounterState = {
  search: "",
  catalogues: 0,
  payment_from: 0,
  payment_to: 0,
  page: 0,
  favoritesPage: 0
};

export const cataloguesFiltersSlice = createSlice({
  name: "cataloguesFilters",
  initialState,
  reducers: {
    setCatalogues: (state, action: PayloadAction<number>) => {
      state.catalogues = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setPaymentFrom: (state, action: PayloadAction<number>) => {
      state.payment_from = action.payload;
    },
    setPaymentTo: (state, action: PayloadAction<number>) => {
      state.payment_to = action.payload;
    },
    setPage: (state, action : PayloadAction<number>) => {
      state.page = action.payload
    },
    setFavoritesPage: (state, action : PayloadAction<number>) => {
      state.favoritesPage = action.payload
    }
  },
});

export const { setCatalogues, setSearch, setPaymentFrom, setPaymentTo, setPage, setFavoritesPage } =
  cataloguesFiltersSlice.actions;

export default cataloguesFiltersSlice.reducer;
