import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export var dashboardapi = createApi({
    reducerPath: "dashboardapi",
    baseQuery: fetchBaseQuery({
        baseUrl: ("http://localhost:4000/")
    }),
    endpoints: (builder) => ({
        getdashboardapi: builder.query({
            query: () => {
                return {
                    url: "/employees",
                    method: "GET",
                }
            }
        }),
    })
})


export var { useGetdashboardapiQuery, useLazyGetdashboardapiQuery} = dashboardapi