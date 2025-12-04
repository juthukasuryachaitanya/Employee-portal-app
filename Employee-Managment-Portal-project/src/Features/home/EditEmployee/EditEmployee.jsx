
import EditTable from './EditTable'
import useEditEmployee from './useEditEmployee'


function EditEmployeeList() {
  var [data,isLoading,namefilter,SetnameFilter,page,setPage,perPage,totalPages,Employees,deleteEmployee] = useEditEmployee()

  return (
    <div style={{
      marginLeft: "260px", height: "100vh",                    
      display: "flex",
      justifyContent: "center",            
      alignItems: "center",
    }}>
      <div style={{width:"970px",maxHeight: "95vh",    display: "flex",flexDirection: "column", overflow: "hidden"}}
       className='m-4 border border-3 rounded  bg-light bg-opacity-75'>
        <div style={{ height: "50px" }} className='d-flex justify-content-between align-items-center m-2 mb-1 border-bottom pb-2 '>
          <h3><b>Employee List</b></h3>
          <div className="d-flex justify-content-end w-50 gap-2" role="search">
            <input style={{ height: "40px" }} className="form-control  w-50 border-success" onChange={(e) => { SetnameFilter(e.target.value) }} type="search" placeholder="Search by Employee Name" aria-label="Search"></input>

            <div style={{ display: "flex", gap: 10, alignItems: "center", justifyContent: "center", }}>
              <button className='btn btn-outline-success' style={{ height: "40px" }} disabled={page === 1} onClick={() => setPage(page - 1)}>
                Prev
              </button>
              <h6 style={{ fontSize: "14px", width: "55px" }}>
                {page} / {totalPages}
              </h6>
              <button
                disabled={page === totalPages}
                onClick={() => setPage(page + 1)}
                className='btn btn-outline-success' style={{ height: "40px" }}
              >
                Next
              </button>
            </div>
          </div>
        </div >
        {
          isLoading ? <h6>loading...</h6> : <EditTable Employeedata={Employees} deleteEmployee={deleteEmployee}></EditTable>
        }

      </div>
    </div>
  )
}

export default EditEmployeeList