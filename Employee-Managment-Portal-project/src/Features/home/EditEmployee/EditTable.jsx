import React, { memo, useState } from 'react'
import Deletemodel from './Deletemodel'
import EditModelForm from './EditModelForm'
import { Link } from 'react-router-dom'

function EditTable({Employeedata,deleteEmployee}) {
    let [delid, setDelid] = useState([])
    let [edit, setEdit] = useState(null)
    return <>
    <table className="table table-striped table-hover" style={{ marginTop: "25px" }}>
        <thead>
            <tr style={{textAlign:"center"}}>
                <th>Employee_ID</th>
                <th onClick={() => { }}>Employee_name
                    
                </th>
                <th>Employee_role</th>
                <th>Employee_Department</th>
                <th onClick={() => { }} >Employee_Salary </th>
                <th >Options</th>
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
                        <td><Link to={`/EditEmployee/${value.id}`}><button onClick={()=>{setEdit(value)}} data-bs-toggle="modal" data-bs-target="#exampleModalEdit"  className='btn btn-outline-success btn-sm'>EDIT</button></Link> <button data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>{setDelid(value)}} className='btn btn-outline-danger btn-sm'>DELETE</button></td>
                    </tr>
                })
            }
        </tbody>
    </table>
      <Deletemodel deleteEmployee={deleteEmployee} delid={delid} ></Deletemodel>
      <EditModelForm edit={edit}></EditModelForm>
    </>
}


export default memo(EditTable)
