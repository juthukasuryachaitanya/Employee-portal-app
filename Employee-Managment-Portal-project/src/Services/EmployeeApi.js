import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export var Employeeapi = createApi({
    reducerPath: "Employeeapi",
    baseQuery: fetchBaseQuery({
        baseUrl: ("http://localhost:4000/employees")
    }),
    endpoints: (builder) => ({
        addEmployeeapi: builder.mutation({
            query: (values) => {
                return {
                    url: "/",
                    method: "POST",
                    body:values
                }
            }
        }),
        updateEmployeeapi: builder.mutation({
            query:(values)=>{
                const {id,...body}=values
                return{
                    url:`/${values.id}`,
                    method:"PATCH",
                    body,
                }
            }
        }),
        deleteEmployeeapi: builder.mutation({
            query:(id)=>{
                return{
                    url:`/${id}`,
                    method:"DELETE"
                }
            }
        }),
    })
})


export var { useAddEmployeeapiMutation,useUpdateEmployeeapiMutation,useDeleteEmployeeapiMutation } = Employeeapi