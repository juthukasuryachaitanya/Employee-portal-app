
import React, { useCallback } from 'react'
import { useState, useMemo } from 'react'
import { useGetdashboardapiQuery, useLazyGetdashboardapiQuery } from '../../../Services/dashboard'
import { useDeleteEmployeeapiMutation } from '../../../Services/EmployeeApi'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
function useEditEmployee() {
    var { data, isLoading } = useGetdashboardapiQuery()
    let [deleteEmployeefn] = useDeleteEmployeeapiMutation()
    let [recallnewdatafn] = useLazyGetdashboardapiQuery()
    var [namefilter, SetnameFilter] = useState("")
    let navigate = useNavigate()
    var [page, setPage] = useState(1);
    var perPage = 10;

    let totalPages = Math.ceil(data?.length / perPage);

    let Employees = useMemo(() => {
        if (!namefilter) {
            return data?.slice(
                (page - 1) * perPage,
                page * perPage)
        }
        if (namefilter) {
            let filteredData = data?.filter((val) => {
                if (val.name === namefilter) {
                    return true
                }
            })
            return filteredData
        }

    }, [data, namefilter, page]);
    var deleteEmployee = useCallback((id) => {
        deleteEmployeefn(id).then(() => {
            recallnewdatafn()
            navigate("/")
        })
        toast.success("Employee info deleted successfuly", { position: 'top-center', theme: 'colored', autoClose: 1500 })
    }, [deleteEmployeefn, recallnewdatafn, navigate])
    return [data, isLoading, namefilter, SetnameFilter, page, setPage, perPage, totalPages, Employees, deleteEmployee]
}

export default useEditEmployee
