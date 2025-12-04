
import DashboardField from './Dashboardmetrics';
import Table from './EmployeeTable';
import useEmployeeList from './useEmployeeList';


function EmployeeList() {
 var [data,isLoading,namefilter,SetnameFilter,flag,Setflag,page,setPage,perPage,totalPages,deparr,newdeparr,Employees,flagupdate] = useEmployeeList()
  return (
    <div style={{ marginLeft: "260px" }}>
      <h2 style={{ color: "white" }}>DASHBOARD</h2>
      <DashboardField data={data} newdeparr={newdeparr}></DashboardField>

      <div style={{ height: "350px" }} className='m-4 border border-3 rounded  bg-light '>
        <div style={{ height: "50px" }} className='d-flex justify-content-between align-items-center m-2 mb-1 border-bottom pb-2 '>
          <h3>Employee List</h3>
          <div className="d-flex justify-content-end w-50 gap-2" role="search">
            <input style={{ height: "40px" }} className="form-control  w-50 border-success " onChange={(e) => { SetnameFilter(e.target.value) }} type="search" placeholder="Search by Employee Name" aria-label="Search"></input>

            <div className="dropdown">
              <button className="btn btn-outline-success dropdown-toggle" style={{ height: "40px" }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-filter"></i>
              </button>

              <ul className="dropdown-menu">
                <li className='dropdown-item' onClick={() => {
                  SetnameFilter(false)
                  Setflag(false)
                }}><b>Select department</b></li>
                {
                  newdeparr?.map((value) => {
                    return <li key={value} className='dropdown-item' onClick={() => { SetnameFilter(value) }}>{value}</li>
                  })
                }
              </ul>
            </div>


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

        <div style={namefilter?{ maxHeight: "250px", overflowY: "auto" }:{}}>
          {
            isLoading ? <h6>loading...</h6> : <Table Employeedata={Employees} flagupdate={flagupdate}></Table>
          }
        </div>


      </div>
    </div>
  )
}

export default EmployeeList

