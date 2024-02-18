// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {Item} from "../app/models/activity";



// Define a service using a base URL and expected endpoints
export const itemApi = createApi({
    reducerPath: 'itemApi',
    tagTypes: ['Item'],
    baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_API_URL}/` }),
    endpoints: (builder) => ({
        getItemList: builder.query<Item[], void>({
            query: () => `item`,
            providesTags: ['Item'],
        }),
        addManga: builder.mutation<Item, Partial<Item>>({
            query: (body) => ({
                url: `item`,
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Item'],
        }),
        editItem: builder.mutation({
            query: (body) => ({
                url: `item/${body.id}`,
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: body,
            }),
            invalidatesTags: ['Item'],
        }),

        deleteItem: builder.mutation({
            query: (id) => ({
                url: `item/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Item'],
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {  } = itemApi
