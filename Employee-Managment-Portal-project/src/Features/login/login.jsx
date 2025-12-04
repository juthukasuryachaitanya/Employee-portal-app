import { useSelector } from "react-redux";
import Loginform from "./loginform";
function Login() {
    var {  role } = useSelector(state => state.login)
    return (
        <div style={{
            backgroundImage: "url(/employee portal.png)", backgroundSize: 'cover', height: '100vh', width: "100%", backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        }}>
           
            <div style={{ display: "flex", justifyContent: "flex-end",alignItems:"baseline",marginRight:"5px" }}>
                {!(role === "admin") && <div className="card" style={{ width: "550px", backgroundColor:"white", marginTop: "100px", marginleft: "100px", height: "auto",marginRight:"20px" }}>
                    <div style={{ marginLeft: "50px", marginTop: "50px" }}>
                        <img src="/logoimg.jpeg" style={{ width: "80px" }} className="card-img-top" alt="..." />
                        <br></br>
                        <h6>Welcome to Employee Managment Portal</h6>
                        {
                         <h3>Get started with your email address</h3>
                        }
                    </div>
                    <div className="card-body">
                        <Loginform ></Loginform>
                    </div>
                </div>
                }
            </div>

        </div>
    );
}

export default Login;