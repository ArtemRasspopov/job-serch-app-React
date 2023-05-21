import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  FavoritesServerResponce,
  IVacancy,
  VacancysServerResponce,
  getVacanciesProps,
} from "../../models/models";

export const vacanciesApi = createApi({
  reducerPath: "vacancies/api",
  tagTypes: ["Vacancies", "Favorites"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://startup-summer-2023-proxy.onrender.com/2.0/",
    headers: {
      "x-secret-key": "GEU4nvd3rej*jeh.eqp",
      "x-Api-App-Id":
        "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948",
      Authorization:
        "Bearer v3.r.137539487.72ab16220be0e803c82a5b076061d7e373117a87.19d31ca196758164bd22591e8b19740fa458ff5b",
    },
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    getVacancies: build.query<IVacancy[], getVacanciesProps>({
      query: ({
        keyword,
        payment_from,
        payment_to,
        page = 1,
        catalogues = 0,
      }: getVacanciesProps) => ({
        url: "vacancies",
        params: {
          keyword,
          payment_from: payment_from,
          payment_to: payment_to,
          count: 4,
          page: page,
          catalogues,
          ids: [46233248, 46233249],
        },
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Vacancies" as const, id })),
              { type: "Vacancies", id: "LIST" },
            ]
          : [{ type: "Vacancies", id: "LIST" }],
      transformResponse: (responce: VacancysServerResponce<IVacancy>) =>
        responce.objects,
    }),
    getVacancy: build.query<IVacancy, number>({
      query: (vacancyId: number) => ({
        url: `vacancies/${vacancyId}`,
      }),
    }),
    getFavorites: build.query<IVacancy[], void>({
      query: () => ({
        url: `favorites`,
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Vacancies" as const, id })),
              { type: "Vacancies", id: "LIST" },
            ]
          : [{ type: "Vacancies", id: "LIST" }],
      transformResponse: (responce: FavoritesServerResponce) =>
        responce.objects,
    }),
    AddFavorites: build.mutation<void, number>({
      query: (id) => ({
        url: `favorites/${id}`,
        method: "post",
      }),
      invalidatesTags: [
        { type: "Vacancies", id: "LIST" },
        // { type: "Favorites", id: "LIST" },
      ],
    }),
    RemoveFavorites: build.mutation<void, number>({
      query: (id) => ({
        url: `favorites/${id}`,
        method: "delete",
      }),
      invalidatesTags: [
        { type: "Vacancies", id: "LIST" },
        // { type: "Favorites", id: "LIST" },
      ],
    }),
  }),
});

export const {
  useLazyGetVacanciesQuery,
  useGetVacanciesQuery,
  useLazyGetVacancyQuery,
  useGetFavoritesQuery,
  useAddFavoritesMutation,
  useRemoveFavoritesMutation,
} = vacanciesApi;
