import React from 'react'
import EditEmployeeform from './EditEmployeeform'

function EditModelForm({edit}) {
    return (
       <div style={{width:"100%"}}>
            <div style={{height:"900px"}} className="modal fade" id="exampleModalEdit" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" style={{maxWidth: 700 }}>
                    <div className="modal-content">
                        <div className="modal-header bg-primary">
                            <h1 className="modal-title fs-5  text-light" id="exampleModalLabelEdit">Edit Lead Form</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                         <EditEmployeeform edit={edit}></EditEmployeeform>
                        </div>
                        {/* <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditModelForm
