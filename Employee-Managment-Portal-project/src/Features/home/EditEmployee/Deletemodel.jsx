import React, { memo } from 'react'

function Deletemodel({deleteEmployee,delid}) {
   
  return (
     <div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div  className="modal-header bg-primary">
                            <h1 className="modal-title fs-4 text-light" id="exampleModalLabel">Delete Employee</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h3>Are sure you wanted to delete this employee</h3>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=>{deleteEmployee(delid.id)}}>Yes delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default memo(Deletemodel)
