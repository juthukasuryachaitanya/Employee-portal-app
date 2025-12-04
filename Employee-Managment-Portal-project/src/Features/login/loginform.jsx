
import { memo, useEffect, useRef, useState } from 'react'
import useLoginform from './useLoginform'
import { useSelector } from 'react-redux'
var Loginform = memo(() => {
    var [loginform] = useLoginform()
    var [expand, Setexpand] = useState(false)
    var ref1 = useRef()
    var ref2 = useRef()
    useEffect(() => { ref1.current.focus() }, [])
    var { error } = useSelector(state => state.login)
    function checkenter(e) {
        if (e.key === "Enter") {
            ref2.current.focus()
        }
        if (e.key === "Enter") {
            Setexpand(true)
        }
    }

    return (
        <div style={{ marginTop: "-25px", marginLeft: "12px" }} >
            <form className='container px-4' onSubmit={loginform.handleSubmit} onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                }
            }}>
                <div className="mb-3">
                    <label className='text-black' >
                        {
                            error ? <p style={{ color: "red" }}>{error}</p> : " "
                        }
                    </label>
                    <input ref={ref1} onKeyUp={(e) => { checkenter(e) }} type="text" className="form-control border border-3 border-secondary" placeholder='Enter your email address' id="exampleInputEmail1" {...loginform.getFieldProps("email")} aria-describedby="emailHelp" ></input>
                    <p style={{ color: "red" }}>{loginform.errors.email}</p>
                </div>
                <div className={`collapse  ${expand ? 'show' : ''}`} id="collapseExample">
                    <div className=" ">
                        <div className="mb-3">

                            <input ref={ref2} type="password" className="form-control border border-3 border-secondary " placeholder='Enter your Password' {...loginform.getFieldProps("password")} id="exampleInputPassword1"></input>
                        </div>
                        <div style={{border:"2px solid grey",width:"200px",height:"47px",padding:"4px",marginBottom:"10px"}}>
                            <input style={{ width: "20px",height: "19px",transform: "scale(1.0)",marginBottom:"25px",marginTop:"10px"}}  className="me-2"
                                type="checkbox" name="status" value="Check the box if you are not robot" {...loginform.getFieldProps("status")} required ></input>
                                <span>I'm not a robot <img style={{width: "35px",height: "35px"}} alt="..." src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/RecaptchaLogo.svg/150px-RecaptchaLogo.svg.png?20180222151201"></img></span>
                        </div>
                        <center> <button onClick={() => { Setexpand(false)
                        }} style={{ width: "150px", backgroundColor: "#327b9cff" }} type="submit" className="btn text-light fw-bold rounded-pill" >Login</button></center>
                    </div>
                </div>
            </form>

        </div>
    )
})

export default Loginform
