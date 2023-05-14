import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { vacanciesApi } from "./vacancies/vacancies.api";
import { cataloguesApi } from "./сatalogues/catalogues.api";
import cataloguesFiltersSlice from "./сatalogues/cataloguesFiltersSlice";
import { favoritesApi } from "./favorites/favorites.api";

export const store = configureStore({
  reducer: {
    [cataloguesApi.reducerPath]: cataloguesApi.reducer,
    [vacanciesApi.reducerPath]: vacanciesApi.reducer,
    [favoritesApi.reducerPath]: favoritesApi.reducer,
    cataloguesFiltersSlice: cataloguesFiltersSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(vacanciesApi.middleware)
      .concat(cataloguesApi.middleware)
      .concat(favoritesApi.middleware)
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
