import { memo } from "react"

function Table({ Employeedata,flagupdate}) {
    return <table className="table table-striped table-hover" style={{ marginTop: "25px" }}>
        <thead>
            <tr style={{textAlign:"center"}}>
                <th>Employee_ID</th>
                <th>Employee_name</th>
                <th>Employee_role</th>
                <th>Employee_Department</th>
                <th onClick={()=>{flagupdate()}} >Employee_Salary <i class="bi bi-sort-numeric-up-alt"></i></th>
            </tr>
        </thead>
        <tbody>
            {
             Employeedata?.map((value) => {
                    return <tr key={value.name} style={{textAlign:"center"}}>
                        <td>{value.id}</td>
                        <td>{value.name}</td>
                        <td>{value.role}</td>
                        <td>{value.department}</td>
                        <td>{value.salary}</td>
                    </tr>
                })
            }
        </tbody>
    </table>
}
export default memo(Table)