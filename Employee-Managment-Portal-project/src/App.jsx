import './App.css';
import Navbar from './Components/navbar';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLazyGetAccessApiQuery } from './Services/authentication';
import { updatecredentials } from './Features/login/loginSlice';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';


function App() {
  var navigate= useNavigate()
  var dispatch=useDispatch()
  var { role } = useSelector(state => state.login)
  console.log(role)
  var [getaccessFn]=useLazyGetAccessApiQuery()
   useEffect(()=>{
     if(window.localStorage.getItem('token')){
       getaccessFn(window.localStorage.getItem('token')).then((res)=>{
        dispatch(updatecredentials(res))
       })
       navigate("/")
     }
     else{
       navigate("/login")
     }
   },[role,dispatch,getaccessFn,navigate])
   return (
     <div className="App" style={{
            backgroundImage: "url('/employee portal.png')", backgroundSize: 'cover', height: '100vh', width: "100%", backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        }}>
      {
        role==="admin"?<Navbar></Navbar>:" "
      } 
       <ToastContainer></ToastContainer>
       <div >
       <Outlet></Outlet>
       </div>
       
     </div>
   );
 }
 export default App;
