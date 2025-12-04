import { useFormik } from 'formik'
import { useAuthenticateAccessApiMutation } from '../../Services/authentication'
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux'
import { updatecredentials } from './loginSlice'
import * as yup from "yup"

function useLoginform() {
    var dispatch = useDispatch()
    var [authenticationFn] = useAuthenticateAccessApiMutation()

    var loginform = useFormik({
        initialValues: {
            email: "",
            password: "",
            status: ""
        },
        validationSchema: yup.object({

            email: yup.string()
                .required("*Please enter your email ID")
                
                .matches(/^[a-zA-Z0-9._%+-]+@gmail\.com$/, "Email must be a Gmail address"),
        }),
        onSubmit: (values) => {
            authenticationFn(values).then((data) => {
                dispatch(updatecredentials(data))
                access(data)
            })
            loginform.resetForm()
        }
    })

    function access(data) {
        (data.data.role !== "admin") ? toast.error("Access denied", { position: 'top-center', theme: "colored", autoClose: 3000 })
            : toast.success("logged in successfuly", { position: 'top-center', theme: 'colored', autoClose: 1500 })
    }
    return [loginform]

}

export default useLoginform

