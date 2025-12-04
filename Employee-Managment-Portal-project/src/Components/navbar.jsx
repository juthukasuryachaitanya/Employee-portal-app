
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logout } from '../Features/login/loginSlice'

function Navbar() {
    var { role } = useSelector(state => state.login)
    var dispatch = useDispatch()
    return (
        <div >
            <nav style={{ width: "250px", height: "100%", backgroundColor: "white" }} className="nav flex-column navbar-expand-lg fixed-top">
                <div className="container-fluid" >
                    <div className='ms-2' style={{ display: "flex", alignItems: "center", margin: "10px" }}>
                        <img src="/logoimg.jpeg" style={{ width: "80px" }} className="card-img-top" alt="..." />
                        <h3 >Employee Portal</h3>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse ms-3" id="navbarSupportedContent">
                        {role === "admin" &&
                            <ul className="nav flex-column fs-5 " style={{ color: "black" }} >
                                <li style={{ marginBottom: "10px" }} className="nav-item">
                                    <NavLink className={({ isActive }) => `nav-link ${isActive ? "text-primary" : "text-dark"}`} aria-current="page" to="/">Employee List</NavLink>
                                </li>
                                <li style={{ marginBottom: "10px" }} className="nav-item">
                                    <NavLink className={({ isActive }) => `nav-link ${isActive ? "text-primary" : "text-dark"}`} to="/AddEmployee"   >Add Employee</NavLink>
                                </li>
                                <li style={{ marginBottom: "10px" }} className="nav-item">
                                    <NavLink className={({ isActive }) => `nav-link ${isActive ? "text-primary" : "text-dark"}`} to="/EditEmployee" >Edit Employee </NavLink>
                                </li>
                                <li className="nav-item" style={{ marginTop: "260px" }}>
                                    {(role === "admin") && <div className='ms-1 '>
                                        <button onClick={() => {
                                            dispatch(logout())
                                        }} className='btn'><h5>Logout</h5></button>
                                    </div>}
                                </li>
                            </ul>
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
