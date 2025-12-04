import { configureStore } from "@reduxjs/toolkit";
import { authenticateapi } from "../Services/authentication";
import loginSlicereducer from "../Features/login/loginSlice";
import { dashboardapi } from "../Services/dashboard";
import { Employeeapi } from "../Services/EmployeeApi";

export const store=configureStore({
    reducer:{
        login:loginSlicereducer,
        [authenticateapi.reducerPath]:authenticateapi.reducer,
        [dashboardapi.reducerPath]:dashboardapi.reducer,
        [Employeeapi.reducerPath]:Employeeapi.reducer
    },
    middleware:(getDefaultMiddlware)=>getDefaultMiddlware().concat(authenticateapi.middleware,dashboardapi.middleware,Employeeapi.middleware)
})