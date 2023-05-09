import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import vacanciesSlice from "./slices/vacanciesSlice";
import { vacanciesApi } from "./vacancies/vacancies.api";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    userSlice,
    vacanciesSlice,
    [vacanciesApi.reducerPath]: vacanciesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(vacanciesApi.middleware),
});

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

