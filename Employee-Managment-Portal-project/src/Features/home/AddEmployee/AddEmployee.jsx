import useAddEmployee from "./useAddEmployee"

function AddEmployeeInList() {
  const [addEmployeeForm] = useAddEmployee()
  return (<div >
    <form onSubmit={addEmployeeForm.handleSubmit}>
      <div style={{marginLeft: "260px", height: "100vh",display: "flex",justifyContent: "center",alignItems: "center"
      }}>
        <div className="card" style={{ width: "650px" }}>
          <div className="card-body">
            <h5 className="card-title">ADD EMPLOYEE FORM</h5>

            <div className='w-100'>
              <div className="m-2">
                <label htmlFor="addEmployeeFormname" className=" form-lable text-black">Employee Name</label>
                <input type="text" name="fullname" className=" form-control border border-3 border-dark-subtle " {...addEmployeeForm.getFieldProps("name")} />
                <p style={{ color: "red" }}>{addEmployeeForm.touched.name && addEmployeeForm.errors.name}</p>
              </div>
              <div className=''>
                <div className="m-2">
                  <label htmlFor="addEmployeeFormAge" className=" form-lable text-black">Employee Role</label>
                  <input type="text" name="age" className=" form-control border border-3 border-dark-subtle" {...addEmployeeForm.getFieldProps("role")} />
                  <p style={{ color: "red" }}>{addEmployeeForm.touched.role && addEmployeeForm.errors.role}</p>
                </div>
                <div className="m-2 ">
                  <label htmlFor="addEmployeeFormdepartment" className=" form-lable text-black">Department:</label><br></br>
                  <select className=" form-control border border-3 border-dark-subtle" id="addleadforCourses" as="select" name="departmanet" {...addEmployeeForm.getFieldProps("department")}>
                    <option >Select a deparment</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Design">Design</option>
                    <option value="Marketing">Marketing</option>
                    <option value="HR">HR</option>
                    <option value="Finance">Finance</option>
                    <option value="IT Support">IT Support</option>
                    <option value="Sales">Sales</option>
                  </select>
                  <p style={{ color: "red" }}>{addEmployeeForm.touched.department && addEmployeeForm.errors.department}</p>
                </div>
              </div>
              <div className=''>
                <div className="m-2">
                  <label htmlFor="addEmployeeFormsalary" className=" form-lable text-black">Employee Salary</label>
                  <input type="number" name="salary" className=" form-control border border-3 border-dark-subtle" {...addEmployeeForm.getFieldProps("salary")} />
                  <p style={{ color: "red" }}>{addEmployeeForm.touched.email && addEmployeeForm.errors.email}</p>
                </div>
              </div>
              <center><button type="submit" className="btn btn-primary mb-3">Submit</button></center>
            </div>


          </div>
        </div>
      </div>
    </form>
  </div>


  )
}

export default AddEmployeeInList

