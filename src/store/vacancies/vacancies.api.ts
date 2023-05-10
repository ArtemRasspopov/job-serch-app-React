import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IVacancy, ServerResponce } from "../../models/models";

interface getVacanciesProps {
  keywords?: string[];
  payment_from?: number;
  payment_to?: number;
  page?: number;
  count?: number;
}

export const vacanciesApi = createApi({
  reducerPath: "vacancies/api",
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
    getVacancies: build.query<IVacancy[], getVacanciesProps>({
      query: ({
        keywords,
        payment_from,
        payment_to,
        page = 1,
      }: getVacanciesProps) => ({
        url: "vacancies",
        params: {
          keyword: keywords,
          // payment_from: payment_from,
          // payment_to: payment_to,
          // count: 4,
          page: page,
        },
      }),
      transformResponse: (responce: ServerResponce<IVacancy>) =>
        responce.objects,
    }),
    getVacancy: build.query<IVacancy, number>({
      query: (vacancyId: number) => ({
        url: `vacancies/${vacancyId}`,
      }),
    }),
  }),
});

export const {
  useLazyGetVacanciesQuery,
  useGetVacanciesQuery,
  useLazyGetVacancyQuery,
} = vacanciesApi;
