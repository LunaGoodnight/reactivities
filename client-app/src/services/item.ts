// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {ItemInterface} from "../app/models/activity";



// Define a service using a base URL and expected endpoints
export const itemApi = createApi({
    reducerPath: 'itemApi',
    tagTypes: ['Item'],
    baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_API_URL}/` }),
    endpoints: (builder) => ({
        getItemList: builder.query<ItemInterface[], void>({
            query: () => `items`,
            providesTags: ['Item'],
        }),
        addItem: builder.mutation<ItemInterface, Partial<ItemInterface>>({
            query: (body) => ({
                url: `items`,
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Item'],
        }),
        editItem: builder.mutation({
            query: (body) => ({
                url: `items/${body.id}`,
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
                url: `items/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Item'],
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {  useGetItemListQuery, useAddItemMutation, useEditItemMutation, useDeleteItemMutation } = itemApi
