import React from 'react'
import Login from './Login'
import { useFormik } from "formik"
import * as Yup from "yup"

const LoginContainer = () => {
    const getInitialValues = () => {
        return {
            email: "",
            password: ""
        }
    }
    const getValidationSchema = () => {
        return Yup.lazy(() => (
            Yup.object().shape({
                email: Yup.string()
                .email("Correo electrónico invalido")
                .required("Debes proveer un correo"),
                password: Yup.string().required("Debes escribir tu contraseña")
            })
        ))
    }
    const onSubmit = (data) => {
        console.log(data)
    }
    const { handleSubmit, values, setFieldValue, errors } = useFormik({
        validateOnBlur: false,
        validateOnChange: false,
        initialValues: getInitialValues(),
        validationSchema: getValidationSchema(),
        onSubmit
    })
    const childProps = {
        handleSubmit, 
        values, 
        setFieldValue, 
        errors
    }
    return <Login {...childProps}/>
}

export default LoginContainer