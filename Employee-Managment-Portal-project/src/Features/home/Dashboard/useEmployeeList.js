import React from 'react'
import { useState, useMemo, useCallback } from 'react'
import { useGetdashboardapiQuery } from '../../../Services/dashboard'
function useEmployeeList() {
     var { data, isLoading } = useGetdashboardapiQuery()
      var [namefilter, SetnameFilter] = useState("")
      var [flag, Setflag] = useState(false)
      let [page, setPage] = useState(1);
      let perPage = 5;
      let totalPages = Math.ceil(data?.length / perPage);
      let deparr = []
      let newdeparr = []
      data?.map((eachdep) => {
        deparr.push(eachdep.department)
        newdeparr = deparr.filter((val, index) => {
          if (index === deparr.indexOf(val)) {
            return val
          }
        })
    
      })
      let Employees = useMemo(() => {
        if (!namefilter && flag == false) {
          return data?.slice(
            (page - 1) * perPage,
            page * perPage)
        }
        if (namefilter) {
          let filteredData = data?.filter((val) => {
    
            if (val?.name == namefilter) {
              return true
            }
            if (val?.department == namefilter) {
              var depfilterdata = data?.filter((val) => val).slice(
                (page - 1) * perPage,
                page * perPage)
              return depfilterdata
            }
          })
          return filteredData
        }
        if (flag) {
    
          let sorteddata = [...data]?.sort((val1, val2) => val1.salary > val2.salary ? 1 : -1).slice(
            (page - 1) * perPage,
            page * perPage)
          return sorteddata
        }
      });
      let flagupdate = useCallback(() => {
        Setflag(true)
      })
  return [data,isLoading,namefilter,SetnameFilter,flag,Setflag,page,setPage,perPage,totalPages,deparr,newdeparr,Employees,flagupdate]
}

export default useEmployeeList
