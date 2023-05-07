

/* React-specific entry point that automatically generates
   hooks corresponding to the defined endpoints */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const adminApi = createApi({
    reducerPath: 'admin',
    baseQuery: fetchBaseQuery({ baseUrl: '  http://localhost:3030/' }),
    endpoints: (builder) =>
    ({
        getAccount: builder.query({
            query: () => `account`,
            providesTags: ['account']
        }),
        addAccounts: builder.mutation({
            query: (amount, id) => ({
                url: `account`,
                method: 'POST',
                body: { amount: amount, id: id }
            }),
            invalidatesTags: ['account']
        },),
        DeleteAccounts: builder.mutation({
            query: (id) => ({
                url: `account/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['account']
        },),
        updateAccounts: builder.mutation({
            query: ({amount,id}) => ({
                url: `account/${id}`,
                method: 'PUT',
                body:{amount}
            }),
            invalidatesTags: ['account']
        },),

    })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAccountQuery, useAddAccountsMutation, useDeleteAccountsMutation ,useUpdateAccountsMutation } = adminApi