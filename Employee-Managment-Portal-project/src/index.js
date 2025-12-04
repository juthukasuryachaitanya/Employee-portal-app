import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './App/store';
import Login from './Features/login/login';
import EmployeeList from './Features/home/Dashboard/EmployeeList';
import AddEmployeeInList from './Features/home/AddEmployee/AddEmployee';
import EditEmployeeList from './Features/home/EditEmployee/EditEmployee';
import EditModelForm from './Features/home/EditEmployee/EditModelForm';
import MyErrorBoundary from './Components/errorBoundary';





const router = createBrowserRouter([{
    path: "/",
    element: <App></App>,
    children: [
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/",
            element: <EmployeeList></EmployeeList>
        },
        {
            path: "/AddEmployee",
            element: <AddEmployeeInList></AddEmployeeInList>
        },
        {
            path: "/EditEmployee",
            element: <EditEmployeeList></EditEmployeeList>,
            children: [
                {
                    path: "/EditEmployee/:id",
                    element: <EditModelForm></EditModelForm>
                }
            ]
        }
    ]

}], {
    future: {
        v7_startTransition: true
    }
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <MyErrorBoundary>
            <RouterProvider router={router} ></RouterProvider>
        </MyErrorBoundary>
    </Provider>



);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

