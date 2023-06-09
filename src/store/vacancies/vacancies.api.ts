import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  IVacancy,
  VacancysServerResponce,
  getFavoritesProps,
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
      // Authorization:
      //   "Bearer v3.r.137539487.07026ed24c017e28c9eb286b79f7d50fcb71a6b2.95817820a8b87b681017db06b1334f5c2d401ac3",
    },
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    getVacancies: build.query<VacancysServerResponce<IVacancy>, getVacanciesProps>({
      query: ({
        keyword,
        payment_from,
        payment_to,
        page = 0,
        catalogues = 0,
      }: getVacanciesProps) => ({
        url: "vacancies/",
        params: {
          keyword,
          payment_from: payment_from,
          payment_to: payment_to,
          page: page + 1,
          catalogues,
          count: 4,
          published: 1,
          sort_new: "",
        },
      }),
    }),
    getVacancy: build.query<IVacancy, number>({
      query: (vacancyId: number) => ({
        url: `vacancies/${vacancyId}`,
      }),
    }),
    getFavorites: build.query<VacancysServerResponce<IVacancy>, getFavoritesProps>({
      query: ({favoritesIds, page}: getFavoritesProps) => ({
        url: `vacancies/?${favoritesIds
          .map((item) => `ids[]=${item}&`)
          .join("")}`,
        params: {
          count: 4,
          page,
          published: 1,
        },
      }),
    }),
  }),
});

export const {
  useLazyGetVacanciesQuery,
  useGetVacanciesQuery,
  useGetVacancyQuery,
  useGetFavoritesQuery,
  useLazyGetFavoritesQuery,
} = vacanciesApi;
