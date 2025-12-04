import { useFormik } from 'formik'
import * as yup from "yup"
import { useAddEmployeeapiMutation } from '../../../Services/EmployeeApi'
import { toast } from 'react-toastify'
import { useLazyGetdashboardapiQuery } from '../../../Services/dashboard'
import { useNavigate } from 'react-router-dom'

function useAddEmployee() {
    const [addEmployeefn] = useAddEmployeeapiMutation()
  const [recalldatafn] = useLazyGetdashboardapiQuery()
  let navigate = useNavigate()
  var addEmployeeForm = useFormik({
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
      addEmployeefn(values).then((res) => {
        recalldatafn()
      })
      addEmployeeForm.resetForm()
      navigate("/")
      toast.success("Employee added successfuly", { position: 'top-center', theme: 'colored', autoClose: 1500 })
    }
  })
  return [addEmployeeForm]
}

export default useAddEmployee
