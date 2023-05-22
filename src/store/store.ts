import  favoritesSlice from './favorites/favoritesSlice';
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { vacanciesApi } from "./vacancies/vacancies.api";
import { cataloguesApi } from "./сatalogues/catalogues.api";
import cataloguesFiltersSlice from "./сatalogues/cataloguesFiltersSlice";

export const store = configureStore({
  reducer: {
    [cataloguesApi.reducerPath]: cataloguesApi.reducer,
    [vacanciesApi.reducerPath]: vacanciesApi.reducer,
    // favoritesSlice: favoritesSlice,
    cataloguesFiltersSlice,
    favoritesSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(vacanciesApi.middleware)
      .concat(cataloguesApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
