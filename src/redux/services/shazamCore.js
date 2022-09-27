import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'cd82080929mshf15f9018e699999p1713f9jsnbfe88f7f3245');
            headers.set('X-RapidAPI-Host', 'shazam-core.p.rapidapi.com');
            return headers;
        }
    }),
    endpoints: (builder) => ({
       getTopCharts: builder.query({ query: (genre) => `/charts/genre-world?genre_code=${genre}` }) 
    })
})

export const {
    useGetTopChartsQuery
} = shazamCoreApi;