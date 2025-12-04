import { memo } from "react"
import useDashboardmetric from "./useDashboardmetric"

function DashboardField({data,newdeparr}) {
const [avgsal,maxsal]=useDashboardmetric(data)
  return <div>
    <div style={{ display: "flex", gap: "40px", marginTop: "20px",marginRight:"7px" }} >
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Total Employees:{data?.length}</h5>
          <p className="card-text">This represents the complete number of employees currently working in the organization.</p>
        </div>
      </div>

      <div className="card" style={{ width: "18rem"}}>
        <div className="card-body">
          <h5 className="card-title">Total Departments:{newdeparr?.length}</h5>
          <p className="card-text">This shows how many distinct departments are active within the company structure.</p>
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Average Salary:{parseInt(avgsal(data)/data?.length)}</h5>
          <p className="card-text">The average salary across all employees, indicating the general compensation level in the organization</p>
        </div>
      </div>

       <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Highest Paid:{maxsal(data)}</h5>
          <p className="card-text">This highlights the employee with the highest salary, helping identify top-level or specialized roles</p>
        </div>
      </div>

    </div>
  </div>
}
export default memo(DashboardField)