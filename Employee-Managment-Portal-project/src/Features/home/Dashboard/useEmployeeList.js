
import { useState, useMemo } from 'react'
import { useGetdashboardapiQuery } from '../../../Services/dashboard'

function useEmployeeList() {
  var { data, isLoading } = useGetdashboardapiQuery()
  var [namefilter, SetnameFilter] = useState("")
  var [page, setPage] = useState(1);
  var perPage = 5;

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
    if (!namefilter) {
      return data?.slice(
        (page - 1) * perPage,
        page * perPage)
    }
    if (namefilter) {
      let filteredData = data?.filter((val) => {
        if (val?.name === namefilter) {
          return true
        }
        if (val?.department === namefilter) {
          return true
        }
      }).slice(
        (page - 1) * perPage,
        page * perPage)
      return filteredData

    }
  });


  return [data, isLoading, namefilter, SetnameFilter, page, setPage, perPage, totalPages, deparr, newdeparr, Employees]
}

export default useEmployeeList
