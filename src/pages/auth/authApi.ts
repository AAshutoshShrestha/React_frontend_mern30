import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
	reducerPath: "authApi",
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_API_URL,
		prepareHeaders: (headers) => {
			const token = localStorage.getItem("_at") || null;
			if (token) {
				headers.set("Authorization", "Bearer " + token);
			}
		},
	}),

	endpoints: (builder) => ({
		// mutation & quert
		login: builder.mutation<any, any>({
			query: (credientials) => ({
				url: "/auth/login",
				method: "POST",
				body: credientials,
			}),
		}),

		getLoggedInUser: builder.query<any, void>({
			query: () => "/auth/me",
		}),
	}),
});

export const { useLoginMutation, useGetLoggedInUserQuery } = authApi;
