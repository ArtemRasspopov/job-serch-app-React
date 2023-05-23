import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CataloguesServerResponce } from "../../models/models";

export const cataloguesApi = createApi({
  reducerPath: "catalogues/api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://startup-summer-2023-proxy.onrender.com/2.0/",
    headers: {
      "x-secret-key": "GEU4nvd3rej*jeh.eqp",
      "x-Api-App-Id":
        "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948",
      Authorization:
        "Bearer v3.r.137539487.07026ed24c017e28c9eb286b79f7d50fcb71a6b2.95817820a8b87b681017db06b1334f5c2d401ac3",
    },
  }),
  refetchOnFocus: true,
  endpoints: (build) => ({
    getCatalogues: build.query<CataloguesServerResponce, any>({
      query: () => ({
        url: `catalogues`,
      })
    }),

  }),
});

export const {
  useGetCataloguesQuery,
} = cataloguesApi;
