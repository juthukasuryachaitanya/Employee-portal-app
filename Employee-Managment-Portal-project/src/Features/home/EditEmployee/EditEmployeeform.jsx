import { memo } from "react"
import useEditEmployeeform from "./useEditEmployeeform"
function EditEmployeeform({ edit }) {
    var [editEmployeeForm] = useEditEmployeeform(edit)
  return (<div >
    <form onSubmit={editEmployeeForm.handleSubmit}>
      <div style={{ width: "100%" }}>
        <div className="card" style={{ width: "650px" }}>
          <div className="card-body">
            <h5 className="card-title">EDIT EMPLOYEE FORM</h5>
            <div className='w-100'>
              <div className="m-2">
                <label htmlFor="editEmployeeFormname" className=" form-lable text-black">Employee Name</label>
                <input type="text" name="name" className=" form-control border border-3 border-dark-subtle " {...editEmployeeForm.getFieldProps("name")} />
                <p style={{ color: "red" }}>{editEmployeeForm.touched.name && editEmployeeForm.errors.name}</p>
              </div>
              <div className=''>
                <div className="m-2">
                  <label htmlFor="editEmployeeFormAge" className=" form-lable text-black">Employee Role</label>
                  <input type="text" name="role" className=" form-control border border-3 border-dark-subtle" {...editEmployeeForm.getFieldProps("role")} />
                  <p style={{ color: "red" }}>{editEmployeeForm.touched.role && editEmployeeForm.errors.role}</p>
                </div>
                <div className="m-2 ">
                  <label htmlFor="editEmployeeFormdepartment" className=" form-lable text-black">Department:</label><br></br>
                  <select className=" form-control border border-3 border-dark-subtle" as="select" name="departmanet" {...editEmployeeForm.getFieldProps("department")}>
                    <option >Select a deparment</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Design">Design</option>
                    <option value="Marketing">Marketing</option>
                    <option value="HR">HR</option>
                    <option value="Finance">Finance</option>
                    <option value="IT Support">IT Support</option>
                    <option value="Sales">Sales</option>
                  </select>
                  <p style={{ color: "red" }}>{editEmployeeForm.touched.department && editEmployeeForm.errors.department}</p>
                </div>
              </div>
              <div className=''>
                <div className="m-2">
                  <label htmlFor="editEmployeeFormsalary" className=" form-lable text-black">Employee Salary</label>
                  <input type="number" name="salary" className=" form-control border border-3 border-dark-subtle" {...editEmployeeForm.getFieldProps("salary")} />
                  <p style={{ color: "red" }}>{editEmployeeForm.touched.email && editEmployeeForm.errors.email}</p>
                </div>
              </div>
              <center><button type="submit" data-bs-dismiss="modal" className="btn btn-primary mb-3">Submit</button></center>
            </div>
          </div>
        </div>




      </div>
    </form>
  </div>


  )
}

export default memo(EditEmployeeform)
