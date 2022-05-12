import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

export const productsApi = createApi({
	reducerPath: "productsApi",
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:7000" }),
	endpoints: (builder) => ({
		getAllProducts: builder.query({
			query: () => "products",
		})
	})
})

export const { useGetAllProductsQuery } = productsApi