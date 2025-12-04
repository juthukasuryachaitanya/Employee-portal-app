import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export var authenticateapi = createApi({
    reducerPath: "authenticateapi",
    baseQuery: fetchBaseQuery({
        baseUrl: ("http://localhost:4000/")
    }),
    endpoints: (builder) => ({
        AuthenticateAccessApi: builder.mutation({
            query: (values) =>{
              return { url: "/login",
                method: "POST",
                headers:{
                    'Content-type':'application/json'
                },
                body:JSON.stringify(values)
            }
        }
    }),
    
        getAccessApi:builder.query({
          query:(token)=>{
           return { url:"/getDetailsByToken",
            method:"GET",
            headers:{
                'token':window.localStorage.getItem('token')
            }
          }
        }
    })
    })
})
                
            
export var {useAuthenticateAccessApiMutation, useLazyGetAccessApiQuery } = authenticateapi