import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FavoritesServerResponce, IVacancy } from "../../models/models";

export const favoritesApi = createApi({
  reducerPath: "favorites/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://startup-summer-2023-proxy.onrender.com/2.0/",
    headers: {
      "x-secret-key": "GEU4nvd3rej*jeh.eqp",
      "x-Api-App-Id":
        "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948",
      Authorization:
        "Bearer v3.r.137539487.83a741bcccd9ad0bc63f1c428139470f4dd5640b.bc6d09249d0f88093a1e532ec0fa5e709ba55276",
    },
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    getFavorites: build.query<IVacancy[], void>({
      query: () => ({
        url: `favorites`,
      }),
      transformResponse: (responce: FavoritesServerResponce) =>
      responce.objects
    }),
    AddFavorites: build.mutation<void, number>({
      query: (id) => ({
        url: `favorites/${id}`,
        method: "post"
      }),
    }),
    RemoveFavorites: build.mutation<void, number>({
      query: (id) => ({
        url: `favorites/${id}`,
        method: "delete"
      }),
    })
  }),
});

export const { useGetFavoritesQuery, useLazyGetFavoritesQuery, useAddFavoritesMutation, useRemoveFavoritesMutation } = favoritesApi;
