import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import * as yup from "yup"
import { useUpdateEmployeeapiMutation } from '../../../Services/EmployeeApi'
import { toast } from 'react-toastify'
import { useLazyGetdashboardapiQuery } from '../../../Services/dashboard'
import { useNavigate } from 'react-router-dom'

function useEditEmployeeform(edit) {
    const [updateemployeefn] = useUpdateEmployeeapiMutation()
    const [recalldatafn] = useLazyGetdashboardapiQuery()
    let navigate = useNavigate()
    var editEmployeeForm = useFormik({
        initialValues: { "name": "", "role": "", "department": "", "salary": "" },
        validationSchema: yup.object({
            name: yup.string()
                .required('*Please enter your firstname')
                .test(
                    "starts-with-letter",
                    "enter atleast two charecters",
                    (value, context) => {
                        return (value.length <= 2) ? false : true
                    }
                )
                .test(
                    "starts-with-letter",
                    "Username must start with a uppercase letter",
                    (value) => /^[A-Z]/.test(value)
                ),
            role: yup.string()
                .required("*Please select Employee role"),


            department: yup.string()
                .required("*Please select the deparment"),

            salary: yup.number()
                .typeError("Salary must be a number")
                .required("*Please enter salary")
                .min(0, "Salary must be at least 1000")
        }),
        onSubmit: (values) => {
            updateemployeefn(values).then(() => { recalldatafn() })
            editEmployeeForm.resetForm()
            navigate("/")
            toast.success("Info Edited successfuly", { position: 'top-center', theme: 'colored', autoClose: 1500 })
        }
    })
    useEffect(() => {
        editEmployeeForm.setValues(edit)
    }, [edit])
    return [editEmployeeForm]
}

export default useEditEmployeeform
