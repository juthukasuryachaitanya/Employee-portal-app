
import Loginform from './loginform'

function Loginmodal() {
    return (
        <div>
            <div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered ">
                    <div  className="modal-content ">
                        <div className='modal-header'>
                        <img style={{ width: "180px" }} src='https://edupoly.in/common/assets/edupoly-logo-light.png' alt='edupoly'></img>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>    
                        </div>
                        <div >
                            <center> <h1 style={{ widthLeft: "50px",color:"#2656a1" }} className="modal-title fs-3 fw-semibold " id="exampleModalLabel">Welcome</h1>
                                <h1 style={{ widthLeft: "50px" }} className="modal-title fs-5 " id="exampleModalLabel">Login to your account to continue</h1></center>
                        </div>
                            <div className="modal-body ">
                                {/* <Loginform></Loginform> */}
                            </div>
                        <div className="modal-footer">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loginmodal
