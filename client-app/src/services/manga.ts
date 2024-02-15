// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {MangaLink} from "../app/models/activity";



// Define a service using a base URL and expected endpoints
export const mangaApi = createApi({
    reducerPath: 'mangaApi',
    tagTypes: ['Manga'],
    baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_API_URL}/` }),
    endpoints: (builder) => ({
        getMangaList: builder.query<MangaLink[], void>({
            query: () => `manga`,
            providesTags: ['Manga'],
        }),
        addManga: builder.mutation<MangaLink, Partial<MangaLink>>({
            query: (body) => ({
                url: `manga`,
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Manga'],
        }),
        editManga: builder.mutation({
            query: (body) => ({
                url: `manga/${body.id}`,
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: body,
            }),
            invalidatesTags: ['Manga'],
        }),

        deleteManga: builder.mutation({
            query: (id) => ({
                url: `manga/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Manga'],
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMangaListQuery, useAddMangaMutation, useEditMangaMutation, useDeleteMangaMutation } = mangaApi
